window.DASH_DATA = {
 "meta": {
  "round": "小组赛第 2 轮",
  "updated": "2026-06-21 20:31",
  "disclaimer": "竞彩胜平负盘实测 vig 12.9%,比分盘更高,长期期望为负。本看板的使命是决策质量管理:亏得最少、给运气最大杠杆。资金池纪律高于一切预测。理性购彩。"
 },
 "bankroll": {
  "start": 200,
  "startDate": "06-11",
  "cashNow": 354.55,
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
   },
   {
    "d": "06-21",
    "v": 354.55
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
    "pool": 354.55,
    "pnl": 26.45,
    "records": [
     "🏆 荷兰 5:1 瑞典(01:00 完赛)",
     "　✓ 荷单 12@1.53 → 18.36 | 集成56.2%主胜方向正确(Brier≈0.237)",
     "🏆 德国 2:1 科特迪瓦(04:00 完赛)",
     "　集成67.1%主胜方向正确(Brier≈0.229，优) | 瓦伊禁赛+恩迪卡伤缺情报事前已price-in | Elo:德国+7.3→1910.2,科特迪瓦→1695.0",
     "　✓ 2串1 德国胜×荷兰胜 18@2.035 → 36.63(双腿全中)",
     "🏆 厄瓜多尔 0:0 库拉索(08:00 完赛)",
     "　平局爆冷；模型86.5%主胜大错(Brier ens=1.562，远超随机)；Elo:厄-17.5→1740.2",
     "　✗ 2串1 德×厄让2球 10@2.46 → 0(厄瓜多尔未赢，让球腿挂)",
     "　✗ 3串1 德×日×厄总进球3 16@6.24 → 0(厄腿挂，不待日本结果)",
     "🏆 突尼斯 0:4 日本(12:00 完赛，90'+7')",
     "　日本大胜4:0！集成63.2%客胜方向正确 | §15校准锚63.2%完全兑现",
     "　✓ 日単 20@1.37 → 27.40(净+7.40)",
     "　✓ 2串1 德国胜×日本胜 24@1.836 → 44.06(净+20.06)",
     "📊 周六批6票全结 投100 回126.45 净+26.45 | 池 328.1→354.55"
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
   },
   {
    "date": "06-22",
    "desc": "周日3注:乌单24@1.29 + 比×乌串32@1.63 + 比×乌×西让2串16@2.55",
    "stake": 72,
    "evPnl": -10,
    "winProb": 48,
    "actualPnl": null,
    "status": "待结算",
    "note": "池354.55,72元=20.3%仓位(≤25%守则)。核心:乌拉圭74.4%/比利时70%双favorite串联;西让2作为彩票腿。全中+51.8,比乌赢+11.0,仅乌单-41,全挂-72。EV≈-10(vig导致,价值在方向准+串关凸性+参与)。"
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
   "status": "finished",
   "actual": "0:0",
   "predManual": "厄让2球串10@2.46(已下注)",
   "predModel": "主胜86.5%",
   "ensemble": {
    "h": 86.5,
    "d": 9.5,
    "a": 4.1
   },
   "note": "厄瓜多尔 0:0 库拉索。平局爆冷，厄瓜多尔首战已负今场又平，出局基本确定。集成86.5%主胜方向严重偏差(Brier ens=1.562，远超随机0.667)。让-2腿挂：2串1德×厄(10元)→✗；3串1德×日×厄总进球3(16元)→✗(厄腿已死，不待日本)。Elo:厄瓜多尔-17.5→1740.2,库拉索→1364.6。"
  },
  {
   "num": "周六036",
   "group": "E组",
   "home": "突尼斯",
   "away": "日本",
   "time": "06-21 12:00",
   "status": "finished",
   "actual": "0:4",
   "predManual": "日单20@1.37(已下注)",
   "predModel": "客胜63.2%",
   "ensemble": {
    "h": 13.4,
    "d": 23.4,
    "a": 63.2
   },
   "note": "日本4:0大胜突尼斯。集成63.2%客胜方向正确(方向命中)。久保健英缺阵但小川航基等替补出色，突尼斯换帅(雷纳尔)组织混乱，日本全场压制完胜。✓日単20@1.37→27.40 ✓德日串24@1.836→44.06 | 周六批6票全结，净+26.45，池354.55。"
  }
 ],
 "holdings": {
  "invested": 100,
  "returned": 126.45,
  "pendingStake": 0,
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
    "status": "win",
    "payout": 27.4
   },
   {
    "match": "德国×日本",
    "pick": "2串1 德国胜×日本胜",
    "stake": 24,
    "odds": 1.836,
    "status": "win",
    "payout": 44.06
   },
   {
    "match": "德国×日本×厄瓜多尔",
    "pick": "3串1 德×日×厄总进球3",
    "stake": 16,
    "odds": 6.24,
    "status": "lose",
    "payout": 0
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
    "status": "lose",
    "payout": 0
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
 "focus": [],
 "news": [
  {
   "date": "06-21",
   "match": "新西兰 vs 埃及",
   "impact": "萨拉赫首发确认",
   "tone": "away",
   "text": "萨拉赫(穆罕默德)确认首发;新西兰贾斯特(Elijah Just)首轮双响对伊朗预计继续首发;双方均无新伤停(加贝特赛前腿筋缺席整届已知)(Sports Mole·RotoWire 06-21双源)",
   "en": "Mohamed Salah confirmed to start; New Zealand's Elijah Just (brace vs Iran, 11 intl goals) expected in XI again; both sides fully fit, no new injuries. (Sports Mole, RotoWire — Jun 21)",
   "full": "新西兰对阵埃及赛前双方均健康无伤：新西兰唯一已知缺阵为中场马修·加贝特（Matthew Garbett，赛前腿筋受伤缺席整届，由洛根·罗格森取代）；埃及方面萨拉赫（Mohamed Salah）确认以常规边翼方式首发，马尔穆什（Marmoush）及阿提亚（Ateya）搭档中路。新西兰最大看点为贾斯特（Elijah Just），首轮对伊朗双响、个人国际进球累计11球，预计继续首发右翼位置。背景：G组全部四队均积1分（比利时/伊朗/新西兰/埃及），本场胜者大幅占据出线主动。Polymarket客胜(埃及)60.2%。(Sports Mole·RotoWire 06-21双源)",
   "enFull": "New Zealand vs Egypt Matchday 2 team news: New Zealand have no fresh injury concerns — their only known absentee is midfielder Matthew Garbett (hamstring, sidelined for the entire tournament; replaced by Logan Rogerson). Egypt also carry no new fitness worries; Mohamed Salah is confirmed to start in his usual wide attacking role alongside Marmoush. For New Zealand, Elijah Just is expected to retain his starting place after his brace against Iran pushed his international tally to 11 goals. Context: All four Group G teams (Belgium, Iran, New Zealand, Egypt) are level on 1 point — this is effectively a must-win for both sides. Polymarket: Egypt (away) at 60.2%. (Sports Mole, RotoWire — Jun 21)",
   "links": [
    {
     "name": "Sports Mole: New Zealand vs Egypt predicted XI",
     "url": "https://www.sportsmole.co.uk/football/new-zealand/world-cup-2026/predicted-lineups/just-decision-wood-influence-predicted-new-zealand-xi-vs-egypt_599607.html"
    },
    {
     "name": "RotoWire: New Zealand vs Egypt preview",
     "url": "https://www.rotowire.com/soccer/article/new-zealand-vs-egypt-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-g-118938"
    }
   ]
  },
  {
   "date": "06-21",
   "match": "乌拉圭 vs 佛得角",
   "impact": "双核缺阵",
   "tone": "away",
   "text": "阿劳霍(巴萨·中卫)和德阿拉斯卡埃塔(腿筋)均确认缺阵;佛得角久加什(Vozinha)40岁门将首轮顶住西班牙27次射门;双方同积1分H组生死战(Sports Mole·RotoWire 06-21双源)",
   "en": "Ronald Araújo (Barça CB) and De Arrascaeta both ruled out; Cape Verde's 40-yr-old GK Vozinha heroically held Spain to 0-0; both teams on 1pt in Group H (Sports Mole, RotoWire — Jun 21)",
   "full": "乌拉圭迎战佛得角前情况严峻：主力中卫罗纳尔多·阿劳霍（Ronald Araújo，巴塞罗那）赛前受伤确认缺阵，核心中场德阿拉斯卡埃塔（Federico Valverde搭档受损）也因伤缺席。尽管比安基（Bianchi）和奥利韦拉（Olivera）可能补位，但乌拉圭防线与中场协调均面临挑战。佛得角方面，40岁老将门将沃兹尼亚（Vozinha）首轮凭借个人英雄表现顶住了西班牙27次射门、创历史性0:0；主攻手约瓦内·卡布拉尔（Jovane Cabral）赛前接受体能测试，目前尚未确认出战。背景：双方同积1分，本场是H组最重要节点——赢者大幅提升出线主动权，失分则几乎提前出局。(Sports Mole·RotoWire 06-21双源)",
   "enFull": "Uruguay go into Sunday's clash with significant absences: first-choice centre-back Ronald Araújo (Barcelona) is confirmed out pre-tournament with injury, and playmaker De Arrascaeta is also sidelined. Bianchi and Olivera may step in, but Uruguay's defensive and midfield cohesion is weakened. For Cape Verde, 40-year-old goalkeeper Vozinha delivered a heroic performance to keep Spain scoreless in Matchday 1; forward Jovane Cabral is undergoing a fitness test and is a game-time call. Context: both teams are on 1 point in Group H, making this fixture a de facto knockout game for both. (Sports Mole, RotoWire — Jun 21)",
   "links": [
    {
     "name": "Sports Mole: Uruguay vs Cape Verde team news",
     "url": "https://www.sportsmole.co.uk/football/uruguay/world-cup-2026/team-news/uruguay-vs-cape-verde-injury-suspension-list-predicted-xis_599646.html"
    },
    {
     "name": "RotoWire: Uruguay vs Cape Verde preview",
     "url": "https://www.rotowire.com/soccer/article/uruguay-vs-cape-verde-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-h-118935"
    }
   ]
  },
  {
   "date": "06-21",
   "match": "比利时 vs 伊朗",
   "impact": "多库病缺阵",
   "tone": "away",
   "text": "多库(曼城)因病被紧急排除出战伊朗;德布劳内可出战但左翼进攻锐度受损;德巴斯特(腿伤)整届缺阵、卢卡库仍未到全场状态(ESPN·Sports Mole 06-21双源)",
   "en": "Doku (Man City) ruled out vs Iran due to illness; De Bruyne available but left-wing thrust weakened; Debast out for group stage (leg), Lukaku unfit for 90 min. (ESPN, Sports Mole — Jun 21)",
   "full": "比利时主帅周六（06-21）宣布，曼城边锋热雷米·多库（Jérémy Doku）因病无缘周日对伊朗之战。多库是比利时进攻中最具爆发力的快马，缺阵令左翼锐度明显下降。叠加中卫泽诺·德巴斯特（Debast）腿伤已确定缺席整个小组赛（梅克勒+恩古瓦搭档中卫），以及卢卡库未达全场出战状态，比利时进攻链承压明显。伊朗方面，队长贾汉巴赫什（Jahanbakhsh）首轮缺阵，伊朗仍以整体防守为主；中场戈多斯（Ghoddos，踝关节）处于赛前临场决定状态。G组四队均积1分，本场是关键节点。⚠️多库属临赛突发因素，赛前检查竞彩03:00 BJT赔率是否已更新。(ESPN·Sports Mole 06-21双源)",
   "enFull": "Belgium head coach confirmed Saturday (Jun 21) that Jérémy Doku (Manchester City) is ruled out of Sunday's match vs Iran due to illness. Doku is their most dangerous wide attacker; his absence cuts left-flank dynamism sharply. Further: Zeno Debast (leg) is sidelined for the whole group stage (Mechele–Ngoy CB pair confirmed), and Romelu Lukaku is not fit enough for a full 90 minutes. For Iran, captain Jahanbakhsh was absent in Matchday 1; midfield starter Ghoddos (ankle) is a game-time call. All four Group G teams sit on one point, making this result critical. ⚠️ Doku's late illness is material new team news — verify Chinese bookmaker 03:00 BJT odds before kick-off. (ESPN, Sports Mole — Jun 21)",
   "links": [
    {
     "name": "ESPN: Doku ruled out vs Iran",
     "url": "https://www.espn.com/soccer/story/_/id/49128265/jeremy-doku-belgium-world-cup-game-iran"
    },
    {
     "name": "Sports Mole: Belgium vs Iran team news",
     "url": "https://www.sportsmole.co.uk/football/belgium/world-cup-2026/team-news/belgium-vs-iran-injury-suspension-list-predicted-xis--world-cup-2026_599612.html"
    }
   ]
  },
  {
   "date": "06-21",
   "match": "西班牙 vs 沙特",
   "impact": "亚马尔不首发",
   "tone": "away",
   "text": "确认:亚马尔本人称上首发'没必要'仍在恢复中;主帅德拉富恩特透露'45分钟方案'=亚马尔替补出场约半场;尼科-威廉姆斯/费兰托雷斯预计首发右/中;沙特无伤停(Emirates247·beIN Sports·everythingbarca 06-21多源)",
   "en": "Confirmed: Yamal says starting is 'unnecessary', still recovering from hamstring (Apr 22); De la Fuente reveals a '45-minute blueprint' — Yamal to come on as sub; Nico Williams + Ferran Torres expected in starting XI; Saudi Arabia no injuries. (Emirates247, beIN Sports, everythingbarca — Jun 21)",
   "full": "核心更新(06-21晚):亚马尔（Lamine Yamal）本人接受西班牙国家电视台采访明确表态——上首发'没必要'、'还不到时机'，仍在恢复4月22日汉斯膝伤/大腿肌肉伤；同时西班牙主帅德拉富恩特（De la Fuente）透露将为亚马尔执行'45分钟方案'，即从替补席出发、约在45-60分钟区间登场。因此首发阵容将以尼科-威廉姆斯（Nico Williams）和费兰·托雷斯（Ferran Torres）领衔前场，亚马尔下半场入替。这实际上比首轮佛得角场（亚马尔和尼科均替补晚出场）前场阵容略强但弱于双翼全首发阵容。Polymarket更新西班牙胜率88.7%（客胜3.8%，平7.4%），市场基本已price-in；沙特方面无任何伤停报告。⚠️注：西班牙让-2让球盘赔率1.61（去水后净胜3+约52%），亚马尔替补出场对进球预期有一定影响但不足以显著改变大盘结构。(Emirates247·beIN Sports·everythingbarca 06-21多源)",
   "enFull": "Key update (Jun 21 evening): Lamine Yamal has personally stated on Spanish national TV that starting is 'unnecessary' and 'it's not the right time' as he continues his recovery from the hamstring/muscle injury suffered April 22. Spain manager De la Fuente has publicly revealed a '45-minute blueprint' — Yamal will enter as a substitute, likely around the 45-60 minute mark. The starting XI will therefore feature Nico Williams and Ferran Torres in the attack rather than the full Yamal + Nico Williams combo. This is slightly weaker than the 'both wings start from the first whistle' scenario. Polymarket updated to Spain win 88.7% (draw 7.4%, Saudi win 3.8%) — market has largely priced this in. Saudi Arabia carry no injury concerns. ⚠️ Spain's handicap -2 at odds 1.61 (net win 3+ ~52%); Yamal as sub limits early-game goal threat but Spain are still overwhelming favorites. (Emirates247, beIN Sports, everythingbarca — Jun 21)",
   "links": [
    {
     "name": "Emirates247: Yamal unlikely to start vs Saudi Arabia",
     "url": "https://www.emirates247.com/sports/lamine-yamal-says-hes-not-fully-fit-and-is-unlikely-to-start-in-spains-second-world-cup-game/2788"
    },
    {
     "name": "beIN Sports: Yamal unlikely to play full 90 min vs Saudi",
     "url": "https://www.beinsports.com/en-us/soccer/fifa-world-cup-2026/articles/spain-s-lamine-yamal-unlikely-to-play-the-full-90-minutes-against-saudi-arabia-at-the-fifa-world-cup-2026-2026-06-19"
    }
   ]
  }
 ],
 "slip": {
  "title": "6月22日 · 周日整轮 · 72元(终版·比乌核心+西班牙让2球彩票)",
  "status": "**21:00终版定稿。** 锚:乌~70%/比~69%(三模型+市场+Elo一致·热门微缩)、西让2~57-60%(让2球缩到1.57·仍当彩票腿不升核心)、埃及040最弱+Elo分歧未纳入。情报全扫(乌缺Araujo/比缺Doku/西0-0平佛得角带Yamal)均公开已price·校准不动picks。037胜平负至21:00仍未开。",
  "detail": "周日3注72元:①乌拉圭胜单24@1.29(唯一可单买的稳腿·had single=1) ②2串1比×乌32@1.63(核心,两个70%级favorite) ③3串1比×乌×西班牙让2球16@2.55(彩票,西让2~58%是硬币不当核心)。全中+51.8,比乌都赢+11.0,仅乌单回血-41,全挂-72。\n★20:31终盘情报核查完毕:038比利时Doku病缺/Debast出局/Lukaku替补(全已price,市场70%);039乌拉圭Araujo+De Arrascaeta缺阵、佛得角Vozinha首战顶住西班牙0:0(全已price,市场68.6%);037西班牙亚马尔替补方案已知赔率已降至1.57;040新西兰Just首战双响但价值1.09<1.10门槛跳过。\n★20:42情报:西班牙首战0-0平佛得角(攻击哑火过)、沙特1-1平乌拉圭(有竞争力);西班牙本场带Yamal+N.Williams首发(全力反弹非轮换)。让2球赔率1.71→1.57(市场越发看好大胜~57-60%),仍按校准当彩票腿不升核心。乌/比无新硬消息。",
  "items": [
   {
    "num": "周日039",
    "pick": "乌拉圭胜(主胜)",
    "tier": "核心单",
    "match": "乌拉圭 vs 佛得角",
    "stake": 24,
    "odds": 1.29,
    "value": 0.96,
    "ev": -1
   },
   {
    "num": "038×039",
    "pick": "2串1 比利时胜×乌拉圭胜",
    "legs": [
     {
      "n": "038",
      "dir": "H"
     },
     {
      "n": "039",
      "dir": "H"
     }
    ],
    "tier": "核心串",
    "match": "比×乌",
    "stake": 32,
    "odds": 1.63,
    "value": 0.85,
    "ev": -5
   },
   {
    "num": "038×039×037",
    "pick": "3串1 比×乌×西班牙让2球",
    "legs": [
     {
      "n": "038",
      "dir": "H"
     },
     {
      "n": "039",
      "dir": "H"
     },
     {
      "n": "037",
      "dir": "H",
      "margin": 3
     }
    ],
    "tier": "彩票",
    "match": "比×乌×西让2(净胜3+)",
    "stake": 16,
    "odds": 2.55,
    "value": 0.77,
    "ev": -4
   }
  ],
  "summary": {
   "stake": 72,
   "evLow": -72,
   "evHigh": 51.8,
   "winProb": 48,
   "best": {
    "label": "三注全中",
    "pnl": 51.8
   },
   "worst": {
    "label": "全挂",
    "pnl": -72
   },
   "keyScenarios": [
    {
     "label": "比乌都赢·西班牙没净胜3",
     "pnl": 11
    }
   ]
  },
  "scenarios": [
   {
    "label": "全胜:比利时赢+乌拉圭赢+西班牙净胜3+",
    "hit": "中3注",
    "prob": 25,
    "win": [
     0,
     1,
     2
    ]
   },
   {
    "label": "比利时+乌拉圭都赢·西班牙没净胜3",
    "hit": "中2注",
    "prob": 23,
    "win": [
     0,
     1
    ]
   },
   {
    "label": "乌拉圭赢·比利时没赢(只中单关)",
    "hit": "中1注",
    "prob": 22,
    "win": [
     0
    ]
   },
   {
    "label": "乌拉圭没赢(全挂)",
    "hit": "全挂",
    "prob": 30,
    "win": []
   }
  ],
  "copyText": "周日这轮,一共买 72 块:\\n\\n场次:周日039 乌拉圭 vs 佛得角\\n买:乌拉圭赢\\n方式:单关(只买这场)\\n金额:24 块\\n\\n方式:2串1(下面两场都赢才中,32块)\\n· 周日038 比利时 vs 伊朗 → 买 比利时赢\\n· 周日039 乌拉圭 vs 佛得角 → 买 乌拉圭赢\\n\\n方式:3串1(下面三场都赢才中,16块)\\n· 周日038 比利时 vs 伊朗 → 买 比利时赢\\n· 周日039 乌拉圭 vs 佛得角 → 买 乌拉圭赢\\n· 周日037 西班牙 vs 沙特 → 买 西班牙让2球赢(净胜3个以上)\\n\\n一共 72 块,谢谢!",
  "reviewNote": "✓ Final Call 20:31：锚已报(乌68.6%市场/74.4%模型、比70.0%)、谁赢vs赢几个分离(西让2按58%进彩票)、040新西兰价值1.09<1.10跳过、仍给picks不空仓。情报终核通过全场次。赔率更新至终盘(2串1@1.63/3串1@2.55)。fade-favorite本轮0注。 ｜ ✓ 已独立复核 20:42 ｜ 草稿合规，无删改（§0最高指令：value<1.10不构成砍单理由；无比分票/反向票；金额全偶数；仓位72/354.55=20.3%<25%；039 had single=1✓；038/039/037 allUp全1✓）"
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
  "sampleCount": 36,
  "threshold": 50,
  "pct": 72,
  "ensBrier": 0.56,
  "ensBrierMedian": 0.354,
  "marketBase": 0.5278,
  "marketBaseLabel": "市场去水(子模型A)",
  "beatsMarket": false,
  "beatRandom": 22,
  "dirHit": 21,
  "weightsFirst": {
   "A": 33,
   "B": 34,
   "C": 33
  },
  "weightsLast": {
   "A": 52,
   "B": 25,
   "C": 1,
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
   },
   {
    "num": "周六035",
    "m": "厄瓜多尔·0:0",
    "b": 1.56,
    "win": false
   },
   {
    "num": "周六036",
    "m": "突尼斯·0:4",
    "b": 0.26,
    "win": true
   }
  ],
  "headline": "已喂 36 场预测 · 集成 Brier 0.56 vs 市场去水 0.5278（仍未跑赢）· 只比随机0.667好一点（地板线,非alpha）",
  "lesson": "**28场复盘硬结论(诚实版):** 集成 Brier 0.56 **仍没跑赢市场去水(0.5278)**——模型暂无可证明的边。它只比'瞎猜'(随机0.667)好一点,那是地板不是本事。平局占36%(异常高)模型从不押平→10个自动判错卡死命中率;回测所有补救都≤57%,平局事前分不出来。**边在纪律和情报、不在模型方向**(可迁股市:高效市场里纯模型必收敛到市场)。⚠️别把'跑赢随机'当 alpha——真市场CLV还在攒(竞彩收盘价未留存),没有真CLV前'有没有边'仍是自说自话。",
  "graduation": "完成训练 = 喂满50场 + Brier稳定且**真CLV转正** + 权重收敛。当前 36/50,权重已收敛(A市场去水重仓),但**Brier尚未跑赢市场、CLV待积累**——离'有边'还差关键一步:留存赛前收盘价算真CLV。"
 }
};
