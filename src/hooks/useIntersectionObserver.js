import { useEffect, useState } from 'react';

const useIntersectionObserver = (elementRef, { threshold = 0.1, root = null, rootMargin = '0px', freezeOnceVisible = true } = {}) => {
    const [entry, setEntry] = useState();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = elementRef?.current;
        if (!node || (freezeOnceVisible && isVisible)) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setEntry(entry);
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else if (!freezeOnceVisible) {
                    setIsVisible(false);
                }
            },
            { threshold, root, rootMargin }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [elementRef, JSON.stringify(threshold), root, rootMargin, freezeOnceVisible, isVisible]);

    return { entry, isVisible };
};

export default useIntersectionObserver;
