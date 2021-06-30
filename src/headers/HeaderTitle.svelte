<script>
  import SvelteTooltip from 'svelte-tooltip';

  let pastRanks = [
    {
      season: 'S2020',
      league: 'Platinum',
      tier: '2',
      point: '0',
    },
    {
      season: 'S2020',
      league: 'Platinum',
      tier: '2',
      point: '0',
    },
  ];

  let userInfo = {
    level: '104',
    nickName: '욕하는놈코로나19',
  };

  let clicked = '';
  let clickBtn = (clickedName) => {
    clicked = clickedName;
    alert(clicked);
    setTimeout(() => {
      clicked = '1';
    }, 1000);
  };
</script>

<div class="Header">
  <div class="PastRank">
    <div class="PastRankList">
      {#each pastRanks as pastRank}
        <div class="Item tip">
          <SvelteTooltip
            tip={`${pastRank.league} ${pastRank.tier} ${pastRank.point} LP`}
            top
            color="white"
          >
            <span style="font-weight: bold;">{pastRank.season}</span>
            {pastRank.league}
          </SvelteTooltip>
        </div>
      {/each}
    </div>
  </div>
  <div class="Face">
    <div class="ProfileIcon">
      <div
        class="borderImage"
        style="background-image: url(//opgg-static.akamaized.net/images/borders2/platinum.png)"
      />
      <img
        class="ProfileImage"
        src="//opgg-static.akamaized.net/images/profile_icons/profileIcon4881.jpg?image=q_auto:best&amp;v=1518361200"
      />
      <span class="Level tip" title="레벨">{userInfo.level}</span>
    </div>
  </div>
  <div class="Profile">
    <div class="Information">
      <span class="Name">{userInfo.nickName}</span>
      <div class="Rank">
        <div class="LadderRank">
          <a
            href="https://www.op.gg/ranking/ladder/summonerName=%EC%9A%95%ED%95%98%EB%8A%94%EB%86%88%EC%BD%94%EB%A1%9C%EB%82%9819"
            class="tip Link tpd-delegation-uid-1"
            title=""
            target="_blank"
          >
            래더 랭킹 <span class="ranking">432,949</span>위 (상위 10.73%)
          </a>
        </div>
      </div>
    </div>
    <div class="Buttons">
      <button
        class={clicked === 'renewBtn'
          ? 'Button SemiRound Blue'
          : 'Button SemiRound Blue'}
        id="SummonerRefreshButton"
        on:click={() => {
          clickBtn('renewBtn');
        }}
        style="position: relative;"
      >
        전적 갱신
      </button>
      <button
        id="top_tiergraph"
        class={clicked === 'tierGraph'
          ? 'Button SemiRound White'
          : 'Button SemiRound White'}
        on:click={() => clickBtn('tierGraph')}
      >
        티어 그래프
      </button>
    </div>

    <div class="LastUpdate">
      최근 업데이트:
      <span
        class="_timeago _timeCountAssigned tip"
        data-datetime="1624267694"
        data-type=""
        data-interval="60"
        title="2021년 6월 21일 오후 6시 28분">20시간 전</span
      >
    </div>
  </div>
</div>

<style>
  .Header {
    width: 1000px;
    margin: 0 auto;
    padding: 20px 0 0 0;
  }
  .PastRank {
    padding-left: 30px;
  }
  .PastRankList {
    display: inline-block;
    padding-left: 0;
  }
  .PastRankList > .Item {
    display: inline-block;
    padding: 3px 4px;
    margin-left: 5px;
    margin-bottom: 15px;
    background: #e0e3e3;
    color: #657070;
    font-size: 11px;
    border: 1px solid #ced3d3;
    border-radius: 3px;
  }
  .Face {
    display: inline-block;
    width: 100px;
    padding-left: 30px;
  }
  .ProfileIcon {
    position: relative;
  }
  .borderImage {
    position: absolute;
    left: -10px;
    top: -10px;
    width: 120px;
    height: 120px;
    background-position: center bottom;
    background-repeat: no-repeat;
  }
  .ProfileImage {
    display: block;
    width: 100px;
    height: 100px;
  }
  .Header > .Face > .ProfileIcon > .Level {
    position: absolute;
    top: 100%;
    left: 50%;
    margin-top: -14px;
    margin-left: -22px;
    width: 44px;
    height: 24px;
    padding-top: 3px;
    box-sizing: border-box;
    background: url(//opgg-static.akamaized.net/images/site/summoner/bg-levelbox.png);
    background-size: 100%;
    line-height: 17px;
    font-size: 14px;
    text-align: center;
    color: #eabd56;
  }
  .Header > .Profile {
    position: relative;
    display: inline-block;
    margin-left: 25px;
    vertical-align: top;
  }
  .Information > .Name {
    color: #242929;
    font-size: 20px;
    font-weight: bold;
  }
  .Rank {
    margin-top: -5px;
    margin-bottom: 15px;
  }
  .LadderRank > .Link {
    color: #555e5e;
    font-size: 11px;
    text-decoration: none;
  }
  .LadderRank > .Link > .ranking {
    color: #059ede;
    font-weight: bold;
  }
  .Profile > .Buttons {
    display: flex;
    flex-direction: row;
  }
  .Buttons > .Button {
    margin-right: 5px;
    text-align: center;
  }
  .Button.Blue {
    border: 1px solid #1a78ae;
    background: #1f8ecd;
    color: #f2f2f2;
  }
  .Button.White {
    border: 1px solid #ccd1d1;
    background: #f2f2f2;
    color: #242929;
  }
  .Button.SemiRound {
    padding: 10px 14px;
    border-radius: 2px;
    font-size: 14px;
  }
  .LastUpdate {
    margin-top: 10px;
    color: #99a2a2;
    font-size: 11px;
  }
  .clicked {
    background: black;
  }
</style>
