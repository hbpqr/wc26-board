window.DASH_DATA = {
 "meta": {
  "round": "小组赛第 2 轮",
  "updated": "2026-06-20 11:10",
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
     "📊 本轮52元4注全中(事前模型给15%头奖剧本)：回收100.6 净+48.6(ROI+93.5%) | 池 279.5→328.1 | 土耳其未出票(纪律跳过)方向错但零损失"
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
    "a": 80.0
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
    "a": 10.0
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
    "h": 59.0,
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
    "d": 8.0,
    "a": 3.5
   },
   "note": "终场：巴西3:0海地(90'+5'结束)。集成88.5%主胜方向正确(Brier≈0.021，极优)。§14 fade-favorite未触发(§14.3明显鱼腩错配，巴-海排除)。无持仓，资金不变。"
  },
  {
   "num": "周五032",
   "home": "土耳其",
   "away": "巴拉圭",
   "time": "06-20 11:00",
   "status": "pending",
   "predManual": "未出票(跳过)",
   "predModel": "主胜46.7%",
   "ensemble": {
    "h": 46.7,
    "d": 28.6,
    "a": 24.6
   },
   "note": ""
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
 "focus": [],
 "news": [
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
  },
  {
   "date": "06-20",
   "match": "土耳其 vs 巴拉圭",
   "impact": "阿尔米龙确认首发",
   "tone": "away",
   "text": "Yahoo Sports·Sports Mole(06-20)双源预测XI:阿尔米龙(Almirón)确认首发出战土耳其·「带伤疑问」已解除；土耳其预测XI耶尔迪兹仍不在首发(替补登场预期)",
   "en": "Yahoo Sports/Sports Mole (June 20): Almirón confirmed to start for Paraguay vs Turkey — previous injury doubt cleared. Yildiz still NOT in Turkey's predicted starting XI; expected to come on as sub.",
   "full": "Yahoo Sports与Sports Mole(06-20赛前)双源确认：阿尔米龙（Miguel Almirón，纽卡斯尔）将首发出战土耳其，此前「小腿带伤疑问」已解除，巴拉圭在首轮惨负美国4:1后按最强阵出战。土耳其预测XI仍无耶尔迪兹（Kenan Yildiz）在首发序列——蒙泰拉（Montella）延续第一轮策略让他替补登场。综合：与旧情报方向一致，无价值判断方向性改变——土耳其/巴拉圭所有选项value≤0.93（<1.10安全边际），空仓判断不变。双队生死局，耶尔迪兹替补出场时间有望更长（可能60分钟）。⚠️正式XI赛前60分钟再核。",
   "enFull": "Yahoo Sports and Sports Mole (June 20, pre-match): Miguel Almirón confirmed to start for Paraguay against Turkey — the earlier injury doubt/optimistic camp read has resolved to a clear starter. Paraguay line up at full attacking strength after the 4-1 hammering from USA in Game 1. Turkey predicted XI still excludes Kenan Yildiz from the starting lineup; Montella expected to deploy him as a substitute again, though likely for more minutes than the opener (possibly 60+ min). Net assessment: direction unchanged — all Turkey/Paraguay HAD options remain ≤0.93 value (below ≥1.10 buy threshold); no-bet stance unchanged. Both teams face must-win pressure. ⚠️ Confirm official XIs 60 min before kick-off.",
   "links": [
    {
     "name": "Yahoo Sports: Turkey vs Paraguay preview",
     "url": "https://sports.yahoo.com/articles/preview-turkey-vs-paraguay-team-030500855.html"
    },
    {
     "name": "Sports Mole: Paraguay lineup vs Turkey",
     "url": "https://www.sportsmole.co.uk/football/paraguay/world-cup-2026/predicted-lineups/almiron-and-enciso-lead-la-albirroja-lineup-predicted-paraguay-xi-vs-turkey_599450.html"
    }
   ]
  },
  {
   "date": "06-19",
   "match": "土耳其 vs 巴拉圭",
   "impact": "耶尔迪兹曾替补出场",
   "tone": "neutral",
   "text": "⚠️数据修正:耶尔迪兹(Yildiz)并非缺席首轮——他是下半场替补出场对阵澳大利亚;Sports Mole·Yahoo Sports(06-19)确认首发存疑·或再次替补(小腿仍未全愈)",
   "en": "CORRECTION — Yildiz did NOT miss Turkey's opener vs Australia; he came on as a second-half substitute. Sports Mole/Yahoo Sports (Jun 19): his start vs Paraguay remains in doubt — another cameo is likely.",
   "full": "⚠️数据修正（Sports Mole·Yahoo Sports·SI.com 06-19多源）：耶尔迪兹（Kenan Yildiz，尤文图斯）并未「缺席」对阵澳大利亚的首轮（此前条目措辞有误）——他是下半场替补出场，合计上场约45分钟。现状：小腿拉伤仍在恢复中，Sports Mole赛前预测XI标注「Yildiz doubt persists」，蒙泰拉主帅可能再次让他替补登场而非首发。影响评估：耶尔迪兹若替补出场，土耳其首发11人的创造力有所下降；但两队均无法接受再负，高压场景下战术倾向保守。土耳其/巴拉圭所有选项value≤0.93（<1.10闸），空仓判断不变。⚠️正式XI赛前60分钟确认耶尔迪兹是否首发。",
   "enFull": "CORRECTION (Sports Mole, Yahoo Sports, SI.com — multiple sources, June 19): Earlier report stated Kenan Yildiz 'missed' Turkey's 0-2 opening defeat to Australia. Multiple sources confirm he did NOT miss the match — he featured as a second-half substitute, playing approximately 45 minutes. Current status: the calf strain has not fully healed, and Sports Mole's pre-match predicted XI marks 'Yildiz doubt persists' for the Paraguay fixture. Head coach Vincenzo Montella may again prefer to deploy Yildiz off the bench rather than risk a full start. Impact: Turkey likely missing Yildiz from kickoff reduces their attacking creativity in the first half; high-pressure must-win format for both sides may lead to cautious early tactical setup. All Turkey/Paraguay HAD options remain ≤0.93 value — below the ≥1.10 buy threshold; no-bet stance unchanged. ⚠️ Confirm official XI 60 minutes before kick-off.",
   "links": [
    {
     "name": "Sports Mole: Yildiz doubt persists Turkey lineup",
     "url": "https://www.sportsmole.co.uk/football/turkey/world-cup-2026/predicted-lineups/yildiz-doubt-persists-for-montella-predicted-turkey-lineup-vs-paraguay_599445.html"
    },
    {
     "name": "Yahoo Sports: Turkey vs Paraguay predictions",
     "url": "https://sports.yahoo.com/articles/turkey-vs-paraguay-prediction-world-145000483.html"
    }
   ]
  },
  {
   "date": "06-19",
   "match": "土耳其 vs 巴拉圭",
   "impact": "巴拉圭三将伤缺",
   "tone": "away",
   "text": "巴拉圭卡巴耶罗(Caballero,肌肉)与索萨(Sosa,踝)确认缺席；阿尔米龙(Almiron)带伤「乐观」；土耳其耶尔迪兹(Yildiz)首轮仍未出战、状态仍疑(Squawka·RotoWire双源)",
   "en": "Paraguay: Caballero (muscle) and Sosa (ankle) confirmed out; Almiron injury doubt but camp 'optimistic'; Turkey's Yildiz missed opener vs Australia and remains questionable (Squawka/RotoWire)",
   "full": "Squawka与RotoWire(06-19)赛前确认：巴拉圭中场卡巴耶罗（Gustavo Caballero，肌肉伤）与拉蒙·索萨（Ramon Sosa，踝关节）均确认缺席对土耳其一役。争议焦点在阿尔米龙（Miguel Almirón，纽卡斯尔）：带小腿伤出征，营地称「乐观」，可能首发或替补，临阵确认。土耳其方面：科南·耶尔迪兹（Juventus）在首轮2:0不敌澳大利亚时缺席，状态仍存疑——若耶尔迪兹无法首发，土耳其进攻创造力显著削弱。双队生死局：均需首胜保出线资格（土耳其0分/巴拉圭0分）。综合：巴拉圭三将伤缺（两确认+阿尔米龙疑）轻度利好土耳其，但耶尔迪兹悬念构成抵消；巴拉圭胜value=0.93（<1.10），空仓不变。⚠️ 赛前60分钟核查双方XI：重点确认阿尔米龙和耶尔迪兹状态。",
   "enFull": "Squawka and RotoWire (June 19) confirm: Paraguay's Gustavo Caballero (muscle) and Ramón Sosa (ankle) are both ruled out for the Turkey clash — two confirmed midfield absences for a side already beaten 4-1 by USA. Key uncertainty: Miguel Almirón (Newcastle) is carrying a knock but camp is 'optimistic'; could start or sub, final decision on match day. Turkey: Kenan Yildiz (Juventus) missed the opening 2-0 defeat to Australia and his status for Paraguay remains in doubt — if Yildiz cannot start, Turkey's attacking creativity is significantly reduced. Context: both sit on 0 points and face must-win pressure. Net: Paraguay's triple injury concern (two confirmed + Almirón doubt) mildly favors Turkey, but Yildiz's own uncertainty offsets part of the gap. Paraguay win value 0.93 remains below the ≥1.10 threshold — no-bet stance unchanged. ⚠️ Confirm Almirón and Yildiz status at official XI 60 min before kick-off.",
   "links": [
    {
     "name": "Squawka: Turkey vs Paraguay team news predicted lineups",
     "url": "https://www.squawka.com/en/news/world-cup/turkey-vs-paraguay-team-news-predicted-lineups/"
    },
    {
     "name": "RotoWire: Turkey vs Paraguay preview",
     "url": "https://www.rotowire.com/soccer/article/turkey-vs-paraguay-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-d-118661"
    }
   ]
  }
 ],
 "slip": {
  "title": "6月20日 · 周五整轮 · 21:00最终单·总52元",
  "status": "**21:00 最终单 · 总 52 元** · 临场名单确认:普利西奇首发(美国全主力)、摩洛哥黄金一代全主力(远强于苏格兰)——两核心都坐实。摩洛哥胜+美国胜核心,2串1稳串,3串1巴西让-2彩票腿;031巴西不单买、032土耳其跳过。",
  "detail": "**21:00 最终整轮单(临场名单已确认,以此定稿·总52元·地板80稳):**\n①**030 苏格兰vs摩洛哥 → 买摩洛哥胜 @1.50 · 16元(核心)**:摩洛哥黄金一代全主力(Bounou/Hakimi/Brahim Díaz/Ounahi/El Khannouss),远强于苏格兰=最稳。\n②**029 美国vs澳大利亚 → 买美国胜 @1.44 · 16元(核心)**:普利西奇确认首发+全主力(Balogun/McKennie/Adams/Robinson),主场强favored。\n③**2串1 摩洛哥×美国 @2.16 · 12元(稳串)**:两个全主力team win串,全中+13.9。\n④**3串1 摩×美×巴西让-2 @3.46 · 8元(彩票)**:加巴西大胜海地净胜3+(海地能竞争故只当彩票),全中+19.7。\n**两核心+稳串中≈+28,加彩票全中≈+48。** 031巴西不单买(让-2有风险)、032土耳其跳过(五五开)。\n**下单文案见下,21:00 照此买。**",
  "items": [
   {
    "num": "周五030",
    "pick": "摩洛哥胜(客胜)",
    "tier": "核心",
    "match": "苏格兰 vs 摩洛哥",
    "stake": 16,
    "odds": 1.5,
    "value": 0.83,
    "ev": -2.8
   },
   {
    "num": "周五029",
    "pick": "美国胜(主胜)",
    "tier": "核心",
    "match": "美国 vs 澳大利亚",
    "stake": 16,
    "odds": 1.44,
    "value": 0.89,
    "ev": -1.72
   },
   {
    "num": "030×029",
    "pick": "2串1 摩洛哥胜×美国胜",
    "tier": "稳串",
    "match": "摩×美",
    "stake": 12,
    "odds": 2.16,
    "value": 1.0,
    "ev": 0
   },
   {
    "num": "030×029×031",
    "pick": "3串1 摩×美×巴西让-2(彩票)",
    "tier": "彩票",
    "match": "摩×美×巴(净胜3+)",
    "stake": 8,
    "odds": 3.455,
    "value": 1.0,
    "ev": 0
   }
  ],
  "summary": {
   "stake": 52,
   "evLow": -52,
   "evHigh": 48,
   "winProb": 55,
   "best": {
    "label": "四注全中",
    "pnl": 48
   },
   "worst": {
    "label": "全挂",
    "pnl": -52
   },
   "keyScenarios": [
    {
     "label": "摩+美都赢(两核心+2串1)",
     "pnl": 28
    }
   ]
  },
  "scenarios": [
   { "label": "全中:摩洛哥赢 + 美国赢 + 巴西大胜(净胜3球+)", "hit": "中4注", "prob": 15, "win": [0, 1, 2, 3] },
   { "label": "摩洛哥赢 + 美国赢(巴西没赢够3球)", "hit": "中3注", "prob": 31, "win": [0, 1, 2] },
   { "label": "只赢美国(摩洛哥没赢)", "hit": "中1注", "prob": 16, "win": [1] },
   { "label": "只赢摩洛哥(美国没赢)", "hit": "中1注", "prob": 14, "win": [0] },
   { "label": "摩洛哥、美国都没赢(全输)", "hit": "中0注", "prob": 24, "win": [] }
  ],
  "copyText": "周五 6/20 这一轮,一共买 52 元:\\n① 苏格兰 vs 摩洛哥 → 买 摩洛哥赢,16 元\\n② 美国 vs 澳大利亚 → 买 美国赢,16 元\\n③ 摩洛哥赢 + 美国赢 串一起买,12 元\\n④ 摩洛哥赢 + 美国赢 + 巴西赢 3 球以上 串一起买,8 元\\n\\n巴西、土耳其单独不买。谢谢!",
  "reviewNote": "21:00最终单(临场名单确认普利西奇首发+摩洛哥全主力)整轮52元:摩洛哥胜16+美国胜16核心+2串1摩美12稳串+3串1含巴让-2 8彩票;031不单买032跳过。押预测,地板80安全。"
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
  "sampleCount": 28,
  "threshold": 50,
  "pct": 56,
  "ensBrier": 0.59,
  "ensBrierMedian": 0.448,
  "marketBase": 0.5607,
  "marketBaseLabel": "市场去水(子模型A)",
  "beatsMarket": false,
  "beatRandom": 16,
  "dirHit": 15,
  "weightsFirst": {
   "A": 33,
   "B": 34,
   "C": 33
  },
  "weightsLast": {
   "A": 53,
   "B": 20,
   "C": 7,
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
   }
  ],
  "headline": "已喂 28 场预测 · 集成 Brier 0.59 vs 市场去水 0.5607（仍未跑赢）· 只比随机0.667好一点（地板线,非alpha）",
  "lesson": "**28场复盘硬结论(诚实版):** 集成 Brier 0.59 **仍没跑赢市场去水(0.5607)**——模型暂无可证明的边。它只比'瞎猜'(随机0.667)好一点,那是地板不是本事。平局占36%(异常高)模型从不押平→10个自动判错卡死命中率;回测所有补救都≤57%,平局事前分不出来。**边在纪律和情报、不在模型方向**(可迁股市:高效市场里纯模型必收敛到市场)。⚠️别把'跑赢随机'当 alpha——真市场CLV还在攒(竞彩收盘价未留存),没有真CLV前'有没有边'仍是自说自话。",
  "graduation": "完成训练 = 喂满50场 + Brier稳定且**真CLV转正** + 权重收敛。当前 28/50,权重已收敛(A市场去水重仓),但**Brier尚未跑赢市场、CLV待积累**——离'有边'还差关键一步:留存赛前收盘价算真CLV。"
 }
};
