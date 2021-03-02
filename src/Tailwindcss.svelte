<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @layer utilities {
    .glass {
      background: rgba(120, 0, 168, 0.075);
      box-shadow: 0 15px 30px 0 rgba(23, 28, 102, 0.42);
      backdrop-filter: blur(5px);
      border-radius: 10px;
    }
    ,
    h1 {
      font-size: 2.4rem;
    }
    ,
    .top-row {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
    ,
    .grow {
      display: flex;
      flex-grow: 1;
    }
    ,
    .start {
      width: 20%;
      height: 40px;
      background: rgba(6, 177, 48, 0.62);
      box-shadow: 0 4px 9px 0 rgba(0, 184, 76, 0.377);
      backdrop-filter: blur(2px);
      border-radius: 10px;
      border: none;
    }
    ,
    .pause {
      width: 20%;
      height: 40px;
      background: rgba(233, 2, 2, 0.62);
      box-shadow: 0 4px 9px 0 rgba(129, 15, 15, 0.377);
      backdrop-filter: blur(2px);
      border-radius: 10px;
      border: none;
    }
    ,
    .btn {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
</style>
