import Image from "next/image";
import styles from './ProgressBars.module.scss';
import InputRange from '../InputRange/InputRange';
import { formatTime } from "@/app/Helpers/audioHelpers";
import { useRecoilState } from "recoil";
import { audioPlayerState } from "@/app/atoms/states";
import { useRef } from "react";

type ProgressBarsProps = {
    currentTime: number;
    duration: number;
    onProgressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onTenSecondsBack: () => void;
    progressRef: React.RefObject<HTMLInputElement>;
};

const ProgressBars: React.FC<ProgressBarsProps> = ({ currentTime, duration, onProgressChange, onTenSecondsBack, progressRef }) => {

    const [audioPlayer, setAudioPlayer] = useRecoilState(audioPlayerState);
    const audioRef = useRef<HTMLAudioElement>(null);

    const handleTenSecondsBack = () => {
        if (audioRef.current) {
            audioRef.current.currentTime -= 10;
            setAudioPlayer((prev) => ({ ...prev, currentTime: audioRef.current!.currentTime }));
        }
    };
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.progressBar}>
                    <p>{formatTime(currentTime)}</p>
                    <InputRange
                        defaultValue={String((currentTime / duration) * 100)}
                        onChange={onProgressChange}
                        progressRef={progressRef}
                    />
                    <div className={styles.ipadTime}>
                        <span>{`${formatTime(currentTime)}/${formatTime(duration)}`}</span>
                    </div>
                    <p>{formatTime(duration)}</p>
                </div>
                <div className={styles.progressIpad}>
                    <div className={styles.mobileProgress}>
                        <div onClick={onTenSecondsBack}>
                            <Image src="/gobackten.png" alt='tensecodndback' width={24} height={22} />
                        </div>
                        <div className={styles.mobileTime}>
                            <span>{`${formatTime(currentTime)}/${formatTime(duration)}`}</span>
                        </div>
                    </div>
                    <div className={styles.ipadProgress}>
                        <div onClick={onTenSecondsBack} className={styles.tensecondback}>
                            <Image src="/gobackten.png" alt='tensecondback' width={24} height={24} />
                        </div>
                        <div className={styles.ipadRange}>
                            <InputRange
                                defaultValue={String((currentTime / duration) * 100)}
                                onChange={onProgressChange}
                                progressRef={progressRef}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ProgressBars;
