window.DASH_DATA = {
 "meta": {
  "round": "小组赛第 1 轮",
  "updated": "2026-06-19 09:10",
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
   },
   {
    "d": "06-19",
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
     "⏳ 墨西哥 vs 韩国(09:00，进行中)",
     "📊 当日已结算3场：无持仓，池 279.5 不变(待028结算)"
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
   "status": "live",
   "actual": "进行中",
   "predManual": "未出票",
   "predModel": "主胜47.1%",
   "ensemble": {
    "h": 47.1,
    "d": 29.6,
    "a": 23.3
   },
   "note": "进行中(09:00开球)。全盘口已扫:HAD主胜0.91/平0.83/客胜0.91,HHAD(-1)全<1.10,无合格edge;比分票禁止。蒙特斯停赛/金塔内斯疑问vs韩国全员可用——市场已定价。影子book已记样本。"
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
   "num": "周五029",
   "home": "美国",
   "away": "澳大利亚",
   "time": "06-20 03:00",
   "models": {
    "A": [61.1, 23.1, 15.8],
    "B": [65.7, 20.9, 13.4],
    "C": [63.2, 22.2, 14.6],
    "ens": [62.7, 22.4, 15.0]
   },
   "wdlValue": [
    {"pick": "主胜", "odds": 1.45, "prob": 62.7, "value": 0.91},
    {"pick": "平局", "odds": 3.83, "prob": 22.4, "value": 0.86},
    {"pick": "客胜", "odds": 5.60, "prob": 15.0, "value": 0.84}
   ],
   "scores": [],
   "verdict": "空仓(HAD价值0.91/0.86/0.84，HHAD(-1)让胜1.00/edge+4.4pp，全<1.10)。情报：普利西奇（Pulisic）小腿轻伤大概率出战；澳大利亚图雷（Toure）腿部抽筋大概率出战——两队伤情均已公开，市场已price-in。无新的未定价硬信息差。§13.1空仓。"
  },
  {
   "num": "周五030",
   "home": "苏格兰",
   "away": "摩洛哥",
   "time": "06-20 06:00",
   "models": {
    "A": [17.4, 27.0, 55.7],
    "B": [24.5, 25.4, 50.1],
    "C": [16.6, 26.1, 57.2],
    "ens": [19.5, 26.4, 54.0]
   },
   "wdlValue": [
    {"pick": "主胜", "odds": 5.10, "prob": 19.5, "value": 1.00},
    {"pick": "平局", "odds": 3.28, "prob": 26.4, "value": 0.87},
    {"pick": "客胜", "odds": 1.59, "prob": 54.0, "value": 0.86}
   ],
   "scores": [],
   "verdict": "空仓(最高价值1.00=苏格兰胜@5.10，仍<1.10安全边际)。苏格兰胜edge仅+2.1pp，HHAD(+1)让负0.96/edge+2.6pp，均不达标。情报：McKenna腿筋疑问已公开，摩洛哥1:1平巴西，苏格兰1:0赢海地——双方首轮结果均已price-in；无新未定价硬信息差。§13.1空仓。"
  },
  {
   "num": "周五031",
   "home": "巴西",
   "away": "海地",
   "time": "06-20 08:30",
   "models": {
    "B": [91.1, 12.0, -3.1],
    "C": [90.5, 7.5, 2.0],
    "D": [88.1, 8.1, 3.8],
    "ens": [90.6, 10.7, -1.3]
   },
   "wdlValue": [
    {"pick": "⚠️竞彩未开盘", "odds": null, "prob": 90.6, "value": null}
   ],
   "scores": [],
   "verdict": "竞彩未开盘·预研模式。HHAD(-2)预研让胜@1.73·模型57.8%·价值1.00(标准预研值)——深让-2镜像雷区，即便开盘后数字微变，也需严格按§6核查：除非出现大轮换/划水硬新闻，否则深让信市场、空仓。内马尔小腿伤缺阵已公开(Ancelotti确认，不补招)，虽属重要球星缺席，但对让-2盘的影响已被深让线吸收。开盘后必须重跑predict.py。"
  },
  {
   "num": "周五032",
   "home": "土耳其",
   "away": "巴拉圭",
   "time": "06-20 11:00",
   "models": {
    "A": [46.1, 28.6, 25.3],
    "B": [42.3, 27.3, 30.4],
    "C": [47.3, 28.0, 24.6],
    "D": [46.7, 28.6, 24.6],
    "ens": [45.1, 28.2, 26.7]
   },
   "wdlValue": [
    {"pick": "主胜", "odds": 1.92, "prob": 45.1, "value": 0.87},
    {"pick": "平局", "odds": 3.10, "prob": 28.2, "value": 0.87},
    {"pick": "客胜", "odds": 3.50, "prob": 26.7, "value": 0.93}
   ],
   "scores": [],
   "verdict": "空仓(最高价值0.93=巴拉圭胜@3.50，HHAD(-1)让胜1.00/edge+2.7pp，全<1.10)。情报：阿尔米龙（Almiron）带伤疑问，营地称「乐观」；土耳其耶尔迪兹（Yildiz）小腿已可上场；双方均需首胜保组赛出线，生死战——惯常性高压下概率向中间集中，但无未定价硬信息差。§13.1空仓。"
  }
 ],
 "news": [
{
   "date": "06-19",
   "match": "苏格兰 vs 摩洛哥",
   "impact": "Bounou臂伤存疑",
   "tone": "away",
   "text": "摩洛哥主力GK布努(Bounou)对巴西首战后肩臂受伤存疑；CB阿格尔德(Aguerd)亦携挪威热身旧伤；苏格兰麦肯纳(McKenna)小腿伤已重返训练，预计可用(The Scotsman·Sports Mole双源)",
   "en": "Morocco GK Yassine Bounou doubtful with arm/shoulder injury sustained vs Brazil; CB Nayef Aguerd also carrying knock from Norway warm-up; Scotland's Scott McKenna (calf) returned to training and expected to be fit (The Scotsman/Sports Mole)",
   "full": "The Scotsman与Sports Mole(06-19)均确认：摩洛哥首发门将亚辛·布努（Bounou，Al-Qadsiah）在首轮对阵巴西时肩臂受伤，出战苏格兰的状态标记为存疑（doubtful）。若布努无法出战，摩洛哥将被迫起用经验相对不足的备用GK——对苏格兰定位球和射门端是一定利好。此外，后卫纳赛夫·阿格尔德（前西汉姆）带挪威热身赛旧伤出征，出战状况受监控。苏格兰方面：麦肯纳（McKenna，小腿）已重返训练，史蒂夫·克拉克预计他将可出战；首轮1:0胜海地后无新伤缺，阵容相对完整。综合：摩洛哥双重伤情（GK+CB）略微收窄双方差距；但摩洛哥首轮1:1平巴西进攻仍强，苏格兰胜value=1.00（<1.10安全边际），focus空仓判断不变。⚠️ 布努/阿格尔德首发状态须赛前60分钟官方XI确认。",
   "enFull": "The Scotsman and Sports Mole (June 19) both report: Morocco's starting GK Yassine Bounou suffered an arm/shoulder injury during the Brazil opener and is listed as doubtful for Saturday's clash with Scotland. If Bounou is ruled out, Morocco would use a backup GK with considerably less international pedigree — a positive for Scotland's set-piece and shooting threat. CB Nayef Aguerd (ex-West Ham, now Rennes) is carrying a knock from the Norway warm-up and is being monitored. Scotland: Scott McKenna (calf) has returned to training and is expected to be available per Steve Clarke; no new injuries following the 1-0 win over Haiti. Net: Morocco's twin injury concerns (GK + CB) marginally close the gap with Scotland; however, Morocco showed strong attacking quality in the 1-1 draw vs Brazil. Scotland win value 1.00 remains below the ≥1.10 buy threshold — no-bet unchanged. ⚠️ Confirm Bounou/Aguerd status at official XI 60 min before kick-off.",
   "links": [
    {"name": "The Scotsman: Scotland handed injury boost vs Morocco", "url": "https://www.scotsman.com/sport/football/international/scotland-handed-major-injury-boost-ahead-of-morocco-world-cup-match-8744374"},
    {"name": "Sports Mole: Scotland vs Morocco preview", "url": "https://www.sportsmole.co.uk/football/scotland/world-cup-2026/preview/scotland-vs-morocco-prediction-team-news-lineups_599454.html"}
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
    {"name": "Squawka: Turkey vs Paraguay team news predicted lineups", "url": "https://www.squawka.com/en/news/world-cup/turkey-vs-paraguay-team-news-predicted-lineups/"},
    {"name": "RotoWire: Turkey vs Paraguay preview", "url": "https://www.rotowire.com/soccer/article/turkey-vs-paraguay-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-d-118661"}
   ]
  },
{
   "date": "06-19",
   "match": "美国 vs 澳大利亚",
   "impact": "普利西奇伤确认出战",
   "tone": "home",
   "text": "普利西奇(Pulisic)首战提前下场，最新确认将出战澳大利亚，但或以替补上阵保体能；澳洲图雷(Toure)小腿抽筋已确认可用(NBC Sports·ESPN双源)",
   "en": "Pulisic limped off vs Paraguay but confirmed fit to feature vs Australia, potentially from bench; Australia's Toure (calf cramp) also confirmed available (NBC Sports/ESPN)",
   "full": "NBC Sports与ESPN(06-19)确认：美国队长普利西奇(AC米兰)首轮4:1大胜巴拉圭时提前离场，小腿不适，但最新报道显示他「will be fit to feature」出战澳大利亚。主帅或让他替补出场保护体能。澳大利亚前锋图雷(Mohamed Toure)首轮对土耳其腿部抽筋提前退场，已确认伤势轻微可参战。双方无新增伤缺——本场焦点在普利西奇是否首发而非是否参战。Group D组双雄相遇：美国4:1、澳大利亚2:0，两队各积3分同顶分组，胜者出线主动权大占。综合：普利西奇确认出战对美国price-in程度无大影响；现有HAD value仍<1.10（美国胜0.91），focus空仓判断不变。⚠️ 普利西奇具体角色（首发/替补）需赛前60分钟官方XI确认。",
   "enFull": "NBC Sports and ESPN (June 19) confirm: Christian Pulisic (AC Milan) limped off during the USA's 4-1 win over Paraguay with a calf concern, but is confirmed fit to play vs Australia in the Group D top-of-table clash. Pochettino may opt to start him from the bench to manage his workload. Australia's Mohamed Toure (calf cramp, vs Turkey) is also confirmed available. No new injuries from either camp. Context: USA (4-1 Paraguay) and Australia (2-0 Turkey) both sit on 3 points atop Group D — winner takes a commanding grip on qualification. Net: Pulisic's fitness is largely expected and already priced in; USA win HAD value 0.91 remains below the ≥1.10 threshold. No-bet stance unchanged. ⚠️ Pulisic starting vs. bench role confirmed at official XI 60 min before kick-off.",
   "links": [
    {"name": "NBC Sports: Pulisic injury update vs Australia", "url": "https://www.nbcsports.com/soccer/news/christian-pulisic-injury-news-latest-update-on-usmnt-star-ahead-of-key-australia-clash"},
    {"name": "ESPN: USA vs Australia World Cup 2026 preview", "url": "https://www.espn.com/soccer/story/_/id/49093966/fifa-world-cup-2026-usmnt-vs-australia-channel-how-watch-kickoff-live-stream-referee-predicted-lineups"}
   ]
  },
{
   "date": "06-19",
   "match": "加拿大 vs 卡塔尔",
   "impact": "戴维斯复出可出场",
   "tone": "home",
   "text": "加拿大队长阿方索·戴维斯(腘绳肌)已重返完整训练,主帅马尔什确认周四对阵卡塔尔可上场;之前预测\"不首发\"已过时(ESPN 06-18)",
   "en": "Canada captain Alphonso Davies (hamstring) has returned to full training — coach Jesse Marsch confirms he is available vs Qatar on Thursday; previous 'unlikely to start' reports are outdated (ESPN Jun 18)",
   "full": "ESPN 06-18独家:加拿大主帅杰西·马尔什赛前新闻发布会明确表示阿方索·戴维斯(腘绳肌)\"available to play\"——他本周已全程参与训练。首发或替补仍由马尔什赛时决定,但\"可出场\"推翻了之前多个信源的\"不首发\"预测。这是对加拿大进攻体系(左路+过人+定位球)的显著加成。卡塔尔无伤情变化,维持原阵。⚠️ 正式首发XI开球前60分钟公布,关注戴维斯是否打满90分钟。",
   "enFull": "ESPN Jun 18 exclusive: Canada coach Jesse Marsch confirmed in pre-match presser that captain Alphonso Davies (hamstring) is 'available to play' for Thursday's Group B clash vs Qatar after returning to full training this week. Whether he starts or comes off the bench is match-day decision, but his availability meaningfully upgrades Canada's attacking threat. Qatar unchanged, no new injury concerns. ⚠️ Official XIs 60 min before kick-off.",
   "links": [{"name":"ESPN: Davies fit and available vs Qatar","url":"https://www.espn.com/soccer/story/_/id/49103614/alphonso-davies-fit-available-play-canada-world-cup-qatar"}]
  },
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
  "title": "6月19日 · 周四批 · 08:53复核 · 0元出账(合法空仓·终盘管家20:36被Watchdog强杀)",
  "status": "**真钱 0 元。** 终盘管家 2026-06-18 20:36 被15分钟 watchdog 强杀，周四批(025-028)草稿未能生成，.final_review_passed 未写入。复核官 08:53 接管：①025捷克vs南非(00:00 已完场1:1)、②026瑞士vs波黑(03:00 已完场4:1)、③027加拿大vs卡塔尔(06:00 已完场6:0)三场均已完场，无法出票；④028墨西哥vs韩国(09:00)：全盘口已扫 HAD主胜0.91/平0.83/客胜0.91、HHAD(-1)全<1.10，无合格edge，蒙特斯停赛+金塔内斯疑问已market price-in。§13.5合法空仓三条齐签。",
  "detail": "**周四批(025-028)全盘口扫描(终盘管家20:36 Watchdog强杀后，复核官08:53接管代扫)：**\n①025 捷克 vs 南非(06-19 00:00)：已完场1:1，无法出票。\n②026 瑞士 vs 波黑(06-19 03:00)：已完场4:1，无法出票。\n③027 加拿大 vs 卡塔尔(06-19 06:00)：已完场6:0，无法出票。\n④028 墨西哥 vs 韩国(06-19 09:00，即将开球)：HAD主胜0.91/平0.83/客胜0.91，HHAD(-1)全<1.10，无合格edge；蒙特斯停赛+金塔内斯存疑(单源未确认)均已市场price-in；韩国全员可用——实力差距已充分定价。**§3价值闸未过，§13.5合法空仓签字：(a)全盘口已扫，全<1.10；(b)无新的未定价硬信息差；(c)影子book已记样本。**",
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
     "label": "合法空仓：025-027已完场无法出票；028全盘口<1.10；Watchdog事故·复核官接管",
     "pnl": 0
    }
   ]
  },
  "matrix": [],
  "copyText": "周四(6/19)不下注，谢谢！",
  "reviewNote": "✓ 已独立复核 08:53 | 终盘管家20:36 Watchdog强杀·复核官接管 | 025-027已完场无法出票；028 HAD全值0.83-0.91均<1.10；§13.5合法空仓三条齐签；仓位0元·资金池安全(279.5>地板80)。放行。"
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
