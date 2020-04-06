let ary = [
  {
    name: "布偶猫(猫科猫属动物)",
    pic:
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586101985248&di=2a9acb90eb34321d61b8e7f12cdade44&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn10%2F80%2Fw720h960%2F20180703%2Fb284-hevauxi4426514.jpg",
    date: "2020-04-01",
    address: "宠物商城",
    time: "1小时",
    dec:
      "布偶猫是猫中较大、较重的一种。它的头呈V形，眼大而圆，被毛丰厚，四肢粗大，尾长，身体柔软，多为三色或双色猫。布偶猫抱起来像软绵绵的布偶，而且对人非常友善。它性格大胆，不知道什么叫恐惧，而且对疼痛的忍耐性相当强，常被误认为缺乏疼痛感，因此很能容忍孩子的玩弄，是非常理想的家庭宠物。",
    price: 15000,
    type: "cat",
  },
  {
    name: "柴犬(犬科犬属动物)",
    pic:
      "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2118014413,2628016235&fm=26&gp=0.jpg",
    date: "2020-04-01",
    address: "宠物商城",
    time: "1小时",
    dec:
      "柴犬是体型中等并且又最古老的犬。柴犬能够应付陡峭的丘陵和山脉的斜坡，拥有灵敏的感官，使得柴犬屡次成为上乘的狩猎犬。柴犬性格活泼、好动。对自己喜欢的玩具、会一天到晚的把玩。其对外有极强警惕性，能为户主看家护院。其特别是对大型同类，并且不服输。草丛中的耗子、鸟都会是它的猎物及玩具。",
    price: 15000,
    type: "dog",
  },
  {
    name: "小香猪(猪科猪属动物)",
    pic:
      "http://img0.imgtn.bdimg.com/it/u=2354814762,4277511406&fm=26&gp=0.jpg",
    date: "2020-04-01",
    address: "宠物商城",
    time: "1小时",
    dec:
      "小香猪又名“迷你猪”，民间美其名日“七里香”、 “十里香”。 它原产于少数民族山区，古时虽有饲养但数量极少，仅做“贡品”专供皇亲贵族享用，不许百姓食之，从而限制了香猪的发展。解放后，濒临灭绝，直到20世纪80年代末，全国畜禽资源调查时方被发现，当时仅存几十头",
    price: 15000,
    type: "pig",
  },
];

let dogN = 0,
  catN = 0,
  pigN = 0;

let result = [];
for (let i = 1; i < 1000; i++) {
  let n = Math.round(Math.random() * 2),
    item = JSON.parse(JSON.stringify(ary[n])),
    m = 0;
  item = { id: i, ...item };
  switch (item.type) {
    case "dog":
      ++dogN;
      m = dogN;
    case "cat":
      ++catN;
      m = catN;
    default:
      ++pigN;
      m = pigN;
  }
  m = m < 100 && m >= 10 ? "0" + m : m < 10 ? "00" + m : m;
  item.name = item.name + m;
  result.push(item);
}

require("../utils/promiseFS").writeFile("./course.json", result);
