window.DASH_DATA = {
 "meta": {
  "round": "小组赛第 1 轮",
  "updated": "2026-06-18 15:10",
  "disclaimer": "竞彩胜平负盘实测 vig 12.9%,比分盘更高,长期期望为负。本看板的使命是决策质量管理:亏得最少、给运气最大杠杆。资金池纪律高于一切预测。理性购彩。"
 },
 "bankroll": {
  "start": 200,
  "startDate": "06-11",
  "cashNow": 279.5,
  "pending": 0,
  "goal": 20000,
  "floor": 80,
  "milestones": [
   {
    "date": "06-18",
    "label": "首轮收官",
    "target": 500
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
  }
 ],
 "holdings": {
  "invested": 22,
  "returned": 113.3,
  "pendingStake": 0,
  "condEV": 3.4,
  "condWinProb": 22.5,
  "tickets": [
   {
    "match": "澳大利亚 vs 土耳其",
    "pick": "胜平负·澳大利亚胜",
    "stake": 22,
    "odds": 5.15,
    "status": "win",
    "payout": 113.3
   }
  ],
  "scenariosTitle": "澳土终局推演 · 本轮22元在场盈亏(柱上为概率)",
  "scenarios": [
   {
    "label": "澳大利亚胜",
    "pnl": 91,
    "prob": 22.5
   },
   {
    "label": "澳不胜",
    "pnl": -22,
    "prob": 77.5
   }
  ]
 },
 "focus":  [
  {
   "num": "周三021",
   "home": "葡萄牙",
   "away": "刚果金",
   "time": "06-18 01:00",
   "models": {
    "A": [78.3, 15.1, 6.6],
    "C": [80.9, 13.7, 5.4],
    "D": [76.2, 16.4, 7.4],
    "ens": [78.4, 15.1, 6.5]
   },
   "wdlValue": [
    {"pick": "主胜", "odds": 1.13, "prob": 78.4, "value": 0.89},
    {"pick": "平局", "odds": 5.86, "prob": 15.1, "value": 0.88},
    {"pick": "客胜", "odds": 13.50, "prob": 6.5, "value": 0.88}
   ],
   "scores": [],
   "verdict": "🔴深让镜像雷区(葡萄牙-2让球)。HAD价值0.89/0.88/0.88，全<1.10；让球(-2)让胜0.95/让平0.89/让负0.83，深让=市场已充分吸收强弱差距，模型净胜≥3尾部不可靠。双方无重大伤停。无未定价的硬信息差，§6深让信市场，空仓。"
  },
  {
   "num": "周三022",
   "home": "英格兰",
   "away": "克罗地亚",
   "time": "06-18 04:00",
   "models": {
    "A": [57.9, 25.3, 16.8],
    "B": [67.9, 20.2, 11.9],
    "C": [59.9, 24.5, 15.6],
    "D": [56.6, 25.7, 17.6],
    "ens": [59.0, 24.7, 16.2]
   },
   "wdlValue": [
    {"pick": "主胜", "odds": 1.53, "prob": 59.0, "value": 0.90},
    {"pick": "平局", "odds": 3.50, "prob": 24.7, "value": 0.87},
    {"pick": "客胜", "odds": 5.27, "prob": 16.2, "value": 0.86}
   ],
   "scores": [],
   "verdict": "空仓(HAD价值0.90/0.87/0.86，让球(-1)让胜1.02/edge+4.7pp，仍<1.10)。情报：Livramento小腿伤缺阵（Chalobah替补，公开已知）；Saka跟腱轻微疑问但预计首发；Rice已fit；克罗地亚Modric/Perisic全员可用。缺阵信息均已公开，市场已定价，edge仅+4.7pp且无硬料支撑不过闸阈≥5pp+。空仓。"
  },
  {
   "num": "周三023",
   "home": "加纳",
   "away": "巴拿马",
   "time": "06-18 07:00",
   "models": {
    "A": [43.4, 29.2, 27.4],
    "B": [48.4, 25.8, 25.8],
    "C": [44.4, 28.9, 26.8],
    "D": [40.8, 29.8, 29.4],
    "ens": [43.8, 28.9, 27.3]
   },
   "wdlValue": [
    {"pick": "主胜", "odds": 2.04, "prob": 43.8, "value": 0.89},
    {"pick": "平局", "odds": 3.03, "prob": 28.9, "value": 0.87},
    {"pick": "客胜", "odds": 3.23, "prob": 27.3, "value": 0.88}
   ],
   "scores": [],
   "verdict": "空仓(HAD价值0.89/0.87/0.88，让球(-1)让胜0.92，全<1.10)。情报：Thomas Partey签证被拒确认缺阵，但6/13 Al Jazeera/ESPN已公开报道，@2.04赔率已将其完全吸收——不构成未定价的硬信息差。巴拿马Carrasquilla伤后替补上场(非首发)。两队伤情均已price-in，无独家信息差，§13.1空仓。"
  },
  {
   "num": "周三024",
   "home": "乌兹别克",
   "away": "哥伦比亚",
   "time": "06-18 10:00",
   "models": {
    "A": [9.2, 18.3, 72.6],
    "C": [8.0, 17.1, 74.8],
    "D": [9.3, 19.6, 71.0],
    "ens": [9.1, 18.3, 72.7]
   },
   "wdlValue": [
    {"pick": "主胜", "odds": 9.65, "prob": 9.1, "value": 0.88},
    {"pick": "平局", "odds": 4.85, "prob": 18.3, "value": 0.89},
    {"pick": "客胜", "odds": 1.22, "prob": 72.7, "value": 0.89}
   ],
   "scores": [],
   "verdict": "空仓(HAD价值0.88/0.89/0.89，让球(+1)让负0.95/edge+3.6pp，全<1.10)。情报：乌兹别克创意核心Masharipov因背伤缺阵，另Alijonov/Ganiev观察中；哥伦比亚无伤停，James Rodriguez+Luis Diaz+Arias首发完整。Masharipov缺阵削弱乌兹别克，但两队整体实力差距过大，无法将任何盘口推过1.10闸。§13.1空仓。"
  }
 ],
 "news": [
  {
   "date": "06-19",
   "match": "墨西哥 vs 韩国",
   "impact": "韩国伤员归队",
   "tone": "neutral",
   "text": "韩国金泰铉(Kim Tae-Hyeon)与裵俊浩(Bae Jun-Ho)首轮对阵捷克后出现伤情,已归队训练,有望对阵墨西哥出场;韩国阵容基本完整(ESPN·RotoWire双源)",
   "en": "South Korea's Kim Tae-Hyeon and Bae Jun-Ho both resumed team training after minor concerns following the Czechia win — both could feature vs Mexico (ESPN/RotoWire)",
   "full": "ESPN与RotoWire双源确认:韩国金泰铉与裵俊浩在首轮逆转捷克后出现在世界杯伤情监控名单,但两人均已于赛后24-48小时内恢复队内训练。报道显示两人\"could be options\"对阵墨西哥,预计首发XI不受影响;孙兴慜/李康仁/黄仁范/金民哉核心阵容完整。墨西哥方面:蒙特斯(红牌)停赛由金英塞斯顶替CB;金塔内斯(Quinones)轻伤\"应仍首发\"。综合:韩国伤员警报解除,利好对阵墨西哥整体实力评估;但赔率未必因此漂移(首轮出色表现已有所反映)。⚠️ 正式首发XI赛前60分钟确认。",
   "enFull": "ESPN and RotoWire both confirmed that South Korea's Kim Tae-Hyeon and Bae Jun-Ho appeared on the World Cup injury table after their dramatic 2-1 comeback win over Czechia, but both players have since returned to full team training within 48 hours. Both are considered available options for the Mexico clash. South Korea's core starting XI — Son Heung-min, Lee Kang-in, Hwang In-beom, Kim Min-jae — remains intact. On Mexico's side, César Montes is suspended (red card vs South Africa), replaced by Vasquez/Reyes in CB; Julián Quiñones, withdrawn early vs South Africa with an injury, is described as a 'slight doubt' but expected to start. Net assessment: South Korea's injury scare is resolved, marginally positive for their squad depth heading into this must-win match. Market impact: likely already priced in given their strong opener performance. ⚠️ Confirm both lineups at official XI 60 min pre-kick.",
   "links": [
    {"name": "ESPN: Mexico vs South Korea preview", "url": "https://www.espn.com/soccer/story/_/id/49079638/mexico-vs-south-korea-fifa-world-cup-2026-tv-channel-how-watch-kick-live-stream-injury-predicted-line-ups"},
    {"name": "RotoWire: Mexico vs South Korea team news", "url": "https://www.rotowire.com/soccer/article/mexico-vs-south-korea-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-a-118510"}
   ]
  },
  {
   "date": "06-19",
   "match": "瑞士 vs 波黑",
   "impact": "科拉西纳茨缺席确认",
   "tone": "away",
   "text": "Sports Mole预测XI确认:科拉西纳茨(跛行)不首发对阵瑞士,泽科亦未在波黑预测首发XI(Demirović+Lukić出击);波黑双核缺席,锋线大幅削弱(Sports Mole·beIN Sports双源)",
   "en": "Sports Mole predicted XI confirms Kolasinac will miss out vs Switzerland; Džeko also absent from predicted starting lineup (Demirović+Lukić as forwards). Bosnia's attack significantly weakened (Sports Mole/beIN Sports)",
   "full": "Sports Mole(06-18)标题\"Kolasinac to miss out\"确认:CB塞阿德·科拉西纳茨因对阵加拿大末段跛行退场,预计不出战瑞士;beIN Sports(06-18)波黑预测XI为:Vasilj; Muharemović, Katić, Dedić; Memić, Tahirović, Bašić, Bajraktarević; Demirović, Lukić——无泽科、无科拉西纳茨。此前情报\"泽科touch-and-go\"已更新:泽科可能完全缺席首发(预测XI含Demirović+Lukić双前锋替代)。波黑已先折塞利克(整届缺席),若科拉西纳茨+泽科均不首发,防线与锋线双双承压。瑞士阵容稳定:Kobel/Akanji/Xhaka/Embolo/Rodriguez齐整,场面优势预期扩大。⚠️ 市场赔率已相对充分定价波黑弱势(主胜1.38,HAD value<1.10),竞彩edge仍未过闸;正式首发XI赛前60分钟确认。",
   "enFull": "Sports Mole (06-18) headline 'Kolasinac to miss out' confirms Sead Kolasinac (limped off vs Canada) will not start against Switzerland. beIN Sports (06-18) Bosnia predicted XI (4-4-2): Vasilj; Muharemović, Katić, Dedić; Memić, Tahirović, Bašić, Bajraktarević; Demirović, Lukić — Džeko and Kolasinac both absent. This updates/upgrades the prior 'touch-and-go' intel on Džeko: his absence is now predicted by two independent sources. Bosnia context: Celik (entire tournament), Kolasinac (vs Switzerland), and Džeko (predicted absent) — three key players unavailable. Switzerland: Kobel, Akanji, Xhaka, Embolo, Vargas, Okafor all available. Assessment: Bosnia are significantly weakened, but market already prices them as heavy underdogs (HAD 1.38/3.95/6.60). All HAD/HHAD values remain below ≥1.10 threshold — no-bet. Main session should confirm whether Džeko absence creates any hidden value on Swiss handicap markets. ⚠️ Official starting XI confirmation 60 min before kickoff.",
   "links": [
    {"name": "Sports Mole: Bosnia predicted XI (Kolasinac miss)", "url": "https://www.sportsmole.co.uk/football/bosnia-herzegovina/world-cup-2026/predicted-lineups/kolasinac-to-miss-out-predicted-bosnia-herzegovina-xi-vs-switzerland_599385.html"},
    {"name": "beIN Sports: Bosnia predicted lineup vs Switzerland", "url": "https://www.beinsports.com/en-us/soccer/fifa-world-cup-2026/articles/bosnia-and-herzegovina-s-predicted-lineup-vs-switzerland-at-the-2026-fifa-world-cup-2026-06-18"}
   ]
  },
  {
   "date": "06-19",
   "match": "瑞士 vs 波黑",
   "impact": "泽科伤缺存疑",
   "tone": "away",
   "text": "波黑队长泽科(40岁,AS罗马)肩伤持续困扰,对阵加拿大首场迟到缺席首发,周四对瑞士出场仍存疑;中后卫科拉西纳茨对阵加拿大跛行提前换下;前锋塞利克(兰斯)因训练伤确认缺席整届世界杯(Sports Mole·RotoWire)",
   "en": "Bosnia captain Edin Džeko (40, AS Roma) was a late scratch for Canada opener with shoulder injury — availability for Thursday vs Switzerland remains touch-and-go; CB Sead Kolasinac limped off late vs Canada; Nidal Celik (RC Lens) confirmed out for entire tournament (Sports Mole/RotoWire)",
   "full": "Sports Mole与RotoWire赛前情报双源确认:①波黑队长埃丁·泽科(40岁,AS罗马)因肩伤在对阵加拿大首战迟到缺席首发,虽然赛中有所上场,但其周四对阵瑞士的首发资格仍是「touch-and-go」——若泽科无法首发,波黑锋线进攻深度大幅削弱;②中后卫塞阿德·科拉西纳茨在对阵加拿大比赛末段跛行提前换下,骨盆/腿部情况受监控,是否出战存疑;③中后卫尼达尔·塞利克(朗斯)因训练伤确认缺席整届世界杯,波黑防线已先折一将。瑞士方面:主力阵容稳定(科贝尔/阿坎吉/沙奇利/恩博洛),仅穆海姆轻微肌肉疑问。综合:波黑本已实力偏弱,泽科+科拉西纳茨双核不确定性进一步降低其竞争力;但市场赔率已充分反映波黑弱势(主胜1.38,客胜6.60),竞彩HAD/HHAD value经重算仍<1.10,无合格edge。⚠️ 泽科/科拉西纳茨首发需赛前60分钟官方XI确认。",
   "enFull": "Sports Mole and RotoWire both confirm ahead of the Switzerland vs Bosnia-Herzegovina Group B clash (Thursday 03:00 BJT): ① Bosnia captain Edin Džeko (40, AS Roma) was a late omission from the starting lineup against Canada in the opener due to a persistent shoulder injury. His availability to start against Switzerland is described as 'touch-and-go'. If Džeko is ruled out or limited to a bench role, Bosnia's attacking threat is substantially reduced — he remains their primary target man and set-piece focal point despite his age. ② CB Sead Kolasinac limped off late in the Canada fixture with a leg/hip complaint and is being monitored. His participation against Switzerland is uncertain. ③ Nidal Celik (RC Lens) is confirmed absent for the entire tournament due to a training injury sustained before the group stage. Switzerland injury concern: Miro Muheim (minor muscle problem) is a doubt but not considered significant. The Swiss core — Kobel, Akanji, Xhaka, Embolo — is fully available. Assessment: Bosnia's twin fitness concerns further widen the strength gap, but market pricing already reflects Bosnia's underdog status (HAD 1.38/3.95/6.60). All HHAD/HAD values remain below the ≥1.10 buy threshold — no-bet stance, but main session should confirm no hidden edge from these absences. ⚠️ Confirm Džeko and Kolasinac status at official XI (60 min pre-kick).",
   "links": [
    {"name": "Sports Mole: Switzerland vs Bosnia team news", "url": "https://www.sportsmole.co.uk/football/switzerland/world-cup-2026/team-news/switzerland-vs-bosnia-herzegovina-injury-suspension-list-predicted-xis_599361.html"},
    {"name": "RotoWire: Switzerland vs Bosnia preview", "url": "https://www.rotowire.com/soccer/article/switzerland-vs-bosnia-and-herzegovina-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-b-118514"},
    {"name": "Sports Mole: Bosnia predicted XI (Kolasinac miss)", "url": "https://www.sportsmole.co.uk/football/bosnia-herzegovina/world-cup-2026/predicted-lineups/kolasinac-to-miss-out-predicted-bosnia-herzegovina-xi-vs-switzerland_599385.html"}
   ]
  },
  {
   "date": "06-19",
   "match": "加拿大 vs 卡塔尔",
   "impact": "戴维斯伤缺首发",
   "tone": "home",
   "text": "加拿大队长兼左后卫阿方索·戴维斯(拜仁慕尼黑)因腘绳肌伤仍未完全康复,预计不会首发;里奇·拉里亚(Toronto FC)将顶替出战;蒙比托亦因胫骨伤缺席(ESPN·RotoWire)",
   "en": "Canada captain Alphonso Davies (Bayern Munich) unlikely to start due to ongoing hamstring injury — Richie Laryea expected at LB; Moise Bombito also out with tibia problem (ESPN/RotoWire)",
   "full": "ESPN与RotoWire赛前确认:加拿大队长左后卫阿方索·戴维斯因在拜仁慕尼黑联赛(vs PSG 1-1)中撕裂腘绳肌,正处于返场康复协议中,周一训练中仍受限。多源预测其不会首发,里奇·拉里亚(Toronto FC)将代替左后卫位置出战。此外中卫蒙比托(蒙特利尔)因胫骨问题同样缺席,加拿大守备线整体削弱。卡塔尔在首轮对阵瑞士获平局(vs Swiss 0-0或点球),无新伤情。戴维斯是加拿大最具威胁的攻守两端球员,其缺席对本队影响显著;理论上缩窄加拿大对卡塔尔的优势,但市场赔率已部分反映(intl共识主胜76.6%)。⚠️首发XI需开球前官方确认。",
   "enFull": "ESPN and RotoWire confirm (pre-match): Canada captain and LB Alphonso Davies (Bayern Munich) suffered a hamstring tear in a Bundesliga draw with PSG and remains in return-to-play protocol, still limited in Monday training. He is not expected to start; Richie Laryea is projected to fill the LB role. CB Moise Bombito (CF Montreal) is also sidelined with a tibia problem — Canada's backline is meaningfully weakened. Qatar have no fresh injury concerns after their opener draw and may field an unchanged side. Davies is Canada's best attacking and defensive outlet; his absence meaningfully reduces Canada's expected threat. Market consensus (76.6% implied win for Canada) may already partially account for this; main session should verify edge. ⚠️ Official XI confirmation required at kick-off minus 60 min.",
   "links": [
    {"name": "ESPN: Alphonso Davies injury update", "url": "https://www.espn.com/soccer/story/_/id/49076456/alphonso-davies-injury-canada-world-cup-qatar"},
    {"name": "RotoWire: Canada vs Qatar preview", "url": "https://www.rotowire.com/soccer/article/canada-vs-qatar-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-b-118506"}
   ]
  },
  {
   "date": "06-19",
   "match": "捷克 vs 南非",
   "impact": "南非双将停赛",
   "tone": "away",
   "text": "南非西托尔(Sithole)与茨瓦内(Zwane)因首轮对阵墨西哥双双累积红牌停赛,被迫双核缺席;胡戈·布罗斯须全面重排阵容应战捷克(Sports Mole·RotoWire)",
   "en": "South Africa's Sphephelo Sithole and Themba Zwane both suspended after red cards vs Mexico — coach Broos faces major reshuffle for Czech Republic clash (Sports Mole/RotoWire)",
   "full": "Sports Mole与RotoWire赛前双源确认:南非在首轮2:0不敌墨西哥时两人均被罚下——中场斯弗费洛·西托尔(Sithole)与进攻型中场滕巴·茨瓦内(Zwane)均吃红牌,必须停赛缺席周四对阵捷克的关键生死战。主帅胡戈·布罗斯被迫全面重排阵型与首发名单,中场创造力和终结端均受到严重削弱。捷克方面无伤停悬念,施利克领衔攻线,苏切克·索伊卡坐阵中场,阵容稳定。综合:南非降档明显,捷克主胜优势进一步扩大;intl共识捷克52.9%主胜、20.7%客胜,市场赔率需结合停赛利空重评。",
   "enFull": "Sports Mole and RotoWire both confirm (pre-match): South Africa suffered back-to-back red cards in their 2-0 opening loss to Mexico. Sphephelo Sithole and Themba Zwane are both automatically suspended for Thursday's must-win match vs Czech Republic. Coach Hugo Broos faces a major tactical reshuffle; South Africa's midfield creativity and attacking threat are both significantly depleted. Czech Republic have no injury or suspension concerns — Patrik Schick leads the attack backed by Thomas Soucek and David Sojka in midfield. Assessment: South Africa's suspensions meaningfully narrow any remaining competitive gap; Czech Republic's advantage expands. Market consensus (Czechia 52.9% implied win) may not fully reflect both absences — main session should re-scan edge.",
   "links": [
    {"name": "Sports Mole: Czech vs South Africa team news", "url": "https://www.sportsmole.co.uk/football/czech-republic/world-cup-2026/team-news/czech-republic-vs-south-africa-injury-suspension-list_599414.html"},
    {"name": "RotoWire: Czechia vs South Africa preview", "url": "https://www.rotowire.com/soccer/article/czechia-vs-south-africa-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-a-118513"}
   ]
  },
  {
   "date": "06-19",
   "match": "墨西哥 vs 韩国",
   "impact": "蒙特斯停赛缺",
   "tone": "home",
   "text": "墨西哥CB塞萨尔·蒙特斯因首轮对南非红牌停赛;左翼金塔内斯(Quinones)受伤存疑;韩国首轮2-1逆转捷克后全员无伤,孙兴慜领衔完整阵容(Sports Mole·RotoWire)",
   "en": "Mexico CB Cesar Montes suspended (red card vs South Africa), LW Julian Quinones doubtful with injury; South Korea fully fit after 2-1 comeback win over Czechia with Son Heung-min leading attack (Sports Mole/RotoWire)",
   "full": "Sports Mole与RotoWire赛前双源确认:墨西哥中卫塞萨尔·蒙特斯因首轮对南非累积红牌停赛,防守轴心被迫重组;左翼球员胡利安·金塔内斯(Quinones)在首轮中途申请替换,伤情仍受监控,状态存疑。墨西哥其余球员无新伤情,拉乌尔·希门内斯领衔锋线。韩国方面:首轮2-1逆转捷克后无新伤情,金泰铉与裴俊浩在伤后恢复训练、或入替补名单;孙兴慜+李康仁+李在诚核心阵容完整。综合:墨西哥两项人员利空(停赛+伤情)、韩国全员可用;市场共识墨西哥47.2%主胜/韩国23.5%客胜,实际战力差距可能较前缩窄。",
   "enFull": "Sports Mole and RotoWire confirm: Mexico CB César Montes is suspended for the South Korea clash after his red card vs South Africa, forcing a CB reshuffle — Johan Vásquez or Edson Álvarez expected to step in. LW Julián Quiñones asked to be subbed off early in the opener and his status remains uncertain. Mexico have no other fresh concerns, with Raúl Jiménez leading the attack. South Korea: after their 2-1 comeback over Czechia, they report a fully fit squad. Kim Tae-Hyeon and Bae Jun-Ho have both returned to training and may feature as substitutes. Son Heung-Min, Lee Kang-In, and Lee Jae-Sung form an intact attacking core. Assessment: Mexico's twin setbacks (suspension + injury doubt) combined with South Korea's clean bill of health modestly close the pre-match gap; main session should re-scan HAD/HHAD value.",
   "links": [
    {"name": "Sports Mole: Mexico lineup vs South Korea", "url": "https://www.sportsmole.co.uk/football/mexico/world-cup-2026/predicted-lineups/who-replaces-montes-after-red-card-predicted-mexico-xi-for-world-cup-2026-clash_599404.html"},
    {"name": "RotoWire: Mexico vs South Korea preview", "url": "https://www.rotowire.com/soccer/article/mexico-vs-south-korea-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-a-118510"}
   ]
  },
  {
   "date": "06-18",
   "match": "英格兰 vs 克罗地亚",
   "impact": "穆萨领衔首发",
   "tone": "away",
   "text": "克罗地亚达利奇倾向起用达拉斯FC锋将穆萨(2026赛季13场12球)取代老将布迪米尔(34岁)首发,穆萨更具速度与冲击力(CBS Sports·Sky Sports)",
   "en": "Croatia coach Dalic set to prefer in-form Petar Musa (FC Dallas, 12 goals in 13 MLS 2026 games) over veteran Ante Budimir (34) as starting striker vs England (CBS Sports/Sky Sports)",
   "full": "CBS Sports与Sky Sports赛前报道均指出:克罗地亚主帅达利奇倾向在英格兰揭幕战中起用年轻前锋彼塔尔·穆萨(FC达拉斯)而非老将安特·布迪米尔(34岁)担任首发中锋。穆萨在2026年MLS赛季13场轰入12球、状态极佳,且身处主场城市达拉斯具备本土氛围加成。布迪米尔虽经验丰富,但年龄与速度上处于下风,历史上更多以替补出场。达利奇的这一战术选择为克罗地亚前线注入冲击力与不确定性,但也带来MLS vs 顶级国际赛事的适应性风险。⚠️ 本信息为赛前预测,达利奇最终选择须候开球前官方首发XI确认。英格兰HAD仍为大热门,此变化不改变当前无合格value盘口的判断。",
   "enFull": "CBS Sports and Sky Sports both report ahead of the England vs Croatia opener (Wednesday 04:00 BJT) that Croatia head coach Zlatko Dalic is leaning toward starting FC Dallas striker Petar Musa rather than veteran Ante Budimir (34) as the number nine. Musa is in exceptional form — 12 goals in 13 MLS appearances in 2026 — and the match takes place in Musa's home city of Arlington, Texas, adding a potential psychological edge. Budimir, while experienced, has historically been a second-half impact substitute at international level. Tactically, Musa offers greater pace on the shoulder of the last defender; however, Budimir brings more big-game experience and aerial presence. ⚠️ This is pre-match reporting — official XI confirmation needed at kick-off minus 60 minutes. England remain clear favorites (HAD ~42% implied win); no qualifying value bet identified.",
   "links": [
    {"name": "CBS Sports: England vs Croatia World Cup preview", "url": "https://www.cbssports.com/soccer/news/england-croatia-world-cup-2026-preview-predictions-watch/"},
    {"name": "Sky Sports: World Cup 2026 Group L guide", "url": "https://www.skysports.com/football/news/12098/13543108/world-cup-2026-group-l-guide-fixtures-schedule-standings-and-odds-for-england-croatia-ghana-and-panama"}
   ]
  },
  {
   "date": "06-18",
   "match": "葡萄牙 vs 刚果金",
   "impact": "迪亚斯缺阵",
   "tone": "away",
   "text": "葡萄牙中卫迪亚斯(曼城)因热身赛伤未愈确认缺席周三揭幕战;马丁内斯:'未完全康复,不冒险';因纳西奥(体育CP)顶替搭档席尔瓦出任CB组合(Yahoo Sports·Athlonsports·OneFootball)",
   "en": "Portugal CB Ruben Dias (Man City) confirmed OUT for Wednesday opener vs DR Congo — coach Martinez: 'not fully fit, won't take any risks'; Goncalo Inacio (Sporting CP) to partner Antonio Silva at CB (Yahoo Sports/Athlonsports/OneFootball)",
   "full": "Yahoo Sports、Athlonsports与OneFootball 06-17多源确认:葡萄牙主力中卫鲁本·迪亚斯(曼城)因热身赛碰撞伤未能完全康复,正式缺席周三(北京时间06-18 01:00)对阵刚果金的世界杯揭幕战。主帅马丁内斯表示:'他尚未完全康复,我们不会冒任何风险。'替补:贡萨洛·因纳西奥(体育CP,21岁)搭档安东尼奥·席尔瓦出任CB。⚠️此前新闻条目提及迪亚斯'热身赛完全复出'已被最新确认推翻——以本条为准。迪亚斯缺阵对葡萄牙防守质量有一定影响,但刚果金进攻端有限(维萨领衔),葡萄牙仍是大热门;HAD/HHAD value需主会话重扫。",
   "enFull": "Multiple sources (Yahoo Sports, Athlonsports, OneFootball, AOL Sports — all June 17) confirm: Rúben Dias (Man City) is ruled out of Portugal's 2026 World Cup opener vs DR Congo after failing to recover from a knock in a warm-up fixture. Manager Roberto Martínez stated: 'He's not fully fit and we won't take any risks.' Replacement: Gonçalo Inácio (Sporting CP, 21) set to partner António Silva at CB. Inácio is technically gifted but carries significantly less major-tournament experience. ⚠️ Previous news entry stated Dias had 'fully recovered in warm-up matches' — this is superseded by the confirmed absence. Meaningfully downgrade to Portugal's defensive unit. Portugal remain heavy favorites vs DR Congo; main session should re-scan HAD/HHAD value to confirm no threshold breach from Dias absence.",
   "links": [
    {"name": "Yahoo Sports: Ruben Dias ruled out vs DR Congo", "url": "https://sports.yahoo.com/articles/ruben-dias-injured-miss-portugals-010340402.html"},
    {"name": "Athlonsports: Portugal dealt major blow", "url": "https://athlonsports.com/soccer/portugal-ruben-dias-out-injury-dr-congo-world-cup"},
    {"name": "OneFootball: Ruben Dias injury concern", "url": "https://onefootball.com/en/news/ruben-dias-sparks-portugal-injury-concern-ahead-of-fifa-world-cup-opener-against-dr-congo-43019674"}
   ]
  },
  {
   "date": "06-18",
   "match": "加纳 vs 巴拿马",
   "impact": "双核缺阵",
   "tone": "away",
   "text": "加纳帕泰(签证/英国司法案件)确认缺席本届世界杯;库杜斯(伤病)亦缺;队长约旦·阿耶乌领衔锋线,努阿马+塞梅尼约搭档(Sports Mole·Goal)",
   "en": "Ghana lose Thomas Partey (visa/UK legal case) and Mohammed Kudus (injury) for the WC; captain Jordan Ayew to lead attack alongside Nuamah and Semenyo (Sports Mole·Goal)",
   "full": "Sports Mole与Goal赛前最新双源确认:加纳中场核心托马斯·帕泰因英国未决司法案件签证问题确认缺席本届世界杯;另一核心球星穆罕默德·库杜斯(埃弗顿)因伤亦缺。两人是加纳中前场最重要的两块拼图——帕泰是中场组织核心,库杜斯是最具突破能力的攻击手。应急阵容:队长约旦·阿耶乌将领衔锋线,与欧内斯特·努阿马及安托万·塞梅尼约搭档。巴拿马方面:卡拉斯基利亚、戈多伊与门将梅希亚-卡哈尔均列存疑,但三人均已在训练中亮相,卡拉斯基利亚或以替补形式出场。综合:加纳双核缺阵使双方实力对比较赛前预期更加接近,竞彩HAD主胜2.07/平3.00/客3.20,边际偏向巴拿马;需主会话重扫edge。",
   "enFull": "Sports Mole and Goal.com both confirm: Thomas Partey is ruled out of the 2026 World Cup due to visa complications from an ongoing legal case in the UK; Mohammed Kudus (Everton) is also absent with injury. Together they represent Ghana's two most influential players. Captain Jordan Ayew leads the attack flanked by Ernest Nuamah and Antoine Semenyo. For Panama: Adalberto Carrasquilla, Anibal Godoy, and goalkeeper Luis Mejia Cajar are all doubts but were spotted in training; Carrasquilla could feature as a sub. Assessment: Ghana's dual absences substantially level the playing field; HAD odds (Ghana 2.07/Draw 3.00/Panama 3.20) now reflect a near-even contest — main session should re-scan edge.",
   "links": [
    {"name": "Sports Mole: Ghana vs Panama team news", "url": "https://www.sportsmole.co.uk/football/ghana/injury-news/team-news/ghana-vs-panama-injury-suspension-list-predicted-xis_599289.html"},
    {"name": "Goal.com: Ghana vs Panama World Cup preview", "url": "https://www.goal.com/en-us/news/ghana-panama-world-cup-preview/bltc57f7610ee6813ff"}
   ]
  },
  {
   "date": "06-18",
   "match": "乌兹别克 vs 哥伦比亚",
   "impact": "乌兹双主力缺",
   "tone": "away",
   "text": "乌兹别克马沙里波夫(背伤)与阿利库洛夫(膝手术)确认缺席;阿利乔诺夫(小腿)受监控;哥伦比亚全员无伤——豪梅/迪亚斯/阿里亚斯/苏亚雷斯全主力(Sports Mole·RotoWire)",
   "en": "Uzbekistan lose Masharipov (back) and Aliqulov (knee surgery) confirmed out; Alijonov (calf) monitored; Colombia at full strength — James, Diaz, Arias, Suarez all fit (Sports Mole·RotoWire)",
   "full": "Sports Mole与RotoWire双源赛前确认:乌兹别克中场马沙里波夫因顽固背伤缺席热身赛,正式退出世界杯名单;防守球员阿利库洛夫膝关节手术完全出局;后卫阿利乔诺夫(小腿)与中场加尼耶夫(轻伤)受监控。哥伦比亚对比鲜明:全员无伤,豪梅·罗德里格斯、路易斯·迪亚斯、霍恩·阿里亚斯、路易斯·苏亚雷斯全主力首发无虞。价值判断:乌兹别克多人伤缺加剧本就悬殊的实力差距,竞彩HAD 9.65:4.85:1.22,让球+1 value=0.93<1.10,空仓候选,主会话可确认是否有隐蔽edge。",
   "enFull": "Sports Mole and RotoWire confirm: Uzbekistan midfielder Jaloliddin Masharipov ruled out (back injury, missed warm-up friendlies; replaced by Jiyanov). Husniddin Aliqulov also out (knee surgery). Khojiakbar Alijonov (calf) and Aziz Ganiev (minor knock) both monitored. Colombia enter at full strength: James Rodriguez (captain), Luis Diaz, Jhon Arias, and Luis Suarez all fully fit. Assessment: Uzbekistan's injury situation worsens an already lopsided matchup; HHAD (+1) value 0.93 below the ≥1.10 buy threshold — main session should confirm no hidden edge.",
   "links": [
    {"name": "Sports Mole: Uzbekistan vs Colombia team news", "url": "https://www.sportsmole.co.uk/football/uzbekistan/world-cup-2026/team-news/uzbekistan-vs-colombia-injury-suspension-list-predicted-xis_599305.html"},
    {"name": "RotoWire: Uzbekistan vs Colombia preview", "url": "https://www.rotowire.com/soccer/article/uzbekistan-vs-colombia-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-k-118365"}
   ]
  },
  {
   "date": "06-18",
   "match": "英格兰 vs 克罗地亚",
   "impact": "利夫拉门托缺席WC",
   "tone": "away",
   "text": "英格兰右后卫利夫拉门托(纽卡斯尔)赛前训练撕裂小腿,确认缺席整届世界杯;查洛巴斯(切尔西)紧急补召,赖斯/萨卡接受评估但预计出战(Goal·Sports Mole·RotoWire)",
   "en": "England RB Tino Livramento (Newcastle) tears calf in training eve of Croatia clash, ruled out of tournament; Trevoh Chalobah (Chelsea) called up as replacement; Rice/Saka assessed but expected to play (Goal/Sports Mole/RotoWire)",
   "full": "Goal.com与Sports Mole双方赛前确认:英格兰右后卫蒂诺·利夫拉门托(纽卡斯尔)在克罗地亚揭幕战前一天训练中撕裂小腿肌肉,已确认退出整届2026世界杯。图赫尔主帅紧急召入切尔西中卫特雷沃·查洛巴斯顶替其27人名额。此外,德克兰·赖斯与布卡约·萨卡均已接受英格兰医疗团队评估,但两人均预计不会受到实质威胁,预计正常出战周三(当地周二)克罗地亚一役。英格兰右路防线配置将因此调整,可能由里斯·詹姆斯改任右后卫,防线整体覆盖能力略降。克罗地亚坐拥莫德里奇/科瓦契奇/佩里西奇全员可用,右路突击机会或有所上升。⚠️ 利夫拉门托缺席属赛前临时变化,对英格兰右路防守有边际负面影响。",
   "enFull": "Goal.com and Sports Mole both confirm: England right-back Tino Livramento (Newcastle United) has been ruled out of the entire 2026 World Cup after suffering a calf injury in training on the eve of England's opener against Croatia. Thomas Tuchel has called up Trevoh Chalobah (Chelsea) as his replacement in the 27-man squad. Additionally, Declan Rice and Bukayo Saka are being assessed by the England medical team, but neither's availability for the Wednesday clash is believed to be under threat — both are expected to start. England's right-flank defensive cover is now reduced; Reece James is likely to be shifted to right-back. Croatia arrive with full availability including Modric, Kovacic, and Perisic — they may target England's adjusted right channel. ⚠️ This is a last-minute personnel change with marginal negative impact on England's right-side defense; Croatia's value vs England remains under the ≥1.10 threshold based on current HAD pricing.",
   "links": [
    {"name": "Goal: England star ruled out of 2026 World Cup", "url": "https://www.goal.com/en-us/lists/england-star-ruled-out-of-2026-world-cup-on-eve-of-croatia-opener-in-huge-injury-blow-for-thomas-tuchel/blt21765740b9f469bb"},
    {"name": "Sports Mole: England vs Croatia injury suspension list", "url": "https://www.sportsmole.co.uk/football/england/world-cup-2026/injuries-and-suspensions/rice-saka-latest-england-vs-croatia-injury-suspension-list-and-return-dates_599165.html"},
    {"name": "RotoWire: England vs Croatia preview", "url": "https://www.rotowire.com/soccer/article/england-vs-croatia-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-l-118361"}
   ]
  },
  {
   "date": "06-18",
   "match": "葡萄牙 vs 刚果金",
   "impact": "莱昂红牌不禁赛",
   "tone": "home",
   "text": "葡萄牙莱昂(AC米兰)在热身赛对智利中领红,但FIFA规定友谊赛红牌不转世界杯正赛——确认可首发出战(Athlonsports·Yahoo Sports·SundayGuardian)",
   "en": "Portugal winger Leao (AC Milan) received red card in Chile friendly, but FIFA rules confirm no carryover to World Cup — Leao cleared for DR Congo opener (Athlonsports/Yahoo Sports/SundayGuardian)",
   "full": "Athlonsports、Yahoo Sports与Sunday Guardian Live三方均确认:葡萄牙边锋拉斐尔·莱昂(AC米兰)在6月6日世界杯热身赛对阵智利时以暴力行为被直接红牌罚出,但根据FIFA纪律守则第69条,友谊赛中积累的停赛不转入世界杯正式赛事——莱昂确认可上场出战周三(北京时间01:00)对阵刚果金的揭幕战。葡萄牙首发阵容预计为:科斯塔GK、坎塞洛-R·迪亚斯-阿劳霍-N·门德斯四后卫、若昂·内维斯-维蒂尼亚中轴、B·费尔南德斯-B·席尔瓦-若昂·菲利克斯攻线,C罗锋线牵引。鲁本·迪亚斯虽赛季末腿筋伤停,但已在热身赛中完全复出。⚠️ 莱昂此前疑似出战风险已消除,葡萄牙进攻端火力全开;刚果金防守资源相当有限,葡萄牙依然是重量级大热门。",
   "enFull": "Athlonsports, Yahoo Sports, and Sunday Guardian Live all confirm: Rafael Leao (AC Milan) was shown a straight red card for violent conduct in Portugal's World Cup warm-up friendly against Chile on June 6. However, under FIFA Disciplinary Code Article 69, suspensions from exhibition/friendly matches do not carry over into official World Cup competition — Leao is cleared to play in Portugal's tournament opener vs DR Congo (Wednesday, 01:00 BJT). Portugal's predicted XI includes Diogo Costa; Cancelo, Araujo, Ruben Dias, Nuno Mendes; Joao Neves, Vitinha; Bruno Fernandes, Bernardo Silva, Joao Felix; Cristiano Ronaldo. Ruben Dias returned from a late-season hamstring injury in pre-tournament friendlies and is fully fit. ⚠️ The earlier Leao red card suspension risk has been eliminated — Portugal attack is at full strength; DR Congo's defensive resources are limited in this mismatch.",
   "links": [
    {"name": "Athlonsports: Leao red card Portugal World Cup", "url": "https://athlonsports.com/soccer/will-rafael-leao-miss-portugal-world-cup-opening-game-red-card"},
    {"name": "Yahoo Sports: Leao red card Portugal", "url": "https://sports.yahoo.com/articles/rafael-leao-miss-portugals-world-190050498.html"},
    {"name": "SundayGuardian: Leao suspension rules explained", "url": "https://sundayguardianlive.com/sports/will-rafael-leao-miss-fifa-world-cup-2026-matches-after-punching-chiles-ivan-roman-fifa-suspension-rules-explained-202870/"}
   ]
  },
  {
   "date": "06-18",
   "match": "英格兰 vs 克罗地亚",
   "impact": "赖斯萨卡无碍",
   "tone": "home",
   "text": "英格兰赖斯(兵工厂)与萨卡(兵工厂)均接受医疗团队评估,但出战状态预计不受威胁;克罗地亚卡莱塔-卡尔恢复训练、全员可用(Sports Mole·ESPN)",
   "en": "England's Declan Rice and Bukayo Saka assessed by medical staff but both expected to play vs Croatia; Croatia's Caleta-Car back in training, full squad available including Modric and Perisic (Sports Mole/ESPN)",
   "full": "Sports Mole伤停汇总与ESPN预测首发XI均确认:德克兰·赖斯与布卡约·萨卡虽处于评估状态但预计正常出战克罗地亚。克罗地亚方面,此前两场热身赛缺席的中卫杜耶·卡莱塔-卡尔已恢复全量训练并有望入队,莫德里奇、科瓦契奇与佩里西奇全员可用。英格兰核心双星不受利夫拉门托缺席影响,但右路防守配置须重新调整(可能詹姆斯改任右后卫)。从赔率角度:英格兰仍为大热门(HAD主胜约42%,平局29%),克罗地亚作为历届黑马在1:2局面下整合调整能力出色,有平局预期。⚠️ 此匹配无达标value盘口,空仓候选。",
   "enFull": "Sports Mole's pre-match injury/suspension list and ESPN's predicted line-up for England vs Croatia both confirm: Declan Rice (Arsenal) and Bukayo Saka (Arsenal) are under medical assessment but neither's availability for the Wednesday opener is believed to be under threat — both are expected to start. For Croatia: Duje Caleta-Car, who missed both warm-up friendlies, has returned to full training and is expected to be included in the squad; Luka Modric, Mateo Kovacic, and Ivan Perisic are all confirmed fit. England's core midfield-attack axis is intact; right-back reshuffling due to Livramento's absence remains the primary tactical variable. Market context: England ~42% implied win probability at current HAD odds; Croatia are underdog with 29% draw and 29% win odds. ⚠️ No qualifying value bet identified across HAD or HHAD markets — no-bet candidate.",
   "links": [
    {"name": "Sports Mole: England vs Croatia injury list", "url": "https://www.sportsmole.co.uk/football/england/world-cup-2026/injuries-and-suspensions/rice-saka-latest-england-vs-croatia-injury-suspension-list-and-return-dates_599165.html"},
    {"name": "ESPN: England vs Croatia World Cup 2026", "url": "https://www.espn.com/soccer/story/_/id/49047660/fifa-world-cup-2026-england-vs-croatia-tv-channel-how-watch-kick-live-stream-referee-predicted-line-ups"}
   ]
  },
  {
   "date": "06-17",
   "match": "奥地利 vs 约旦",
   "impact": "鲍姆加特纳伤缺",
   "tone": "away",
   "text": "奥地利中场核心鲍姆加特纳(莱比锡AMF)因右大腿肌肉撕裂确认缺席,伤于6/1友谊赛热身;格里利奇/维默同列存疑,阿拉巴预计首发(ESPN·Sports Mole·RotoWire)",
   "en": "Austria AMF Christoph Baumgartner (RB Leipzig) confirmed out with right thigh tear suffered in June 1 friendly warm-up; Grillitsch/Wimmer also doubts, Alaba expected to start (ESPN/Sports Mole/RotoWire)",
   "full": "ESPN、Sports Mole与RotoWire三方赛前情报均确认:奥地利进攻中场核心克里斯托夫·鲍姆加特纳(莱比锡)在6月1日与突尼斯热身赛前热身时撕裂右大腿肌肉,确认缺席本届世界杯全程。此外帕特里克·维默与弗洛里安·格里利奇同列存疑,大卫·阿拉巴尽管有伤在身但预计仍将首发出战。萨比策将后移填补中场调度职能,阿纳托维奇仍锁定锋线核心位置。总体而言,鲍姆加特纳的缺席使奥地利进攻端创造力有所下降,但奥地利整体实力仍明显优于约旦(约旦双前锋尽缺),空仓决策不变(HHAD value 0.94<1.10安全边际)。",
   "enFull": "ESPN, Sports Mole, and RotoWire all confirm Austria AMF Christoph Baumgartner (RB Leipzig) is ruled out of the 2026 World Cup — he suffered a right thigh muscle tear during the warm-up of a friendly against Tunisia on June 1. Additional doubts: Patrick Wimmer and Florian Grillitsch are both listed as questionable; David Alaba, despite carrying an injury concern, is expected to start. Sabitzer likely shifts to a deeper role to cover Baumgartner's playmaking function; Arnautovic remains the striker target. Overall impact: reduced attacking creativity, but Austria are still clear favorites against a Jordan side missing both senior strikers (Al-Naimat + Sabra). No-bet stance unchanged (HHAD value 0.94 < 1.10 threshold).",
   "links": [
    {"name": "ESPN: Austria vs Jordan World Cup 2026 preview", "url": "https://www.espn.com/soccer/story/_/id/49058237/fifa-world-cup-2026-austria-vs-jordan-tv-channel-how-watch-kickoff-live-stream-referee-predicted-line-ups"},
    {"name": "Sports Mole: Austria vs Jordan team news", "url": "https://www.sportsmole.co.uk/football/austria/world-cup-2026/preview/austria-vs-jordan-prediction-team-news-lineups_599171.html"},
    {"name": "RotoWire: Austria vs Jordan preview", "url": "https://www.rotowire.com/soccer/article/austria-vs-jordan-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-j-118225"}
   ]
  },
  {
   "date": "06-17",
   "match": "伊拉克 vs 挪威",
   "impact": "拉森因伤缺席",
   "tone": "away",
   "text": "挪威中锋约根·斯特兰德·拉森确认因伤缺席对阵伊拉克;伊拉克主帅阿诺德确认26人全员可用无伤缺(Sports Mole·Goal)",
   "en": "Norway striker Jørgen Strand Larsen ruled out injured vs Iraq; Iraq coach Graham Arnold confirms full 26-man squad available, no injury concerns (Sports Mole/Goal)",
   "full": "Sports Mole与Goal赛前情报均确认:挪威前锋约根·斯特兰德·拉森(赫罗纳)因伤缺席本场,是挪威阵容中唯一确认缺席球员。哈兰德与厄德高已提前确认健康首发,斯特兰德·拉森的缺席不影响挪威核心双星组合。伊拉克方面,主帅格雷厄姆·阿诺德(前澳大利亚主帅)确认26人全员无伤缺,场地状态良好。从影子book角度:拉森缺席略降低挪威进攻深度,但哈兰德+厄德高双核健康使影响边际化;伊拉克防反策略(Arnold铁桶阵)仍是核心变量。⚠️ 现有分析已将挪威算作全员可用,拉森缺席微调偏向伊拉克,但幅度有限(拉森非首发主力)。",
   "enFull": "Sports Mole's Iraq vs Norway injury/suspension article and Goal's match preview confirm: Jørgen Strand Larsen (Girona, Norway striker) is ruled out of the match through injury — the only confirmed Norway absentee. Haaland and Ødegaard are both confirmed fit and available. For Iraq, coach Graham Arnold (former Australia national team manager) states the full 26-man roster is available with no injury concerns. Shadow-book impact: Larsen's absence marginally reduces Norway's attacking depth, but Haaland–Ødegaard dual core remains intact, keeping the net effect small. Iraq's defensive counter-attacking setup (Arnold's organized low block) remains the primary tactical variable. ⚠️ Existing model treated Norway as fully available; Larsen out provides a slight micro-tilt toward Iraq, but given Larsen's squad role (rotation rather than guaranteed starter), magnitude is limited.",
   "links": [
    {"name": "Sports Mole: Iraq vs Norway team news", "url": "https://www.sportsmole.co.uk/football/iraq/world-cup-2026/team-news/iraq-vs-norway-injury-suspension-list-predicted-xis_599240.html"},
    {"name": "Goal: Iraq vs Norway World Cup preview", "url": "https://www.goal.com/en/news/iraq-norway-world-cup-preview/blt35615d31b35c17b2"}
   ]
  },
  {
   "date": "06-17",
   "match": "法国 vs 塞内加尔",
   "impact": "萨尔状态矛盾",
   "tone": "away",
   "text": "⚠️情报矛盾:ESPN与Al Jazeera赛前报道均将萨尔(马赛右翼)列入塞内加尔首发进攻三叉戟(马内+萨尔+杰克逊),与此前'萨尔确认缺席'条目直接矛盾;开球(03:00)前核查官方XI(ESPN·Al Jazeera)",
   "en": "⚠️Intel conflict: ESPN and Al Jazeera both list Ismaila Sarr (Marseille) in Senegal's predicted starting attack (Mane-Sarr-Jackson), contradicting the earlier 'Sarr confirmed absent' entry — verify official XI at kickoff 03:00 BJT (ESPN·Al Jazeera)",
   "full": "ESPN(France vs Senegal World Cup 2026 preview)与Al Jazeera赛前最新均明确将伊斯玛拉·萨尔(Marseille右翼)列入塞内加尔预测首发进攻线:马内+萨尔+尼古拉斯·杰克逊三叉戟组合。这与当前data.js新闻条目'萨尔/萨巴利确认缺席'(来源:Sports Mole)形成直接矛盾。可能是Sports Mole伤停汇总文章与预测XI文章给出了不同结论,或情况在近12小时内发生变化。对价值闸影响:若萨尔首发,塞内加尔进攻威胁明显高于'萨尔缺席'假设,但法国胜平负value及让球value仍低于1.10——空仓决策不变。⚠️ 唯一可靠确认方法:开球前60分钟官方首发XI公布后核查。",
   "enFull": "ESPN's France vs Senegal preview and Al Jazeera's pre-match report (June 15-16) both list Ismaila Sarr (Marseille, right wing) in Senegal's predicted starting attack alongside Sadio Mane and Nicolas Jackson. This directly contradicts the existing data.js entry 'Sarr/Sabaly confirmed unavailable (Sports Mole)'. The discrepancy cannot be resolved from available information — it may reflect different conclusions from Sports Mole's injury-list article vs predicted-XI article, or a status change in the past 12 hours. Value impact: if Sarr starts, Senegal's attacking output is meaningfully higher than the 'Sarr absent' base case used in the 68%→73% probability estimate. However, all France HAD and HHAD values remain below the ≥1.10 threshold — no-bet stance unchanged. ⚠️ Only reliable confirmation: official XI announced ~60 min before 03:00 BJT kickoff.",
   "links": [
    {"name": "ESPN: France vs Senegal World Cup 2026 preview", "url": "https://www.espn.com/soccer/story/_/id/49059260/france-vs-senegal-fifa-world-cup-2026-tv-channel-how-watch-kick-live-stream-injury-predicted-line-ups"},
    {"name": "Al Jazeera: France vs Senegal – teams, lineups", "url": "https://www.aljazeera.com/sports/2026/6/15/france-vs-senegal-world-cup-2026-mbappe-teams-lineups-start-dembele"}
   ]
  },
  {
   "date": "06-16",
   "match": "阿根廷 vs 阿尔及利",
   "impact": "塔利亚菲科缺席",
   "tone": "away",
   "text": "阿根廷主力左后卫塔利亚菲科确认比目鱼肌撕裂,缺席对阵阿尔及利及第二场奥地利,梅迪纳补位首发(Mundo Albiceleste·OneFootball 06-11确认)",
   "en": "Argentina LB Nicolás Tagliafico ruled out vs Algeria and Austria (soleus tear); Facundo Medina to start at left back (Mundo Albiceleste/OneFootball confirmed)",
   "full": "Mundo Albiceleste(06-11)与OneFootball多篇报道确认:阿根廷主力左后卫尼古拉斯·塔利亚菲科(Lyon)在赛前约一周确诊比目鱼肌撕裂,医疗检测确认缺席阿尔及利及第二场奥地利。斯卡洛尼决定保留其在26人名单内(他是最有经验的左后卫,等待赛后恢复期望淘汰赛回归)。补位:法昆多·梅迪纳(RC朗斯)预计出发首发——攻守能力均弱于塔利亚菲科。影响评估:阿根廷防守端有一定削弱,但阿尔及利进攻亦残缺(本塞巴尼缺席),净影响有限。价值判断不变:集成概率约88%,HHAD value≈0.97<1.10安全边际——仍空仓。⚠️ 如塔利亚菲科赛前突然伤愈复出需重扫。",
   "enFull": "Mundo Albiceleste (June 11) and OneFootball (June 11-16) confirmed: Argentina first-choice left back Nicolás Tagliafico sustained a soleus muscle tear roughly one week before the tournament, ruling him out for matches vs Algeria (Group J opener) and Austria (Match 2). Scaloni retains Tagliafico on the 26-man roster — he is Argentina's most experienced LB, with hopes of a recovery race for the knockout stages. Replacement: Facundo Medina (RC Lens) to start at left back — a more defensive-minded option with lower attacking output. Impact: Argentina's defensive vulnerability is slightly elevated, but Algeria are also depleted (Bensebaini absent) and lack elite attacking depth. Net effect is limited. ⚠️ Value unchanged: Argentina integrated probability ~88%, HHAD value ≈0.97 — below the ≥1.10 buy threshold. No-bet stance holds. Monitor for last-minute Tagliafico recovery.",
   "links": [
    {"name": "Mundo Albiceleste: Tagliafico to miss two World Cup matches", "url": "https://mundoalbiceleste.com/2026/06/11/nicolas-tagliafico-set-to-miss-two-matches-for-argentina-national-team-at-world-cup/"},
    {"name": "OneFootball: Why Tagliafico stays in squad despite injury", "url": "https://onefootball.com/es/noticias/why-nicolas-tagliafico-stays-in-the-world-cup-squad-despite-injury-43004515"}
   ]
  },
  {
   "date": "06-16",
   "match": "阿根廷 vs 阿尔及利",
   "impact": "梅西腿伤全愈三核就绪",
   "tone": "home",
   "text": "斯卡洛尼赛前确认梅西大腿疲劳伤已完全康复、将按计划首发200帽；ESPN证实阿根廷'三核无虞'——梅西、E.马丁内斯与胡利安·阿尔瓦雷斯均已就绪，阵容可控平静(ESPN·Business Standard)",
   "en": "Scaloni confirms Messi's hamstring 'totally recovered' — no more minute-management caveat; ESPN: 'Argentina calm' with Messi, Emi Martinez AND Julián Álvarez all fit ahead of Algeria opener (ESPN·Business Standard)",
   "full": "ESPN（06-16）及Business Standard赛前最新确认:①梅西大腿疲劳伤已完全康复——与此前「斯卡洛尼将管控分钟数(large腿担忧)」的表述相比，这是一次明确升级。斯卡洛尼表示球队「对阵容状况平静自信」，无需出于保护目的限制梅西出场时间。②胡利安·阿尔瓦雷斯（曼城）亦获独立确认健康就绪——此前仅提到「训练返回」，现已升级为完全可战。③埃米利亚诺·马丁内斯（手指骨折赛前）在此前消息基础上再次获确认首发门将位置。综合三重确认：阿根廷核心竞争力高于「梅西受限保护」的悲观场景。但价值层面不变：阿根廷集成概率约88%，-1让胜 value≈0.90，胜平负最优值≈0.80，仍均低于≥1.10价值闸——空仓决定不变。",
   "enFull": "ESPN (June 16) and Business Standard pre-match update: ① Lionel Messi's hamstring ailment is 'totally recovered' per Scaloni — a clear upgrade from earlier 'minute management due to ongoing concern' status; no protective substitution planned. Scaloni described the squad as 'calm' ahead of Algeria. ② Julián Álvarez (Man City) is independently confirmed fully fit — upgraded from 'returned to training' to 'available to play'. ③ Emiliano Martínez (broken finger pre-tournament) confirmed fit again as starter. Three-pronged fitness confirmation means Argentina's attacking depth is at expected capacity, not the protected scenario. Value unchanged: Argentina integrated probability ~88%; HHAD value ≈0.90; HAD best value ≈0.80 — all below the ≥1.10 buy threshold. No-bet stance holds.",
   "links": [
    {"name": "ESPN: Argentina calm with Messi, Martinez, Álvarez fit", "url": "https://www.espn.com/soccer/story/_/id/49075716/argentina-calm-lionel-messi-emiliano-martinez-julian-alvarez-fit-ahead-algeria"},
    {"name": "Business Standard: Scaloni issues fitness update", "url": "https://www.business-standard.com/sports/fifa-world-cup/argentina-vs-algeria-messi-prepared-for-his-for-his-6th-world-cup-scaloni-126061600157_1.html"}
   ]
  },
  {
   "date": "06-17",
   "match": "奥地利 vs 约旦",
   "impact": "约旦双锋尽缺",
   "tone": "home",
   "text": "约旦前锋萨布拉(Ibrahim Sabra)因伤退出23人名单，由穆罕默德·塔哈替补——继Al-Naimat(十字韧带)后约旦主力前锋双双缺席，进攻深度大幅削弱(Sports Mole·RotoWire)",
   "en": "Jordan forward Ibrahim Sabra ruled out and replaced by Mohammad Taha — alongside Al-Naimat (ACL), Jordan lose both senior strikers, severely depleting attacking options (Sports Mole·RotoWire)",
   "full": "Sports Mole与RotoWire双源确认(06-16):约旦首要前锋亚赞·Al-Naimat(预选赛8球)因去年12月十字韧带断裂早已缺席，现再确认前锋伊布拉欣·萨布拉(Ibrahim Sabra)亦因伤退出23人名单，由穆罕默德·塔哈(Mohammad Taha)顶替入队。两名主力射手同时缺席对约旦进攻端打击显著——上届非洲区预选赛中萨布拉曾是得分重要补充。综合评估:约旦进攻端严重失血，防反体系(三中卫/低位紧压)仍是主要战术依托，但缺乏终结点将进一步压低约旦威胁上限。此前focus判断「奥地利净胜2+不确定性」受约旦防守韧性影响，并非约旦进攻，所以空仓决策不变(HHAD value 0.94<1.10)；但若赔率因此出现大幅迁移需重扫edge。",
   "enFull": "Sports Mole and RotoWire (June 16): Jordan's second senior striker Ibrahim Sabra has been ruled out of the 2026 FIFA World Cup squad due to injury, replaced by Mohammad Taha. This comes on top of the earlier confirmed absence of talismanic forward Yazan Al-Naimat (ACL, sidelined since December 2025, 8 WC qualifying goals). Jordan now enter Group J without both their first-choice forwards. Tactical context: Jordan's low-block defensive structure (three-CB shape) remains intact, so their defensive resilience is unchanged. However, reduced offensive threat limits Jordan's ability to punish Austria on the counter-attack. Verdict impact: Austria's no-bet stance holds (HHAD value 0.94 still below the ≥1.10 buy threshold); however, monitor if odds shift materially and re-scan edge.",
   "links": [
    {"name": "Sports Mole: Austria vs Jordan team news", "url": "https://www.sportsmole.co.uk/football/austria/world-cup-2026/team-news/austria-vs-jordan-injury-suspension-list-predicted-xis_599179.html"},
    {"name": "RotoWire: Austria vs Jordan preview", "url": "https://www.rotowire.com/soccer/article/austria-vs-jordan-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-j-118225"}
   ]
  },
  {
   "date": "06-17",
   "match": "法国 vs 塞内加尔",
   "impact": "萨尔/萨巴利确认缺席+3人存疑",
   "tone": "away",
   "text": "终盘更新:伊斯玛拉·萨尔(马赛右翼)、萨巴利、雅各布斯Sports Mole确认缺席;迪亚奥/恩迪亚耶/格耶存疑;马内首发。量化:法国胜率68%→~73%,value=0.96,仍低于≥1.10闸,空仓不变(Sports Mole·ESPN)",
   "en": "Final check: Ismaila Sarr (Marseille RW), Sabaly, Jakobs confirmed unavailable per Sports Mole; Diao/Ndiaye/Gueye doubtful; Mane starts. Quantified: France win prob 68%→~73%, value 0.96 vs 1.10 threshold — no-bet unchanged (Sports Mole·ESPN)",
   "full": "Sports Mole与Yahoo Sports赛前最新(06-16):塞内加尔队内出现三个小伤情担忧:①阿桑·迪亚奥因挫伤本周缺席训练;②谢里夫·恩迪亚耶周六无故缺席完整训练,原因不明;③老将伊德里萨·格耶(埃弗顿)未完成周六完整训练课,属预防性措施。但塞内加尔队工作人员表示三人均无大碍,不影响参赛。核心球星萨迪奥·马内(未来俱乐部)确认百分百状态，将首发出战。综合评估:伤情总体轻微，对法国-塞内加尔集成预测(主67%/平21%/客12%)无显著影响，纪律空仓(HAD value全低于1.10)不变。⚠️ 三人出场状态请于开球前60分钟查阅官方XI确认。",
   "enFull": "Sports Mole and Yahoo Sports (June 16): Senegal have three minor fitness concerns ahead of their Group I opener vs France. ① Assane Diao missed training earlier this week due to a contusion; ② Cherif Ndiaye was absent from Saturday's session for unexplained reasons; ③ veteran Idrissa Gueye (Everton) did not complete the full training session as a precautionary measure. However, the Senegal coaching staff confirmed no major concern over any of the trio. Star forward Sadio Mane (Future FC) is fully fit and confirmed to start. Assessment: these are minor bumps that do not materially alter the match-probability outlook (France 67%/Draw 21%/Senegal 12%). HAD values remain below the ≥1.10 buy threshold — no-bet unchanged. ⚠️ Check official lineups 60 minutes before kick-off to confirm all three players' status.",
   "links": [
    {"name": "Sports Mole: France vs Senegal injury list", "url": "https://www.sportsmole.co.uk/football/france/world-cup-2026/team-news/france-vs-senegal-injury-suspension-list-predicted-xis_599161.html"},
    {"name": "Yahoo Sports: World Cup 2026 live injury updates", "url": "https://sports.yahoo.com/soccer/live/2026-world-cup-news-live-updates-injuries-storylines-as-the-tournament-kicks-off-200000921.html"}
   ]
  },
  {
   "date": "06-17",
   "match": "法国 vs 塞内加尔",
   "impact": "萨利巴孔代双确认",
   "tone": "home",
   "text": "萨利巴(背伤)已完成全量训练确认首发;孔代从肌肉拉伤中恢复亦确认首发右后卫;麦格南负荷管理非大碍——法国后防线完整无伤病(Sports Mole·ESPN)",
   "en": "Saliba (back) confirmed fully fit and expected to start; Kounde recovered from muscle scare to start at RB; Maignan in load management but no serious concern — France back line intact (Sports Mole·ESPN)",
   "full": "Sports Mole与ESPN赛前最新:①威廉·萨利巴(阿森纳)上赛季欧冠决赛后曾被报告背伤复发,但其随后完成45分钟热身(3-1胜北爱尔兰),目前已全量训练,预计首发中后卫;②儒勒斯·孔代从肌肉拉伤中完全恢复,确认首发右后卫,无出场限制;③门将米克·麦格南周六仅做负荷管理缺席完整训练,但伤情并不严重,仍是首发门将。综合评估:法国后卫线此前「萨利巴存疑」的风险已消除,首发防线接近满员最强阵容。预测XI:麦格南;孔代、萨利巴、于帕梅卡诺、迪涅;拉比奥、楚阿梅尼;杜埃、登贝莱、奥利斯;姆巴佩。对focus中「法国-1让胜/胜平负 edge」的价值判断——法国防线稳固进一步压缩塞内加尔反扑空间,但value依然<1.10,纪律空仓不变。",
   "enFull": "Sports Mole and ESPN (latest pre-match): ① William Saliba (Arsenal) had reported a recurring back issue post-UCL final but completed 45 minutes in the 3-1 friendly win over Northern Ireland and is now training fully — expected to start at CB; ② Jules Kounde has fully recovered from a muscular scare and is confirmed to start at RB with no restrictions; ③ GK Mike Maignan skipped full training Saturday for load management only — not a serious injury concern, still the projected starter. Takeaway: France's backline concern ('Saliba doubtful') is resolved; they enter with a near-full-strength defensive unit. Predicted XI: Maignan; Kounde, Saliba, Upamecano, Digne; Rabiot, Tchouameni; Doue, Dembele, Olise; Mbappe. Impact on value assessment: France's defensive stability further limits Senegal's counter-attack chances, but HAD/HHAD values remain below the ≥1.10 buy threshold — no-bet unchanged.",
   "links": [
    {"name": "Sports Mole: France vs Senegal predicted lineup", "url": "https://www.sportsmole.co.uk/football/france/world-cup-2026/predicted-lineups/saliba-status-doue-decision-predicted-france-xi-vs-senegal_599158.html"},
    {"name": "ESPN: France vs Senegal preview", "url": "https://www.espn.com/soccer/story/_/id/49059260/france-vs-senegal-fifa-world-cup-2026-tv-channel-how-watch-kick-live-stream-injury-predicted-line-ups"}
   ]
  },
  {
   "date": "06-17",
   "match": "阿根廷 vs 阿尔及利",
   "impact": "梅西200帽首发",
   "tone": "home",
   "text": "梅西确认首发将迎200帽里程碑;埃米利亚诺·马丁内斯赛前手指骨折已伤愈入选首发门将;塔利亚菲科(小腿)确认缺阵(Sports Mole·World Soccer Talk)",
   "en": "Messi confirmed to start for his milestone 200th cap; Emi Martinez (broken finger pre-tournament) passed fit and expected to start in goal; Tagliafico (calf) ruled out (Sports Mole·World Soccer Talk)",
   "full": "Sports Mole与World Soccer Talk赛前最新:①梅西(迈阿密国际)将出战阿根廷世界杯揭幕战,迎来国家队第200场里程碑出场,多家媒体确认首发;②埃米利亚诺·马丁内斯赛前曾被曝欧罗巴联赛决赛前手指骨折,但已通过体检,确认首发门将;③左后卫尼古拉斯·塔利亚菲科(小腿)确认缺阵。预测XI(4-3-3/4-2-3-1):埃米·马丁内斯;莫利纳、奥塔门迪、L·马丁内斯、梅迪纳;德保罗、费尔南德斯、麦卡利斯特;阿尔马达;梅西、L·马丁内斯。注:此前focus提到「Scaloni演练5后卫收缩」,但多家媒体预测XI均为4后卫阵型——开球前关注官方首发确认。纪律层面:阿根廷-1让胜value=0.90(<1.10),空仓不变。",
   "enFull": "Sports Mole and World Soccer Talk (pre-match): ① Lionel Messi will start Argentina's opener vs Algeria, marking his 200th international cap — a milestone confirmed by multiple outlets; ② Emiliano Martinez (Man United) suffered a broken finger before the Europa League final but has been cleared fit and is expected to start in goal; ③ Nicolas Tagliafico (calf) is confirmed absent. Predicted XI (4-3-3): E. Martinez; Molina, Otamendi, L. Martinez, Medina; De Paul, Fernandez, Mac Allister, Almada; Messi, L. Martinez. Note: earlier focus report mentioned Scaloni 'rehearsing 5-back defensive shape' but multiple media predict a 4-back system — check official XI closer to kick-off. Disciplinary takeaway: Argentina HHAD value 0.90 (<1.10 buy threshold) — no-bet unchanged.",
   "links": [
    {"name": "Sports Mole: Argentina vs Algeria predicted lineup", "url": "https://www.sportsmole.co.uk/football/argentina/world-cup-2026/predicted-lineups/messi-makes-more-history-emi-returns-predicted-argentina-lineup-vs-algeria_599169.html"},
    {"name": "World Soccer Talk: Messi included in Scaloni lineup", "url": "https://worldsoccertalk.com/world-cup/report-messi-included-in-scalonis-unprecedented-lineup-for-argentinas-world-cup-opener-vs-algeria/"}
   ]
  },
  {
   "date": "06-17",
   "match": "奥地利 vs 约旦",
   "impact": "阿拉巴带伤首发",
   "tone": "home",
   "text": "阿拉巴有伤在身但预计首发;鲍姆加特纳(肌肉伤)已被驱逐出名单,由柳比契奇替补;维默/格里利奇亦有伤势担忧(Sports Mole·ESPN)",
   "en": "Alaba expected to start despite injury concern; Baumgartner (muscle) ruled out of squad replaced by Ljubicic; Wimmer and Grillitsch also carrying knocks (Sports Mole·ESPN)",
   "full": "Sports Mole与ESPN赛前最新:①大卫·阿拉巴(皇马)有伤在身,但兰格尼克教练组仍预计他首发出战;②克里斯托夫·鲍姆加特纳因肌肉伤势被完全踢出23人名单,由德扬·柳比契奇顶替——鲍姆加特纳是奥地利技术中枢,其缺席一定程度上削弱了中场组织质量;③帕特里克·维默与弗洛里安·格里利奇亦带伤出战,存在不确定性。预测XI:施拉格;孔拉德·莱默、菲利普·利恩哈特、阿拉巴、菲利普·姆韦内;X·施拉格、塞瓦尔德;施密德、萨比策、格雷戈里奇;阿尔诺托维奇。约旦方面:Al-Naimat(预选赛8球首席射手)十字韧带伤缺(已price-in)。综合:奥地利主力名单受伤影响大于预期,但focus判断的「净胜2+不确定性」进一步被验证——空仓正确。",
   "enFull": "Sports Mole and ESPN (pre-match): ① David Alaba (Real Madrid) is carrying an injury but is still expected to be named in Rangnick's starting XI; ② Christoph Baumgartner has been withdrawn from the squad entirely due to a muscle injury, replaced by Dejan Ljubicic — Baumgartner's absence weakens Austria's technical midfield creativity; ③ Patrick Wimmer and Florian Grillitsch are also doubtful. Predicted XI: Schlager; Laimer, Lienhart, Alaba, Mwene; X. Schlager, Seiwald; Schmid, Sabitzer, Gregoritsch; Arnautovic. Jordan note: Al-Naimat (8 WC qualifying goals) is out since December with ACL (already market-priced). Takeaway: Austria's injury list is wider than initially anticipated, validating the focus assessment that 'Austria winning by 2+' is not high-confidence. No-bet stance correct — HHAD value 0.94 below ≥1.10 threshold.",
   "links": [
    {"name": "Sports Mole: Austria vs Jordan predicted lineup", "url": "https://www.sportsmole.co.uk/football/austria/world-cup-2026/predicted-lineups/will-alaba-start-predicted-austria-lineup-vs-jordan_599177.html"},
    {"name": "ESPN: Austria vs Jordan preview", "url": "https://www.espn.com/soccer/story/_/id/49058237/fifa-world-cup-2026-austria-vs-jordan-tv-channel-how-watch-kickoff-live-stream-referee-predicted-line-ups"}
   ]
  },
  {
   "date": "06-17",
   "match": "伊拉克 vs 挪威",
   "impact": "双核确认出战",
   "tone": "away",
   "text": "挪威主帅确认哈兰德状态锐利、厄德高(去年10月左膝MCL伤)已于热身赛对阵摩洛哥首发进球,驳斥赛前伤势质疑;挪威全队无出场限制伤员(Flashscore·ESPN)",
   "en": "Norway coach confirms Haaland sharp and fit; Odegaard (left-knee MCL Oct 2025) dismissed injury concerns after starting/scoring vs Morocco warm-up; Norway report no absences (Flashscore·ESPN)",
   "full": "挪威主帅索尔巴肯赛前确认：①哈兰德备战状态出色，无伤病顾虑；②厄德高去年10月因左膝内侧副韧带（MCL）损伤缺席多场关键资格赛，此后在热身赛对阵摩洛哥中首发并完成进球，随后向媒体表示膝盖「感觉良好」并驳斥了外界伤势质疑；③截至6月16日，挪威全队无伤病豁免，整体首发阵容完整。伊拉克方面，贾拉勒·哈桑（之前在玻利维亚附加赛缺席）归队，尤素福·阿明与阿里·阿勒哈马迪此前的伤势担忧亦已消除，全队同样健康出征。双方均无重大伤缺，挪威核心双核齐整出战，与市场定价中哈兰德+厄德高领衔的强度一致。",
   "enFull": "Norway head coach Stale Solbakken confirmed pre-match that both Erling Haaland and Martin Odegaard are fully fit for the World Cup opener vs Iraq. Odegaard suffered a left-knee MCL injury in October 2025, missing key qualifiers, but returned in a warm-up vs Morocco where he started and scored. He told Norwegian media his knee 'felt good' and dismissed pre-match injury concerns. Haaland is described as sharp in training. Norway report no injury absences and expect to field their strongest XI. Iraq welcomed back Jalal Hassan (absent during Bolivia play-off win) with Al-Hamadi and Amyn also available — full squad confirmed. No major absences on either side; Norway's star duo intact, consistent with their heavy market-favorite status.",
   "links": [
    {"name": "Flashscore: Odegaard dismisses injury concerns", "url": "https://www.flashscore.com/news/captain-martin-odegaard-shrugs-off-injury-concerns-as-norway-prepare-for-iraq-opener/hI9Ao5rm/"}
   ]
  },
  {
   "date": "06-16",
   "match": "比利时 vs 埃及",
   "impact": "德巴斯特伤缺",
   "tone": "away",
   "text": "比利时中后卫德巴斯特(腿部伤势)确认无缘揭幕战，预测首发中路改由梅什勒+恩戈伊搭档，两人国际赛场搭档经验相对有限(Sports Mole·ESPN·RotoWire)",
   "en": "Belgian CB Zeno Debast confirmed out for opener with a leg injury; Mechele+Ngoy CB pairing replaces him, a combination with limited shared international experience (Sports Mole·ESPN·RotoWire)",
   "full": "多家权威媒体（Sports Mole、ESPN、RotoWire）一致确认：比利时中后卫泽诺·德巴斯特因腿部伤势，确认无法出战世界杯揭幕战（比利时 vs 埃及，06-16 03:00）。德巴斯特是比利时后防重建的核心，其缺席意味着中后卫组合改由布兰顿·梅什勒搭档纳坦·恩戈伊（Nathan Ngoy），两人搭档大赛验证较少，存在一定协防风险。战术影响：比利时中路覆盖略有削弱，但整体阵容厚度依然强于埃及；对现有「比利时主胜」集成预测（61.2%）影响有限，无票状态按§3不变。",
   "enFull": "Multiple credible sources (Sports Mole, ESPN, RotoWire) confirm Belgian CB Zeno Debast is sidelined for the World Cup opener vs Egypt (June 16 03:00 BJT) with a leg injury. Without him, Belgium line up with Brandon Mechele and Nathan Ngoy at CB — a pairing with limited top-level international experience together, introducing some defensive coordination risk. Tactical impact: slight weakening of Belgium's central defensive block, though Belgium remain clear favorites. Belgium's integrated win probability (61.2%) may be marginally affected; no-bet stance (HAD value below ≥1.10 threshold) unchanged.",
   "links": [
    {"name": "Sports Mole: Belgium vs Egypt team news", "url": "https://www.sportsmole.co.uk/football/belgium/world-cup-2026/team-news/belgium-vs-egypt-injury-suspension-list-predicted-xis_599144.html"},
    {"name": "ESPN: Belgium vs Egypt preview", "url": "https://www.espn.com/soccer/story/_/id/49046985/belgium-vs-egypt-fifa-world-cup-2026-tv-channel-how-watch-kick-live-stream-injury-predicted-line-ups"}
   ]
  },
  {
   "date": "06-16",
   "match": "比利时 vs 埃及",
   "impact": "多库惊魂复训",
   "tone": "home",
   "text": "多库训练中途提前离场引发担忧，但随后归队完成训练，参战揭幕战无虞；预测首发XI仍列左路(Sports Mole·ESPN)",
   "en": "Doku left training early causing concern but returned to complete the session; still projected to start at LW vs Egypt (Sports Mole·ESPN)",
   "full": "赛前训练新情报（Sports Mole/ESPN）：比利时左路边锋杰雷米·多库（曼城）训练中途提前离场，一度引发伤情担忧。但媒体随后确认，多库已归队完成完整训练，并无大碍，预计将于揭幕战首发亮相（左路）。多库是比利时锋线最具速度威胁的球员，能否上场对比利时边路冲击力至关重要。RotoWire预测首发依然列多库于左路首发。综合：比利时攻击端无减损，主胜方向（61.2%）不变，无票状态不变。",
   "enFull": "Pre-match training update (Sports Mole/ESPN): Belgian winger Jérémy Doku (Man City) briefly left training early, raising injury concerns before the Egypt opener. However, Doku returned to the pitch and completed the full session — Belgian staff indicated no serious concern. RotoWire's predicted XI still lists Doku as LW starter. Positive update for Belgium's attacking width and pace; integrated win probability (61.2%) unchanged, no-bet stance maintained.",
   "links": [
    {"name": "Sports Mole: Belgium vs Egypt team news", "url": "https://www.sportsmole.co.uk/football/belgium/world-cup-2026/team-news/belgium-vs-egypt-injury-suspension-list-predicted-xis_599144.html"}
   ]
  },
  {
   "date": "06-16",
   "match": "伊朗 vs 新西兰",
   "impact": "切什米伤愈或入队",
   "tone": "home",
   "text": "RotoWire/Yahoo Sports最新(22:00前):切什米与托拉比已伤愈回归全量训练,伊朗全员健在进入揭幕战;但预测首发XI仍为埃扎托拉希担任后腰——切什米或以替补身份入队(RotoWire·Yahoo Sports)",
   "en": "Cheshmi and Torabi have both recovered and returned to full training per RotoWire/Yahoo Sports; Iran enter the opener with a fully fit squad, though Ezatolahi still expected to start as DM (RotoWire·Yahoo Sports)",
   "full": "RotoWire与Yahoo Sports 22:00前最新报道(与此前「切什米确认缺席」相矛盾,⚠️请以赛前官方首发XI为准):①鲁兹贝·切什米(腘绳肌)已完成全量训练,归队状态良好;②迈赫迪·托拉比(小腿)亦已恢复;③伊朗全队健在进入揭幕战,无伤缺公告。但RotoWire预测首发(4-3-3):贝伊然万德;优素菲、哈利勒扎德、内马蒂、穆罕马迪;埃扎托拉希、戈达斯、莫赫比;加耶迪、塔雷米、候赛因扎德——首发后腰仍是埃扎托拉希,切什米可能以替补身份入队。价值影响:若切什米确实健在,伊朗中场覆盖强于「核心缺席」场景,focus板块当前空仓判断(HAD value均<1.10)不受影响,但伊朗让球value可能略有上修,待主会话复核。⚠️距开球不足2小时,务必在官方首发XI中确认切什米出场状态。",
   "enFull": "RotoWire and Yahoo Sports (pre-match update, ~22:00 BJT) report that Iran midfielder Roozbeh Cheshmi has recovered from his hamstring injury and returned to full training — contradicting earlier 'confirmed absent' reports (⚠️ treat as updated status; defer to official XI for final confirmation). Mehdi Torabi (calf) has also recovered. Iran enter the opener with a fully fit squad. However, RotoWire's predicted XI (4-3-3): Beiranvand; Yousefi, Khalilzadeh, Nemati, Mohammadi; Ezatolahi, Ghoddos, Mohebi; Ghayedi, Taremi, Hosseinzadeh — Ezatolahi still listed as starting DM, with Cheshmi possibly as a sub. Impact: if Cheshmi is fit/available, Iran's defensive midfield cover is stronger than the 'key absence' scenario assumed. Current no-bet stance (HAD values all <1.10) unchanged, but main session should reassess Iran handicap value. ⚠️ Official XI expected ~60 min before 09:00 BJT kick-off.",
   "links": [
    {
     "name": "RotoWire: Iran vs New Zealand preview",
     "url": "https://www.rotowire.com/soccer/article/iran-vs-new-zealand-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-g-118098"
    },
    {
     "name": "Yahoo Sports: Iran vs New Zealand preview",
     "url": "https://sports.yahoo.com/articles/preview-iran-vs-zealand-team-010500869.html"
    }
   ]
  },
  {
   "date": "06-16",
   "match": "伊朗 vs 新西兰",
   "impact": "热身三连胜",
   "tone": "home",
   "text": "伊朗热身赛强势:击败马里2-0、冈比亚3-1、哥斯达黎加5-0,三场全胜进球10,带着高昂士气进入揭幕战;新西兰热身赛先0-4负海地后1-0负英格兰(RotoWire·Yahoo Sports)",
   "en": "Iran swept warm-ups: beat Mali 2-0, Gambia 3-1, Costa Rica 5-0 (10 goals, 3 wins); NZ lost 0-4 to Haiti, then 1-0 to England in pre-tournament friendlies (RotoWire·Yahoo Sports)",
   "full": "RotoWire与Yahoo Sports赛前分析均指出:伊朗在赛前集训中取得三连胜——马里2-0、冈比亚3-1、哥斯达黎加5-0,合计进10球失0球。这一成绩既弥补了联赛停摆3个月的体能断层顾虑,也显示伊朗整体状态明显优于预期。主将塔雷米(帕尔马)领衔进攻,状态高峰。对比新西兰:先以0-4惨负海地,随后对英格兰苦战1-0告负——热身赛成绩差异较大,但英格兰场新西兰曾打出合理竞争性,并非溃败。综合评估:伊朗热身大胜有助于消化联赛停摆影响,但让球 -1 value约0.98仍在价值闸下(§3安全边际跳过)。热身赛大胜不直接构成边,但把「体能断档」风险从中等调至低等。⚠️注意:热身对手质量偏低(马里/冈比亚/哥斯达黎加均非强队)，不可过度解读。",
   "enFull": "Both RotoWire and Yahoo Sports highlight Iran's strong pre-tournament warm-up run: three consecutive wins — Mali 2-0, Gambia 3-1, Costa Rica 5-0 — with 10 goals scored and zero conceded. This addresses the fitness concern arising from a 3-month domestic league suspension (since March 2026), suggesting Iran are in competitive shape ahead of the opener. Sardar Azmoun and Mehdi Taremi lead the attack in fine form. In contrast, New Zealand's warm-up record is mixed: a 0-4 loss to Haiti, followed by a 1-0 defeat to England (the England match was closer than the scoreline suggests). Overall: Iran's form mitigates the 'fitness gap' risk cited in earlier reports. However, Iran's handicap (-1) value score remains ~0.98, below the ≥1.10 buy threshold (§3 safety margin) — no-bet stance unchanged. ⚠️ Caveat: warm-up opponents were not top-tier; Iran's results should not be over-indexed.",
   "links": [
    {
     "name": "RotoWire: Iran vs New Zealand tactical analysis",
     "url": "https://www.rotowire.com/soccer/article/iran-vs-new-zealand-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-g-118098"
    },
    {
     "name": "Yahoo Sports: Iran vs New Zealand preview",
     "url": "https://sports.yahoo.com/articles/preview-iran-vs-zealand-team-010500869.html"
    }
   ]
  },
  {
   "date": "06-16",
   "match": "西班牙 vs 佛得角",
   "impact": "双星替补非首发",
   "tone": "away",
   "text": "亚马尔和维廉斯确认不首发,将替补出场;西班牙首发锋线由托雷斯/奥亚尔萨瓦尔/巴埃纳领衔(ESPN·Yahoo Sports)",
   "en": "Yamal and Nico Williams confirmed as substitutes only; Torres/Oyarzabal/Baena to lead Spain attack from kick-off (ESPN·Yahoo Sports)",
   "full": "主教练德拉富恩特赛前发布会确认亚马尔将在下半场出场，已从大腿撕裂中完全康复；维廉斯（5月10日后停赛）同样替补出场，以逐步恢复竞技状态。预计首发(4-3-3)：西蒙；略伦特、库巴尔西、拉波尔特、库库雷利亚；佩德里、罗德里、鲁伊斯；托雷斯、奥亚尔萨瓦尔、巴埃纳。双星不首发对佛得角略有利——西班牙锋线降档，但整体实力仍压倒性领先。⚠️亚马尔/维廉斯实际出场时间待关注。",
   "enFull": "Coach Luis de la Fuente confirmed at the pre-match press conference that Lamine Yamal will come on in the second half, fully recovered from a grade-two hamstring tear at Barcelona. Nico Williams, out since May 10 with a minor hamstring problem, will also feature from the bench. Expected Spain XI (4-3-3): Simon; Llorente, Cubarsi, Laporte, Cucurella; Pedri, Rodri, Ruiz; Torres, Oyarzabal, Baena. Starting without both wing stars gives Cape Verde a marginally better chance of keeping things close, though Spain's overall depth remains overwhelming. ⚠️Actual minutes for Yamal/Williams TBC.",
   "links": [
    {
     "name": "ESPN: Yamal & Williams return to training",
     "url": "https://www.espn.com/soccer/story/_/id/49031484/spain-world-cup-2026-lamine-yamal-nico-williams-injury"
    },
    {
     "name": "Yahoo Sports: Spain XI vs Cape Verde",
     "url": "https://sports.yahoo.com/articles/spain-xi-vs-cape-verde-215539122.html"
    }
   ]
  },
  {
   "date": "06-16",
   "match": "法国 vs 塞内加尔",
   "impact": "姆巴佩带伤首发",
   "tone": "neutral",
   "text": "姆巴佩确认首发但大腿管控中；萨利巴和孔德均已通过训练关卡(Sports Mole·ESPN)",
   "en": "Mbappé confirmed to start despite managing a thigh injury; Saliba and Koundé both fit after minor scares (Sports Mole·ESPN)",
   "full": "姆巴佩将从首发出场，但本赛季末持续承受大腿伤患，体能管控为整届赛事主线。中卫萨利巴（欧冠决赛后背伤加剧）已完整训练，预计首发；右后卫孔德亦克服肌肉隐患就绪。预计阵容(4-2-3-1)：迈尼昂；孔德、萨利巴、乌帕梅卡诺、西奥·埃尔南德斯；丘阿梅尼、拉比奥；科曼、格里兹曼；德姆贝莱；姆巴佩。塞内加尔：迪亚奥因挫伤缺席训练，格耶未完整训练（预防），整体无大伤。",
   "enFull": "Kylian Mbappé is set to lead France's attack from kickoff despite carefully managing a thigh problem from the tail end of La Liga. William Saliba, who aggravated a back injury in the Champions League final, has completed full training and is expected to start alongside Upamecano. Jules Koundé also cleared a muscular scare at right-back. Predicted France XI (4-2-3-1): Maignan; Koundé, Saliba, Upamecano, T.Hernández; Tchouaméni, Rabiot; Coman, Griezmann; Dembélé; Mbappé. For Senegal, Assane Diao is missing training with a contusion and Idrissa Gueye is listed precautionary, but no major injury concerns.",
   "links": [
    {
     "name": "Sports Mole: France vs Senegal preview",
     "url": "https://www.sportsmole.co.uk/football/france/world-cup-2026/preview/france-vs-senegal-prediction-team-news-lineups_599156.html"
    },
    {
     "name": "ESPN: France vs Senegal match preview",
     "url": "https://www.espn.com/soccer/story/_/id/49059260/france-vs-senegal-fifa-world-cup-2026-tv-channel-how-watch-kick-live-stream-injury-predicted-line-ups"
    }
   ]
  },
  {
   "date": "06-16",
   "match": "阿根廷 vs 阿尔及利",
   "impact": "本塞巴尼伤缺",
   "tone": "home",
   "text": "阿尔及利左后卫本塞巴尼脚伤缺席；梅西确认首发但大腿管控中；塔利亚菲科因伤亦缺(Sports Mole·ESPN)",
   "en": "Algeria LB Bensebaini out with foot injury; Messi confirmed to start but managing hamstring; Tagliafico also ruled out (Sports Mole·ESPN)",
   "full": "阿尔及利亚主力左后卫拉米·本塞巴尼因脚伤缺阵，谢尔吉或贝拉伊德争夺首发。阿根廷：马丁内斯(GK)通过体测确认出战；梅西将首发——这是其国家队第200场里程碑——但主帅斯卡洛尼将管控其分钟数，大腿隐患持续关注。左后卫塔利亚菲科因小腿伤缺阵，梅迪纳预计顶替。预计首发：E.马丁内斯；莫利纳、奥塔门迪、L.马丁内斯、梅迪纳；德保罗、费尔南德斯、麦卡利斯特、阿尔马达；梅西、劳塔罗·马丁内斯。⚠️梅西实际上场分钟数关键。",
   "enFull": "Algeria's key left-back Ramy Bensebaini is sidelined with a foot injury; Samir Chergui and Zineddine Belaid are competing for his starting spot. For Argentina, goalkeeper Emiliano Martinez (injured ahead of the Europa League final) has been passed fit. Lionel Messi will start — his 200th international appearance — but Scaloni will manage his minutes due to an ongoing hamstring concern. Nicolas Tagliafico is also ruled out (calf); Facundo Medina expected to deputise at left-back. Most other injury returnees (Julian, Paredes, Romero, Molina, Montiel) are training fully. Predicted XI: E.Martinez; Molina, Otamendi, L.Martinez, Medina; De Paul, Fernandez, Mac Allister, Almada; Messi, Lautaro Martinez. ⚠️Watch Messi's actual minutes closely.",
   "links": [
    {
     "name": "Sports Mole: Argentina lineup vs Algeria",
     "url": "https://www.sportsmole.co.uk/football/argentina/world-cup-2026/predicted-lineups/messi-makes-more-history-emi-returns-predicted-argentina-lineup-vs-algeria_599169.html"
    },
    {
     "name": "ESPN: Argentina vs Algeria match preview",
     "url": "https://www.espn.com/soccer/story/_/id/49059251/argentina-vs-algeria-fifa-world-cup-2026-tv-channel-how-watch-kick-live-stream-referee-predicted-line-ups"
    }
   ]
  },
  {
   "date": "06-16",
   "match": "沙特 vs 乌拉圭",
   "impact": "卡塞比尼首发",
   "tone": "away",
   "text": "Sports Mole/ESPN最新预测XI:卡塞雷斯与奥利维拉(紧急顶入CB)出任双中卫、比尼亚打左后卫——两人此前均列「存疑」,但多家媒体仍将其排入首发;希门尼斯/阿劳霍/德阿拉斯卡耶塔/皮克雷斯确认缺席。乌拉圭后防线虽重组但并非全线崩溃,沙特tilt幅度较悲观估算略降。(来源:Sports Mole/ESPN)",
   "en": "Sports Mole/ESPN predicted Uruguay XI: Rochet; Varela, Caceres, Olivera (emergency CB), Vina; Valverde, Ugarte, Bentancur; Canobbio, Nunez, M.Araújo — Caceres and Vina both listed as 'doubts' yet still predicted to start; Gimenez/Araujo/De Arrascaeta/Piquerez confirmed out. Defence reshuffled but not fully depleted; Saudi tilt value lower than worst-case scenario. (per Sports Mole / ESPN)",
   "full": "Sports Mole与ESPN赛前预测首发(06-15晚)新信息:乌拉圭预测XI为罗谢特;巴雷拉、卡塞雷斯、奥利维拉、比尼亚;巴尔韦德、乌加尔特、本坦库尔;卡诺比奥、努涅斯、马克西·阿劳霍。关键解读:①卡塞雷斯(头伤,存疑)和比尼亚(肌肉,存疑)均出现在预测首发,说明他们状态好于悲观预期;②奥利维拉本位置左后卫/中卫,此场顶入右中卫位置;③希门尼斯/阿劳霍缺阵意味着毕尔萨中卫双核均不在场,但卡塞雷斯+奥利维拉组合仍有一定实战经验。价值重算:与昨日「三核全缺+两CB悬」的悲观情景相比,若卡塞雷斯和比尼亚实际出战,沙特获胜概率可能维持在14-16%(而非悲观场景的17-18%),对应国际交易所赔率~8.50(去水约11.8%),隐含价值约1.14-1.17仍在价值闸1.10以上,但安全边际收窄。⚠️赛前60分钟务必确认卡塞雷斯和比尼亚官方首发——这两人的实际出战与否直接影响价值计算。",
   "enFull": "Sports Mole and ESPN pre-match predicted XI (June 15 evening): Uruguay predicted lineup is Rochet; Varela, Caceres, Olivera, Vina; Valverde, Ugarte, Bentancur; Canobbio, Nunez, Maxi Araújo. Key interpretation: (1) Caceres (head injury, doubt) and Vina (muscle, doubt) both appear in the predicted starting XI, suggesting their fitness is better than the pessimistic scenario. (2) Olivera, normally a left-back or centre-back, fills in at right-centre-back. (3) While Gimenez and Araujo are both confirmed absent, the Caceres+Olivera pairing still carries reasonable international experience. Value recalculation: compared to yesterday's worst-case 'both CBs absent + triple key players out' scenario, if Caceres and Vina do start, Saudi win probability may settle closer to 14–16% (vs 17–18% worst-case). Against international exchange odds ~8.50 (implied ~11.8% vig-free), the implied value remains ~1.14–1.17 — above the ≥1.10 buy threshold but with a narrower margin of safety. ⚠️ Confirm Caceres and Vina in the official XI 60 minutes before kickoff — their actual participation directly determines the value calculation.",
   "links": [
    {
     "name": "Sports Mole · Uruguay predicted XI vs Saudi Arabia",
     "url": "https://www.sportsmole.co.uk/football/saudi-arabia/world-cup-2026/predicted-lineups/injury-concerns-for-bielsa-how-uruguay-could-line-up-vs-saudi-arabia_599117.html"
    },
    {
     "name": "ESPN · Saudi Arabia vs Uruguay preview",
     "url": "https://www.espn.com/soccer/story/_/id/49050294/fifa-world-cup-2026-saudi-arabia-vs-uruguay-tv-channel-how-watch-kickoff-live-stream-referee-predicted-line-ups"
    }
   ]
  },
  {
   "date": "06-16",
   "match": "伊朗 vs 新西兰",
   "impact": "伊朗体能断档",
   "tone": "away",
   "text": "伊朗国内联赛自2026年3月起暂停，哈吉萨菲、穆罕默迪、哈利勒扎德等主力后卫逾3个月无竞技比赛；伊朗已通过集训弥补，但高强度世界杯开幕战对长期空白赛季的后防是严峻考验，新西兰相对受益。(来源:RotoWire/Yahoo Sports)",
   "en": "Iran's domestic league has been suspended since March 2026, leaving key defenders Hajsafi, Mohammadi and Khalilzadeh without competitive match play for 3+ months — a potential match-sharpness disadvantage vs New Zealand at World Cup intensity. Pre-tournament camp partially offsets this. (per RotoWire / Yahoo Sports)",
   "full": "RotoWire与Yahoo Sports赛前深度分析共同指出:伊朗国内联赛自2026年3月暂停,主力后卫埃赫桑·哈吉萨菲(左后卫)、米拉德·穆罕默迪(左后卫/中后卫)、肖贾·哈利勒扎德(中后卫)等多名球员已逾3个月没有参加竞技比赛,仅靠集训维持状态。相比之下,新西兰球员大多在欧洲/北美联赛打完常规赛季,竞技锐度更佳。体能断档对世界杯首战的影响:后卫高强度跑动覆盖、空中对抗、快速转换时的判断力均可能因缺乏实战而打折扣。伊朗教练组意识到这一风险,在集训期安排了大量对抗性训练(6月1-13日跟乌干达/阿联酋热身),部分弥补赛季空白。但在开幕战高度紧张的比赛节奏下,第60-90分钟体能下滑是真实风险。国际市场:伊朗自开盘以来漂移-2.5pp(50.3%),与体能顾虑的逐步发酵时间线吻合。⚠️不改变无票建议(HAD价值均<1.10),但体能因素为平局或新西兰超额表现提供了额外支撑。",
   "enFull": "Both RotoWire and Yahoo Sports highlight a significant structural disadvantage for Iran heading into the June 16 Group G opener: the Iranian domestic league has been suspended since March 2026 — over three months before the World Cup kicks off. Key defenders including Ehsan Hajsafi (LB), Milad Mohammadi (LB/CB), and Shojae Khalilzadeh (CB) have not played competitive club football since that suspension. In contrast, New Zealand's players (largely active in European and North American leagues) have completed full club seasons closer to the tournament. The match-fitness gap manifests most acutely in: (1) high-intensity defensive runs and coverage in the final third of each half, (2) aerial duel sharpness, (3) decision-making speed under World Cup-level press. Iran's coaching staff organised intensive training camps with friendlies vs Uganda and the UAE (June 1–13) to partially compensate. However, the 60–90 min period remains a genuine risk window for fitness-related errors in their defensive shape. Market context: Iran have drifted -2.5pp from opening odds (now 50.3%), consistent with this fitness concern gradually being priced in. ⚠️ No-bet stance unchanged (all HAD value scores below 1.10), but the fitness gap adds structural support to draw or NZ overperformance scenarios.",
   "links": [
    {
     "name": "RotoWire · Iran vs New Zealand preview",
     "url": "https://www.rotowire.com/soccer/article/iran-vs-new-zealand-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-g-118098"
    },
    {
     "name": "Yahoo Sports · Iran vs New Zealand preview",
     "url": "https://sports.yahoo.com/articles/preview-iran-vs-zealand-team-010500869.html"
    }
   ]
  },
  {
   "date": "06-16",
   "match": "伊朗 vs 新西兰",
   "impact": "加贝特升格首发",
   "tone": "away",
   "text": "新西兰加贝特(此前因无法完成训练列为「存疑」)已出现在多家媒体预测首发XI中,升格出战预期;瑞安·托马斯(腘绳肌)仍为存疑;克里斯·伍德确认健康首发。伊朗切什米替位人选待赛前官方XI确认。(来源:Sports Mole/Yahoo Sports)",
   "en": "NZ's Garbett upgraded from 'doubtful' to predicted starter despite missing Saturday training; Ryan Thomas (hamstring) remains a doubt; Chris Wood confirmed fit. Iran's Cheshmi replacement in starting XI still TBC. (per Sports Mole / Yahoo Sports)",
   "full": "Sports Mole及Yahoo Sports 06-15最新报道:新西兰防守中场马特·加贝特——此前因周六无法完成训练被列为「存疑」——现已出现在多家媒体的预测首发XI中,说明其整体状态好于悲观预期;斯塔梅尼奇与加贝特将搭档双后腰,梳理中场节奏。伊恩·福斯特阵型预测为4-2-3-1:克罗科姆;佩恩、萨曼、博克塞尔、卡卡切;斯塔梅尼奇、加贝特;辛格、贝尔、贾斯特;伍德。瑞安·托马斯(腘绳肌管控)仍为存疑,若出战则进攻线更为完整。克里斯·伍德(队长)确认健康首发,是新西兰最大威胁点。伊朗方面:切什米确认缺席,候补人选萨伊德内贾德或卡里米待赛前官方XI最终确认。整体评估:加贝特出战令新西兰中场强度略高于悲观场景,但伊朗HAD价值仍约0.89,维持无票建议。⚠️赛前确认加贝特及托马斯官方XI状态。",
   "enFull": "Latest update from Sports Mole and Yahoo Sports (June 15): New Zealand defensive midfielder Matt Garbett — previously listed as a doubt after being unable to complete Saturday's training session — now appears in multiple predicted starting XIs, suggesting his condition is better than feared. Ian Foster expected to deploy a 4-2-3-1: Crocombe; Payne, Surman, Boxall, Cacace; Stamenić, Garbett; Singh, Bell, Just; Wood. Ryan Thomas (hamstring management) remains doubtful but would strengthen the attack if available. Chris Wood (captain) confirmed fully fit — primary threat. Iran: Cheshmi confirmed absent; Saeidnejad or Karimi expected to deputise in central midfield, to be confirmed in official XI. Overall assessment: Garbett's availability lifts New Zealand's midfield quality above the pessimistic scenario but Iran HAD value score remains ~0.89 — no-bet stance unchanged. ⚠️ Confirm Garbett and Thomas in the official XI before kick-off.",
   "links": [
    {
     "name": "Sports Mole · Iran vs New Zealand preview",
     "url": "https://www.sportsmole.co.uk/football/iran/world-cup-2026/preview/iran-vs-new-zealand-prediction-team-news-lineups_599122.html"
    },
    {
     "name": "Yahoo Sports · Iran vs New Zealand prediction",
     "url": "https://sports.yahoo.com/articles/iran-vs-zealand-prediction-world-121500817.html"
    }
   ]
  },
  {
   "date": "06-16",
   "match": "比利时 vs 埃及",
   "impact": "萨拉赫预测首发",
   "tone": "away",
   "text": "Sports Mole最新预测首发确认萨拉赫(今日34岁生日)首发出场;4月腘绳肌伤实施全程负荷管控,进攻覆盖距离受限;比利时德布劳内/卢卡库/多库/特罗萨尔全主力就绪,仍为压倒性热门。(来源:Sports Mole/SI.com)",
   "en": "Sports Mole predicted XI has Salah starting despite managed hamstring (April injury); he turns 34 today — chasing first WC knockout win. Belgium deploy full-strength attack: De Bruyne, Lukaku, Doku, Trossard all expected to start. (per Sports Mole / SI.com)",
   "full": "Sports Mole 06-15赛前预测首发更新:穆罕默德·萨拉赫(今日34岁生日)确认出现在Sports Mole的埃及预测首发XI中——与此前预期的「管控使用/替补出场」相比明显升级。预测埃及XI:谢纳维;哈尼、阿卜杜勒莫内姆、拉比阿、法图赫;阿提亚、法西、阿苏尔;萨拉赫、马尔穆什、济左。值得注意:萨拉赫今日迎来34岁生日,是为数不多一项成就仍未到手(世界杯淘汰赛胜利)的球员,心理驱动力极高,但腘绳肌管控仍是全程续档变量。比利时阵容:卢卡库、德布劳内、多库、特罗萨尔全主力就绪,唯一缺阵德巴斯特(腿伤)。整体评估:埃及进攻线完整性略高于管控场景预期;比利时HAD价值≈0.91,三项均<1.10,无票建议维持不变。⚠️赛前60分钟确认萨拉赫是否完整参战及比利时正式首发。",
   "enFull": "Sports Mole pre-match predicted lineup update (June 15): Mohamed Salah confirmed in Egypt's predicted starting XI — a meaningful upgrade from earlier expectations of load-managed bench role. Predicted Egypt XI: El-Shenawy; Hany, Abdelmonem, Rabia, Fatouh; Attia, Fathy, Ashour; Salah, Marmoush, Zizo. Context: Salah turns 34 today and is chasing the one major achievement still missing — a World Cup knockout-round victory — providing unusually high personal motivation. However, the April hamstring injury remains a monitoring variable for substitution timing. Belgium: Lukaku, De Bruyne, Doku, Trossard all set to start; only Debast (leg) absent. Overall assessment: Egypt's attacking ceiling slightly higher than the pessimistic scenario had assumed; Belgium HAD value scores remain ~0.91, all three below the ≥1.10 buy threshold — no-bet stance unchanged. ⚠️ Confirm Salah's full participation and Belgium's official XI 60 minutes before kick-off.",
   "links": [
    {
     "name": "Sports Mole · Egypt lineup vs Belgium",
     "url": "https://www.sportsmole.co.uk/football/egypt/world-cup-2026/predicted-lineups/salah-starts-predicted-egypt-xi-vs-belgium_599123.html"
    },
    {
     "name": "SI.com · Belgium vs Egypt preview",
     "url": "https://www.si.com/soccer/belgium-vs-egypt-world-cup-preview-predictions-lineups-6-15-26"
    }
   ]
  },
  {
   "date": "06-16",
   "match": "沙特 vs 乌拉圭",
   "impact": "三核确认缺席",
   "tone": "home",
   "text": "最新确认:希门尼斯(马竞CB)、阿劳霍(巴萨,已返西已可能整组缺)、德阿拉斯卡耶塔(2级小腿伤)、皮克雷斯全部正式缺阵——较昨日「存疑」大幅升级;乌拉圭双CB+核心中场全线重组,沙特tilt价值显著升温。(来源:Sports Mole/ESPN/RotoWire)",
   "en": "CONFIRMED: Gimenez (Atletico), Araujo (returned to Barcelona, risks missing full group stage), De Arrascaeta (grade 2 calf, targeting match 3 vs Spain), and Piquerez all ruled OUT — major escalation from 'doubtful'; Uruguay's CB pairing and creative midfield require full reconstruction. (per Sports Mole / ESPN / RotoWire)",
   "full": "Sports Mole/ESPN/RotoWire 06-15 最新确认:①希门尼斯(马竞,主力CB,99帽)——身体问题正式宣布缺席揭幕战(较之前「踝关节存疑」升级);②阿劳霍(巴萨)——小腿伤情恶化后已返回巴塞罗那接受专项治疗,有可能缺席整个小组赛阶段;③德阿拉斯卡耶塔(弗拉门戈)——6月初确认2级小腿伤,预计最早第3轮对西班牙才有望复出;④皮克雷斯(帕尔梅拉斯)同样确认缺席;卡塞雷斯、比纳仍为存疑。乌拉圭后防线与进攻中场均需大规模重组——直接瓦解毕尔萨高位压迫体系的两侧支柱。价值重算:市场共识沙特12%/双CB缺阵tilt约+4-6pp→沙特集成预估达17-18%,若竞彩开盘赔率仍在~8.50(去水后~11.8%),则隐含价值约1.14-1.17。⚠️赛前60分钟确认首发XI——卡塞雷斯/戈丁/罗谢特补防组合是核心悬案。",
   "enFull": "Updated injury confirmation from Sports Mole, ESPN, and RotoWire (June 15): (1) José Giménez (Atlético Madrid, 99 caps, CB) — officially OUT for the Saudi Arabia opener; injury escalated beyond 'doubtful' status. (2) Ronald Araújo (Barcelona, CB) — returned to Barcelona for specialist treatment after a worsening calf strain; risks missing the full group stage. (3) Giorgian de Arrascaeta (Flamengo, attacking midfielder) — confirmed out with a grade 2 calf injury (early June); targeting Group H match 3 vs Spain at the earliest. (4) Joaquín Piquerez (Palmeiras, LB) — also confirmed absent. Sebastián Cáceres and Matías Viña remain doubts. Cumulative impact: Uruguay lose both starting centre-backs and their chief creative midfielder, dismantling the defensive and transitional axes of Bielsa's high-press system. Value update: Saudi Arabia market probability ~12%; tilt adjustment from double-CB absence adds approximately +4–6pp → estimated range 16–18%; vs international exchange odds ~8.50 (implied ~11.8% vig-free), potential value ≈1.14–1.17, pending official Chinese handicap odds. ⚠️ Confirm Uruguay's centre-back pairing (Cáceres/Godín/Rochet options) in official XI 60 minutes before kick-off.",
   "links": [
    {
     "name": "Sports Mole · Saudi Arabia vs Uruguay team news",
     "url": "https://www.sportsmole.co.uk/football/saudi-arabia/world-cup-2026/team-news/saudi-arabia-vs-uruguay-injury-suspension-list-predicted-xis_599116.html"
    },
    {
     "name": "ESPN · Saudi Arabia vs Uruguay preview",
     "url": "https://www.espn.com/soccer/story/_/id/49050294/fifa-world-cup-2026-saudi-arabia-vs-uruguay-tv-channel-how-watch-kickoff-live-stream-referee-predicted-line-ups"
    },
    {
     "name": "RotoWire · Saudi Arabia vs Uruguay preview",
     "url": "https://www.rotowire.com/soccer/article/saudi-arabia-vs-uruguay-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-h-118095"
    }
   ]
  },
  {
   "date": "06-16",
   "match": "伊朗 vs 新西兰",
   "impact": "切什米确认缺席",
   "tone": "away",
   "text": "伊朗队长/防守中场切什米确认缺席揭幕战(5月土耳其训练营腘绳肌撕裂,MRI确认严重);另贾汉巴赫什赛前体测存疑;新西兰加贝特周六无法完成训练亦存疑,但克里斯·伍德确认健康首发。(来源:Sports Mole/RotoWire)",
   "en": "Iran captain/DM Roozbeh Cheshmi confirmed OUT (left hamstring tear, May training camp); Jahanbakhsh faces late fitness test; NZ's Garbett is a doubt (couldn't complete Saturday training), but Chris Wood is fully fit to lead the line. (per Sports Mole / RotoWire)",
   "full": "Sports Mole及RotoWire 06-15赛前确认:①鲁兹贝·切什米(埃斯特格拉尔FC,32岁,伊朗队长/防守中场)——5月20-22日土耳其训练营腘绳肌撕裂,MRI确认严重后正式宣布缺席揭幕战;②阿利雷扎·贾汉巴赫什(翼卫)——需赛前最终体能测试,Sports Mole预测大概率可出场;③丹尼斯·埃克特、迈赫迪·托拉比亦缺阵;伊朗核心锋线梅赫迪·塔雷米完整。新西兰:①马特·加贝特——周六无法完成训练,存疑;②瑞安·托马斯(腘绳肌)——轻伤管控,存疑;③克里斯·伍德(队长/前锋)确认健康首发,是最重要威胁点。整体评估:切什米缺阵令伊朗防守中场覆盖压力加大,但市场共识50.2%热门地位仍在(vs 新西兰21.3%);国际赔率~1.98:4.70(伊朗vs新西兰)。⚠️赛前确认切什米替位人选及加贝特首发状态。",
   "enFull": "Pre-match injury report from Sports Mole, RotoWire, and CryptoBriefing (June 15): (1) Roozbeh Cheshmi (Esteghlal FC, 32, Iran captain / DM) — confirmed OUT for the June 16 Group G opener; suffered a left hamstring tear during pre-tournament training in Turkey (May 20–22), with MRI confirming severity. (2) Alireza Jahanbakhsh (winger) — faces a late fitness test; Sports Mole predict he is likely to be available. (3) Dennis Eckert and Mehdi Torabi also absent. Iran's attacking core led by Mehdi Taremi is intact. New Zealand: (1) Matt Garbett — unable to complete Saturday training, listed as a doubt; (2) Ryan Thomas (hamstring) — managed ahead of the opener, doubtful; (3) Chris Wood (captain/striker) — confirmed fully fit, primary attacking threat. Overall assessment: Cheshmi's absence increases pressure on Iran's midfield coverage but does not alter the consensus 50.2% win probability. International exchange odds: Iran ~1.98, New Zealand ~4.70. ⚠️ Confirm Cheshmi's replacement (Saeidnejad or Karimi) in the starting XI and Garbett's availability before kick-off.",
   "links": [
    {
     "name": "Sports Mole · Iran vs New Zealand team news",
     "url": "https://www.sportsmole.co.uk/football/iran/world-cup-2026/team-news/iran-vs-new-zealand-injury-suspension-list-predicted-xis_599140.html"
    },
    {
     "name": "RotoWire · Iran vs New Zealand preview",
     "url": "https://www.rotowire.com/soccer/article/iran-vs-new-zealand-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-g-118098"
    },
    {
     "name": "CryptoBriefing · Cheshmi ruled out vs New Zealand",
     "url": "https://cryptobriefing.com/cheshmi-misses-world-cup-opener-injury/"
    }
   ]
  },
  {
   "date": "06-16",
   "match": "沙特 vs 乌拉圭",
   "impact": "乌拉圭防线重创",
   "tone": "home",
   "text": "乌拉圭多名关键球员存疑:中卫希门尼斯(踝关节)、阿劳霍(小腿)均伤疑,中场德阿拉斯卡耶塔(小腿)、比纳(肌肉)、卡塞雷斯(头部)共5人受伤;沙特仅阿基迪缺席,整体阵容完整。(来源:Sports Mole/RotoWire)",
   "en": "Uruguay carry significant injury worries into their opener: CBs Gimenez (ankle) and Araujo (calf) both doubtful, plus De Arrascaeta (calf), Vina (muscle), Caceres (head); Saudi Arabia are near full strength with only Al Aqidi absent. (per Sports Mole / RotoWire)",
   "full": "Sports Mole及RotoWire 06-15 赛前报告显示乌拉圭伤情严峻:①霍塞·希门尼斯(马竞,主力中卫)——踝关节伤,存疑;②罗纳尔多·阿劳霍(巴萨,主力中后卫)——小腿伤,存疑;③希奥尔赫安·德阿拉斯卡耶塔(弗拉门戈,进攻中场)——小腿伤,存疑;④马蒂亚斯·比纳(肌肉伤),存疑;⑤塞巴斯蒂安·卡塞雷斯(头部伤)——5人受伤中卡塞雷斯最可能出战。若希门尼斯+阿劳霍双双缺阵,乌拉圭中后卫组合将面临巨大重组压力(两人是毕尔萨体系的关键支柱)。沙特阵容方面:阿基迪(肌肉/腘绳肌)虽在训练中有所恢复但仍存疑,其余阵容完整。国际市场共识:乌拉圭 65.5%(赔率~1.52),沙特 12.0%(赔率~8.50)。若双CB确认缺阵,等价集成概率有望因tilt上升至15-20%,价值闸有待赛前首发确认后重算。⚠️赛前60分钟确认希门尼斯/阿劳霍/德阿拉斯卡耶塔三人出战状态——这是本场最大的情报变量。",
   "enFull": "Pre-match injury report from Sports Mole and RotoWire (June 15): Uruguay enter their Group H opener against Saudi Arabia with serious squad concerns. (1) José Giménez (Atlético Madrid, CB) — ankle injury, listed as doubtful; (2) Ronald Araújo (Barcelona, CB/DF) — calf strain, listed as doubtful; (3) Giorgian de Arrascaeta (Flamengo, attacking midfielder) — calf injury, doubtful; (4) Matías Viña (muscle injury), doubtful; (5) Sebastián Cáceres (head), doubtful — described as the most likely of the five to be involved. The most critical scenario: if both Giménez and Araújo are absent, Uruguay's central defence requires a major reshuffle; both are key to Marcelo Bielsa's high-pressing structure. Saudi Arabia, by contrast, are close to full strength — Nawaf Al Aqidi (hamstring) has returned to training but remains uncertain. International consensus: Uruguay 65.5% (implied odds ~1.52), Saudi Arabia 12.0% (implied odds ~8.50). If both CBs are confirmed absent, the ensemble probability for Saudi Arabia could shift toward 15-20%, potentially opening a value gap. ⚠️ Confirm Giménez, Araújo, and De Arrascaeta official starting status 60 minutes before kick-off — they are the three most important pre-match variables for this fixture.",
   "links": [
    {
     "name": "Sports Mole · Saudi Arabia vs Uruguay team news",
     "url": "https://www.sportsmole.co.uk/football/saudi-arabia/world-cup-2026/team-news/saudi-arabia-vs-uruguay-injury-suspension-list-predicted-xis_599116.html"
    },
    {
     "name": "RotoWire · Saudi Arabia vs Uruguay preview",
     "url": "https://www.rotowire.com/soccer/article/saudi-arabia-vs-uruguay-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-h-118095"
    }
   ]
  },
  {
   "date": "06-16",
   "match": "西班牙 vs 佛得角",
   "impact": "亚马尔维廉存疑",
   "tone": "neutral",
   "text": "西班牙双星亚马尔(拉明)与尼科·维廉斯本周末完成恢复训练,但临战首发存疑,预计替补出场;穆尼奥斯亦因肌肉过载存疑;西班牙进攻线比预期弱,佩德里/法比安/奥亚尔萨瓦尔补位。(来源:Sports Mole/Racing Post)",
   "en": "Spain's star duo Lamine Yamal and Nico Williams have returned to full training but are unlikely to start vs Cape Verde — both expected on the bench; Victor Munoz also a doubt (muscular overload); Ferran Torres, Baena and Oyarzabal forecast to start. (per Sports Mole / Racing Post)",
   "full": "Sports Mole及Racing Post 06-15 报告:①拉明·亚马尔(巴萨,17岁右翼)——赛前伤病恢复训练,周末已重返全队合练,但作为赛季主力出战、本届最期待球星之一,临战首发存疑,大概率替补出场以控制风险;②尼科·维廉斯(毕尔巴鄂,左翼)——伤病恢复情况相似,与亚马尔并列替补出场概率较高;③维克托·穆尼奥斯——肌肉过载,存疑,可能被托雷斯或巴埃纳替代。西班牙预测首发(不含亚马尔/维廉斯):乌纳伊·西蒙;库库雷利亚、拉波尔特、库巴尔西、波罗;罗德里、佩德里、法比安·鲁伊斯;托雷斯或巴埃纳、奥亚尔萨瓦尔。佛得角:无伤停顾虑,全阵容就绪。价值评估:西班牙仍是压倒性热门,双星缺席首发令进攻预期分略降(更多需等竞彩开盘赔率及集成概率算出后确认)。⚠️赛前60分钟确认亚马尔与维廉斯是否出现在官方首发XI中。",
   "enFull": "Spain's two brightest attacking talents enter Monday's Group H opener against Cape Verde with fitness questions. (1) Lamine Yamal (Barcelona, 17, right wing): resumed full training with the squad over the weekend after recovering from a pre-tournament issue, but starting him from the off against Cape Verde is considered a risk — bench appearance the more likely scenario. (2) Nico Williams (Athletic Bilbao, left wing): in a similar recovery situation, and also likely to be managed off the bench. (3) Victor Munoz: suffering from muscular overload and may not feature at all; Ferran Torres or Alex Baena would cover on the right flank. Spain's anticipated starting XI without the two stars: Unai Simón; Cucurella, Laporte, Cubarsí, Porro; Rodri, Pedri, Fabián Ruiz; Torres/Baena, Oyarzabal. Cape Verde: no fitness concerns, fully available. Value assessment: Spain remain overwhelming favorites even without Yamal and Williams from kick-off; their depth is sufficient for a win vs Cape Verde. The impact is more relevant for handicap and goals markets than win/draw/loss outcome. ⚠️ Confirm Yamal and Williams' starting status in the official XI 60 minutes before kick-off.",
   "links": [
    {
     "name": "Sports Mole · Spain vs Cape Verde team news",
     "url": "https://www.sportsmole.co.uk/football/spain/world-cup-2026/team-news/spain-vs-cape-verde-injury-suspension-list-predicted-xis_599108.html"
    },
    {
     "name": "Racing Post · Spain vs Cape Verde prediction",
     "url": "https://www.racingpost.com/sport/football-tips/world-cup-2026/spain-vs-cape-verde-world-cup-prediction-team-news-odds-betting-tips-and-bet-builder-aicRQ8L439n7/"
    }
   ]
  },
  {
   "date": "06-16",
   "match": "比利时 vs 埃及",
   "impact": "萨拉赫伤疑管控",
   "tone": "home",
   "text": "埃及萨拉赫腘绳肌伤(4月受伤)赛前管控,6月6日仅替补出场45分钟;比利时仅德巴斯特缺席,德布劳内/卢卡库/多库/特罗萨尔全主力首发。(来源:Sports Mole/RotoWire)",
   "en": "Egypt's Mo Salah is managing a hamstring injury from April and started only 45 minutes off the bench in the June 6 friendly vs Brazil; Belgium are near full strength — De Bruyne, Lukaku, Doku, Trossard all expected to start; only Debast absent. (per Sports Mole / RotoWire)",
   "full": "比利时阵容:罗梅鲁·卢卡库、凯文·德布劳内、莱安德罗·特罗萨尔、热雷米·多库均确认首发——四名核心攻击手悉数就绪。唯一主要缺席:泽诺·德巴斯特(腿伤)。庭华·科特瓦、托马斯·穆尼耶、蒂亚戈·特特和米基·贝安斯围拢后防,奥纳纳-蒂勒曼斯双后腰。比利时整体阵容完整性极高。埃及阵容:核心球星穆罕默德·萨拉赫自4月利物浦比赛中拉伤腘绳肌,之后仅在6月6日热身赛对阵巴西时出场45分钟(后半场替换入场),伤情至今管控中。Sports Mole分析:萨拉赫将可能首发,但全队进攻安排可能做适当保护,以防止进一步撕裂——马尔穆什、特雷兹盖、济左将承担防守回追更多责任。预测埃及XI:谢纳维;哈尼、易卜拉欣、拉比阿、法图赫;拉欣、法西;萨拉赫、特雷兹盖、济左;马尔穆什。价值评估:市场共识比利时胜概率约59.9%(赔率~1.66),埃及胜赔率约6.30;萨拉赫出战受限令埃及进攻威胁低于全状态。⚠️赛前60分钟确认萨拉赫是否首发或能否打满全场。",
   "enFull": "Belgium team news: Romelu Lukaku, Kevin De Bruyne, Leandro Trossard, and Jérémy Doku are all confirmed starters — Belgium's four key attacking stars are available. Only Zeno Debast (leg injury) is absent from the squad. Thibaut Courtois, Meunier, Thomas Meunier, Theate and De Cuyper form the defensive unit; Onana and Tielemans in central midfield. Belgium's lineup is among the strongest available in this tournament. Egypt team news: Mohamed Salah has been managing a hamstring injury sustained during a Liverpool match in late April. His most recent match action was 45 minutes as a second-half substitute against Brazil in a June 6 friendly — his first game since the injury. Sports Mole notes that while Salah is expected to start, Egypt's forward line (Marmoush, Trezeguet, Zizo) may be deployed to cover for him defensively and reduce stress on the hamstring. Predicted Egypt XI: El Shenawy; Hany, Ibrahim, Rabia, Fatouh; Lashin, Fathy; Salah, Trezeguet, Zizo; Marmoush. Value assessment: Belgium win at ~59.9% (market odds ~1.66), Egypt win ~16.0% (odds ~6.30). Salah's fitness limitation reduces Egypt's attacking ceiling. ⚠️ Confirm Salah's ability to start / complete 90 minutes in the official XI 60 minutes before kick-off.",
   "links": [
    {
     "name": "Sports Mole · Belgium vs Egypt team news",
     "url": "https://www.sportsmole.co.uk/football/belgium/world-cup-2026/team-news/belgium-vs-egypt-injury-suspension-list-predicted-xis_599144.html"
    },
    {
     "name": "RotoWire · Belgium vs Egypt preview",
     "url": "https://www.rotowire.com/soccer/article/belgium-vs-egypt-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-g-118093"
    }
   ]
  },
  {
   "date": "06-15",
   "match": "瑞典 vs 突尼斯",
   "impact": "古德蒙德松存疑",
   "tone": "away",
   "text": "瑞典左后卫古德蒙德松因病毒感染临战存疑,若缺阵由斯文森或斯特劳德补位;另库卢舍夫斯基全赛季因右髌软骨伤缺席确认无缘本届。(来源:Sports Mole/ESPN)",
   "en": "Sweden LB Gabriel Gudmundsson is touch-and-go with a virus ahead of the 10:00 BJT kick-off; Svensson or Stroud would deputize if he is ruled out. Dejan Kulusevski is confirmed out all season with a right patella cartilage injury. (per Sports Mole / ESPN)",
   "full": "赛前最新伤情(Sports Mole 06-15 专项报告):①古德蒙德松(利兹联,左后卫)——病毒感染,临战存疑(touch-and-go),若不能出战将由达尼尔·斯文森或埃利奥特·斯特劳德补位左路;②库卢舍夫斯基(托特纳姆,右翼)——全赛季右髌软骨重伤,确认缺席本届世界杯;③林德洛夫、埃兰加、奈格伦、伯恩哈德松均已从小伤中完全恢复,可正常首发。整体评估:古德蒙德松若缺阵,瑞典左路进攻略有削弱,但备选已有预案,影响有限;库卢舍夫斯基缺席是开赛前已知变量,不改主胜52.4%集成概率。三项竞彩价值0.86-0.90仍<1.10,无票建议维持不变。⚠️赛前官方XI确认时再复核左后卫人选。",
   "enFull": "Pre-match injury update from Sports Mole dedicated team-news report (June 15): (1) Gabriel Gudmundsson (Leeds Utd, LB) — virus illness, listed as 'touch-and-go'; Daniel Svensson or Elliot Stroud would cover the left flank if he is ruled out. (2) Dejan Kulusevski (Spurs, RW) — confirmed out all season with a serious right patella cartilage injury; his absence is a pre-tournament known quantity. (3) Lindelof, Elanga, Nygren, Bernhardsson have all made full recoveries from minor knocks and are expected to start. Assessment: Gudmundsson's potential absence marginally weakens Sweden's left-side attack but contingency cover is clear. Kulusevski's miss does not change the ensemble win probability (52.4%). All three HAD value scores remain below 1.10 — no-bet stance unchanged. ⚠️ Verify official XI 60 min before 10:00 kickoff.",
   "links": [
    {
     "name": "Sports Mole · Sweden vs Tunisia team news",
     "url": "https://www.sportsmole.co.uk/football/sweden/world-cup-2026/team-news/sweden-vs-tunisia-injury-suspension-list-predicted-xis_599053.html"
    },
    {
     "name": "ESPN · Sweden vs Tunisia preview",
     "url": "https://www.espn.com/soccer/story/_/id/49038031/sweden-vs-tunisia-fifa-world-cup-2026-tv-channel-how-watch-kick-live-stream-injury-predicted-line-ups"
    }
   ]
  },
  {
   "date": "06-15",
   "match": "科特迪瓦 vs 厄瓜多尔",
   "impact": "瓦伦西亚确认首发",
   "tone": "away",
   "text": "官方首发公布:厄瓜多尔队长恩纳·瓦伦西亚(历史最佳射手)确认出现在首发阵容中,此前轻微伤疑顾虑消散;同时科特迪瓦科苏努(取代伤缺恩迪卡)确认首发,双方核心阵容均完整。(来源:khelnow.com/ESPN)",
   "en": "Official lineups confirmed: Ecuador captain Enner Valencia starts, clearing previous minor fitness concerns. Ivory Coast: Kossounou starts at CB replacing the injured Ndika. Both squads field their expected strongest XIs. (per khelnow.com / ESPN)",
   "full": "06-15 赛前首发信息:①厄瓜多尔:加林德斯;奥尔多涅斯、帕乔、因卡皮耶、埃斯图皮南;卡塞多、维特;耶博亚、普拉塔、安古洛;瓦伦西亚。恩纳·瓦伦西亚(历史49球最佳射手,LAFC)确认首发,此前赛前轻微伤疑已解除,卡塞多+瓦伦西亚中锋双核完整,厄瓜多尔进攻火力维持预期上限。②科特迪瓦:Y.福法纳;杜埃、阿格布多、科苏努、科南;凯西耶、桑加雷、S.福法纳;迪亚洛、盖桑德、迪奥芒代。主力中卫恩迪卡(罗马)因大腿伤确定缺席,科苏努搭档阿格布多中卫组合上阵。科苏努此前仅完成恢复性训练,后防磨合仍有隐忧。整体评估:厄瓜多尔进攻线完整比赛前预期更好,科特迪瓦后防重组是最大变量。现有HAD价值全在0.90以下,无票建议不变。",
   "enFull": "Official lineups for June 15 match: (1) Ecuador: Galindez; Ordonez, Pacho, Hincapie, Estupinan; Caicedo, Vite; Yeboah, Plata, Angulo; Valencia. Enner Valencia (49-goal all-time top scorer, LAFC) confirmed as starter — pre-match minor fitness concern fully resolved. Ecuador's attacking axis of Caicedo + Valencia is intact at full strength. (2) Ivory Coast: Y. Fofana; Doue, Agbadou, Kossounou, Konan; Kessie, Sangare, S. Fofana; Diallo, Guessand, Diomande. Starting CB Ndika (AS Roma) is absent with a thigh injury — Kossounou partners Agbadou in central defence. Kossounou had only completed limited recovery training, so defensive cohesion remains a question. Assessment: Ecuador's attack is at expected capacity; Ivory Coast's defensive reshuffle is the key variable. All HAD values remain below 0.90 — no-bet stance unchanged.",
   "links": [
    {
     "name": "khelnow.com · Ecuador vs Ivory Coast lineup",
     "url": "https://khelnow.com/football/world-football-ecuador-starting-lineup-vs-ivory-coast-fifa-world-cup-202606"
    },
    {
     "name": "ESPN · Ivory Coast vs Ecuador preview",
     "url": "https://www.espn.com/soccer/story/_/id/49029367/fifa-world-cup-2026-ivory-coast-vs-ecuador-tv-channel-how-watch-kick-live-stream-referee-predicted-line-ups"
    }
   ]
  },
  {
   "date": "06-15",
   "match": "瑞典 vs 突尼斯",
   "impact": "汉尼拔确认就绪",
   "tone": "away",
   "text": "最新Sports Mole伤停更新:突尼斯无任何伤停顾虑,汉尼拔·梅布里(伯恩利)被列入预测首发,此前'出战存疑'状态已升级为就绪;突尼斯进攻组织线完整,对瑞典压力加大。(来源:Sports Mole/khelnow.com)",
   "en": "Latest Sports Mole team news confirms Tunisia have no injury concerns for the June 15 opener; Hannibal Mejbri (Burnley) is in the predicted XI — upgrading from the previous 'doubtful' status. Tunisia's creative midfield is fully intact. (per Sports Mole / khelnow.com)",
   "full": "Sports Mole伤停汇总与khelnow.com赛前报道均确认:突尼斯在06-15对阵瑞典的揭幕战中没有任何伤停或停赛困扰。预测首发XI:查马赫;瓦勒里、塔尔比、雷基克、阿布迪;赫代拉、斯基里;伊斯梅尔·加比、汉尼拔·梅布里、阿舒里;马斯图里。汉尼拔·梅布里是突尼斯最具创造力的中场,此前有媒体报道其在热身赛对阵奥地利中受伤、出战存疑,现最新权威更新已将其状态升级为可首发。这意味着突尼斯攻击组织力高于悲观预期,与瑞典中场的对抗将更具竞争性。对价值闸影响:瑞典集成主胜52.4%、赔率约1.71→价值~0.90仍在1.10以下,无票建议维持不变;但突尼斯阵容完整令本场不确定性略有上升。⚠️赛前60分钟确认官方XI是最后防线。",
   "enFull": "Sports Mole's latest injury and suspension report and the khelnow.com preview both confirm Tunisia have zero injury or suspension concerns ahead of their June 15 opener vs Sweden. Predicted Tunisia XI: Chamakh; Valery, Talbi, Rekik, Abdi; Khedira, Skhiri; Gharbi, Hannibal Mejbri, Achouri; Mastouri. Hannibal Mejbri (Burnley), Tunisia's most creative central midfielder and key attacking organiser, was previously flagged as a doubt after reportedly picking up a knock in a pre-tournament friendly vs Austria. The latest information from multiple sources now places him in the starting XI with no fitness concerns — a meaningful upgrade from the earlier uncertainty. Tactical implication: Tunisia's creative output is restored to its baseline level, making the midfield contest with Sweden more competitive than the 'Hannibal doubt' scenario suggested. Value-gate assessment: Sweden win probability at ~52.4% (odds ~1.71) implies value ≈0.90, still below the ≥1.10 buy threshold — no bet unchanged. Tunisia fully fit does slightly increase match variance. ⚠️ Confirm official XI 60 minutes before the 10:00 BJT kickoff.",
   "links": [
    {
     "name": "Sports Mole · Sweden vs Tunisia team news",
     "url": "https://www.sportsmole.co.uk/football/sweden/world-cup-2026/team-news/sweden-vs-tunisia-injury-suspension-list-predicted-xis_599053.html"
    },
    {
     "name": "khelnow.com · Sweden vs Tunisia preview",
     "url": "https://khelnow.com/football/world-football-sweden-vs-tunisia-preview-fifa-world-cup-2026"
    }
   ]
  },
  {
   "date": "06-17",
   "match": "加纳 vs 巴拿马",
   "impact": "Partey确认缺阵(签证被拒)·市场已吸收",
   "tone": "home",
   "text": "Thomas Partey因英国强奸案指控被加拿大拒绝入境，确认缺席加纳首战对阵巴拿马。但此消息6月13日已由Al Jazeera/ESPN公开报道，当前赔率@2.04已充分吸收——不构成未定价的硬信息差。巴拿马Carrasquilla伤后替补在列，非首发。",
   "en": "Thomas Partey denied entry to Canada due to UK rape charges — confirmed absent vs Panama. But publicly reported 6/13 by Al Jazeera/ESPN; @2.04 odds already reflect his absence. No unpriced hard edge. Panama's Carrasquilla bench-only (not starting).",
   "full": "06-17终盘情报(023加纳vs巴拿马)：①Thomas Partey(Villarreal)因英国强奸罪指控待审，加拿大拒绝其签证。加纳已上诉但无效。Partey是加纳队长兼中场核心，缺席影响实质存在。②关键：此消息6月13日已由Al Jazeera/ESPN公开，@2.04赔率(集成43.8%)是Partey缺阵版本的加纳定价，不是全力版本。非独家信息差。③集成：主胜43.8%/平28.9%/客胜27.3%；HAD价值0.87-0.89；让球(-1)最高0.92；全<1.10。④巴拿马：Carrasquilla恢复训练，教练确认替补备案，首发不出。⑤结论：无未定价硬信息差，全盘口<1.10，合法空仓。",
   "enFull": "June 17 intelligence (023 Ghana vs Panama): Partey confirmed absent (Canada visa denied, UK rape trial). Info public since June 13 (Al Jazeera/ESPN); @2.04 already priced in — not an unpriced hard edge. Ghana H43.8/D28.9/A27.3; values 0.87-0.89, best hhad 0.92 — all below 1.10. Panama: Carrasquilla bench only. No bet.",
   "links": [
    {
     "name": "Al Jazeera · Partey denied entry to Canada",
     "url": "https://www.aljazeera.com/sports/2026/6/13/thomas-partey-denied-entry-into-canada-will-miss-ghanas-world-cup-opener"
    },
    {
     "name": "ESPN · Ghana vs Panama preview",
     "url": "https://www.espn.com/soccer/story/_/id/49068930/ghana-vs-panama-fifa-world-cup-2026-tv-channel-how-watch-kick-live-stream-injury-predicted-line-ups"
    }
   ]
  },
  {
   "date": "06-17",
   "match": "英格兰 vs 克罗地亚",
   "impact": "Livramento缺阵·Saka轻微疑问·均已定价",
   "tone": "neutral",
   "text": "英格兰Livramento（右后卫）训练中小腿伤确认缺阵，Chalobah替补入队；Saka跟腱轻微疑问但预计首发；Rice已就绪。克罗地亚Modric/Perisic全员可用。伤情已公开，@1.53已反映，让胜最高价值1.02<1.10，空仓。",
   "en": "England's Livramento (RB) out with calf injury; Chalobah called up. Saka (Achilles) expected to start. Rice fit. Croatia: Modric/Perisic available. All news priced in at @1.53. Best hhad value 1.02, below 1.10 gate. No bet.",
   "full": "06-17终盘情报(022英格兰vs克罗地亚)：①Livramento周日训练小腿伤缺阵，Chalobah替补；对英格兰防线影响有限（Reece James/Konsa仍在）。②Saka跟腱轻微不适，预计首发非'缺阵'级。③Rice完全就绪。④克罗地亚Modric/Perisic全员可用。⑤集成59.0%/24.7%/16.2%；HAD 0.90/0.87/0.86；让胜(-1)1.02/edge+4.7pp<5pp门槛。结论：全部公开已price-in，空仓。",
   "enFull": "June 17 intelligence (022 England vs Croatia): Livramento (calf) out — Chalobah in. Saka (Achilles minor) likely starts. Rice fit. Croatia all available. H59.0/D24.7/A16.2; values 0.90/0.87/0.86; hhad best 1.02 / edge +4.7pp below 5pp hard-news threshold. No bet.",
   "links": [
    {
     "name": "Goal.com · England star ruled out",
     "url": "https://www.goal.com/en-us/lists/england-star-ruled-out-of-2026-world-cup-on-eve-of-croatia-opener-in-huge-injury-blow-for-thomas-tuchel/blt21765740b9f469bb"
    },
    {
     "name": "Sports Mole · England vs Croatia injury list",
     "url": "https://www.sportsmole.co.uk/football/england/world-cup-2026/injuries-and-suspensions/rice-saka-latest-england-vs-croatia-injury-suspension-list-and-return-dates_599165.html"
    }
   ]
  },
  {
   "date": "06-17",
   "match": "乌兹别克 vs 哥伦比亚",
   "impact": "Masharipov背伤缺阵·哥伦比亚全员就绪",
   "tone": "away",
   "text": "乌兹别克创意核心Masharipov背伤确认缺阵；另Alijonov/Ganiev待评估。哥伦比亚James Rodriguez+Diaz+Arias+Suarez完整首发。Masharipov缺阵削弱乌兹别克，但两队实力差距过大，客胜价值仍0.89<1.10，空仓。",
   "en": "Uzbekistan's Masharipov (key creative mid) out with back injury; Alijonov/Ganiev under assessment. Colombia fully fit — James/Diaz/Arias/Suarez all starting. Away value 0.89, below 1.10 gate. No bet.",
   "full": "06-17终盘情报(024乌兹别克vs哥伦比亚)：①Masharipov（乌兹别克进攻组织核心）持续背伤确认缺阵，是最大减分项；Alijonov小腿/Ganiev轻微碰撞待评。②哥伦比亚完整：James Rodriguez/Luis Diaz/Arias/Suarez全首发。③集成9.1%/18.3%/72.7%；价值0.88/0.89/0.89；让球(+1)让负0.95/edge+3.6pp，全<1.10。④结论：无未定价硬信息差（Masharipov伤情已见媒体），空仓。",
   "enFull": "June 17 intelligence (024 Uzbekistan vs Colombia): Masharipov (back) confirmed absent; Alijonov/Ganiev under evaluation. Colombia: full squad, James/Diaz/Arias/Suarez starting. H9.1/D18.3/A72.7; values 0.88/0.89/0.89; hhad best 0.95. No unpriced hard edge; no bet.",
   "links": [
    {
     "name": "Sports Mole · Uzbekistan vs Colombia injury list",
     "url": "https://www.sportsmole.co.uk/football/uzbekistan/world-cup-2026/team-news/uzbekistan-vs-colombia-injury-suspension-list-predicted-xis_599305.html"
    },
    {
     "name": "Rotowire · Uzbekistan vs Colombia preview",
     "url": "https://www.rotowire.com/soccer/article/uzbekistan-vs-colombia-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-k-118365"
    }
   ]
  }
 ],
 "slip":  {
  "title": "6月18日 · 周三批 · 21:00最终版 · 0元出账(合法空仓)",
  "status": "**真钱 0 元。** 周三批四场(021-024)全盘口终盘重算：HAD+让球价值分均在 0.83–1.02 区间，无一过 ≥1.10 安全边际。情报五路交叉：021葡萄牙无伤停(深让-2镜像)；022英格兰Livramento缺阵/Saka疑问(均已公开price-in)；023加纳Partey缺阵(6/13公开，@2.04已吸收)；024乌兹别克Masharipov背伤缺阵(已见媒体)。无新的未定价硬信息差。§13.5合法空仓三条齐签，放行。",
  "detail": "**周三批四场终盘全盘口扫描结果：**\n①021 葡萄牙 vs 刚果金(01:00)：集成主胜78.4%，HAD价值0.89/0.88/0.88，让球(-2)让胜0.95/让平0.89/让负0.83——深让镜像雷区，市场已充分吸收强弱差距，模型净胜≥3尾部不可靠，§6空仓。\n②022 英格兰 vs 克罗地亚(04:00)：集成主胜59.0%，HAD价值0.90/0.87/0.86，让球(-1)让胜1.02/edge+4.7pp——最接近门槛但仍<1.10且需>5pp+硬料支撑；Livramento缺阵+Saka疑问均已公开price-in，无独家信息差，空仓。\n③023 加纳 vs 巴拿马(07:00)：集成主胜43.8%，HAD价值0.89/0.87/0.88——Thomas Partey签证被拒6/13已公开，@2.04赔率已吸收；巴拿马Carrasquilla替补，不首发；全盘口<1.10，空仓。\n④024 乌兹别克 vs 哥伦比亚(10:00)：集成客胜72.7%，HAD价值0.88/0.89/0.89，让球(+1)让负0.95/edge+3.6pp；Masharipov背伤缺阵削弱乌兹别克，但两队实力差距过大，无法推价值过闸；哥伦比亚James/Diaz/Arias/Suarez完整，空仓。\n**芒格逆向第四问：今晚最好的动作是什么都不做吗？是的。** 影子book记满四场全盘口预测，样本持续增长，学习引擎不熄火。坐等下一颗有真信息差的球。",
  "items": [],
  "summary": {
   "stake": 0,
   "evLow": 0,
   "evHigh": 0,
   "winProb": 0,
   "best": {
    "label": "0元出账·影子book记满·学习引擎在跑",
    "pnl": 0
   },
   "worst": {
    "label": "0元出账·零风险",
    "pnl": 0
   },
   "keyScenarios": [
    {
     "label": "合法空仓：四场全扫、情报复核、影子book落盘",
     "pnl": 0
    }
   ]
  },
  "matrix": [],
  "copyText": "周三(6/18)不下注，谢谢！",
  "reviewNote": "✓ 已独立复核 20:42 | 空仓版本(items=[])·独立复核官二次确认·草稿合规无删改 | 021-024全盘口价值0.83-1.02均<1.10；021深让-2镜像；022让胜1.02仍<门槛；情报(迪亚斯/Livramento/Partey/Masharipov)均已price-in，无新硬信息差；§13.5合法空仓三条齐签；仓位0元·资金池安全(279.5>地板80)。放行。"
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
    "A": 0.600,
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
 }
};
