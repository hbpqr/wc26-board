window.DASH_DATA = {
 "meta": {
  "round": "小组赛第 2 轮",
  "updated": "2026-06-20 14:10",
  "disclaimer": "竞彩胜平负盘实测 vig 12.9%,比分盘更高,长期期望为负。本看板的使命是决策质量管理:亏得最少、给运气最大杠杆。资金池纪律高于一切预测。理性购彩。"
 },
 "bankroll": {
  "start": 200,
  "startDate": "06-11",
  "cashNow": 328.1,
  "pending": 0,
  "goal": 20000,
  "floor": 80,
  "milestones": [
   {
    "date": "06-18",
    "label": "首轮收官",
    "target": 500,
    "status": "missed",
    "actual": 279.5
   },
   {
    "date": "06-27",
    "label": "小组收官",
    "target": 1500
   },
   {
    "date": "07-07",
    "label": "16强战罢",
    "target": 4500
   },
   {
    "date": "07-14",
    "label": "四强产生",
    "target": 10000
   },
   {
    "date": "07-19",
    "label": "决赛日",
    "target": 20000
   }
  ],
  "rules": [
   [
    "优先级",
    "①本金200不亏(底线) ②风险可控下利润最大化(主航道) ③2万北极星(方向,不为追它加赌性)"
   ],
   [
    "价值安全边际(塔勒布·2026-06-14入宪)",
    "买入门槛=价值分≥1.10(不是≥1.0)。<1.0是负EV绝不碰;1.0-1.10虽正EV但落在我们的概率估计误差带内(卡塔尔74%→平、开幕三本命全被逼平为证),按安全边际跳过;≥1.10才买、≥1.20为核心。宁可错过,不在噪声里送钱。"
   ],
   [
    "杠铃策略(塔勒布·2026-06-14入宪)",
    "只做两端:①安全=不下注或极小核心 ②凸性=小注押长赔(value≥1.10的underdog/串关,小代价搏大赔付)。避开中段=短赔大热门单关(赔率低贴水重、估计误差最伤),即便临界也不碰。激进体现在凸性,不在仓位大小或频率;没缝就空仓是常态。"
   ],
   [
    "安全垫机制",
    "安全垫 = 资金池 - 200本金。凸性票(value 1.10-1.20+倍数仓)只许花安全垫;本金部分只做value≥1.20的核心票"
   ],
   [
    "单日仓位",
    "≤ 资金池 25%,且凸性+倍数合计 ≤ 安全垫;盈利全部滚存"
   ],
   [
    "核心仓",
    "价值分 ≥1.20 的胜平负单关,损耗最低、安全边际最厚,本金的唯一去处"
   ],
   [
    "凸性仓",
    "价值分 1.10-1.20 的 underdog/冷门票,花安全垫;低于1.10一律不碰"
   ],
   [
    "倍数仓",
    "≤ 安全垫 40%,2串1(腿价值 ≥1.10);垫越厚仓越大——复利自驱,不靠赌性驱动"
   ],
   [
    "保本线 200(重建模式)",
    "池<200=重建,但防御≠最小档(2026-06-13用户定调):剔除一切value<1.10的票,对value≥1.10凸性票下真实仓位(可达1/2~1Kelly),单日≤池25%且最坏全损后池≥120;串关腿须各≥1.10。无合格票就空仓(常态)"
   ],
   [
    "警戒线 160",
    "池 <160:只许核心仓且日 ≤20,直至回到 200;绝对地板 80 不变"
   ],
   [
    "棘轮保护",
    "每越过里程碑,保本线上移至该里程碑 50%(500→250,1500→750…),赚到的台阶永不吐回"
   ]
  ],
  "targetCurve": [
   {
    "d": "06-11",
    "v": 200
   },
   {
    "d": "06-18",
    "v": 500
   },
   {
    "d": "06-27",
    "v": 1500
   },
   {
    "d": "07-07",
    "v": 4500
   },
   {
    "d": "07-14",
    "v": 10000
   },
   {
    "d": "07-19",
    "v": 20000
   }
  ],
  "actualCurve": [
   {
    "d": "06-11",
    "v": 200
   },
   {
    "d": "06-12",
    "v": 255.5
   },
   {
    "d": "06-13",
    "v": 188.2
   },
   {
    "d": "06-14",
    "v": 279.5
   },
   {
    "d": "06-15",
    "v": 279.5
   },
   {
    "d": "06-16",
    "v": 279.5
   },
   {
    "d": "06-17",
    "v": 279.5
   },
   {
    "d": "06-18",
    "v": 279.5
   },
   {
    "d": "06-19",
    "v": 279.5
   },
   {
    "d": "06-20",
    "v": 328.1
   }
  ],
  "evCurve": [
   {
    "d": "06-11",
    "v": 200
   },
   {
    "d": "06-18",
    "v": 168
   },
   {
    "d": "06-27",
    "v": 133
   },
   {
    "d": "07-07",
    "v": 104
   },
   {
    "d": "07-19",
    "v": 76
   }
  ],
  "note": "2万是北极星(方向)。架构=CPPI安全垫+塔勒布杠铃。**6/16 三视角压力测试定稿(§13)=一台引擎+一套免费仪表:学习不需要花钱(校准样本=赛前概率+收盘线+结果,不含'钱'变量)→删掉'探索注/探索账户',改①情报工厂(唯一花真钱处,只为市场没定价的硬信息差变现,像澳洲)②影子book(免费学习,全盘口预测落盘→赛后算CLV/Brier)。空仓≠退化:样本数在涨就健康。** 6/14押澳洲胜22@5.15命中+91.3,池188.2→279.5。周二批四场全-EV+无硬信息差→真钱0元,影子book记满四场预测。下一里程碑500(6/18),差220.5。",
  "daily": [
   {
    "d": "06-11",
    "pool": 200,
    "pnl": 0,
    "records": [
     "🎫 启动日 · 出票 6 张共 200 元(首轮)",
     "　墨西哥胜 80@1.26 ｜ 墨南比分1:0 30@5.65 ｜ 墨南比分2:0 20@4.00",
     "　韩国胜 30@2.49 ｜ 韩捷平局 30@2.75 ｜ 韩捷比分1:1 10@3.65"
    ]
   },
   {
    "d": "06-12",
    "pool": 255.5,
    "pnl": 55.5,
    "records": [
     "🏆 墨西哥 2:0 南非(03:00 完赛)",
     "　✓ 墨西哥胜 80@1.26 → 100.8",
     "　✗ 比分1:0 30@5.65 → 0",
     "　✓ 比分2:0 20@4.00 → 80.0",
     "🏆 韩国 2:1 捷克(10:00 完赛)",
     "　✓ 韩国胜 30@2.49 → 74.7",
     "　✗ 平局 30@2.75 → 0 ｜ ✗ 比分1:1 10@3.65 → 0",
     "📊 当日小计: 投200 回255.5,净 +55.5(+27.8%)",
     "🎫 晚间确认次轮 5 票 110 元(加波70+美巴24+2串1 16)"
    ]
   },
   {
    "d": "06-13",
    "pool": 188.2,
    "pnl": -67.3,
    "records": [
     "🏆 加拿大 1:1 波黑(03:00 完赛)",
     "　✗ 加拿大胜 44@1.62 → 0",
     "　✗ 比分0:0 12@9.50 → 0",
     "　✗ 比分1:0 14@5.70 → 0",
     "　✗ 2串1·加拿大胜×美国胜 16@2.88 → 0(串关腿已死)",
     "🏆 美国 4:1 巴拉圭(09:00 完赛)",
     "　✓ 美国胜 24@1.78 → 42.7",
     "📊 当日小计:投110 回42.7 净-67.3 | 池 255.5→188.2(仍低于保本线200,防御模式)"
    ]
   },
   {
    "d": "06-14",
    "pool": 279.5,
    "pnl": 91.3,
    "records": [
     "🏆 卡塔尔 1:1 瑞士(03:00 完赛,90'+4')",
     "🏆 巴西 1:1 摩洛哥(06:00 完赛,90'+16')",
     "　萨巴里21'先破 | 维尼修斯32'扳平 | 无持仓,无资金影响",
     "🏆 海地 0:1 苏格兰(09:00 完赛,90'+8')",
     "　苏格兰全场压制取胜 | 集成65.4%客胜方向正确 | 无持仓,无资金影响",
     "🏆 澳大利亚 2:0 土耳其(12:00 完赛)",
     "　✓ 澳大利亚胜 22@5.15 → 113.3(土耳其伤兵tilt命中,本轮唯一持仓)",
     "📊 本日:投22 回113.3 净+91.3 | 池 188.2→279.5(站上保本线200)"
    ]
   },
   {
    "d": "06-15",
    "pool": 279.5,
    "pnl": 0,
    "records": [
     "🏆 德国 7:1 库拉索(01:00 完赛)",
     "　集成92.0%主胜方向正确 | 竞彩未开盘,按纪律无票 | 无资金影响",
     "🏆 荷兰 2:2 日本(04:00 完赛)",
     "　范戴克51'(1:0)→中村57'(1:1)→萨默维尔63'(2:1)→镰田大地88'绝平(2:2) | 集成50.6%看荷兰主胜方向误 | 三项HAD价值0.87-0.90,按纪律无票 | 无资金影响",
     "🏆 科特迪瓦 1:0 厄瓜多尔(07:00 完赛)",
     "　科特迪瓦主场爆冷取胜 | 集成40.4%看客胜厄瓜多尔方向误 | 三项HAD价值0.86-0.91,按纪律无票 | 无资金影响",
     "🏆 瑞典 5:1 突尼斯(10:00 完赛)",
     "　瑞典大胜完美印证主胜预判 | 集成52.4%主胜方向正确(Brier优) | 三项HAD价值0.86-0.90,按纪律无票 | 无资金影响",
     "📊 当日四场全终,无持仓,池 279.5 不变"
    ]
   },
   {
    "d": "06-16",
    "pool": 279.5,
    "pnl": 0,
    "records": [
     "🏆 西班牙 0:0 佛得角(00:00 完赛)",
     "　集成91.7%主胜方向大错(Brier=1.674) | 亚马尔/维廉斯替补未首发,佛得角铁桶阵守住平局 | 无持仓,无资金影响",
     "🏆 比利时 1:1 埃及(03:00 完赛)",
     "　集成65.5%看主胜方向错(Brier=1.062) | 萨拉赫34岁生日首发 | 无持仓,无资金影响",
     "🏆 沙特 1:1 乌拉圭(06:00 完赛,90'+8')",
     "　阿尔-阿姆里41'(1:0)→马克西·阿劳霍80'凌空扳平(1:1) | 集成67.7%客胜方向错(Brier=1.104) | 情报识破假edge未出票 | 无持仓,无资金影响",
     "🏆 伊朗 2:2 新西兰(09:00 完赛)",
     "　集成58.5%看伊朗主胜方向错(Brier ens=0.926,差于随机0.667) | 平局兑现,国内联赛停摆3月体能断档因素印证 | 无持仓,无资金影响",
     "📊 当日4场全终:无持仓,池 279.5 不变"
    ]
   },
   {
    "d": "06-17",
    "pool": 279.5,
    "pnl": 0,
    "records": [
     "🏆 法国 3:1 塞内加尔(03:00 完赛)",
     "　集成68.1%主胜方向正确(Brier ens=0.157,极优) | 无持仓,无资金影响",
     "🏆 伊拉克 1:4 挪威(06:00 完赛)",
     "　集成80.0%客胜方向正确(Brier ens≈0.064,极优) | 无持仓,无资金影响",
     "🏆 阿根廷 3:0 阿尔及利亚(09:00 完赛)",
     "　集成69.7%主胜方向正确(Brier ens=0.143,极优) | 梅西帽子戏法·200帽里程碑 | 无持仓,无资金影响",
     "🏆 奥地利 3:1 约旦(12:00 完赛)",
     "　集成71.6%主胜方向正确(Brier ens=0.125,优) | 无持仓,无资金影响",
     "📊 当日已结算4场:无持仓,池 279.5 不变"
    ]
   },
   {
    "d": "06-18",
    "pool": 279.5,
    "pnl": 0,
    "records": [
     "🏆 葡萄牙 1:1 刚果金(01:00 完赛)",
     "　集成78.4%主胜方向错(平局兑现);Brier ens=1.340超随机基线 | 无持仓,无资金影响",
     "🏆 英格兰 4:2 克罗地亚(04:00 完赛)",
     "　集成59.0%主胜方向正确(Brier ens=0.255,优);Elo英格兰→1993 | 无持仓,无资金影响",
     "🏆 加纳 1:0 巴拿马(07:00 完赛)",
     "　集成43.8%主胜方向正确(Brier ens=0.474);Elo加纳→1636 | 无持仓,无资金影响",
     "🏆 乌兹别克 1:3 哥伦比亚(10:00 完赛)",
     "　集成72.7%客胜方向正确(Brier ens≈0.116,极优) | 哈梅斯+路易斯·迪亚斯领衔大胜 | 无持仓,无资金影响",
     "📊 当日4场全终:无持仓,池 279.5 不变"
    ]
   },
   {
    "d": "06-19",
    "pool": 279.5,
    "pnl": 0,
    "records": [
     "🏆 捷克 1:1 南非(00:00 完赛)",
     "　集成52.8%主胜方向错(平局兑现，Brier ens=1.018，差于随机0.667) | 无持仓，无资金影响",
     "🏆 瑞士 4:1 波黑(03:00 完赛)",
     "　集成62.1%主胜方向正确(Brier ens=0.217，优) | 无持仓，无资金影响",
     "🏆 加拿大 6:0 卡塔尔(06:00 完赛)",
     "　集成76.3%主胜方向正确(Brier ens=0.079，极优) | 无持仓，无资金影响",
     "🏆 墨西哥 1:0 韩国(09:00 完赛)",
     "　集成47.1%主胜方向正确(Brier ens≈0.422) | 无持仓，无资金影响",
     "📊 当日4场全终：无持仓，池 279.5 不变"
    ]
   },
   {
    "d": "06-20",
    "pool": 328.1,
    "pnl": 48.6,
    "records": [
     "🏆 美国 2:0 澳大利亚(03:00 完赛)",
     "　押美国胜 16@1.44 中，回收 23.04（净赚 +7）| 集成62.7%主胜方向正确 | 普利西奇缺席仍赢",
     "🏆 苏格兰 0:1 摩洛哥(06:00 完赛)",
     "　押摩洛哥胜 16@1.50 中，回收 24（净赚 +8）| 集成56.8%客胜方向正确 | 摩洛哥黄金一代完胜",
     "🏆 巴西 3:0 海地(08:30 完赛，90'+5')",
     "　3串1彩票腿(巴西让-2净胜3+)3:0压线兑现 | 集成88.5%主胜方向正确(Brier≈0.021) | 2串1摩×美全中+13.9、3串1全中+19.6",
     "📊 本轮52元4注全中(事前模型给15%头奖剧本)：回收100.6 净+48.6(ROI+93.5%) | 池 279.5→328.1 | 土耳其未出票(纪律跳过)方向错但零损失",
     "🏆 土耳其 0:1 巴拉圭(11:00 完赛)",
     "　模型46.7%主胜方向错；按纪律未出票(五五开跳过)→零损失，池328.1不变"
    ]
   }
  ],
  "evLedger": [
   {
    "date": "06-11",
    "desc": "首轮 6 票:墨南 130 + 韩捷 70",
    "stake": 200,
    "evPnl": -32,
    "winProb": 32.3,
    "actualPnl": 55.5,
    "status": "已结算",
    "note": "墨场 +50.8(墨胜+比分2:0 双中) + 韩捷 +4.7(韩国胜中);实际跑赢期望 +87.5,首轮即兑现正方差"
   },
   {
    "date": "06-12",
    "desc": "次轮草案 5 票:加波 70 + 美巴 24 + 2串1 16",
    "stake": 110,
    "evPnl": -5.4,
    "winProb": 48.6,
    "actualPnl": -67.3,
    "status": "已结算",
    "note": "资金池 255.5,110 元 = 43% 仓位,符合 ≤50% 规则,按原额出票;期望区间 -3.1(集成) ~ -7.6(保守),损耗已从首轮 -16% 压到 -5%;加波场86已挂(-86),美巴24在场待结"
   },
   {
    "date": "06-14",
    "desc": "周六实出1单:澳胜22(其余3单未出票)",
    "stake": 22,
    "evPnl": 3.6,
    "winProb": 22.5,
    "actualPnl": 91.3,
    "status": "已结算",
    "note": "原计划4单44元(澳胜+巴3:0+澳0:0+巴0:0),实际只出澳洲胜22元@5.15;其余3单(巴3:0/澳0:0/巴0:0)未下注。澳大利亚2:0完胜土耳其,命中→回收113.3,净+91.3;池188.2→279.5,重站保本线200上方。巴西和澳0:0若出票均挂,不出是对的。"
   }
  ]
 },
 "todayMatches": [
  {
   "num": "周日009",
   "group": "F组",
   "home": "德国",
   "away": "库拉索",
   "time": "06-15 01:00",
   "status": "finished",
   "actual": "7:1",
   "predManual": "未出票",
   "predModel": "主胜92.0%",
   "ensemble": {
    "h": 92,
    "d": 8,
    "a": 0
   },
   "note": "德国7:1大胜库拉索。集成92.0%主胜方向正确(Brier=0.016,极优)。竞彩赛前未开盘/预计赔率≈1.05无肉,按纪律无票,无资金影响。Elo:德国+2.9→1902.9,库拉索→1347.1。"
  },
  {
   "num": "周日010",
   "group": "E组",
   "home": "荷兰",
   "away": "日本",
   "time": "06-15 04:00",
   "status": "finished",
   "actual": "2:2",
   "predManual": "未出票",
   "predModel": "主胜50.6%",
   "ensemble": {
    "h": 50.6,
    "d": 26.5,
    "a": 22.9
   },
   "note": "荷兰 2:2 日本,精彩平局。进球:范戴克51'头球(1:0)→中村航辅57'偏转弹(1:1)→萨默维尔63'世界波(2:1)→镰田大地88'后点补射绝平(2:2)。集成50.6%看荷兰主胜方向错(ens Brier=0.845>随机0.667);荷兰西蒙斯/蒂姆伯/德里赫特三主力缺阵,日本远藤/三笘双核亦缺,双方相互削弱,市场定价高效(HAD三项价值0.87-0.90,按纪律无票)。Elo:荷兰-7.6→1912.4,日本→1847.6。无持仓,无资金影响。"
  },
  {
   "num": "周日011",
   "group": "F组",
   "home": "科特迪瓦",
   "away": "厄瓜多尔",
   "time": "06-15 07:00",
   "status": "finished",
   "actual": "1:0",
   "predManual": "未出票",
   "predModel": "客胜40.4%",
   "ensemble": {
    "h": 27,
    "d": 32.6,
    "a": 40.4
   },
   "note": "科特迪瓦 1:0 厄瓜多尔。集成预测客胜概率最高(40.4%)方向错,主场科特迪瓦爆冷取胜(Brier≈0.802,差于随机0.667)。三项价值0.86-0.91全<1.10,按纪律无票,无资金影响。"
  },
  {
   "num": "周日012",
   "group": "E组",
   "home": "瑞典",
   "away": "突尼斯",
   "time": "06-15 10:00",
   "status": "finished",
   "actual": "5:1",
   "predManual": "未出票",
   "predModel": "主胜52.4%",
   "ensemble": {
    "h": 52.4,
    "d": 27.5,
    "a": 20.1
   },
   "note": "瑞典 5:1 大胜突尼斯(E组揭幕战)。集成52.4%主胜方向正确,大比分完美兑现(ens Brier=0.333,优于随机0.667)。竞彩三项价值0.86-0.90全<1.10,按纪律无票,无资金影响。Elo:瑞典+24.7→1724.7,突尼斯→1595.3。"
  },
  {
   "num": "周一013",
   "home": "西班牙",
   "away": "佛得角",
   "time": "06-16 00:00",
   "status": "finished",
   "actual": "0:0",
   "predManual": "未出票",
   "predModel": "主胜91.7%",
   "ensemble": {
    "h": 91.7,
    "d": 8.8,
    "a": 0
   },
   "note": "西班牙 0:0 平局佛得角。集成91.7%主胜方向大错(Brier=1.674,远差随机0.667),属本届最大冷门之一。双星亚马尔/尼科·维廉斯替补→进攻受限,佛得角铁桶阵守住平局。按纪律深让盘为镜像区未出票,无资金影响。Elo:西班牙-19.1→2030.9,佛得角→1469.1。"
  },
  {
   "num": "周一014",
   "home": "比利时",
   "away": "埃及",
   "time": "06-16 03:00",
   "status": "finished",
   "actual": "1:1",
   "predManual": "未出票",
   "predModel": "主胜65.5%",
   "ensemble": {
    "h": 65.5,
    "d": 21.5,
    "a": 12.9
   },
   "note": "比利时 1:1 埃及。集成65.5%看比利时主胜方向错(Brier=1.062,差于随机0.667)。萨拉赫34岁生日首发出战;双方均未锁定胜局。按纪律HAD三项价值0.87-0.94均<1.10,无票,无资金影响。Elo:比利时-13.7→1836.3,埃及→1633.7。"
  },
  {
   "num": "周一015",
   "group": "H组",
   "home": "沙特",
   "away": "乌拉圭",
   "time": "06-16 06:00",
   "status": "finished",
   "actual": "1:1",
   "predManual": "未出票",
   "predModel": "客胜67.7%",
   "ensemble": {
    "h": 11.8,
    "d": 20.5,
    "a": 67.7
   },
   "note": "沙特 1:1 乌拉圭。阿尔-阿姆里41'先破(1:0);马克西·阿劳霍80'凌空抽射扳平(1:1,90'+8'终场)。集成67.7%看乌拉圭客胜方向错,平局兑现(ens Brier=1.104,差于随机0.667)。情报识破:乌拉圭防线重创(希门尼斯/阿劳霍双CB缺/德阿拉斯卡耶塔缺)→满血模型高估乌拉圭;竞彩让负value仅1.03<1.10安全边际跳过,按纪律无票。实际沙特顽强守住平局印证情报判断正确。Elo:沙特+11.2→1581.2,乌拉圭→1838.8。"
  },
  {
   "num": "周一016",
   "group": "G组",
   "home": "伊朗",
   "away": "新西兰",
   "time": "06-16 09:00",
   "status": "finished",
   "actual": "2:2",
   "predManual": "未出票",
   "predModel": "主胜58.5%",
   "ensemble": {
    "h": 58.5,
    "d": 25.3,
    "a": 16.2
   },
   "note": "终场：伊朗 2:2 新西兰。模型看伊朗主胜58.5%落空，平局。无票，影子book已记样本。Brier ens=0.926，RPS ens=0.184。"
  },
  {
   "num": "周二017",
   "group": "I组",
   "home": "法国",
   "away": "塞内加尔",
   "time": "06-17 03:00",
   "status": "finished",
   "actual": "3:1",
   "predManual": "未出票",
   "predModel": "主胜68.1%",
   "ensemble": {
    "h": 68.1,
    "d": 20.6,
    "a": 11.3
   },
   "note": "法国 3:1 塞内加尔。集成68.1%主胜方向正确(Brier ens=0.157,极优,远好于随机0.667)。姆巴佩领衔法国强势开局。按纪律HAD价值全<1.10,无票,无资金影响。新权重更新:A市场73.3%/B-Elo9.5%/C-Poisson8.9%。Elo:法国+8.6→2008.6,塞内加尔→1741.4。"
  },
  {
   "num": "周二018",
   "home": "伊拉克",
   "away": "挪威",
   "time": "06-17 06:00",
   "status": "finished",
   "actual": "1:4",
   "predManual": "未出票",
   "predModel": "客胜80.0%",
   "ensemble": {
    "h": 5.6,
    "d": 14.4,
    "a": 80
   },
   "note": "终场：伊拉克 1:4 挪威。哈兰德/厄德高领衔挪威大胜,集成80.0%客胜方向正确(Brier ens=0.066,极优,远好于随机0.667)。斯特兰德·拉森缺席未影响整体,挪威高效取胜。新权重:A市场74.4%/B-Elo8.9%/C-Poisson8.7%。Elo:伊拉克-11.1→1488.9,挪威→1861.1。无持仓,无资金影响。"
  },
  {
   "num": "周二019",
   "home": "阿根廷",
   "away": "阿尔及利亚",
   "time": "06-17 09:00",
   "status": "finished",
   "actual": "3:0",
   "predManual": "未出票",
   "predModel": "主胜69.7%",
   "ensemble": {
    "h": 69.7,
    "d": 20.4,
    "a": 9.9
   },
   "note": "终场：阿根廷 3:0 阿尔及利亚。梅西帽子戏法，完成国家队第200场里程碑出场。集成69.7%主胜方向正确(Brier ens=0.143,极优;RPS ens=0.051,极优)。新权重:A市场73.5%/B-Elo9.9%/C-Poisson8.7%。无持仓，无资金影响。"
  },
  {
   "num": "周二020",
   "home": "奥地利",
   "away": "约旦",
   "time": "06-17 12:00",
   "status": "finished",
   "actual": "3:1",
   "note": "奥地利3:1大胜约旦,集成71.6%主胜方向正确(Brier ens=0.125,优);无持仓,资金不变",
   "predManual": "未出票",
   "predModel": "主胜71.6%",
   "ensemble": {
    "h": 71.6,
    "d": 18.5,
    "a": 10
   }
  },
  {
   "num": "周三021",
   "home": "葡萄牙",
   "away": "刚果金",
   "time": "06-18 01:00",
   "status": "finished",
   "actual": "1:1",
   "note": "葡萄牙1:1平刚果金,集成主胜78.4%方向错误(结果平局);Brier ens=1.340超出随机基线,大热门被平是典型难预测场景。无持仓,资金不变",
   "predManual": "未出票",
   "predModel": "主胜78.4%",
   "ensemble": {
    "h": 78.4,
    "d": 15.1,
    "a": 6.5
   }
  },
  {
   "num": "周三022",
   "home": "英格兰",
   "away": "克罗地亚",
   "time": "06-18 04:00",
   "status": "finished",
   "actual": "4:2",
   "note": "英格兰4:2大胜克罗地亚,集成主胜59.0%方向正确(Brier ens=0.255,优);Elo更新:英格兰+13.2→1993,克罗地亚→1807。无持仓,资金不变",
   "predManual": "未出票",
   "predModel": "主胜59.0%",
   "ensemble": {
    "h": 59,
    "d": 24.7,
    "a": 16.2
   }
  },
  {
   "num": "周三023",
   "home": "加纳",
   "away": "巴拿马",
   "time": "06-18 07:00",
   "status": "finished",
   "actual": "1:0",
   "note": "加纳1:0胜巴拿马,集成主胜43.8%方向正确;Brier ens=0.474略差(冷门盘概率分散,预期如此);Elo更新:加纳+15.5→1636,巴拿马→1585。无持仓,资金不变",
   "predManual": "未出票",
   "predModel": "主胜43.8%",
   "ensemble": {
    "h": 43.8,
    "d": 28.9,
    "a": 27.3
   }
  },
  {
   "num": "周三024",
   "home": "乌兹别克",
   "away": "哥伦比亚",
   "time": "06-18 10:00",
   "status": "finished",
   "actual": "1:3",
   "predManual": "未出票",
   "predModel": "客胜72.7%",
   "ensemble": {
    "h": 9.1,
    "d": 18.3,
    "a": 72.7
   },
   "note": "终场:乌兹别克1:3哥伦比亚。集成72.7%客胜方向正确(Brier ens≈0.116,极优,远好于随机0.667)。哈梅斯·罗德里格斯+路易斯·迪亚斯领衔哥伦比亚大胜,印证乌兹别克双核(马沙里波夫/阿利库洛夫)缺阵影响。无持仓,资金不变。"
  },
  {
   "num": "周四025",
   "group": "A组",
   "home": "捷克",
   "away": "南非",
   "time": "06-19 00:00",
   "status": "finished",
   "actual": "1:1",
   "predManual": "未出票",
   "predModel": "主胜52.8%",
   "ensemble": {
    "h": 52.8,
    "d": 26.8,
    "a": 20.5
   },
   "note": "终场:捷克1:1南非(平局)。集成52.8%主胜方向错(结果平局, Brier ens=1.018, 差于随机0.667)。南非西托尔/茨瓦内停赛让利,但莫科埃纳87'点球绝平——集成对平局低估(26.8%实际发生)。深教训:停赛利空与「主胜概率」之间的正向偏差并不保证平局概率同步下移。无持仓,资金不变。Elo:捷克-14.3→1710.2,南非→1488.2。"
  },
  {
   "num": "周四026",
   "group": "B组",
   "home": "瑞士",
   "away": "波黑",
   "time": "06-19 03:00",
   "status": "finished",
   "actual": "4:1",
   "predManual": "未出票",
   "predModel": "主胜62.1%",
   "ensemble": {
    "h": 62.1,
    "d": 23.5,
    "a": 14.5
   },
   "note": "终场:瑞士4:1大胜波黑。集成62.1%主胜方向正确(Brier ens=0.217,优)。曼扎姆比71'替补入场连场两球奠定大胜——替补效应超预期。科拉西纳茨/泽科双核缺阵情报事前已price-in。无持仓,资金不变。Elo:瑞士+21.7→1802.2,波黑→1680.3。"
  },
  {
   "num": "周四027",
   "group": "B组",
   "home": "加拿大",
   "away": "卡塔尔",
   "time": "06-19 06:00",
   "status": "finished",
   "actual": "6:0",
   "predManual": "未出票",
   "predModel": "主胜76.3%",
   "ensemble": {
    "h": 76.3,
    "d": 16.5,
    "a": 7.3
   },
   "note": "终场:加拿大6:0大胜卡塔尔(历史首胜)。集成76.3%主胜方向正确,大比分超预期(Brier ens=0.079,极优)。戴维斯情报落地——主力回归如虎添翼,乔纳森·大卫帽子戏法。卡塔尔9分钟内2红牌打到9人。无持仓,资金不变。Elo:加拿大+11.3→1869.3,卡塔尔→1548.2。"
  },
  {
   "num": "周四028",
   "group": "A组",
   "home": "墨西哥",
   "away": "韩国",
   "time": "06-19 09:00",
   "status": "finished",
   "actual": "1:0",
   "predManual": "未出票",
   "predModel": "主胜47.1%",
   "ensemble": {
    "h": 47.1,
    "d": 29.6,
    "a": 23.3
   },
   "note": "终场:墨西哥1:0韩国。集成47.1%主胜方向正确(Brier ens≈0.422,优于随机基线0.667)。金塔内斯首球锁定胜局,韩国全队可用未能翻盘。无持仓,资金不变。合法空仓通过事后验证(HAD全<1.10,无edge)。"
  },
  {
   "num": "周五029",
   "home": "美国",
   "away": "澳大利亚",
   "time": "06-20 03:00",
   "status": "finished",
   "actual": "2:0",
   "predManual": "见slip(美国胜16元@1.45)",
   "predModel": "主胜60.2%",
   "ensemble": {
    "h": 60.2,
    "d": 22.4,
    "a": 17.4
   },
   "note": "终场：美国2:0澳大利亚。集成62.7%主胜方向正确(Brier≈0.21，优)。普利西奇赛前确认缺席(小腿伤，佩皮首发)，美国仍以2:0完胜。§14 fade-favorite平局未触发(竞彩平3.90 vs Polymarket公平4.63，负CLV-16%)。无持仓，资金不变。"
  },
  {
   "num": "周五030",
   "home": "苏格兰",
   "away": "摩洛哥",
   "time": "06-20 06:00",
   "status": "finished",
   "actual": "0:1",
   "predManual": "见slip(摩洛哥胜16元@1.50)",
   "predModel": "客胜56.8%",
   "ensemble": {
    "h": 16.6,
    "d": 26.6,
    "a": 56.8
   },
   "note": "终场：摩洛哥1:0苏格兰(第90'+7'结束)。集成56.8%客胜方向正确(Brier≈0.285)。§14 fade-favorite未触发(conf<60%)。无持仓，资金不变。"
  },
  {
   "num": "周五031",
   "home": "巴西",
   "away": "海地",
   "time": "06-20 08:30",
   "status": "finished",
   "actual": "3:0",
   "predManual": "见slip(3串1腿·巴西让-2·8元)",
   "predModel": "主胜88.5%",
   "ensemble": {
    "h": 88.5,
    "d": 8,
    "a": 3.5
   },
   "note": "终场：巴西3:0海地(90'+5'结束)。集成88.5%主胜方向正确(Brier≈0.021，极优)。§14 fade-favorite未触发(§14.3明显鱼腩错配，巴-海排除)。无持仓，资金不变。"
  },
  {
   "num": "周五032",
   "home": "土耳其",
   "away": "巴拉圭",
   "time": "06-20 11:00",
   "status": "finished",
   "predManual": "未出票(跳过)",
   "predModel": "主胜46.7%",
   "ensemble": {
    "h": 46.7,
    "d": 28.6,
    "a": 24.6
   },
   "note": "巴拉圭1:0土耳其(全场)；模型46.7%主胜方向错；未出票(纪律跳过)零损失",
   "actual": "0:1"
  }
 ],
 "holdings": {
  "invested": 0,
  "returned": 0,
  "pendingStake": 0,
  "condEV": 0,
  "condWinProb": 0,
  "tickets": [],
  "scenariosTitle": "当前无在场持仓(真钱等真edge/已下注后在此显示)",
  "scenarios": []
 },
 "focus": [
  {
   "num": "周六033",
   "home": "荷兰",
   "away": "瑞典",
   "time": "06-21 01:00",
   "models": {
    "A": [
     58.3,
     22.7,
     19
    ],
    "B": [
     71.1,
     19.1,
     9.8
    ],
    "C": [
     58.5,
     23.3,
     18.3
    ],
    "D": [
     57.2,
     23.4,
     19.4
    ],
    "ens": [
     60.8,
     22.1,
     17.1
    ]
   },
   "wdlValue": [
    {
     "pick": "主胜",
     "odds": 1.52,
     "prob": 60.8,
     "value": 0.92
    },
    {
     "pick": "平局",
     "odds": 3.9,
     "prob": 22.1,
     "value": 0.86
    },
    {
     "pick": "客胜",
     "odds": 4.65,
     "prob": 17.1,
     "value": 0.8
    }
   ],
   "scores": [],
   "verdict": "预研:荷兰主胜60.8%(最稳但瑞典有竞争)。让球-1净胜1区edge<5pp市场高效。单关价值0.92<1.10负EV,按押预测纳入串关彩票腿。赛前补伤停。"
  },
  {
   "num": "周六034",
   "home": "德国",
   "away": "科特迪瓦",
   "time": "06-21 04:00",
   "models": {
    "A": [
     65.1,
     19.5,
     15.4
    ],
    "B": [
     72.5,
     18.6,
     9
    ],
    "C": [
     65.7,
     19.8,
     14.4
    ],
    "ens": [
     67.1,
     19.3,
     13.6
    ]
   },
   "wdlValue": [
    {
     "pick": "主胜",
     "odds": 1.36,
     "prob": 67.1,
     "value": 0.91
    },
    {
     "pick": "平局",
     "odds": 4.55,
     "prob": 19.3,
     "value": 0.88
    },
    {
     "pick": "客胜",
     "odds": 5.75,
     "prob": 13.6,
     "value": 0.78
    }
   ],
   "scores": [],
   "verdict": "预研核心:德国主胜67.1%(最稳)。科特迪瓦前锋瓦伊禁赛缺阵=利好德国。单关价值0.91<1.10负EV,但置信高,定为核心。"
  },
  {
   "num": "周六035",
   "home": "厄瓜多尔",
   "away": "库拉索",
   "time": "06-21 08:00",
   "models": {
    "B": [
     87.8,
     12,
     0.2
    ],
    "C": [
     87.9,
     9.3,
     2.9
    ],
    "D": [
     86.5,
     9.4,
     4.1
    ],
    "ens": [
     87.3,
     10.5,
     2.2
    ]
   },
   "wdlValue": [
    {
     "pick": "让胜(净胜3+)",
     "odds": 1.85,
     "prob": 51.8,
     "value": 0.96
    },
    {
     "pick": "让平",
     "odds": 4,
     "prob": 20.9,
     "value": 0.83
    },
    {
     "pick": "让负",
     "odds": 2.95,
     "prob": 27.3,
     "value": 0.81
    }
   ],
   "scores": [],
   "verdict": "✅已开让球盘(库拉索太弱·竞彩不开胜平负):厄瓜多尔让-2(净胜3+)@1.85·模型51.8%。⚠️深让镜像区,模型≈市场去水(无真edge)。厄瓜多尔赢87%但不可买,可买的让-2只52%=搏净胜3的彩票,不是拿得准大核心。已放进3串1做高赔上限腿。"
  },
  {
   "num": "周六036",
   "home": "突尼斯",
   "away": "日本",
   "time": "06-21 12:00",
   "models": {
    "A": [
     13.9,
     22.4,
     63.7
    ],
    "B": [
     14.2,
     21.3,
     64.5
    ],
    "C": [
     13,
     22.6,
     64.4
    ],
    "D": [
     14.4,
     23.4,
     62.2
    ],
    "ens": [
     14,
     22.4,
     63.6
    ]
   },
   "wdlValue": [
    {
     "pick": "主胜",
     "odds": 6.36,
     "prob": 14,
     "value": 0.89
    },
    {
     "pick": "平局",
     "odds": 3.95,
     "prob": 22.4,
     "value": 0.88
    },
    {
     "pick": "客胜",
     "odds": 1.39,
     "prob": 63.6,
     "value": 0.88
    }
   ],
   "scores": [],
   "verdict": "预研核心:日本客胜63.6%。突尼斯需胜保出线但实力差。单关价值0.88<1.10负EV,押预测纳入核心。"
  }
 ],
 "news": [
  {
   "date": "06-20",
   "match": "厄瓜多尔 vs 库拉索",
   "impact": "厄败绩必须赢",
   "tone": "home",
   "text": "厄瓜多尔首轮0:1负于科特迪瓦,与库拉索同积0分;无伤停、动机明确必须赢——输者几乎出局(Rotowire·Sports Mole 06-20)",
   "en": "Ecuador lost 1-0 to Ivory Coast in opener, now level on zero points with Curaçao; no injuries/suspensions, must-win pressure squarely on Ecuador — loser almost certainly eliminated. (Rotowire, Sports Mole — June 20)",
   "full": "厄瓜多尔在本届世界杯首轮以0:1负于科特迪瓦（阿马德·迪亚洛83'制胜），导致小组局面严峻：德国+科特迪瓦各取3分并列前两，厄瓜多尔与库拉索均积0分，输者几乎确定出局。Rotowire与Sports Mole（06-20）确认厄瓜多尔首发阵容无重大伤停：卡伊塞多、瓦连西亚（Enner Valencia）、帕乔、普拉塔等核心均可出战。库拉索首轮1:7惨败德国，元气大伤；两队动机不对等——厄瓜多尔死战求生，库拉索已基本宣告出局。竞彩HAD暂未开盘，HHAD开出-2深让（厄净胜3+），模型集成87.3%主胜；待HAD开盘后主会话用predict.py确认是否过价值闸1.10。",
   "enFull": "Ecuador fell 1-0 to Ivory Coast in their World Cup opener (Amad Diallo 83') and now sit on zero points alongside Curaçao — with Germany and Ivory Coast each on 3 points, the loser here is almost certainly eliminated. Ecuador have their full squad available with no suspensions or injury concerns: Caicedo, Valencia, Pacho, Plata all confirmed (Rotowire, Sports Mole — Jun 20). Curaçao were destroyed 7-1 by Germany in their opener; the must-win pressure asymmetry heavily favours Ecuador's intensity. Chinese bookmaker has not yet opened the HAD (胜平负) market; only HHAD (-2 line) available at 1.85/4.00/2.95 — model consensus 87.3% Ecuador win. Monitor for HAD opening and run predict.py before 08:00 BJT kick-off.",
   "links": [
    {
     "name": "Rotowire: Ecuador vs Curacao preview",
     "url": "https://www.rotowire.com/soccer/article/ecuador-vs-curacao-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-e-118799"
    },
    {
     "name": "Sports Mole: Ecuador vs Curacao preview",
     "url": "https://www.sportsmole.co.uk/football/ecuador/world-cup-2026/preview/ecuador-vs-curacao-prediction-team-news-lineups_599563.html"
    }
   ]
  },
  {
   "date": "06-20",
   "match": "荷兰 vs 瑞典",
   "impact": "伊萨克带伤首发",
   "tone": "away_neg",
   "text": "瑞典前锋伊萨克(利物浦)本周曾单独训练,教练组管理其上场时间,确认首发但体能打折风险存在;若非满状态瑞典进攻效率存疑(ESPN·Sports Mole 06-20)",
   "en": "Sweden striker Alexander Isak (Liverpool) spotted training alone this week; coaching staff managing his minutes after injury — still expected to start vs Netherlands but performance level may be impacted. (ESPN, Sports Mole — June 20)",
   "full": "瑞典头号前锋亚历山大·伊萨克（Alexander Isak，利物浦）在备战荷兰的训练营中被发现单独训练，教练组格雷厄姆·波特（Graham Potter）正在管理其上场时间（minute management），背景是一处未公开的轻伤在康复中。ESPN与Sports Mole（06-20）均确认伊萨克预计首发出战，但不排除视体能情况提前替换。伊萨克是瑞典最重要的进攻支柱，若体能打折将大幅削减瑞典正面冲击力。荷兰首轮2:2平日本（蒂姆伯赛前退出已price-in），科曼预计保持主力阵容：范戴克、加克波、马莱、赖尼德斯均无伤停报告。综合：伊萨克状态是本场最大变量，未满状态利好荷兰主胜。⚠️竞彩荷兰主胜赔率1.52，value=0.92<1.10，按纪律单关不出；评估让球/串关腿适配性。",
   "enFull": "Sweden's key striker Alexander Isak (Liverpool) was spotted training alone at the Swedish camp, with head coach Graham Potter managing his minutes due to an undisclosed minor injury. Both ESPN and Sports Mole (June 20) confirm he is expected to start vs Netherlands but could be substituted early depending on his physical condition. Isak is Sweden's offensive engine — if below full sharpness, Sweden's attacking threat is significantly reduced. Netherlands drew 2:2 with Japan in Game 1 (Timber's pre-tournament withdrawal already priced in); coach Koeman expected to name an unchanged XI with Van Dijk, Gakpo, Malen, and Gravenberch all fit. Net: Isak's injury management is the primary variable — even a partially-fit Isak still poses danger, but a 70-80% Isak tips the balance further toward the Dutch. ⚠️ Chinese竹 odds: Netherlands 1.52 (value=0.92 <1.10 threshold — single bet not justified by §3; evaluate as serial leg only).",
   "links": [
    {
     "name": "Sports Mole: Netherlands vs Sweden team news",
     "url": "https://www.sportsmole.co.uk/football/netherlands/world-cup/team-news/netherlands-vs-sweden-injury-suspension-list-predicted-xis_599531.html"
    },
    {
     "name": "ESPN: World Cup 2026 injury tracker",
     "url": "https://www.espn.com/soccer/story/_/id/48572979/2026-fifa-world-cup-injuries-tracker-which-stars-miss-latest-info"
    }
   ]
  },
  {
   "date": "06-20",
   "match": "德国 vs 科特迪瓦",
   "impact": "瓦伊禁行缺阵",
   "tone": "away",
   "text": "科特迪瓦前锋瓦伊(Elye Wahi)因在法国涉嫌假球调查未获准出行,确认缺席整届世界杯(Yahoo Sports·covers.com双源);利好德国主场(Yahoo Sports·Covers.com 06-20)",
   "en": "Ivory Coast striker Elye Wahi absent from entire World Cup: not granted permission to travel to Canada amid French match-fixing investigation. Amad Diallo (scored opening winner) expected to start. Boosts Germany's attacking advantage. (Yahoo Sports, Covers.com — June 20)",
   "full": "科特迪瓦重要前锋埃利耶·瓦伊（Elye Wahi，马赛）因陷入法国境内的假球调查（match-fixing investigation）而未获准前往加拿大参赛，确认缺席整届2026世界杯。Yahoo Sports与covers.com（06-20）双源确认。尽管如此，科特迪瓦在首轮1:0小胜厄瓜多尔时，替补出场的阿马德·迪亚洛（Amad Diallo，曼联）打进制胜球，主帅有望给他机会首发。德国方面：首轮7:1大胜库拉索，无重大伤停，完整阵容出战科特迪瓦。综合评估：瓦伊缺阵削弱科特迪瓦进攻选择，配合恩迪卡伤情，德国主场优势进一步强化。竞彩赔率/价值仍需主会话运行predict.py后确认是否过1.10闸。",
   "enFull": "Ivory Coast forward Elye Wahi (Marseille) has been barred from travelling to Canada due to an ongoing French match-fixing investigation, effectively ruling him out of the entire 2026 World Cup. Confirmed by Yahoo Sports and Covers.com (June 20). Despite the absence, Ivory Coast were efficient in Game 1, winning 1-0 vs Ecuador thanks to a second-half winner from substitute Amad Diallo (Man Utd), who is now expected to start. Germany: no reported injury concerns, full squad available after the 7-1 opening demolition of Curaçao. Net: Wahi's ban reduces Ivory Coast's attacking depth and variety; combined with the Ndicka fitness doubt, Germany's structural advantage grows. Verify value via predict.py before the 04:00 BJT kick-off.",
   "links": [
    {
     "name": "Yahoo Sports: Germany vs Ivory Coast preview",
     "url": "https://uk.sports.yahoo.com/news/germany-vs-ivory-coast-world-205313156.html"
    },
    {
     "name": "Covers.com: Germany vs Ivory Coast odds & picks",
     "url": "https://www.covers.com/world-cup/germany-vs-ivory-coast-prediction-picks-odds-saturday-6-20-2026"
    }
   ]
  },
  {
   "date": "06-20",
   "match": "德国 vs 科特迪瓦",
   "impact": "恩迪卡伤情存疑",
   "tone": "away",
   "text": "科特迪瓦中卫恩迪卡(Evan Ndicka,罗马)腿筋伤未愈,错过首轮对厄瓜多尔,出战德国仍存疑；阿马德·迪亚洛因首轮进球料获首发机会(Sports Mole·Yahoo Sports 06-20双源)",
   "en": "Ivory Coast CB Evan Ndicka (Roma) still doubt vs Germany due to hamstring injury that ruled him out of opener vs Ecuador. Amad Diallo expected to start after scoring the Game 1 winner. (Sports Mole, Yahoo Sports — June 20)",
   "full": "科特迪瓦主力中卫埃文·恩迪卡（Evan Ndicka，罗马）在首轮对阵厄瓜多尔时因腿筋伤（hamstring）缺席，目前出战德国仍属疑问。Sports Mole及Yahoo Sports（06-20赛前）双源确认其状态未定，主帅将根据赛前热身判断是否出战。替补中卫深度偏薄，若恩迪卡再次缺席，科特迪瓦后防对德国高压进攻的抵抗力将明显下降。阿马德·迪亚洛（Amad Diallo）因在首轮第83分钟打进制胜球，预计从首发位置出发；戈迪-福苏（Jean-Philippe Gbamin 已转让阵容）或其他中场补位。综合：恩迪卡伤情叠加瓦伊缺阵，科特迪瓦双线受损，德国取胜概率市场已高估，但赔率是否过闸需predict.py校准。",
   "enFull": "Evan Ndicka (Roma), Ivory Coast's key centre-back, was sidelined for the Group D opener vs Ecuador with a hamstring injury and remains a doubt for the Germany fixture. Sports Mole and Yahoo Sports (June 20) both list him as uncertain; the coaching staff will assess him in the pre-match warm-up. If Ndicka misses again, Ivory Coast's defensive solidity against Germany's clinical attack is significantly weakened — their backup CB cover is limited in quality. On the positive side, Amad Diallo scored the 83rd-minute winner in Game 1 and is expected to reward that performance with a start vs Germany. Combined impact with Wahi's absence (see related news): Ivory Coast are stretched on both attacking and defensive ends heading into a tough group-stage fixture against a Germany side that crushed Curaçao 7-1. Run predict.py before 04:00 BJT to confirm whether any market inefficiency exists.",
   "links": [
    {
     "name": "Sports Mole: Germany vs Ivory Coast team news",
     "url": "https://www.sportsmole.co.uk/football/germany/injury-news/team-news/germany-vs-ivory-coast-injury-suspension-list-predicted-xis_599492.html"
    },
    {
     "name": "Yahoo Sports: Germany vs Ivory Coast preview",
     "url": "https://uk.sports.yahoo.com/news/germany-vs-ivory-coast-world-205313156.html"
    }
   ]
  },
  {
   "date": "06-20",
   "match": "突尼斯 vs 日本",
   "impact": "久保左膝伤缺",
   "tone": "away",
   "text": "久保建英(Real Sociedad)左膝MRI确认伤缺对阵突尼斯；日本媒体称出战「几乎无望」；已离开训练场专注治疗(Nippon.com·Sports Mole·OneFootball 06-19/20三源)",
   "en": "Kubo (Real Sociedad) ruled out vs Tunisia: MRI confirms left knee injury from 75' clash with Dumfries vs Netherlands. Japanese media report chances 'virtually hopeless.' Not at training ground, undergoing treatment. (Nippon.com, Sports Mole, OneFootball Jun 19-20)",
   "full": "日本头号创造力球员久保建英（Kubo Takefusa，Real Sociedad）在对荷兰首轮第75分钟与Dumfries膝对膝碰撞后受伤离场，MRI扫描确认左膝伤势。日本媒体多家一致报道：出战对突尼斯第二场「几乎无望」；日本足协确认久保缺席第二轮、已离开训练场专注治疗，未提供时间线。Nippon.com、Sports Mole、OneFootball（06-19/20）三源独立确认。影响评估：Polymarket已将日本定价为63.2%大热门（突尼斯13.4%/平23.4%），市场定价大概率已吸收久保缺席（伤情06-18公开）。⚠️建议主会话在赛前6-12小时用predict.py核算周六036竞彩价值，若日本赔率被低估则评估是否过1.10闸。",
   "enFull": "Japan's key creative force Takefusa Kubo (Real Sociedad) suffered a left knee injury in the 75th minute vs Netherlands — knee-to-knee collision with Denzel Dumfries — and left the stadium in a wheelchair. MRI confirmed the injury. Multiple Japanese media outlets report his chances of playing vs Tunisia are 'virtually hopeless.' Japan FA confirmed Kubo will not feature in Matchday 2; he is focusing on treatment at his accommodation with no recovery timeline given. Three independent sources: Nippon.com, Sports Mole, OneFootball (Jun 19-20). Market impact: Polymarket already prices Japan at 63.2% favourite (Tunisia 13.4%, draw 23.4%) — injury was public since Jun 18, market has very likely absorbed it. ⚠️ Recommend running predict.py for 周六036 6-12 hours before kick-off to check if Chinese bookmaker odds still represent value vs 63.2% implied.",
   "links": [
    {
     "name": "Nippon.com: Kubo to miss Tunisia match",
     "url": "https://www.nippon.com/en/news/yjj2026061900204/"
    },
    {
     "name": "Sports Mole: Japan lineup vs Tunisia",
     "url": "https://www.sportsmole.co.uk/football/japan/world-cup-2026/predicted-lineups/kubo-injury-blow-sugawara-doan-decisions-predicted-japan-lineup-vs-tunisia_599496.html"
    }
   ]
  }
 ],
 "slip": {
  "title": "6月21日 · 周六整轮 · 大胆版 88 元(已纠正厄瓜多尔·赛前持续更新)",
  "status": "**已纠正:厄瓜多尔不是没开盘——库拉索太弱,竞彩只开让球盘(胜平负不开),让-2(净胜3+)@1.85一直可买。** 诚实关键:厄瓜多尔赢87%(拿得准)但不可买,能买的让-2只约52%(会不会赢3球·深让镜像区·模型≈市场无edge)——所以它是高赔彩票腿、不是拿得准的大核心,没给它压大注、只放进3串1拉上限(到+79)。结构:德28+日20核心·2串1 24稳·3串1德×日×厄让-2 16。开赛06-21 08:00北京。地板80安全(最差池→240)。",
  "detail": "周六预研:四场全是favorite。核心=德国67%+日本63.6%(置信最高的两个开盘场);串关=2串1德×日稳量级、3串1加荷兰搏上限;厄瓜多尔87%最强但竞彩未开盘(08:00),开盘后并入(很可能让球彩票腿)。赛前重跑predict.py+补伤停定稿。",
  "items": [
   {
    "num": "周六034",
    "pick": "德国胜(主胜)",
    "tier": "核心",
    "match": "德国 vs 科特迪瓦",
    "stake": 28,
    "odds": 1.36,
    "value": 0.91,
    "ev": -1.4
   },
   {
    "num": "周六036",
    "pick": "日本胜(客胜)",
    "tier": "核心",
    "match": "突尼斯 vs 日本",
    "stake": 20,
    "odds": 1.39,
    "value": 0.88,
    "ev": -1.86
   },
   {
    "num": "034×036",
    "pick": "2串1 德国胜×日本胜",
    "tier": "稳串",
    "match": "德×日",
    "stake": 24,
    "odds": 1.89,
    "value": 0.81,
    "ev": -2.32
   },
   {
    "num": "034×036×035",
    "pick": "3串1 德×日×厄让-2(彩票)",
    "tier": "彩票",
    "match": "德×日×厄(净胜3+)",
    "stake": 16,
    "odds": 3.5,
    "value": 0.79,
    "ev": -3.4
   }
  ],
  "summary": {
   "stake": 88,
   "evLow": -88,
   "evHigh": 79.2,
   "winProb": 43,
   "best": {
    "label": "四注全中",
    "pnl": 79.2
   },
   "worst": {
    "label": "全挂",
    "pnl": -88
   },
   "keyScenarios": [
    {
     "label": "德+日都赢(两核心+2串1)",
     "pnl": 23.2
    }
   ]
  },
  "scenarios": [
   {
    "label": "全中:德国赢 + 日本赢 + 厄瓜多尔赢3球+",
    "hit": "中4注",
    "prob": 22,
    "win": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "label": "德国赢 + 日本赢(厄瓜多尔没赢够3球)",
    "hit": "中3注",
    "prob": 21,
    "win": [
     0,
     1,
     2
    ]
   },
   {
    "label": "只赢德国(日本没赢)",
    "hit": "中1注",
    "prob": 24,
    "win": [
     0
    ]
   },
   {
    "label": "只赢日本(德国没赢)",
    "hit": "中1注",
    "prob": 21,
    "win": [
     1
    ]
   },
   {
    "label": "德国、日本都没赢(全输)",
    "hit": "中0注",
    "prob": 12,
    "win": []
   }
  ],
  "copyText": "周六 6/21 这一轮,先买这 88 元:\\n① 德国 vs 科特迪瓦 → 买 德国赢,28 元\\n② 突尼斯 vs 日本 → 买 日本赢,20 元\\n③ 德国赢 + 日本赢 串一起买,24 元\\n④ 德国赢 + 日本赢 + 厄瓜多尔赢3球以上 串一起买,16 元\\n\\n谢谢!",
  "reviewNote": "周六预研建议(赛前定稿前持续更新);厄瓜多尔开盘后并入重构。"
 },
 "calibration": {
  "stats": {
   "direction": "3/5",
   "scoreManual": "1/4",
   "scoreModel": "0/4"
  },
  "learning": {
   "weights": {
    "A": 72.8,
    "B": 10.6,
    "C": 8.7,
    "D": 7.9
   },
   "brier": {
    "A": 0.6,
    "B": 0.653,
    "C": 0.629,
    "D": 0.663,
    "ens": 0.629
   },
   "note": "20场学习后权重 A72.8/B10.6/C8.7/D7.9。市场去水模型(A)在大样本下显著领先，Elo(B)权重从早期26%降至11%（开幕轮大热被逼平后受重惩仍未完全恢复）。集成Brier 0.629 vs 随机基准0.667 = 有效超越。λ校正已生效(预期53.0球 vs 实际62球,比率1.17)。最硬的真相不变：**边在纪律和情报，不在原始模型方向**——模型权重收敛到市场说明市场很有效；alpha来自「市场未price-in的硬信息差」（如澳土），不来自「模型概率差」。"
  },
  "records": [
   {
    "date": "06-13",
    "match": "美国 vs 巴拉圭",
    "actual": "4:1",
    "briers": {
     "A": 0.384,
     "B": 0.311,
     "C": 0.399,
     "ens": 0.374
    },
    "manual": "1:0",
    "model": "1:0",
    "dirHit": true,
    "manualHit": false,
    "modelHit": false,
    "note": "方向命中(集成53.2%美国胜,实际4:1大胜);比分偏守1:0与实际大比分差距明显,进球环境再次高估。博巴迪利亚7'乌龙+巴洛贡31'/45+5'双响奠定半场3:0,毛里西奥73'扳回一城,弗里曼90+8'锁定终场4:1。美国Elo+16.4→1909.1。B-Elo(0.311)本场最优,D国际共识(0.429)表现最差。"
   },
   {
    "date": "06-13",
    "match": "加拿大 vs 波黑",
    "actual": "1:1",
    "briers": {
     "A": 0.871,
     "B": 1.153,
     "C": 0.831,
     "ens": 0.928
    },
    "manual": "1:0",
    "model": "1:0",
    "dirHit": false,
    "manualHit": false,
    "modelHit": false,
    "note": "方向误判:集成61.4%主胜,实际平局。卢基奇21分钟角球先拔(定位球风险标记已有但未入模),替补拉林78分钟扳平。Elo激进(72.4%主胜)受到最重惩罚,Brier=1.153;B权重从38.1%锐降至23.6%。教训:①东道主主场溢价被高估,模型应引入'首场谨慎因子';②0:0比分票终因1:1落空,但定价逻辑(10.7%→@9.50)赛前仍是正期望;③波黑防守组织超预期,提示Poisson λ客队设定偏高。"
   },
   {
    "date": "06-12",
    "match": "韩国 vs 捷克",
    "actual": "2:1",
    "briers": {
     "A": 0.59,
     "B": 0.487,
     "C": 0.491,
     "ens": 0.52
    },
    "manual": "1:1",
    "model": "1:0",
    "dirHit": true,
    "manualHit": false,
    "modelHit": false,
    "note": "方向再中(韩胜=模型最高项41.1%)但复盘有三条硬教训:①仓位结构错——为'合成不败'把57%仓位(40/70)放在价值0.79/0.49的不及格票上,该结构赛前期望-15%,而唯一及格票韩胜(价值1.02)只配了30;降方差的正确手段是降仓位,不是买安慰票。②情报未量化——明知捷克定位球占22球之11,却没上调λ客,克雷伊奇定位球先入正中盲区;此后强情报必须转为tilt参数。③小球先验被打脸(预期2.05球实际3球),已建进球环境跟踪。三条已分别固化为:价值闸≥0.85无例外、情报必须进参数、λ全局校正(≥6场生效)。"
   },
   {
    "date": "06-12",
    "match": "墨西哥 vs 南非",
    "actual": "2:0",
    "briers": {
     "A": 0.184,
     "B": 0.135,
     "C": 0.192,
     "ens": 0.169
    },
    "manual": "2:0",
    "model": "1:0",
    "dirHit": true,
    "manualHit": true,
    "modelHit": false,
    "note": "方向全对:主胜(67%)/小球/零封/南非0进球全部兑现。手工首选2:0命中,模型首选1:0飞了,两者赛前仅差1.8pp,人脑赢机器半子。"
   }
  ]
 },
 "training": {
  "sampleCount": 32,
  "threshold": 50,
  "pct": 64,
  "ensBrier": 0.559,
  "ensBrierMedian": 0.398,
  "marketBase": 0.5506,
  "marketBaseLabel": "市场去水(子模型A)",
  "beatsMarket": false,
  "beatRandom": 19,
  "dirHit": 18,
  "weightsFirst": {
   "A": 33,
   "B": 34,
   "C": 33
  },
  "weightsLast": {
   "A": 51,
   "B": 21,
   "C": 8,
   "D": 20
  },
  "dots": [
   {
    "num": "周四001",
    "m": "墨西哥·2:0",
    "b": 0.17,
    "win": true
   },
   {
    "num": "周四002",
    "m": "韩国·2:1",
    "b": 0.52,
    "win": true
   },
   {
    "num": "周五003",
    "m": "加拿大·1:1",
    "b": 0.93,
    "win": false
   },
   {
    "num": "周五004",
    "m": "美国·4:1",
    "b": 0.37,
    "win": true
   },
   {
    "num": "周六005",
    "m": "卡塔尔·1:1",
    "b": 1.33,
    "win": false
   },
   {
    "num": "周六006",
    "m": "巴西·1:1",
    "b": 0.96,
    "win": false
   },
   {
    "num": "周六007",
    "m": "海地·0:1",
    "b": 0.17,
    "win": true
   },
   {
    "num": "周六008",
    "m": "澳大利亚·2:0",
    "b": 0.93,
    "win": false
   },
   {
    "num": "周日009",
    "m": "德国·7:1",
    "b": 0.02,
    "win": true
   },
   {
    "num": "周日010",
    "m": "荷兰·2:2",
    "b": 0.84,
    "win": false
   },
   {
    "num": "周日011",
    "m": "科特迪瓦·1:0",
    "b": 0.76,
    "win": false
   },
   {
    "num": "周日012",
    "m": "瑞典·5:1",
    "b": 0.33,
    "win": true
   },
   {
    "num": "周一013",
    "m": "西班牙·0:0",
    "b": 1.67,
    "win": false
   },
   {
    "num": "周一014",
    "m": "比利时·1:1",
    "b": 1.06,
    "win": false
   },
   {
    "num": "周一015",
    "m": "沙特·1:1",
    "b": 1.1,
    "win": false
   },
   {
    "num": "周一016",
    "m": "伊朗·2:2",
    "b": 0.93,
    "win": false
   },
   {
    "num": "周二017",
    "m": "法国·3:1",
    "b": 0.16,
    "win": true
   },
   {
    "num": "周二018",
    "m": "伊拉克·1:4",
    "b": 0.07,
    "win": true
   },
   {
    "num": "周二019",
    "m": "阿根廷·3:0",
    "b": 0.14,
    "win": true
   },
   {
    "num": "周二020",
    "m": "奥地利·3:1",
    "b": 0.12,
    "win": true
   },
   {
    "num": "周三021",
    "m": "葡萄牙·1:1",
    "b": 1.34,
    "win": false
   },
   {
    "num": "周三022",
    "m": "英格兰·4:2",
    "b": 0.26,
    "win": true
   },
   {
    "num": "周三023",
    "m": "加纳·1:0",
    "b": 0.47,
    "win": true
   },
   {
    "num": "周三024",
    "m": "乌兹别克·1:3",
    "b": 0.12,
    "win": true
   },
   {
    "num": "周四025",
    "m": "捷克·1:1",
    "b": 1.02,
    "win": false
   },
   {
    "num": "周四026",
    "m": "瑞士·4:1",
    "b": 0.22,
    "win": true
   },
   {
    "num": "周四027",
    "m": "加拿大·6:0",
    "b": 0.08,
    "win": true
   },
   {
    "num": "周四028",
    "m": "墨西哥·1:0",
    "b": 0.42,
    "win": true
   },
   {
    "num": "周五029",
    "m": "美国·2:0",
    "b": 0.22,
    "win": true
   },
   {
    "num": "周五030",
    "m": "苏格兰·0:1",
    "b": 0.26,
    "win": true
   },
   {
    "num": "周五031",
    "m": "巴西·3:0",
    "b": 0.02,
    "win": true
   },
   {
    "num": "周五032",
    "m": "土耳其·0:1",
    "b": 0.88,
    "win": false
   }
  ],
  "headline": "已喂 32 场预测 · 集成 Brier 0.559 vs 市场去水 0.5506（仍未跑赢）· 只比随机0.667好一点（地板线,非alpha）",
  "lesson": "**28场复盘硬结论(诚实版):** 集成 Brier 0.559 **仍没跑赢市场去水(0.5506)**——模型暂无可证明的边。它只比'瞎猜'(随机0.667)好一点,那是地板不是本事。平局占36%(异常高)模型从不押平→10个自动判错卡死命中率;回测所有补救都≤57%,平局事前分不出来。**边在纪律和情报、不在模型方向**(可迁股市:高效市场里纯模型必收敛到市场)。⚠️别把'跑赢随机'当 alpha——真市场CLV还在攒(竞彩收盘价未留存),没有真CLV前'有没有边'仍是自说自话。",
  "graduation": "完成训练 = 喂满50场 + Brier稳定且**真CLV转正** + 权重收敛。当前 32/50,权重已收敛(A市场去水重仓),但**Brier尚未跑赢市场、CLV待积累**——离'有边'还差关键一步:留存赛前收盘价算真CLV。"
 }
};
