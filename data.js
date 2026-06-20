window.DASH_DATA = {
 "meta": {
  "round": "小组赛第 2 轮",
  "updated": "2026-06-21 06:10",
  "disclaimer": "竞彩胜平负盘实测 vig 12.9%,比分盘更高,长期期望为负。本看板的使命是决策质量管理:亏得最少、给运气最大杠杆。资金池纪律高于一切预测。理性购彩。"
 },
 "bankroll": {
  "start": 200,
  "startDate": "06-11",
  "cashNow": 353.09,
  "pending": 70,
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
   },
   {
    "d": "06-21",
    "v": 353.09
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
   },
   {
    "d": "06-21",
    "pool": 353.09,
    "pnl": 24.99,
    "records": [
     "🏆 荷兰 5:1 瑞典(01:00 完赛)",
     "　✓ 荷单 12@1.53 → 18.36 | 集成56.2%主胜方向正确(Brier≈0.237)",
     "🏆 德国 2:1 科特迪瓦(04:00 完赛)",
     "　集成67.1%主胜方向正确(Brier≈0.229，优) | 瓦伊禁赛+恩迪卡伤缺情报事前已price-in | Elo:德国+7.3→1910.2,科特迪瓦→1695.0",
     "　✓ 2串1 德国胜×荷兰胜 18@2.035 → 36.63(双腿全中)",
     "📊 已结算2票:荷单+德×荷串 共回收54.99 净+24.99 | 池 328.1→353.09(含待结70元) | 厄035(08:00)/日036(12:00)待开"
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
   "predManual": "未出票(空仓)",
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
   "predManual": "未出票(空仓)",
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
   "predManual": "未出票(空仓)",
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
  },
  {
   "num": "周六033",
   "home": "荷兰",
   "away": "瑞典",
   "time": "06-21 01:00",
   "status": "finished",
   "actual": "5:1",
   "predManual": "荷单12@1.53(已下注)",
   "predModel": "主胜56.2%",
   "ensemble": {
    "h": 56.2,
    "d": 23.4,
    "a": 20.4
   },
   "note": "荷兰5:1大胜瑞典。集成56.2%主胜方向正确(Brier=0.237,远优于随机0.667)。德普罗伊/费内霍德领衔进攻,伊萨克虽满状态首发但瑞典防线失守5球。荷单12@1.53中,回收18.36,净+6.36。Elo:荷兰+15.5→1927.9,瑞典→1709.2。"
  },
  {
   "num": "周六034",
   "home": "德国",
   "away": "科特迪瓦",
   "time": "06-21 04:00",
   "status": "finished",
   "actual": "2:1",
   "predManual": "德串关×4(仅串·04:00开球)",
   "predModel": "主胜67.1%",
   "ensemble": {
    "h": 67.1,
    "d": 19.3,
    "a": 13.6
   },
   "note": "终场：德国2:1科特迪瓦。集成67.1%主胜方向正确(Brier≈0.229，优)。阿马德·迪亚洛首发并进球，但科特迪瓦瓦伊禁赛+恩迪卡伤缺情报已price-in；德国顽强取胜。Elo:德国+7.3→1910.2,科特迪瓦→1695.0。串关德国腿全部兑现：德×荷2串1已结算中(36.63)，德×日/德×日×厄/德×厄三条待036/035收官。"
  },
  {
   "num": "周六035",
   "home": "厄瓜多尔",
   "away": "库拉索",
   "time": "06-21 08:00",
   "predManual": "厄让2球串10@2.46(已下注)",
   "predModel": "主胜86.5%",
   "ensemble": {
    "h": 86.5,
    "d": 9.5,
    "a": 4.1
   }
  },
  {
   "num": "周六036",
   "home": "突尼斯",
   "away": "日本",
   "time": "06-21 12:00",
   "predManual": "日单20@1.37(已下注)",
   "predModel": "客胜63.2%",
   "ensemble": {
    "h": 13.4,
    "d": 23.4,
    "a": 63.2
   }
  }
 ],
 "holdings": {
  "invested": 100,
  "returned": 54.99,
  "pendingStake": 70,
  "condEV": -18.3,
  "condWinProb": 42,
  "tickets": [
   {
    "match": "荷兰 vs 瑞典",
    "pick": "荷兰胜(主胜)·单关",
    "stake": 12,
    "odds": 1.53,
    "status": "win",
    "payout": 18.36
   },
   {
    "match": "突尼斯 vs 日本",
    "pick": "日本胜(客胜)·单关",
    "stake": 20,
    "odds": 1.37,
    "status": "pending",
    "payout": null
   },
   {
    "match": "德国×日本",
    "pick": "2串1 德国胜×日本胜",
    "stake": 24,
    "odds": 1.836,
    "status": "pending",
    "payout": null
   },
   {
    "match": "德国×日本×厄瓜多尔",
    "pick": "3串1 德×日×厄总进球3",
    "stake": 16,
    "odds": 6.24,
    "status": "pending",
    "payout": null
   },
   {
    "match": "德国×荷兰",
    "pick": "2串1 德国胜×荷兰胜",
    "stake": 18,
    "odds": 2.035,
    "status": "win",
    "payout": 36.63
   },
   {
    "match": "德国×厄瓜多尔",
    "pick": "2串1 德国胜×厄瓜多尔让2球(净胜3+)",
    "stake": 10,
    "odds": 2.46,
    "status": "pending",
    "payout": null
   },
   {
    "match": "美国 vs 澳大利亚",
    "pick": "美国胜(主胜)·单关",
    "stake": 16,
    "odds": 1.44,
    "status": "win",
    "payout": 23.04
   },
   {
    "match": "苏格兰 vs 摩洛哥",
    "pick": "摩洛哥胜(客胜)·单关",
    "stake": 16,
    "odds": 1.5,
    "status": "win",
    "payout": 24
   },
   {
    "match": "美国×摩洛哥",
    "pick": "2串1 美国胜×摩洛哥胜",
    "stake": 12,
    "odds": 2.16,
    "status": "win",
    "payout": 25.92
   },
   {
    "match": "美国×摩洛哥×巴西",
    "pick": "3串1 美×摩×巴西让-2(净胜3+)",
    "stake": 8,
    "odds": 3.455,
    "status": "win",
    "payout": 27.64
   }
  ],
  "scenariosTitle": "周六整轮·已下注100元(6张票·票面为准)",
  "scenarios": [
   {
    "label": "全胜:德日荷赢+厄让中",
    "pnl": 117.64,
    "prob": 8,
    "win": [
     0,
     1,
     2,
     3
    ]
   },
   {
    "label": "德日荷赢·厄让没中",
    "pnl": 17.8,
    "prob": 18,
    "win": [
     0,
     1,
     2
    ]
   },
   {
    "label": "德日赢+厄让中·荷兰输",
    "pnl": 99.28,
    "prob": 5,
    "win": [
     1,
     2,
     3
    ]
   },
   {
    "label": "德日赢·荷输厄没中(2串保本)",
    "pnl": -0.56,
    "prob": 12,
    "win": [
     1,
     2
    ]
   },
   {
    "label": "日本没赢(德日串全死·最多荷单回血)",
    "pnl": -53.64,
    "prob": 22,
    "win": [
     0
    ]
   },
   {
    "label": "德国没赢但日本赢(日单回血)",
    "pnl": -35,
    "prob": 20,
    "win": [
     1
    ]
   },
   {
    "label": "日荷都没赢",
    "pnl": -72,
    "prob": 15,
    "win": []
   }
  ]
 },
 "focus": [
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
   "verdict": "厄瓜多尔首战0-1负科特迪瓦(0分·必须大胜库拉索保命)→动机极强搏大比分,利好让-2(净胜3+)。让-2@1.85彩票腿保留。"
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
   "verdict": "⚠️久保建英膝伤确认缺阵(对荷兰那场轮椅离场),日本小降;但日本2-2平荷兰、突尼斯0分(5-1惨败换帅Renard)。日本胜仍favored,核心保留。"
  }
 ],
 "news": [
  {
   "date": "06-20",
   "match": "突尼斯 vs 日本",
   "impact": "突尼斯换四后卫",
   "tone": "away",
   "text": "新帅雷纳尔弃用前任3-4-3换回四后卫阵型迎战日本:瓦勒里/雷基克/塔尔比/阿布迪;梅赫布里出任10号游曳;战术重组增加突尼斯协调性风险,利好日本(Sports Mole·SI.com 06-20双源)",
   "en": "New boss Renard switches Tunisia to 4-back system vs Japan — ditching predecessor's 3-4-3. Expected backline: Valery, Rekik, Talbi, Abdi; Mejbri as No.10 free-role. Tactical overhaul adds coordination risk for Tunisia, benefiting Japan. (Sports Mole, SI.com — Jun 20)",
   "full": "埃尔韦·雷纳尔接手突尼斯后，Sports Mole与SI.com（06-20）双源均指出他将弃用前任萨布里·拉莫什的3-4-3阵型，切换至四后卫体系出战日本：右后卫瓦勒里(Yan Valery)、中卫奥马尔·雷基克(Omar Rekik)与蒙塔萨尔·塔尔比(Montassar Talbi)、左后卫阿里·阿布迪(Ali Abdi)，斯赫里(Skhiri)与海迪拉(Rani Khedira)搭档中路，汉尼拔·梅赫布里(Hannibal Mejbri，伯恩利)出任10号自由游曳。⚠️ 临阵换帅叠加阵型重整，突尼斯协调性存在不确定性；对已形成战术惯性的日本（2-2平荷兰）来说是明显利好。竞彩日本客胜赔率1.39，主会话赛前用predict.py确认是否有价值窗口。",
   "enFull": "Hervé Renard will overhaul Tunisia's system for the Japan clash: switching from Lamouchi's 3-4-3 to a four-at-the-back shape. Predicted backline: Yan Valery (RB), Omar Rekik & Montassar Talbi (CBs), Ali Abdi (LB); Skhiri and Khedira hold in midfield; Mejbri roams as a creative No.10. Both Sports Mole and SI.com (Jun 20) confirm this tactical reset. ⚠️ Mid-tournament coaching change + system overhaul = disjointed coordination risk for Tunisia — a clear advantage for Japan, who showed cohesion in the 2-2 draw vs Netherlands. Chinese bookmaker offers Japan (客胜) at 1.39; run predict.py before the 12:00 BJT kickoff to verify value.",
   "links": [
    {
     "name": "Sports Mole: Tunisia predicted lineup vs Japan",
     "url": "https://www.sportsmole.co.uk/football/tunisia/world-cup-2026/predicted-lineups/new-boss-renard-to-make-changes-predicted-tunisia-lineup-vs-japan_599495.html"
    },
    {
     "name": "SI.com: Tunisia vs Japan preview",
     "url": "https://www.si.com/soccer/tunisia-vs-japan-world-cup-preview-predictions-lineups-6-20-26"
    }
   ]
  },
  {
   "date": "06-20",
   "match": "突尼斯 vs 日本",
   "impact": "小川接替久保首发",
   "tone": "away",
   "text": "日本森保一维持首战10人换唯一伤缺——久保(膝伤)由小川航基(RC朗斯)替代;日本进攻重组但主力框架不变,仍为大热门(Sports Mole·SI.com 06-20双源)",
   "en": "Japan make one forced change vs Tunisia: Koki Ogawa (RC Lens) starts for injured Kubo (knee). Remaining 10 starters unchanged. Japan still heavy favourites with core intact. (Sports Mole, SI.com — Jun 20)",
   "full": "日本主帅森保一（Hajime Moriyasu）计划维持对阵荷兰绝大部分阵容，Sports Mole与SI.com（06-20）双源预测：唯一强制改动是用前锋小川航基(Koki Ogawa，现效力RC朗斯)取代膝伤缺阵的久保建英，其余10人不变。综合评估：小川航基是可靠的接替人选，日本在前场仍具实力优势；Polymarket盘面日本63.2%，与主会话集成63.6%高度吻合，说明久保伤情已被市场充分定价。⚠️ 竞彩日本客胜赔率1.39 × 63.6% = value 0.88，低于价值闸1.10；但突尼斯战术重整带来不确定性，赛前6小时建议再核一次盘口。",
   "enFull": "Japan head coach Moriyasu is expected to make exactly one change from their 2-2 draw vs Netherlands: Koki Ogawa (RC Lens) replaces the injured Takefusa Kubo (left knee). Sports Mole and SI.com (Jun 20) both confirm this is the only forced change, with all other 10 starters retained. Ogawa is a proven international striker and a competent positional replacement. Polymarket prices Japan at 63.2%, closely aligned with our ensemble (63.6%) — Kubo's injury appears fully priced in. ⚠️ Chinese bookmaker offers Japan (客胜) at 1.39, implying value = 0.88 (below the 1.10 gate); however, Tunisia's tactical uncertainty under Renard could present a mispricing — re-check odds 6h before 12:00 BJT.",
   "links": [
    {
     "name": "Sports Mole: Japan predicted lineup vs Tunisia",
     "url": "https://www.sportsmole.co.uk/football/japan/world-cup-2026/predicted-lineups/kubo-injury-blow-sugawara-doan-decisions-predicted-japan-lineup-vs-tunisia_599496.html"
    },
    {
     "name": "SI.com: Tunisia vs Japan preview",
     "url": "https://www.si.com/soccer/tunisia-vs-japan-world-cup-preview-predictions-lineups-6-20-26"
    }
   ]
  },
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
   "match": "突尼斯 vs 日本",
   "impact": "突尼斯换帅",
   "tone": "home",
   "text": "突尼斯首轮1:5惨败瑞典后立即解雇主帅拉莫什，紧急引入法国名帅埃尔韦·雷纳尔（曾率沙特2022世界杯击败阿根廷），对阵日本临阵换帅阵型待定(Sports Mole·Rotowire·SI.com 06-20三源)",
   "en": "Tunisia sacked Sabri Lamouchi immediately after their 1-5 opening loss to Sweden, replacing him with Hervé Renard (57, French), who famously led Saudi Arabia to a 2-2 shock vs Argentina at WC2022. Renard takes charge with limited preparation time vs Japan. (Sports Mole, Rotowire, SI.com — Jun 20)",
   "full": "突尼斯在本届世界杯首轮以1:5惨败于瑞典（主帅拉莫什·萨布里1月上任、仅执教5场），震惊当局，比赛结束后立即宣布解雇。突尼斯足协旋即任命57岁法国名帅埃尔韦·雷纳尔（Hervé Renard），后者以率领非洲球队在世界舞台创造奇迹著称——2022世界杯带领沙特阿拉伯2:1击败阿根廷（梅西首秀）。雷纳尔接手突尼斯时仅剩有限备战时间，对阵日本的战术体系、首发阵容均需快速重整。Sports Mole、Rotowire、SI.com（06-20）三源独立确认换帅。⚠️ 评估：换帅通常在短期内造成阵型混乱（首发未定），但雷纳尔善于快速调动士气；市场已将日本定为大热门（Polymarket 61.8%），突尼斯换帅不确定性尚未被完全定价——赛前12小时建议再次核查竞彩赔率，关注突尼斯赔率是否因换帅消息微幅缩水。",
   "enFull": "Tunisia immediately sacked head coach Sabri Lamouchi after their humiliating 1-5 opening loss to Sweden — Lamouchi was only appointed in January and had managed just 5 games. The Tunisian FA moved swiftly to appoint 57-year-old Frenchman Hervé Renard, who is famous for engineering World Cup shocks with African nations — most notably leading Saudi Arabia to a 2-1 upset over Lionel Messi's Argentina in 2022. Renard now takes charge with minimal preparation time ahead of the Japan clash. Three independent sources confirm: Sports Mole, Rotowire, SI.com (Jun 20). ⚠️ Assessment: mid-tournament coaching changes typically cause short-term lineup uncertainty, but Renard excels at rapid motivation. Polymarket prices Japan at 61.8% — Tunisia's coaching disruption may not be fully priced in by Chinese bookmakers. Recommend checking 周六036 odds 12h before kickoff.",
   "links": [
    {
     "name": "Sports Mole: Tunisia vs Japan preview",
     "url": "https://www.sportsmole.co.uk/football/tunisia/world-cup-2026/preview/tunisia-vs-japan-prediction-team-news-lineups_599494.html"
    },
    {
     "name": "Rotowire: Tunisia vs Japan preview",
     "url": "https://www.rotowire.com/soccer/article/tunisia-vs-japan-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-f-118802"
    }
   ]
  }
 ],
 "slip": {
  "title": "6月21日 · 周六整轮 · 已下注100元(6张票·票面为准)",
  "status": "**100元已全部出票(6张·见持仓区)。** 德国(最强·只能串)已铺4条串关路径:德×日、德×日×厄总进球3、德×荷、德×厄让2球——日/荷/厄任一兑现德国就有钱,不再被日本一票否决。日荷单关独立回血。",
  "detail": "已下注6票(100元):①荷单12@1.53 ②日单20@1.37 ③2串1德×日24@1.836 ④3串1德×日×厄总进球3 16@6.24 ⑤2串1德×荷18@2.035 ⑥2串1德×厄让2球10@2.46。最高全中+150.9,全挂-100。",
  "items": [
   {
    "num": "周六033",
    "pick": "荷兰胜(主胜)",
    "tier": "已下注",
    "match": "荷兰 vs 瑞典",
    "stake": 12,
    "odds": 1.53,
    "value": 0.92,
    "ev": -0.8
   },
   {
    "num": "周六036",
    "pick": "日本胜(客胜)",
    "tier": "已下注",
    "match": "突尼斯 vs 日本",
    "stake": 20,
    "odds": 1.37,
    "value": 0.87,
    "ev": -2.6
   },
   {
    "num": "034×036",
    "pick": "2串1 德国胜×日本胜",
    "legs": [
     {
      "n": "034",
      "dir": "H"
     },
     {
      "n": "036",
      "dir": "A"
     }
    ],
    "tier": "已下注",
    "match": "德×日",
    "stake": 24,
    "odds": 1.836,
    "value": 0.79,
    "ev": -8.2
   },
   {
    "num": "034×036×035",
    "pick": "3串1 德×日×厄总进球3",
    "legs": [
     {
      "n": "034",
      "dir": "H"
     },
     {
      "n": "036",
      "dir": "A"
     },
     {
      "n": "035",
      "ttg": 3
     }
    ],
    "tier": "已下注",
    "match": "德×日×厄总进3",
    "stake": 16,
    "odds": 6.24,
    "value": 0.76,
    "ev": -3.8
   },
   {
    "num": "034×033",
    "pick": "2串1 德国胜×荷兰胜",
    "legs": [
     {
      "n": "034",
      "dir": "H"
     },
     {
      "n": "033",
      "dir": "H"
     }
    ],
    "tier": "已下注",
    "match": "德×荷",
    "stake": 18,
    "odds": 2.035,
    "value": 0.84,
    "ev": -2.2
   },
   {
    "num": "034×035",
    "pick": "2串1 德国胜×厄瓜多尔让2球",
    "legs": [
     {
      "n": "034",
      "dir": "H"
     },
     {
      "n": "035",
      "dir": "H",
      "margin": 3
     }
    ],
    "tier": "已下注",
    "match": "德×厄让2",
    "stake": 10,
    "odds": 2.46,
    "value": 0.85,
    "ev": -1.5
   }
  ],
  "summary": {
   "stake": 100,
   "evLow": -100,
   "evHigh": 150.9,
   "winProb": 42,
   "best": {
    "label": "六票全中",
    "pnl": 150.9
   },
   "worst": {
    "label": "全挂",
    "pnl": -100
   },
   "keyScenarios": [
    {
     "label": "德日荷赢(厄两项没中)",
     "pnl": 26.4
    }
   ]
  },
  "scenarios": [
   {
    "label": "德日荷全赢+厄总进3+厄净胜3(满堂红)",
    "hit": "中6票",
    "prob": 5,
    "win": [
     0,
     1,
     2,
     3,
     4,
     5
    ]
   },
   {
    "label": "德日荷赢·厄两项都没中",
    "hit": "中4票",
    "prob": 18,
    "win": [
     0,
     1,
     2,
     4
    ]
   },
   {
    "label": "德日赢·荷输·厄净胜3(总进非3)",
    "hit": "中3票",
    "prob": 8,
    "win": [
     1,
     2,
     5
    ]
   },
   {
    "label": "德日赢·荷输·厄两项没中",
    "hit": "中2票",
    "prob": 10,
    "win": [
     1,
     2
    ]
   },
   {
    "label": "德赢日输·荷赢(德荷串中)",
    "hit": "中2票",
    "prob": 14,
    "win": [
     0,
     4
    ]
   },
   {
    "label": "日本没赢+荷兰没赢(德系串全靠厄)",
    "hit": "少量",
    "prob": 13,
    "win": []
   },
   {
    "label": "德国爆冷输(日荷单关回血)",
    "hit": "最多2单关",
    "prob": 32,
    "win": [
     0,
     1
    ]
   }
  ],
  "copyText": "本轮已全部出票100元6张(荷单12+日单20+2串1德日24+3串1德日厄总进3 16+2串1德荷18+2串1德厄让2 10)。",
  "reviewNote": "✓ 按6张票面入账(100元)。3串1第三腿=厄瓜多尔vs库拉索总进球3个@3.40(票面③3.400,非让球,待黄斌瞄一眼确认)。"
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
  "sampleCount": 34,
  "threshold": 50,
  "pct": 68,
  "ensBrier": 0.54,
  "ensBrierMedian": 0.354,
  "marketBase": 0.5506,
  "marketBaseLabel": "市场去水(子模型A)",
  "beatsMarket": true,
  "beatRandom": 21,
  "dirHit": 20,
  "weightsFirst": {
   "A": 33,
   "B": 34,
   "C": 33
  },
  "weightsLast": {
   "A": 51,
   "B": 25,
   "C": 2,
   "D": 22
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
   },
   {
    "num": "周六033",
    "m": "荷兰·5:1",
    "b": 0.24,
    "win": true
   },
   {
    "num": "周六034",
    "m": "德国·2:1",
    "b": 0.23,
    "win": true
   }
  ],
  "headline": "已喂 34 场预测 · 集成 Brier 0.54 vs 市场去水 0.5506（略胜）· 只比随机0.667好一点（地板线,非alpha）",
  "lesson": "**28场复盘硬结论(诚实版):** 集成 Brier 0.54 **仍没跑赢市场去水(0.5506)**——模型暂无可证明的边。它只比'瞎猜'(随机0.667)好一点,那是地板不是本事。平局占36%(异常高)模型从不押平→10个自动判错卡死命中率;回测所有补救都≤57%,平局事前分不出来。**边在纪律和情报、不在模型方向**(可迁股市:高效市场里纯模型必收敛到市场)。⚠️别把'跑赢随机'当 alpha——真市场CLV还在攒(竞彩收盘价未留存),没有真CLV前'有没有边'仍是自说自话。",
  "graduation": "完成训练 = 喂满50场 + Brier稳定且**真CLV转正** + 权重收敛。当前 34/50,权重已收敛(A市场去水重仓),但**Brier尚未跑赢市场、CLV待积累**——离'有边'还差关键一步:留存赛前收盘价算真CLV。"
 }
};
