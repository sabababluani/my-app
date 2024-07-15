export const handleTimeUpdate = (
    audioRef: React.MutableRefObject<HTMLAudioElement | null>,
    setAudioPlayer: React.Dispatch<React.SetStateAction<any>>,
    progressRef: React.MutableRefObject<HTMLInputElement | null>,
    ipadProgressRef: React.MutableRefObject<HTMLInputElement | null>
) => {
    return () => {
        if (audioRef.current) {
            setAudioPlayer((prev: any) => ({ ...prev, currentTime: audioRef.current!.currentTime }));
            const progressValue = String((audioRef.current.currentTime / audioRef.current.duration) * 100);
            if (progressRef.current) {
                progressRef.current.value = progressValue;
            }
            if (ipadProgressRef.current) {
                ipadProgressRef.current.value = progressValue;
            }
        }
    };
};

export const handleLoadedMetadata = (
    audioRef: React.MutableRefObject<HTMLAudioElement | null>,
    setAudioPlayer: React.Dispatch<React.SetStateAction<any>>
) => {
    return () => {
        if (audioRef.current) {
            setAudioPlayer((prev: any) => ({ ...prev, duration: audioRef.current!.duration }));
        }
    };
};

export const handleEnded = (
    setAudioPlayer: React.Dispatch<React.SetStateAction<any>>,
    songs: Song[]
) => {
    return () => {
        setAudioPlayer((prev: { currentSongIndex: number; }) => ({
            ...prev,
            currentSongIndex: (prev.currentSongIndex + 1) % songs.length,
            playing: true,
        }));
    };
};

export const handleVolumeDown = (audioRef: React.MutableRefObject<HTMLAudioElement | null>) => {
    return () => {
        if (audioRef.current) {
            audioRef.current.volume = Math.max(0, audioRef.current.volume - 0.2);
        }
    };
};

export const handleVolumeUp = (audioRef: React.MutableRefObject<HTMLAudioElement | null>) => {
    return () => {
        if (audioRef.current) {
            audioRef.current.volume = Math.min(1, audioRef.current.volume + 0.2);
        }
    };
};

export const handleTenSecondsBack = (
    audioRef: React.MutableRefObject<HTMLAudioElement | null>,
    setAudioPlayer: React.Dispatch<React.SetStateAction<any>>
) => {
    return () => {
        if (audioRef.current) {
            audioRef.current.currentTime -= 10;
            setAudioPlayer((prev: any) => ({ ...prev, currentTime: audioRef.current!.currentTime }));
        }
    };
};

export const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};
