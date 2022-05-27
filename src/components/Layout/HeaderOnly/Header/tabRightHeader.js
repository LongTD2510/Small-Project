import React, { Component } from "react";
import bell from "../../../../assets/img/bell.svg";
import human from "../../../../assets/img/avatar-human.svg";
import { N70 } from '@atlaskit/theme/colors';
import { token } from '@atlaskit/tokens';
import SettingsIcon from "@atlaskit/icon/glyph/settings";
export default class TabRightHeader extends Component {
  render() {
    return (
      <>
        <nav className="right-header">
          <div className="setting-item">
            <button className="btn setting-btn">
              <SettingsIcon primaryColor={token("color.icon.brand", N70)} />
            </button>
          </div>
          <div className="login-container">
            <div className="avatar">
              <img src={bell} alt="Bell notification" />
            </div>
            <div className="drop-down-account">
              <div className="human-avatar">
                <img src={human} alt="" />
              </div>
              <span>Test</span>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
