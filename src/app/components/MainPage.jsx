import React from "react";

const MainPage = () => {
  return (
        <>
<header class="header mobile-header">
      <img src="Meet-Image/logo.svg" alt="meet logo" class="logo" />
      <div class="people-div">
        <img
          src="Meet-Image/image-hero-left.png"
          alt="people"
          class="people-left"
        />
        <img
          src="Meet-Image/image-hero-right.png"
          alt="people"
          class="people-right"
        />
      </div>
      <div class="hero-div">
        <h1 class="hero-title">Group Chat for Everyone</h1>
        <p class="hero-text">
          Meet makes it easy to connect with others face-to-face virtually and
          collaborate across any device
        </p>
        <div class="button-div">
          <button type="button" title="button" class="download-button">
            Download <span>v1.3</span>
          </button>
          <button type="button" title="button" class="ques-button">
            What is it?
          </button>
        </div>
      </div>
    </header>

    <header class="header desktop-header">
      <img src="Meet-Image/logo.svg" alt="meet logo" class="logo" />
      <div class="people-div">
        <img
          src="Meet-Image/image-hero-left.png"
          alt="people"
          class="people-left"
        />
        <div class="hero-div">
          <h1 class="hero-title">Group Chat for Everyone</h1>
          <p class="hero-text">
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device
          </p>

          <div class="button-div">
            <button type="button" title="button" class="download-button">
              Download <span>v1.3</span>
            </button>
            <button type="button" title="button" class="ques-button">
              What is it?
            </button>
          </div>
        </div>
        <img
          src="Meet-Image/image-hero-right.png"
          alt="people"
          class="people-right"
        />
      </div>
    </header>

    <div class="divider">
      <div class="line"></div>
      <div class="number">
        <p>01</p>
      </div>
    </div>

    <main class="main">
      <section class="img-section">
        <img
          src="Meet-Image/image-woman-in-videocall.jpg"
          alt="woman-in-videocall"
          class="image-one image-sec"
        />
        <img
          src="Meet-Image/image-women-videochatting.jpg"
          alt="women-videochatting"
          class="image-two image-sec"
        />
        <img
          src="Meet-Image/image-men-in-meeting.jpg"
          alt="men-in-meeting"
          class="image-three image-sec"
        />
        <img
          src="Meet-Image/image-man-texting.jpg"
          alt="man-texting"
          class="image-four image-sec"
        />
      </section>
      <section class="about">
        <p class="quote">Built for modern use</p>
        <h2 class="about-title">Smarter meetings, all in one place</h2>
        <p class="about-text">
          Send messages, share files, show your screen and record your meetings
          - all in one workspace. Control who can join with invite - only team
          access, data encryption, and data export.
        </p>
      </section>
    </main>

    <div class="divider divider-2">
      <div class="line"></div>
      <div class="number">
        <p>02</p>
      </div>
    </div>

    <footer class="footer">
      <h2 class="footer-title">Experience more together</h2>
      <p class="footer-text">
        Stay connected with reliable HD meetings and unlimited one-on-one and
        group video sessions.
      </p>
      <button
        type="button"
        title="button"
        class="download-button footer-button"
      >
        Download <span>v1.3</span>
      </button>
    </footer>
        </>
        );
};

export default MainPage;
