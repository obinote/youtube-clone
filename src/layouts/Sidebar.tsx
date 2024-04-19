import {
  Clapperboard,
  Clock,
  Home,
  PlaySquare,
  Repeat,
  History,
  ListVideo,
  Flame,
  Music2,
  Film,
  Gamepad2,
  Newspaper,
  Trophy,
  ChevronRight,
  ThumbsUp,
  UserSquare,
  PlayCircle,
  FastForward,
  Music4,
  Settings,
  Flag,
  HelpCircle,
  Info,
} from "lucide-react";

import { subscriptions } from "../data/sidebar";
import { useSidebarContext } from "../hooks/UseSidebarContext";
import SmallSidebarItem from "../components/SmallSidebarItem";
import { PageHeaderFirstSection } from "../components/PageHeaderFirstSection";
import LargeSidebarSection from "../components/LargeSidebarSection";
import LargeSidebarItem from "../components/LargeSidebarItem";

const Sidebar = () => {
  const { isLargeOpen, isSmallOpen, close } = useSidebarContext();

  return (
    <>
      <aside
        className={`sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 ${
          isLargeOpen ? "lg:hidden" : "lg:flex"
        }`}>
        <SmallSidebarItem Icon={Home} title="Home" url="/" />
        <SmallSidebarItem Icon={Repeat} title="Shorts" url="/shorts" />
        <SmallSidebarItem Icon={Clapperboard} title="Subscriptions" url="/subscriptions" />
        <SmallSidebarItem Icon={PlaySquare} title="You" url="/feed" />
      </aside>
      {isSmallOpen && <div onClick={close} className="lg:hidden fixed inset-0 z-[999] bg-secondary-dark opacity-50" />}
      <aside
        className={`w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 ${
          isLargeOpen ? "lg:flex" : "lg:hidden"
        } ${isSmallOpen ? "flex z-[999] bg-white max-h-screen" : "hidden"}`}>
        <div className="lg:hidden pt-2 pb-4 px-2 sticky top-0 bg-white">
          <PageHeaderFirstSection />
        </div>
        <LargeSidebarSection>
          <LargeSidebarItem isActive IconOrImgUrl={Home} title="Home" url="/" />
          <LargeSidebarItem IconOrImgUrl={Repeat} title="Shorts" url="/shorts" />
          <LargeSidebarItem IconOrImgUrl={Clapperboard} title="Subscriptions" url="/subscriptions" />
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection title="You" Icon={ChevronRight}>
          <LargeSidebarItem IconOrImgUrl={UserSquare} title="Your Channel" url="/channel" />
          <LargeSidebarItem IconOrImgUrl={History} title="History" url="/history" />
          <LargeSidebarItem IconOrImgUrl={ListVideo} title={"Playlists"} url={"/feed/playlists"} />
          <LargeSidebarItem IconOrImgUrl={PlaySquare} title="Your Videos" url="/channel" />
          <LargeSidebarItem IconOrImgUrl={Clock} title="Watch Later" url="/playlist?list=WL" />
          <LargeSidebarItem IconOrImgUrl={ThumbsUp} title="Liked Videos" url="/playlist?list=LL" />
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection title="Subscriptions" visibleItemCount={4}>
          {subscriptions.map((subscription) => (
            <LargeSidebarItem
              key={subscription.id}
              IconOrImgUrl={subscription.imgUrl}
              title={subscription.channelName}
              url={`/@${subscription.id}`}
            />
          ))}
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection title="Explore">
          <LargeSidebarItem IconOrImgUrl={Flame} title="Trending" url="/trending" />
          <LargeSidebarItem IconOrImgUrl={Music2} title="Music" url="/music" />
          <LargeSidebarItem IconOrImgUrl={Film} title="Movies & TV" url="/movies-tv" />
          <LargeSidebarItem IconOrImgUrl={Gamepad2} title="Gaming" url="/gaming" />
          <LargeSidebarItem IconOrImgUrl={Newspaper} title="News" url="/news" />
          <LargeSidebarItem IconOrImgUrl={Trophy} title="Sports" url="/sports" />
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection title="More From Youtube">
          <LargeSidebarItem IconOrImgUrl={PlaySquare} title="YouTube Premium" url="/premium" />
          <LargeSidebarItem IconOrImgUrl={FastForward} title="YouTube Studio" url="/studio" />
          <LargeSidebarItem IconOrImgUrl={Music4} title="YouTube Music" url="/music" />
          <LargeSidebarItem IconOrImgUrl={PlayCircle} title="YouTube Kids" url="/kids" />
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection>
          <LargeSidebarItem IconOrImgUrl={Settings} title="Settings" url="/account" />
          <LargeSidebarItem IconOrImgUrl={Flag} title="Report History" url="/reporthistory" />
          <LargeSidebarItem IconOrImgUrl={HelpCircle} title="Help" url="/" />
          <LargeSidebarItem IconOrImgUrl={Info} title="Send Feedback" url="/" />
        </LargeSidebarSection>
      </aside>
    </>
  );
};

export default Sidebar;
