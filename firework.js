
let scrollbar = Scrollbar.init
    (
        document.querySelector(".explanation"),
        {
            renderByPixels: false
        }
    );

let lottieProgress = lottie.loadAnimation
    (
        {
            container: document.querySelector(".firework"),
            renderer: "svg",
            loop: false,
            autoplay: false,
            path: "https://assets8.lottiefiles.com/packages/lf20_k5vcjmf2.json"
        }
    );

scrollbar.addListener(() => {
    let totalHeight = scrollbar.limit.y;
    let scrollFromTop = scrollbar.scrollTop;
    let totalFrames = lottieProgress.totalFrames;
    let scrollPercentage = (scrollFromTop * 100) / totalHeight;
    let scrollPercentRounded = Math.round(scrollPercentage); // Just in case

    // Check if the current frame is the last frame. If it's the last frame, do nothing. This prevents showing the empty frame at the end. Thanks Pauline for pointing out.
    if ((scrollPercentage * totalFrames) / 100 < totalFrames) {
        lottieProgress.goToAndStop((scrollPercentage * totalFrames) / 100, true);
    }
    else {
        return;
    }
}
);

scrollbar.scrollTo(0, 700, 2000);