import React, { useState } from "react";
import { Container, Wrapper } from "./sidebar.js";
import home from "../assets/icons/home.svg";
import discover from "../assets/icons/discover.svg";
import subscript from "../assets/icons/subscription.svg";
import library from "../assets/icons/library.svg";
import history from "../assets/icons/history.svg";
import urvideos from "../assets/icons/yourvideos.svg";
import watchlater from "../assets/icons/watchlater.svg";
import liked from "../assets/icons/likedvideos.svg";
import down from "../assets/icons/downArrow.svg";
import profile1 from "../assets/icons/Profile-Photo.svg";
import profile2 from "../assets/icons/Profile-Photo1.svg";
import live from "../assets/icons/red-live.svg";
import offline from "../assets/icons/offline.svg";
import game from "../assets/icons/game.svg";
import music from "../assets/icons/music-note-svgrepo-com.svg";
import stream from "../assets/icons/trending-up-svgrepo-com.svg";
import news from "../assets/icons/news-svgrepo-com.svg";
import art from "../assets/icons/arcticons_youtube-studio.svg";
import kids from "../assets/icons/tabler_brand-youtube-kids.svg";
import Toggle from "../toggle/toggle.jsx";

const Sidebar = () => {
  return (
    <Wrapper>
      <Container>
        <Container.Box>
          <Container.Img src={home} alt="" />
          <h4>Home</h4>
        </Container.Box>
        <Container.Box>
          <Container.Img src={discover} alt="" />
          <h4>Discover</h4>
        </Container.Box>
        <Container.Box>
          <Container.Img src={subscript} alt="" />
          <h4>Subscriptions</h4>
        </Container.Box>
        <Container.Hr></Container.Hr>
        <Container.Box>
          <Container.Img src={library} alt="" />
          <h4>Library</h4>
        </Container.Box>
        <Container.Box>
          <Container.Img src={history} alt="" />
          <h4>History</h4>
        </Container.Box>
        <Container.Box>
          <Container.Img src={urvideos} alt="" />
          <h4>Your Videos</h4>
        </Container.Box>
        <Container.Box>
          <Container.Img src={watchlater} alt="" />
          <h4>Watch later</h4>
        </Container.Box>
        <Container.Box>
          <Container.Img src={liked} alt="" />
          <h4>Liked Videos</h4>
        </Container.Box>
        <Container.Box>
          <Container.Img src={down} alt="" />
          <h4>Show more</h4>
        </Container.Box>
        <Container.Hr></Container.Hr>
        <h4>SUBSCRIPTIONS</h4>
        <Container.Box>
          <Container.ImgProfile src={profile1} alt="" />
          <h4>Mr.Beast</h4>
          <Container.Img src={live} alt="" />
        </Container.Box>
        <Container.Box>
          <Container.ImgProfile src={profile2} alt="" />
          <h4>Webbrain</h4>
          <Container.Img src={offline} alt="" />
        </Container.Box>
        <Container.Box>
          <Container.ImgProfile src={profile1} alt="" />
          <h4>SimpleDev</h4>
          <Container.Img src={live} alt="" />
        </Container.Box>
        <Container.Box>
          <Container.ImgProfile src={profile2} alt="" />
          <h4>Best Kuafor</h4>
          <Container.Img src={offline} alt="" />
        </Container.Box>
        <Container.Box>
          <Container.ImgProfile src={profile1} alt="" />
          <h4>Myu Seou</h4>
          <Container.Img src={live} alt="" />
        </Container.Box>
        <Container.Box>
          <Container.ImgProfile src={profile2} alt="" />
          <h4>Kun.Uz</h4>
          <Container.Img src={offline} alt="" />
        </Container.Box>
        <Container.Box>
          <Container.ImgProfile src={profile2} alt="" />
          <h4>Build Design</h4>
          <Container.Img src={offline} alt="" />
        </Container.Box>
        <Container.Box>
          <Container.ImgProfile src={profile2} alt="" />
          <h4>Netflix</h4>
          <Container.Img src={offline} alt="" />
        </Container.Box>
        <Container.Box>
          <Container.ImgProfile src={profile2} alt="" />
          <h4>Ninja Coder</h4>
          <Container.Img src={offline} alt="" />
        </Container.Box>
        <Container.Box>
          <Container.Img src={down} alt="" />
          <h4>Show more</h4>
        </Container.Box>
        <Container.Hr></Container.Hr>
        <h4>EXPLORE</h4>
        <Container.Box>
          <Container.Img src={game} alt="" />
          <h4>Gaming</h4>
        </Container.Box>
        <Container.Box>
          <Container.Img src={music} alt="" />
          <h4>Musics</h4>
        </Container.Box>
        <Container.Box>
          <Container.Img src={stream} alt="" />
          <h4>Trending</h4>
        </Container.Box>
        <Container.Box>
          <Container.Img src={news} alt="" />
          <h4>News</h4>
        </Container.Box>
        <Container.Hr></Container.Hr>
        <h4>More from Youtube</h4>
        <Container.Box>
          <Container.Img src={art} alt="" />
          <h4>YouTube Studio</h4>
        </Container.Box>
        <Container.Box>
          <Container.Img src={kids} alt="" />
          <h4>YouTube Kids</h4>
        </Container.Box>
        <Container.Box></Container.Box>
        <Container.Box></Container.Box>
        <Container.Box></Container.Box>
        <Container.Box></Container.Box>
        <Container.Box></Container.Box>
      </Container>
    </Wrapper>
  );
};

export default Sidebar;
