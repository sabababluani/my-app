import { useRef, useEffect } from 'react';
import styles from './AudioPlayer.module.scss';
import Image from "next/image";
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { audioPlayerState } from '@/app/atoms/states';
import AdjustButtons from './AdjustButtons/AdjustButtons';
import InputRange from './InputRange/InputRange';


type Song = {
    src: string;
    music: string;
    artist: string;
    audioSrc: string;
};

type Props = {
    songs: Song[];
};

const AudioPlayer = ({ songs }: Props) => {
    const [audioPlayer, setAudioPlayer] = useRecoilState(audioPlayerState);
    const audioRef = useRef<HTMLAudioElement>(null);
    const progressRef = useRef<HTMLInputElement>(null);
    const ipadProgressRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleTimeUpdate = () => {
            if (audioRef.current) {
                setAudioPlayer((prev) => ({ ...prev, currentTime: audioRef.current!.currentTime }));
                const progressValue = String((audioRef.current.currentTime / audioRef.current.duration) * 100);
                if (progressRef.current) {
                    progressRef.current.value = progressValue;
                }
                if (ipadProgressRef.current) {
                    ipadProgressRef.current.value = progressValue;
                }
            }
        };

        const handleLoadedMetadata = () => {
            if (audioRef.current) {
                setAudioPlayer((prev) => ({ ...prev, duration: audioRef.current!.duration }));
            }
        };

        const handleEnded = () => {
            setAudioPlayer((prev) => ({
                ...prev,
                currentSongIndex: (prev.currentSongIndex + 1) % songs.length,
                playing: true,
            }));
        };

        if (audioRef.current) {
            const audio = audioRef.current;
            audio.addEventListener('timeupdate', handleTimeUpdate);
            audio.addEventListener('loadedmetadata', handleLoadedMetadata);
            audio.addEventListener('ended', handleEnded);
            return () => {
                audio.removeEventListener('timeupdate', handleTimeUpdate);
                audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
                audio.removeEventListener('ended', handleEnded);
            };
        }
    }, [audioPlayer.currentSongIndex, songs.length]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.load();
            setAudioPlayer((prev) => ({ ...prev, playing: false, currentTime: 0, duration: 0 }));
        }
    }, [audioPlayer.currentSongIndex]);

    const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current) {
            const newTime = (e.target.valueAsNumber / 100) * audioPlayer.duration;
            audioRef.current.currentTime = newTime;
            setAudioPlayer((prev) => ({ ...prev, currentTime: newTime }));
        }
    };

    const PlayMusic = () => {
        if (audioRef.current) {
            if (audioPlayer.playing) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setAudioPlayer((prev) => ({ ...prev, playing: !audioPlayer.playing }));
        }
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const handleTenSecondsBack = () => {
        if (audioRef.current) {
            audioRef.current.currentTime -= 10;
            setAudioPlayer((prev) => ({ ...prev, currentTime: audioRef.current!.currentTime }));
        }
    };

    const handleNextSong = () => {
        setAudioPlayer((prev) => ({
            ...prev,
            currentSongIndex: (prev.currentSongIndex + 1) % songs.length,
        }));
    };

    const handlePreviousSong = () => {
        setAudioPlayer((prev) => ({
            ...prev,
            currentSongIndex: (prev.currentSongIndex - 1 + songs.length) % songs.length,
        }));
    };

    const handleVolumeDown = () => {
        if (audioRef.current) {
            audioRef.current.volume = Math.max(0, audioRef.current.volume - 0.2);
        }
    };

    const handleVolumeUp = () => {
        if (audioRef.current) {
            audioRef.current.volume = Math.min(1, audioRef.current.volume + 0.2);
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play();
            setAudioPlayer((prev) => ({ ...prev, playing: true }));
        }
    }, [audioPlayer.currentSongIndex]);

    return (
        <>
            <audio ref={audioRef} src={songs[audioPlayer.currentSongIndex].audioSrc}></audio>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.musicPhoto}>
                        <div className={styles.photo}>
                            <Image src={songs[audioPlayer.currentSongIndex].src} width={78} height={78} alt='musicPhoto' />
                        </div>
                        <div className={styles.musicInfo}>
                            <span className={styles.musicName}>{songs[audioPlayer.currentSongIndex].music}</span>
                            <span className={styles.artistName}>{songs[audioPlayer.currentSongIndex].artist}</span>
                        </div>
                    </div>
                    <div className={styles.musicMiddle}>
                        <AdjustButtons
                            onVolumeDown={handleVolumeDown}
                            onVolumeUp={handleVolumeUp}
                            onPreviousSong={handlePreviousSong}
                            onNextSong={handleNextSong}
                            onPlayMusic={PlayMusic}
                            playing={audioPlayer.playing}
                        />
                        <div className={styles.progresWrapper}>
                            <div className={styles.ipadProgress}>
                                <div onClick={handleTenSecondsBack} className={styles.tensecondback}>
                                    <Image src="/gobackten.png" alt='tensecondback' width={24} height={24} />
                                </div>
                                <div className={styles.ipadRange}>
                                    <InputRange
                                        defaultValue="0"
                                        onChange={handleProgressChange}
                                        progressRef={ipadProgressRef}
                                    />
                                </div>
                            </div>
                            <div className={styles.mobileProgress}>
                                <div onClick={handleTenSecondsBack} >
                                    <Image src="/gobackten.png" alt='tensecodndback' width={24} height={22} />
                                </div>
                                <div className={styles.mobileTime}>
                                    <span>{`${formatTime(audioPlayer.currentTime)}/${formatTime(audioPlayer.duration)}`}</span>
                                </div>
                            </div>

                            <div className={styles.progressBar}>
                                <p>{formatTime(audioPlayer.currentTime)}</p>
                                <InputRange
                                    defaultValue="0"
                                    onChange={handleProgressChange}
                                    progressRef={progressRef}
                                />
                                <div className={styles.ipadTime}>
                                    <span>{`${formatTime(audioPlayer.currentTime)}/${formatTime(audioPlayer.duration)}`}</span>
                                </div>
                                <p>{formatTime(audioPlayer.duration)}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.arrow}>
                        <Link href='#'>
                            <Image src='/Arroww.png' alt='arrow' width={32} height={32} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AudioPlayer;
