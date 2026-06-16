window.DASH_DATA = {
 "meta": {
  "round": "小组赛第 1 轮",
  "updated": "2026-06-17 00:10",
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
   "num": "周二017",
   "home": "法国",
   "away": "塞内加尔",
   "time": "06-17 03:00",
   "models": {
    "A": [
     67.0,
     21.1,
     11.9
    ],
    "B": [
     77.3,
     16.6,
     6.1
    ],
    "C": [
     68.7,
     20.5,
     10.8
    ],
    "ens": [
     68.1,
     20.6,
     11.3
    ]
   },
   "wdlValue": [
    {
     "pick": "主胜",
     "odds": 1.32,
     "prob": 68.1,
     "value": 0.9
    },
    {
     "pick": "平局",
     "odds": 4.20,
     "prob": 20.6,
     "value": 0.87
    },
    {
     "pick": "客胜",
     "odds": 7.45,
     "prob": 11.3,
     "value": 0.84
    }
   ],
   "scores": [],
   "verdict": "空仓(法国-1让胜value0.93/edge+2.2pp,低于≥1.10闸)。终盘情报更新:Ismaila Sarr(马赛右翼)Sports Mole确认缺席+Sabaly/Jakobs同列不可用——但Sarr缺席对法国胜率贡献有限(68%→~73%,value0.90→0.96),仍远不及1.10闸。姆巴佩无伤、萨利巴背伤已愈确认首发。空仓。"
  },
  {
   "num": "周二018",
   "home": "伊拉克",
   "away": "挪威",
   "time": "06-17 06:00",
   "models": {
    "A": [],
    "B": [
     7.2,
     17.4,
     75.5
    ],
    "C": [
     4.0,
     12.5,
     83.5
    ],
    "ens": [
     5.6,
     14.4,
     80.0
    ]
   },
   "wdlValue": [],
   "scores": [],
   "verdict": "🔴深让镜像雷区(挪威让+2)。哈兰德/厄德高均健康首发、挪威全员可用,无信息差;让2对伊拉克(Arnold防反铁桶)门槛极高,模型在净胜尾部跟市场对赌=多半模型错。胜平负未开盘。§6深让信市场,空仓。"
  },
  {
   "num": "周二019",
   "home": "阿根廷",
   "away": "阿尔及利亚",
   "time": "06-17 09:00",
   "models": {
    "A": [
     69.7,
     20.4,
     9.8
    ],
    "B": [],
    "C": [
     71.6,
     19.7,
     8.8
    ],
    "ens": [
     69.7,
     20.4,
     9.9
    ]
   },
   "wdlValue": [
    {
     "pick": "主胜",
     "odds": 1.27,
     "prob": 69.7,
     "value": 0.89
    },
    {
     "pick": "平局",
     "odds": 4.33,
     "prob": 20.4,
     "value": 0.88
    },
    {
     "pick": "客胜",
     "odds": 9.00,
     "prob": 9.9,
     "value": 0.89
    }
   ],
   "scores": [],
   "verdict": "情报反指(阿根廷-1让胜value0.97/edge+4.0pp,最接近门槛但仍<1.10)。终盘确认:梅西ESPN双源证实完全康复首发(与早间'分钟管理'担忧对比为明确升级);Scaloni演练5后卫软信号方向仍利空热门大胜动机;Bensebaini伤缺公开已price-in。无独家信息差,空仓。"
  },
  {
   "num": "周二020",
   "home": "奥地利",
   "away": "约旦",
   "time": "06-17 12:00",
   "models": {
    "A": [
     70.2,
     19.0,
     10.7
    ],
    "B": [
     81.5,
     14.6,
     3.9
    ],
    "C": [
     72.2,
     18.3,
     9.6
    ],
    "D": [
     71.9,
     18.0,
     10.1
    ],
    "ens": [
     71.6,
     18.5,
     10.0
    ]
   },
   "wdlValue": [
    {
     "pick": "主胜",
     "odds": 1.26,
     "prob": 71.6,
     "value": 0.9
    },
    {
     "pick": "平局",
     "odds": 4.65,
     "prob": 18.5,
     "value": 0.86
    },
    {
     "pick": "客胜",
     "odds": 8.25,
     "prob": 10.0,
     "value": 0.82
    }
   ],
   "scores": [],
   "verdict": "空仓(终盘奥地利赔率从1.21→1.26,HHAD让胜value0.91/edge+1.2pp,均低于≥1.10闸)。约旦双锋Naimat+Sabra均缺席(两源确认)但已price-in;三中卫低块防守韧性完好→净胜2+仍非高确定性事件。Baumgartner因大腿伤缺席奥地利。无独家信息差,空仓。"
  }
 ],
 "news": [
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
  }
 ],
 "slip":  {
  "title": "6月17日 · 周二批 · 0元出账 · 影子book学习中(空仓≠熄火)",
  "status": "**真钱 0 元。** 三视角(马斯克第一性原理/塔勒布/芒格逆向)一致裁决:学习不需要花钱,昨晚那 3 注探索注 EV-1.74 元买到 0 增量信息=该删。今晚=赚钱引擎签工单合法空仓(四场全 -EV、无硬信息差)+ 学习引擎把四场全盘口预测概率记满**影子 book**(免费产校准样本)。**空仓≠退化:机器还在产样本,且不被下注预算掐住,学习速度反而快约 8 倍。**",
  "detail": "**为什么从'出探索注'反转成'0元+影子book'(2026-06-16 三视角压力测试):** 第一性原理:一个校准样本=(赛前记的概率 p,收盘线,实际结果),三样里没有'钱'这个变量→为了学而下的 -EV 注是个有 vig 成本却零增量信息的可删零件。三家殊途同归砍掉昨晚 3 注(马斯克:删;塔勒布:中段温水注违反杠铃;芒格:确定亏损 vs 噪音级 0.18bit)。**新架构=一台引擎 + 一套免费仪表:** ①情报工厂(唯一花真钱的引擎,只为'市场没定价的硬信息差'变现解封,像土耳其伤兵→澳洲+91)②影子 book(学习唯一引擎,每场赛前落盘预测概率→赛后免费算 CLV/Brier,覆盖全部场次不只下注的)。**马斯克 vs 塔勒布的冲突已解:99% 学习纸上免费(校准/概率精度),1% 执行肌肉(真拿到硬料时会不会手软/size错/被WAF拦)只在真信息差出手时用真钱练——今晚两样都不是,所以 0 元。** 今晚影子 book 已记四场全盘口预测(见 model_state/predictions_log),赛后自动结算进校准。真钱锁起来,坐等下一颗像土耳其伤兵那样的好球——**能在 -EV 市场忍住不动、只在真信息差出手,正是要造的那个通用预测智能体的核心能力,直接迁股市。**",
  "items": [],
  "summary": {
   "stake": 0,
   "evLow": 0,
   "evHigh": 0,
   "winProb": 0,
   "best": {
    "label": "0元出账·影子book学习",
    "pnl": 0
   },
   "worst": {
    "label": "0元出账·零风险",
    "pnl": 0
   },
   "keyScenarios": [
    {
     "label": "真钱0元·影子book记满四场全盘口预测",
     "pnl": 0
    }
   ]
  },
  "matrix": [],
  "copyText": "周二(6/17)不下注,谢谢!(影子book已记四场预测,赛后免费校准)",
  "reviewNote": "✓ 已独立复核 20:42 ｜ 草稿合规,无删改 · 空仓版本(items=[]) · 四场全覆盖(017-020):HAD value全在0.82-0.93区间,均<1.10;挪威场胜平负未开盘§6深让镜像=空仓。§13.5合法空仓三条齐签:(a)全盘口扫完edge全<安全边际(b)五路情报交叉无硬信息差(c)影子book已记满四场全盘口预测。放行。"
 },
 "calibration": {
  "stats": {
   "direction": "3/5",
   "scoreManual": "1/4",
   "scoreModel": "0/4"
  },
  "learning": {
   "weights": {
    "A": 40.1,
    "B": 25.6,
    "C": 19,
    "D": 15.3
   },
   "brier": {
    "A": 0.606,
    "B": 0.635,
    "C": 0.672,
    "D": 0.815,
    "ens": 0.671
   },
   "note": "8场学习后权重 A40/B26/C19/D15(η=1抗过拟合)。**8场原始方向仅4/8:开幕轮加拿大/瑞士/巴西三本命全被逼平,模型系统性高估热门**。但澳土澳洲爆冷2:0让B-Elo回升(它本场Brier 0.679最准)。最硬的真相:**我们靠的不是原始模型预测,而是①纪律(避开贴水本命=躲过那3场逼平的坑)②场外情报tilt(土耳其伤兵→押澳洲胜中+91)**。边在纪律和情报,不在原始模型——这条迁到股市同样成立。"
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
