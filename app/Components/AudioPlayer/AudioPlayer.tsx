import { useState, useRef, useEffect } from 'react';
import styles from './AudioPlayer.module.scss';
import Image from "next/image";

type Props = {
    src: string;
    music: string;
    artist: string;
    audioSrc: string;
}

const AudioPlayer = (props: Props) => {
    const [playing, setPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef<HTMLAudioElement>(null);
    const progressRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleTimeUpdate = () => {
            if (audioRef.current) {
                setCurrentTime(audioRef.current.currentTime);
                if (progressRef.current) {
                    progressRef.current.value = String((audioRef.current.currentTime / audioRef.current.duration) * 100);
                }
            }
        };

        const handleLoadedMetadata = () => {
            if (audioRef.current) {
                setDuration(audioRef.current.duration);
            }
        };

        if (audioRef.current) {
            const audio = audioRef.current;
            audio.addEventListener('timeupdate', handleTimeUpdate);
            audio.addEventListener('loadedmetadata', handleLoadedMetadata);

            return () => {
                audio.removeEventListener('timeupdate', handleTimeUpdate);
                audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
            };
        }
    }, []); 

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.load(); 
            setPlaying(false);
            setCurrentTime(0);
            setDuration(0);
        }
    }, [props.audioSrc]); 

    const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current) {
            const newTime = (e.target.valueAsNumber / 100) * duration;
            audioRef.current.currentTime = newTime;
            setCurrentTime(newTime);
        }
    };

    const PlayMusic = () => {
        if (audioRef.current) {
            if (playing) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setPlaying(!playing);
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
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    return (
        <>
            <audio ref={audioRef} src={props.audioSrc}></audio>
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.musicPhoto}>
                        <div className={styles.photo}>
                            <Image src={props.src} width={78} height={78} alt='musicPhoto' />
                        </div>
                        <div className={styles.musicInfo}>
                            <span className={styles.musicName}>{props.music}</span>
                            <span className={styles.artistName}>{props.artist}</span>
                        </div>
                    </div>
                    <div className={styles.musicMiddle}>
                        <div className={styles.adjustButtons}>
                            <Image src="/valumedown.png" alt='valumeDownButton' width={24} height={24} />
                            <Image src="/previous.png" alt='previousMusicButton' width={24} height={24} />
                            <div onClick={PlayMusic} className={styles.test}>
                                <Image src={playing ? "/pause.png" : "/play.png"} alt='playbutton' width={42} height={42} />
                            </div>
                            <Image src="/next.png" alt='nextMusicButton' width={24} height={24} />
                            <Image src="/valumeup.png" alt='valumeUpButton' width={24} height={24} />
                        </div>
                        <div className={styles.progresWrapper}>
                            <div onClick={handleTenSecondsBack}>
                                <Image src="/gobackten.png" alt='tensecondback' width={24} height={24} />
                            </div>
                            <div className={styles.progressBar}>
                                <p>{formatTime(currentTime)}</p>
                                <input
                                    type="range"
                                    className={styles.range}
                                    ref={progressRef}
                                    onChange={handleProgressChange}
                                    defaultValue="0"
                                />
                                <p>{formatTime(duration)}</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.arrow}>
                        <Image src='/Arroww.png' alt='arrow' width={32} height={32} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AudioPlayer;
