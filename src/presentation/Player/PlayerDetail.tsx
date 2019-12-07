import * as React from "react";
import { useState } from "react";

import { img } from "vdoc/utils/image";

export default (props: any) => {
  // set state params
  let [player, setPlayer] = useState({
    first_name: "",
    last_name: "",
    first_roma: "",
    last_roma: "",
    twitter_id: "",
    facebook_id: "",
    site_url: "",
    image_url: ""
  });
  return (
    <section className="player-detail -purple">
      <div className="player-icon">
        <img src={img(player.image_url)} alt="" id="player-img" />
        <ul className="sns-share">
          <li>
            <a
              href={"https://www.facebook.com/" + player.facebook_id}
              id="facebook"
              target="_blank"
            >
              <img src={img("sns/facebook.png")} alt="" />
            </a>
          </li>
          <li>
            <a
              href={"https://twitter.com/" + player.twitter_id}
              id="twitter"
              target="_blank"
            >
              <img src={img("sns/twitter.png")} alt="" />
            </a>
          </li>
          <li>
            <a href={player.site_url} id="site" target="_blank">
              <img src={img("sns/link.png")} alt="" />
            </a>
          </li>
        </ul>
      </div>
      <div className="profile-box">
        <h3>
          <span id="japanese-name">
            {player.first_name + " " + player.last_name}
          </span>
          <br className="sp" />
          <span id="english-name">
            {player.first_roma + " " + player.last_roma}
          </span>
        </h3>
        <p id="profile"></p>
      </div>
    </section>
  );
};
