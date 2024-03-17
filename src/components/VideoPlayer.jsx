
const VideoPlayer = () => {
  return (
    <div className="player relative aspect-video w-full overflow-hidden">
      <div className="absolute z-20 w-full h-full flex items-center justify-center">
        <svg width="170" height="197" viewBox="0 0 170 197" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 md:w-16 xl:w-24">
          <path d="M0.57475 196.018L0.574752 0.718084L169.709 98.368L0.57475 196.018Z" fill="#FFF84B" />
        </svg>
      </div>

      <div className="">
        <div className=" absolute text-3xl text-white" style={{ transform: 'translate(532px, 263px)' }}>
          <svg width="120" height="65" viewBox="0 0 142 74" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-0 md:opacity-100 hidden">
            {/* SVG path content */}
          </svg>
        </div>
      </div>

      <div aria-describedby="Press spacebar to show controls. Press enter to start playing" className="h-full w-full absolute z-10 min-w-full transition-all">
        <div className="controls not-sr-only absolute z-30">
          <button className="group text-4xl text-brand-color" aria-label="play pause" aria-description="Play or pause the video" aria-pressed="false">
            <span className="hidden group-focus:flex">Play/Pause</span>
          </button>
        </div>
      </div>

      <div id="WO Showreel" className="video-player video-placeholder aspect-video" data-vimeo-initialized="true">
        <div className="absolute -z-10 w-full h-full bg-cover blur-xl scale-105" style={{ backgroundImage: `url("https://i.vimeocdn.com/video/1734437740-db2bdac8c06257ca80bfb78f6d3e29778a324a434ac30609b152ba965181f023-d_100x75")` }} />
        <iframe
          src="https://player.vimeo.com/video/871777116?h=1a630323f2&amp;title=0&amp;byline=0&amp;portrait=0&amp;controls=0&amp;quality=auto&amp;app_id=122963"
          width="1650"
          height="928"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          title="Case_Assembly_20231005_27"
          data-ready="true"
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
