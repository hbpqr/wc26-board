window.DASH_DATA = {
 "meta": {
  "round": "小组赛第 3 轮",
  "updated": "2026-06-25 20:47",
  "disclaimer": "竞彩胜平负盘实测 vig 12.9%,比分盘更高,长期期望为负。本看板的使命是决策质量管理:亏得最少、给运气最大杠杆。资金池纪律高于一切预测。理性购彩。"
 },
 "bankroll": {
  "start": 200,
  "startDate": "06-11",
  "cashNow": 278.55,
  "pending": 8,
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
   },
   {
    "d": "06-22",
    "v": 282.55
   },
   {
    "d": "06-23",
    "v": 282.55
   },
   {
    "d": "06-24",
    "v": 282.55
   },
   {
    "d": "06-25",
    "v": 278.55
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
   },
   {
    "d": "06-22",
    "pool": 282.55,
    "pnl": -72,
    "records": [
     "🏆 周日:西班牙4:0/比利时0:0平/乌拉圭2:2平/新西兰1:3埃及",
     "　✗ 乌拉圭单24@1.29 → 0",
     "　✗ 2串1比×乌32@1.63 → 0",
     "　✗ 3串1比×乌×西让2 16@2.55 → 0(西让2中但比/乌挂)",
     "🏆 新西兰 1:3 埃及(09:00 完赛·无持仓·竞彩停售)",
     "📊 周日全挂 -72"
    ]
   },
   {
    "d": "06-23",
    "pool": 258.55,
    "pnl": -24,
    "records": [
     "🏆 周一:阿根廷2:0奥地利/约旦1:2阿尔及利亚(均没打平)",
     "　✗ 阿根廷打平 8@4.30 → 0",
     "　✗ 2串1约阿平×阿根廷胜 16@5.67 → 0",
     "📊 押平局全挂 -24(第1负·小注稳住)"
    ]
   },
   {
    "d": "06-24",
    "pool": 282.55,
    "pnl": 0,
    "records": [
     "🏆 葡萄牙 5:0 乌兹别克(01:00 完赛·集成主胜方向正确·learn.py已结算)",
     "🏆 英格兰 0:0 加纳(04:00 完赛)·平局爆冷·集成主胜大错(Brier ens=1.4424)",
     "🏆 巴拿马 0:1 克罗地亚(07:00 完赛)·克罗地亚客胜·集成65.2%方向命中(Brier ens=0.1845)",
     "🏆 哥伦比亚 1:0 刚果金(10:00 完赛·集成主胜63.2%方向命中·Brier ens=0.190·learn.py已结算)",
     "📊 周二无实际出票·pool 282.55 不变(slip 047平/047×048双平·had.single=0 BLOCK+047实际非平·无holdings)"
    ]
   },
   {
    "d": "06-25",
    "pool": 278.55,
    "pnl": -4,
    "records": [
     "🏆 瑞士 2:1 加拿大(03:00 完赛·Brier ens=0.554·learn.py已结算)",
     "　✗ 2串1 加拿大客胜×捷克主胜 4@12.07 → 0(049腿加拿大负·串关已死)",
     "🏆 波黑 3:1 卡塔尔(03:00 完赛·集成主胜71.3%命中·Brier ens=0.141极优·learn.py已结算·无持仓)",
     "🏆 苏格兰 0:3 巴西(06:00 完赛·集成客胜74.5%命中·Brier ens=0.106·learn.py已结算·无持仓)",
     "🏆 摩洛哥 4:2 海地(06:00 完赛·集成主胜83.1%命中·Brier ens=0.039极优·learn.py已结算·无持仓)",
     "🏆 南非 1:0 韩国(09:00 完赛·集成客胜60.1%方向误(主胜爆冷)·Brier ens=1.149·learn.py已结算·无持仓)",
     "🏆 捷克 0:3 墨西哥(09:00 完赛·集成主胜25.3%方向误(客胜大胜)·单关20元@3.55因elig=0未出票·learn.py已结算)",
     "📊 周三全终:投4 回0 净-4(串关死·单关未出票) | pool 278.55·待主会话生成周四预测+slip"
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
    "actualPnl": 0,
    "status": "已结算",
    "note": "池354.55，实际空仓：039 had.single=0无法出单关+038比利时平局→串关双死，slip 3注72元全部无法出票，0元下注，池不变。038平(0:0)+039平(2:2)双热门爆冷，周日整轮最终确认空仓。"
   },
   {
    "date": "06-24",
    "desc": "周二2注8元:047平@4.30·4元单关 + 2串1双平@16.77·4元",
    "stake": 8,
    "evPnl": 5.1,
    "winProb": 33,
    "actualPnl": null,
    "status": "待结算",
    "note": "经验EV=+5.1元(0.33×4×3.30+0.11×4×15.77)；模型EV=-0.7元；CLV中性·最小fade-favorite仓；池282.55·最坏-8→274.55>>地板80"
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
  },
  {
   "num": "周日037",
   "group": "H组",
   "home": "西班牙",
   "away": "沙特",
   "time": "06-22 00:00",
   "status": "finished",
   "actual": "4:0",
   "predManual": "3串1彩票腿·西班牙让2球净胜3+(终版slip·详见ALERTS)",
   "predModel": "主胜88.8%",
   "ensemble": {
    "h": 88.8,
    "d": 7.5,
    "a": 3.7
   },
   "note": "西班牙4:0大胜沙特。亚马尔+尼科-威廉斯双翼首发兑现情报，西班牙首战0:0平佛得角后全力反弹。集成88.8%主胜方向正确(Brier ens=0.022，极优；RPS ens=0.006)。净胜4球>让球线(让2球净胜3+)，3串1西班牙腿命中，038比利时/039乌拉圭已结算见后续条目。Elo:西班牙+4.0→2034.9，沙特→1577.2。"
  },
  {
   "num": "周日038",
   "group": "G组",
   "home": "比利时",
   "away": "伊朗",
   "time": "06-22 03:00",
   "status": "finished",
   "actual": "0:0",
   "predManual": "串关腿(2串1+3串1)·比利时胜",
   "predModel": "主胜70.0%",
   "ensemble": {
    "h": 70,
    "d": 18.9,
    "a": 11.1
   },
   "note": "比利时0:0伊朗。多库/德巴斯特缺阵+卢卡库替补，进攻钝化；伊朗顽强铁桶阵守住平局。集成70.0%看比利时主胜方向错，平局兑现(Brier ens=1.160，差于随机0.667)。slip中比利时胜作为串关腿：0:0平局导致2串1(比×乌)和3串1(比×乌×西让2)均死，仅乌拉圭单关039仍活。Elo:比利时-12.2→约1824，伊朗+12.2。"
  },
  {
   "num": "周日039",
   "home": "乌拉圭",
   "away": "佛得角",
   "time": "06-22 06:00",
   "status": "finished",
   "actual": "2:2",
   "ensemble": {
    "h": 70.5,
    "d": 20.5,
    "a": 8.9
   },
   "predManual": "无票(039 had.single=0·无法出单关;038比利时平局→串关双死)",
   "predModel": "主胜70.5%",
   "note": "乌拉圭2:2佛得角,爆冷被逼平(Araujo+De Arrascaeta缺阵·攻击哑火)。集成70.5%主胜方向错,真favorite翻车(Brier ens=1.233·差于随机0.667)。Elo:乌拉圭-16.9→1821.9,佛得角→1486.0。周日整轮：038平局+039 elig=0，slip 3注72元全部无法出票，实际空仓，池354.55不变。"
  },
  {
   "num": "周日040",
   "group": "G组",
   "home": "新西兰",
   "away": "埃及",
   "time": "06-22 09:00",
   "status": "finished",
   "actual": "1:3",
   "ensemble": {
    "h": 15.4,
    "d": 23.4,
    "a": 61.2
   },
   "predManual": "无票(elig=0·竞彩停售)",
   "predModel": "客胜61.2%",
   "note": "埃及3:1逆转新西兰(70'时NZ领先1:0·埃及末段连进3球)。集成61.2%客胜方向正确(Brier ens=0.267，优于随机0.667)。萨拉赫+马尔穆什领衔后半段爆发，G组埃及独占头名。竞彩停售无持仓，池354.55不变。Elo:新西兰-24.7→1486.5，埃及→1658.4。"
  },
  {
   "num": "周一041",
   "round": "周一",
   "home": "阿根廷",
   "away": "奥地利",
   "time": "06-23 01:00",
   "status": "finished",
   "predManual": "押平@4.30·16元(§14旗舰·§16凸性)",
   "predModel": "主胜67.2%",
   "ensemble": {
    "h": 67.2,
    "d": 21.4,
    "a": 11.4
   },
   "actual": "2:0",
   "note": "阿根廷2:0奥地利,梅西火力延续。集成主胜67.2%方向正确(Brier ens=0.192)。我们按§14押平局=阿根廷太强没打平(②小彩票8@4.30挂)。①2串1(044平×041胜)阿根廷胜腿✓·但044约旦1:2阿尔及利亚(非平)·串关腿挂=全挂。"
  },
  {
   "num": "周一042",
   "round": "周一",
   "home": "法国",
   "away": "伊拉克",
   "time": "06-23 05:00",
   "status": "finished",
   "predManual": "无票(法国深让-3·镜像雷区·hhad only)",
   "predModel": "主胜90.5%",
   "ensemble": {
    "h": 90.5,
    "d": 7.1,
    "a": 2.4
   },
   "actual": "3:0",
   "note": "法国3:0伊拉克(天气延误·二半场延至07:50恢复)。姆巴佩双响(14'·54')·德姆贝莱66'。集成90.5%主胜方向正确。无票(法国hhad only·深让镜像区)。无资金影响。"
  },
  {
   "num": "周一043",
   "round": "周一",
   "home": "挪威",
   "away": "塞内加尔",
   "time": "06-23 08:00",
   "status": "finished",
   "actual": "3:2",
   "predManual": "待定(首发未定·塞欠薪情报需确认)",
   "predModel": "主胜44.8%",
   "ensemble": {
    "h": 44.8,
    "d": 27.2,
    "a": 28
   },
   "note": "挪威3:2塞内加尔(对攻局·我们没押·无§14边判断正确)"
  },
  {
   "num": "周一044",
   "round": "周一",
   "home": "约旦",
   "away": "阿尔及利亚",
   "time": "06-23 11:00",
   "status": "finished",
   "predManual": "2串1彩票腿·约旦平@4.10×阿根廷平@4.30",
   "predModel": "客胜62.2%",
   "ensemble": {
    "h": 15.4,
    "d": 22.4,
    "a": 62.2
   },
   "actual": "1:2",
   "note": "约旦1:2阿尔及利亚,阿尔及利亚客胜(我们押的平局没出·①挂)。集成客胜方向正确。"
  },
  {
   "num": "周二045",
   "round": "周二",
   "home": "葡萄牙",
   "away": "乌兹别克",
   "time": "06-24 01:00",
   "status": "finished",
   "actual": "5:0",
   "predManual": "无票(hhad深让-2·镜像雷区·elig all-0)",
   "predModel": "主胜83.1%",
   "ensemble": {
    "h": 83.1,
    "d": 12.4,
    "a": 4.5
   },
   "note": "葡萄牙5:0大胜乌兹别克。集成83.1%主胜方向正确(Brier ens=0.046，极优)。C罗+贝纳尔多领衔，鲁本·迪亚斯复出后卫无破绽。按纪律hhad深让-2镜像区+elig all-0未出票，无资金影响。Elo更新写入。"
  },
  {
   "num": "周二046",
   "round": "周二",
   "home": "英格兰",
   "away": "加纳",
   "time": "06-24 04:00",
   "status": "finished",
   "actual": "0:0",
   "predManual": "无票(hhad深让-2·镜像雷区·elig all-0)",
   "predModel": "主胜80.4%",
   "ensemble": {
    "h": 80.4,
    "d": 13.6,
    "a": 6
   },
   "note": "英格兰0:0加纳·平局。模型预测主胜80.4%落空，§16平局盲点再现；加纳顽强防守全场0进球。无持仓，Elo/权重已学习。"
  },
  {
   "num": "周二047",
   "round": "周二",
   "home": "巴拿马",
   "away": "克罗地亚",
   "time": "06-24 07:00",
   "status": "finished",
   "actual": "0:1",
   "note": "克罗地亚客场1:0胜巴拿马,预测客胜65.2%方向命中。",
   "predManual": "①押平@4.30·4元(§14/§16凸性) + ②2串1腿·巴拿马平×哥伦比亚平",
   "predModel": "客胜65.2%",
   "ensemble": {
    "h": 12.4,
    "d": 22.4,
    "a": 65.2
   }
  },
  {
   "num": "周二048",
   "round": "周二",
   "home": "哥伦比亚",
   "away": "刚果金",
   "time": "06-24 10:00",
   "status": "finished",
   "actual": "1:0",
   "note": "终场:哥伦比亚1:0刚果金。集成主胜63.2%方向命中(Brier ens=0.190,远好于随机0.667)。哈梅斯·罗德里格斯体系维持,刚果金低位防守未能守住。无持仓,资金不变。",
   "predManual": "2串1腿·哥伦比亚平@3.90(elig only-allUp)",
   "predModel": "主胜63.2%",
   "ensemble": {
    "h": 63.2,
    "d": 23.4,
    "a": 13.4
   }
  },
  {
   "num": "周三049",
   "round": "周三",
   "home": "瑞士",
   "away": "加拿大",
   "time": "06-25 03:00",
   "status": "finished",
   "actual": "2:1",
   "note": "终场:瑞士2:1加拿大。瑞士主场胜出确认B组第一；科内(Koné)伤缺致加拿大中场削弱。集成客胜28.8%、主胜39.9%,方向看法分散,主胜兑现。串关腿加拿大客胜挂。Brier ens=0.554,优于随机0.667。",
   "predManual": "2串1腿·加拿大客胜@3.40(had.allUp)",
   "predModel": "客胜28.8%",
   "ensemble": {
    "h": 39.9,
    "d": 31.3,
    "a": 28.8
   }
  },
  {
   "num": "周三050",
   "round": "周三",
   "home": "波黑",
   "away": "卡塔尔",
   "time": "06-25 03:00",
   "status": "finished",
   "actual": "3:1",
   "note": "终场:波黑3:1卡塔尔。哲科(Džeko)领军大胜,卡塔尔停赛减员(霍马姆+马迪博双停)难挡。集成主胜71.3%方向命中,Brier ens=0.141极优。无持仓。",
   "predManual": "—",
   "predModel": "主胜71.3%",
   "ensemble": {
    "h": 71.3,
    "d": 17.6,
    "a": 11.1
   }
  },
  {
   "num": "周三051",
   "round": "周三",
   "home": "苏格兰",
   "away": "巴西",
   "time": "06-25 06:00",
   "status": "finished",
   "actual": "0:3",
   "note": "巴西3:0横扫苏格兰,集成客胜74.5%方向命中",
   "predManual": "—",
   "predModel": "客胜74.5%",
   "ensemble": {
    "h": 9.1,
    "d": 16.4,
    "a": 74.5
   }
  },
  {
   "num": "周三052",
   "round": "周三",
   "home": "摩洛哥",
   "away": "海地",
   "time": "06-25 06:00",
   "status": "finished",
   "actual": "4:2",
   "note": "摩洛哥4:2大胜海地,集成主胜83.1%方向命中",
   "predManual": "—",
   "predModel": "主胜83.1%",
   "ensemble": {
    "h": 83.1,
    "d": 12.3,
    "a": 4.6
   }
  },
  {
   "num": "周三053",
   "round": "周三",
   "home": "南非",
   "away": "韩国",
   "time": "06-25 09:00",
   "status": "finished",
   "actual": "1:0",
   "note": "南非1:0韩国·集成客胜60.1%方向误(主胜爆冷)·Brier ens=1.149·learn.py已结算·无持仓",
   "predManual": "—",
   "predModel": "客胜60.1%",
   "ensemble": {
    "h": 15.9,
    "d": 23.9,
    "a": 60.1
   }
  },
  {
   "num": "周三054",
   "round": "周三",
   "home": "捷克",
   "away": "墨西哥",
   "time": "06-25 09:00",
   "status": "finished",
   "actual": "0:3",
   "note": "捷克0:3墨西哥·集成主胜25.3%方向误(客胜大胜)·墨西哥轮换效果显著·捷克单关20元@3.55因elig=0未出票·learn.py已结算",
   "predManual": "核心单20@3.55(捷克主胜·墨西哥轮换硬信息)",
   "predModel": "主胜25.3%·调整≈35%",
   "ensemble": {
    "h": 25.3,
    "d": 24.6,
    "a": 50.1
   }
  },
  {
   "num": "周四055",
   "round": "周四",
   "group": "E组",
   "home": "厄瓜多尔",
   "away": "德国",
   "time": "06-26 04:00",
   "status": "pending",
   "predManual": "—",
   "predModel": "客胜63.4%",
   "ensemble": {
    "h": 17.7,
    "d": 18.9,
    "a": 63.4
   }
  },
  {
   "num": "周四056",
   "round": "周四",
   "group": "E组",
   "home": "库拉索",
   "away": "科特迪瓦",
   "time": "06-26 04:00",
   "status": "pending",
   "predManual": "—",
   "predModel": "客胜80.7%",
   "ensemble": {
    "h": 6.0,
    "d": 13.3,
    "a": 80.7
   }
  },
  {
   "num": "周四057",
   "round": "周四",
   "group": "F组",
   "home": "突尼斯",
   "away": "荷兰",
   "time": "06-26 07:00",
   "status": "pending",
   "predManual": "—",
   "predModel": "客胜84.9%",
   "ensemble": {
    "h": 4.1,
    "d": 11.1,
    "a": 84.9
   }
  },
  {
   "num": "周四058",
   "round": "周四",
   "group": "F组",
   "home": "日本",
   "away": "瑞典",
   "time": "06-26 07:00",
   "status": "pending",
   "predManual": "—",
   "predModel": "主胜55.4%",
   "ensemble": {
    "h": 55.4,
    "d": 25.1,
    "a": 19.6
   }
  },
  {
   "num": "周四059",
   "round": "周四",
   "group": "D组",
   "home": "巴拉圭",
   "away": "澳大利亚",
   "time": "06-26 10:00",
   "status": "pending",
   "predManual": "—",
   "predModel": "主胜36.5%",
   "ensemble": {
    "h": 36.5,
    "d": 39.5,
    "a": 24.0
   }
  },
  {
   "num": "周四060",
   "round": "周四",
   "group": "D组",
   "home": "土耳其",
   "away": "美国",
   "time": "06-26 10:00",
   "status": "pending",
   "predManual": "—",
   "predModel": "客胜52.3%",
   "ensemble": {
    "h": 24.5,
    "d": 23.3,
    "a": 52.3
   }
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
   },
   {
    "match": "乌拉圭 vs 佛得角",
    "pick": "乌拉圭胜(主胜)·单关",
    "stake": 24,
    "odds": 1.29,
    "status": "lose",
    "payout": 0
   },
   {
    "match": "比利时×乌拉圭",
    "pick": "2串1 比利时胜×乌拉圭胜",
    "stake": 32,
    "odds": 1.63,
    "status": "lose",
    "payout": 0
   },
   {
    "match": "比利时×乌拉圭×西班牙",
    "pick": "3串1 比×乌×西班牙让2球",
    "stake": 16,
    "odds": 2.55,
    "status": "lose",
    "payout": 0
   },
   {
    "match": "阿根廷 vs 奥地利",
    "pick": "阿根廷对奥地利 打平",
    "stake": 8,
    "odds": 4.3,
    "status": "lose",
    "payout": 0
   },
   {
    "match": "约旦阿尔及利亚平 × 阿根廷胜",
    "pick": "2串1 约旦阿尔及利亚平×阿根廷胜",
    "stake": 16,
    "odds": 5.67,
    "status": "lose",
    "payout": 0
   },
   {
    "match": "加拿大×捷克 2串1",
    "pick": "2串1 加拿大客胜×捷克主胜",
    "stake": 4,
    "odds": 12.07,
    "status": "lose",
    "payout": 0
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
   "date": "2026-06-25",
   "match": "周四055",
   "impact": "德国保主力出战",
   "tone": "neutral",
   "text": "Nagelsmann确认不大轮换：已两战同一阵容，继续保持节奏；Schlotterbeck伤缺，Undav可能取代Havertz；厄瓜多尔积1分必须赢。(Bundesliga.com/BavarianFootballWorks双源)",
   "en": "Nagelsmann confirms minimal rotation — same XI to maintain rhythm; Schlotterbeck (injured) out; Undav may start over Havertz. Ecuador (1pt) must win to advance.",
   "full": "德国已6分锁定E组第一，但Nagelsmann明确表示不会大规模轮换——赛前特别强调队伍需要保持节奏、继续磨合，两战用同一首发XI。唯一确认缺席：Nico Schlotterbeck 因伤出局。进攻可能微调：Undav有望顶替Havertz首发，Leweling/Beier或上替换Sane/Wirtz，但核心不变。厄瓜多尔积1分必须赢球，将全力出击；但面对七战全胜态势的德国，逆转难度极高。",
   "enFull": "Germany (6pts, Group E winners) are NOT rotating heavily per Nagelsmann's confirmation — he emphasized maintaining the team's rhythm and cohesion ahead of the knockout stage, fielding the same XI for a third game. Only confirmed absence: Nico Schlotterbeck (injury). Minor attacking tweaks possible: Undav over Havertz, Leweling/Beier replacing Sane/Wirtz. Ecuador (1pt) need a win to advance and will attack, but face a Germany side in excellent form and playing for seeding.",
   "links": [
    {
     "name": "Bundesliga.com Germany rotation options",
     "url": "https://www.bundesliga.com/en/bundesliga/news/germany-options-rotate-against-ecuador-world-cup-2026-37935"
    },
    {
     "name": "BavarianFootballWorks Germany won't rotate",
     "url": "https://www.bavarianfootballworks.com/germany-international-soccer/221000/germany-ecuador-world-cup-lineups-rotation-julian-nagelsmann-deniz-undav"
    }
   ]
  },
  {
   "date": "2026-06-25",
   "match": "周四056",
   "impact": "科特出线战",
   "tone": "neutral",
   "text": "科特迪瓦积3分必须赢球锁定出线；库拉索积1分需赢+德国爆冷才能出线；Room门神上场15扑救创纪录。(SportsMole/Goal.com双源)",
   "en": "Ivory Coast (3pts) must win to secure top-2 finish. Curacao (1pt) need a win + Germany upset. Goalkeeper Room made 15 saves vs Ecuador.",
   "full": "科特迪瓦积3分排名E组第二，但胜负差与库拉索相同，赢球方能锁定出线；若输球，需等德国vs厄瓜多尔结果确认。库拉索积1分，理论上仍有出线可能但须自赢且德国爆冷——概率极低。两队均无重大伤缺确认。特别关注：库拉索门将Eloy Room在0:0平厄瓜多尔战中创纪录15扑救，是本届最佳门将表现之一；科特迪瓦锋线Haller+Pepe面对这道城墙将是硬仗。两队动机悬殊(科特必须赢vs库拉索需奇迹)，预计科特迪瓦更主动。",
   "enFull": "Ivory Coast (3pts) sit second in Group E but must win to mathematically guarantee a top-2 finish; a defeat could still see them eliminated depending on the Germany-Ecuador scoreline. Curacao (1pt) technically still alive — need a win and Germany to lose — but the probability is minimal. No significant injuries confirmed for either side. Notable: Curacao keeper Eloy Room made a record-setting 15 saves in the 0:0 draw with Ecuador; Ivory Coast's Haller-led attack faces a tough test against him. Motivation gap strongly favors Ivory Coast.",
   "links": [
    {
     "name": "SportsMole Curacao vs Ivory Coast preview",
     "url": "https://www.sportsmole.co.uk/football/curacao/world-cup-2026/preview/curacao-vs-ivory-coast-prediction-team-news-lineups_599885.html"
    },
    {
     "name": "Goal.com Curacao vs Ivory Coast preview",
     "url": "https://www.goal.com/en/news/curacao-ivory-coast-world-cup-preview/bltaf6ced75ec6c319b"
    }
   ]
  },
  {
   "date": "2026-06-25",
   "match": "周四057",
   "impact": "Timber伤缺",
   "tone": "neutral",
   "text": "荷兰Timber确认伤缺；突尼斯已出局新帅Renard接任(原帅赛后下课)，仅剩面子球。荷兰稳坐F组第一可能轮换。(ESPN伤缺跟踪/SportsMole双源)",
   "en": "Netherlands: Timber confirmed out (injury tracker). Ivory Coast sacked coach Lamouchi after MD2 loss; legendary Herve Renard named emergency manager. Tunisia eliminated, playing for pride.",
   "full": "突尼斯经历两连败(0:5负瑞典、0:4负日本)，于第二场后宣布解雇主教练Sabri Lamouchi，紧急聘请法国传奇教头Herve Renard接手——Renard此前曾率摩洛哥和赞比亚夺非洲杯，本届世界杯临危受命。突尼斯已数学出局，仅剩荣誉之战，预计轮换测试球员。荷兰：Timber(Arsenal)确认伤缺；大概率小幅轮换以备淘汰赛(Gakpo/Dumfries存在养伤考量)，但核心(De Jong/Depay/Reijnders)大概率出战。本场荷兰动机稳固(争组第一最佳签位)，两队实力差距悬殊。",
   "enFull": "Tunisia (already eliminated) fired manager Sabri Lamouchi after their 0-4 loss to Japan on MD2, with legendary Herve Renard — who has won the Africa Cup of Nations with Morocco and Zambia — appointed as emergency replacement. Tunisia field a pride-only XI with expected rotation. Netherlands: Jurrien Timber (Arsenal) is confirmed absent per ESPN's official injury tracker; limited rotation expected (Gakpo/Dumfries may be rested), but Koeman's core of De Jong, Depay, and Reijnders likely to start. Netherlands motivation remains high — securing top spot and favorable knockout bracket seeding.",
   "links": [
    {
     "name": "ESPN World Cup injuries tracker",
     "url": "https://www.espn.com/soccer/story/_/id/48572979/2026-fifa-world-cup-injuries-tracker-which-stars-miss-latest-info"
    },
    {
     "name": "SportsMole Tunisia vs Netherlands team news",
     "url": "https://www.sportsmole.co.uk/football/tunisia/world-cup-2026/team-news/tunisia-vs-netherlands-injury-suspension-lists-predicted-xis--world-cup-2026_599926.html"
    }
   ]
  },
  {
   "date": "2026-06-25",
   "match": "周四059",
   "impact": "巴拉圭缺主力",
   "tone": "neutral",
   "text": "巴拉圭 Almirón 停赛(红牌)；澳大利亚 Leckie 肌肉伤问题、Italiano 伤缺。两队同积3分，平局澳大利亚晋级。(SportsMole/FIFA.com双源)",
   "en": "Paraguay: Almirón suspended; Australia: Leckie muscle issue, Italiano injured. Both on 3pts — draw sends Australia through.",
   "full": "周四059实际为巴拉圭vs澳大利亚(D组末轮，非巴西)。⚠️ odds_data.js 主队标注疑为'巴西'但实际应为'巴拉圭'，请主会话核实。关键情报：巴拉圭头号球星 Almirón 因红牌停赛(本届赛事领先射手10球)，Gustavo Caballero 可能替补；澳大利亚 Leckie 有肌肉伤、Italiano 受伤，预计 Geria 顶替。积分形势：两队均积3分，巴拉圭必须赢球出线，平局澳大利亚凭净球差晋级。§14平局edge潜在触发(intl平局42.2%)。",
   "enFull": "Match 059 is Paraguay vs Australia (Group D decider), not Brazil vs Australia as labeled — please verify odds_data.js home-team tag. Key: Almiron suspended for Paraguay (10 WC goals), Leckie doubtful for Australia. Both on 3pts; a draw sends Australia through on goal difference. Intl draw probability 42.2% (Smarkets/Polymarket) — potential §14 fade-favorite trigger if 竞彩 is significantly below that.",
   "links": [
    {
     "name": "SportsMole Paraguay vs Australia preview",
     "url": "https://www.sportsmole.co.uk/football/paraguay/world-cup-2026/preview/paraguay-vs-australia-prediction-team-news-lineups_599899.html"
    },
    {
     "name": "FIFA match centre",
     "url": "https://www.fifa.com/en/match-centre/match/17/285023/289273/400021461"
    }
   ]
  },
  {
   "date": "2026-06-25",
   "match": "周四058",
   "impact": "日本三伤停",
   "tone": "negative",
   "text": "日本队长远藤航缺阵，久保建英膝伤，マキノ病号；瑞典无伤缺。日本积4分平局即可出线，瑞典积3分必须赢。(SportsMole/SI.com双源)",
   "en": "Japan: Endo (captain) out, Kubo knee injury, Machino ill. Sweden: no injury concerns. Japan needs draw (4pts), Sweden must win (3pts).",
   "full": "日本 vs 瑞典是F组关键对决。日本伤缺严峻：队长远藤航(Liverpool)缺席整届；久保建英(Real Sociedad)在对荷兰平局中膝盖受伤仍未完全恢复；マキノ因病尚未登场。瑞典(Graham Potter执教)无任何伤缺停赛，预计首发 Gyökeres + Isak 的双锋锋线。积分：日本4分只需平局，瑞典3分必须赢球才能晋级。日本可以拖时间、瑞典必须主动进攻——这给日本守反带来空间。",
   "enFull": "Japan vs Sweden is the decisive Group F clash. Japan are significantly weakened: captain Wataru Endo is absent for the tournament; Takefusa Kubo carries a knee injury from the Netherlands draw; Machino is ill and has not yet featured. Sweden (Graham Potter) have a clean bill of health, with Gyökeres and Isak expected to lead the line. Standings: Japan 4pts need only a draw, Sweden 3pts must win. Japan's injury absences may be offset by their tactical discipline defending deep.",
   "links": [
    {
     "name": "SportsMole Japan vs Sweden team news",
     "url": "https://www.sportsmole.co.uk/football/japan/injury-news/team-news/japan-vs-sweden-injury-suspension-list-predicted-xis_599891.html"
    },
    {
     "name": "SI.com preview",
     "url": "https://www.si.com/soccer/japan-vs-sweden-world-cup-preview-predictions-lineups-6-25-26"
    }
   ]
  },
  {
   "date": "2026-06-25",
   "match": "周四060",
   "impact": "美国轮换",
   "tone": "neutral",
   "text": "美国已锁D组第一大概率轮换；土耳其连败出局动机全无。Pulisic预计出战，Tyler Adams等4人黄牌危险。(ESPN/SportsMole双源)",
   "en": "USA clinched Group D top spot, likely to rotate; Turkey eliminated (0pts). Pulisic expected fit despite calf. Adams/Balogun/Richards/Robinson on yellow card risk.",
   "full": "土耳其 vs 美国：美国已锁定D组第一，Pochettino 面临是否主力全上的抉择——已有Pulisic(小腿)伤过但预计康复出战；Tyler Adams、Balogun、Chris Richards、Antonee Robinson 共4人积黄，有停赛风险若此轮领牌。土耳其连输两场已出局，Yildiz 小腿伤缓解预计可上场，但全队动机几乎为零。这场预计是美国保主力稳出线 vs 土耳其空场应付的格局——hhad让球盘value需慎判(美国可能保守放水)。",
   "enFull": "USA vs Turkey: USA have sealed top spot in Group D and are weighing rotation. Pulisic (calf) expected fit; Tyler Adams, Balogun, Richards, and Robinson face yellow card suspension risk. Turkey are already eliminated (0pts, 2 losses); Kenan Yildiz available despite earlier calf issue. Motivation gap is extreme — USA may prioritize fitness for R32 over full effort, affecting hhad/Asian handicap lines. Key risk for bettors: USA's rotation could undermine any handicap play.",
   "links": [
    {
     "name": "ESPN USMNT Turkey lineup dilemma",
     "url": "https://www.espn.com/soccer/story/_/id/49140112/usmnt-faces-world-cup-dilemma-vs-turkiye-rotate-squad-keep-same-xi"
    },
    {
     "name": "SportsMole Turkey vs USA team news",
     "url": "https://www.sportsmole.co.uk/football/turkey/world-cup-2026/team-news/turkey-vs-usa-injury-suspension-list-predicted-xis_599851.html"
    }
   ]
  }
 ],
 "slip": {
  "title": "6月26日 · 周四 · §0最简凸性 · 21:00最终版",
  "status": "六场全扫：HAD/HHAD价值最高仅0.96，无单项≥1.10。fade-favorite(055德国conf=63%)CLV不通过：竞彩平4.92<sharp公平5.26(负CLV-6.4%)。§0最高指令·给最小凸性picks：①厄瓜多尔@5.20·德国已锁组E第一无动机·value0.92·4元；②日本×巴拉圭2串1·model55%+37%·value联合0.85·4元。合计8元，诚实负EV约-0.7元，§0参与向量。影子book已记满6场预测。",
  "detail": "周四6场扫描结果：055厄vs德(HAD全0.86-0.93·fade-CLV负)；056库vs科(竞彩未开盘HHAD仅·0.83-0.95)；057突vs荷(未开盘·HHAD让胜表面1.34但镜像假核心)；058日vs瑞(HAD全0.86-0.89·single=0)；059巴vs澳(HAD全0.84-0.96·single=0)；060土vs美(HAD全0.88-0.89·single=1)。无任何盘口真实edge≥1.10。§0给2注凸性：①055厄瓜多尔@5.20(德国6pt已锁Group E第一·零赢球动机·厄生死战·model18%×5.20=value0.92；had.single=1可单买)；②058日本×059巴拉圭2串1@4.25(日本model55.4%主胜·巴拉圭model36.5%主胜·联合概率~20%·联合value0.85；058 had.single=0+059 had.single=0均allUp合法)。最坏-8→270.55>>地板80；单日8/278.55=2.9%<<25%。",
  "items": [
   {
    "num": "周四055",
    "match": "厄瓜多尔 vs 德国",
    "pick": "厄瓜多尔 赢(主胜)",
    "tier": "凸性/§0·德国零动机",
    "stake": 4,
    "odds": 5.2,
    "value": 0.92,
    "ev": -0.32,
    "note": "德国6pt已锁Group E第一，无需赢球；厄瓜多尔生死战(必须赢且等待其他结果)；赔率5.20·model18%·value0.92<1.10；§0给凸性4元小注"
   },
   {
    "num": "058×059",
    "match": "日本×巴拉圭 2串1",
    "pick": "2串1 日本主胜×巴拉圭主胜",
    "legs": [
     {
      "n": "周四058",
      "pick": "主胜(日本赢)",
      "odds": 1.61
     },
     {
      "n": "周四059",
      "pick": "主胜(巴拉圭赢)",
      "odds": 2.64
     }
    ],
    "tier": "凸性串关/§0",
    "match_detail": "058日本vs瑞典·059巴拉圭vs澳大利亚",
    "stake": 4,
    "odds": 4.25,
    "value": 0.85,
    "ev": -0.6,
    "note": "058日本model55.4%(had.single=0·allUp=1)×059巴拉圭model36.5%(had.single=0·allUp=1)；联合概率~20%；联合value0.85<1.10；§0给凸性串关4元"
   }
  ],
  "summary": {
   "stake": 8,
   "evLow": -8,
   "evHigh": 37,
   "winProb": 24,
   "best": {
    "label": "厄瓜多尔赢+日本赢+巴拉圭赢(全中)",
    "pnl": 34
   },
   "worst": {
    "label": "全挂",
    "pnl": -8
   },
   "keyScenarios": [
    {
     "label": "仅厄瓜多尔赢",
     "pnl": 13
    },
    {
     "label": "仅日本+巴拉圭串中",
     "pnl": 9
    },
    {
     "label": "全挂",
     "pnl": -8
    }
   ]
  },
  "matrix": [
   {
    "scenario": "厄赢+日赢+巴赢(全中)",
    "prob": 4,
    "returnTotal": 38,
    "pnl": 34
   },
   {
    "scenario": "仅厄赢(串关挂)",
    "prob": 14,
    "returnTotal": 21,
    "pnl": 13
   },
   {
    "scenario": "仅日赢+巴赢(厄不赢)",
    "prob": 16,
    "returnTotal": 17,
    "pnl": 9
   },
   {
    "scenario": "全挂",
    "prob": 66,
    "returnTotal": 0,
    "pnl": -8
   }
  ],
  "copyText": "周四这轮，下2注：\n① 场次：周四055 厄瓜多尔 vs 德国\n   买：厄瓜多尔赢\n   方式：单关（只买这场）\n   金额：4元\n\n② 2串1（下面两场全对才中，4元）：\n   · 周四058 日本 vs 瑞典 → 买日本赢\n   · 周四059 巴拉圭 vs 澳大利亚 → 买巴拉圭赢\n\n一共8元，谢谢！"
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
  "sampleCount": 54,
  "threshold": 50,
  "pct": 108,
  "ensBrier": 0.516,
  "ensBrierMedian": 0.264,
  "marketBase": 0.4981,
  "marketBaseLabel": "市场去水(子模型A)",
  "beatsMarket": false,
  "beatRandom": 36,
  "dirHit": 34,
  "weightsFirst": {
   "A": 33,
   "B": 34,
   "C": 33
  },
  "weightsLast": {
   "A": 64,
   "B": 11,
   "C": 0,
   "D": 25
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
   },
   {
    "num": "周日037",
    "m": "西班牙·4:0",
    "b": 0.02,
    "win": true
   },
   {
    "num": "周日038",
    "m": "比利时·0:0",
    "b": 1.16,
    "win": false
   },
   {
    "num": "周日039",
    "m": "乌拉圭·2:2",
    "b": 1.23,
    "win": false
   },
   {
    "num": "周日040",
    "m": "新西兰·1:3",
    "b": 0.27,
    "win": true
   },
   {
    "num": "周一041",
    "m": "阿根廷·2:0",
    "b": 0.15,
    "win": true
   },
   {
    "num": "周一042",
    "m": "法国·3:0",
    "b": 0.02,
    "win": true
   },
   {
    "num": "周一043",
    "m": "挪威·3:2",
    "b": 0.41,
    "win": true
   },
   {
    "num": "周一044",
    "m": "约旦·1:2",
    "b": 0.19,
    "win": true
   },
   {
    "num": "周二045",
    "m": "葡萄牙·5:0",
    "b": 0.05,
    "win": true
   },
   {
    "num": "周二046",
    "m": "英格兰·0:0",
    "b": 1.44,
    "win": false
   },
   {
    "num": "周二047",
    "m": "巴拿马·0:1",
    "b": 0.18,
    "win": true
   },
   {
    "num": "周二048",
    "m": "哥伦比亚·1:0",
    "b": 0.19,
    "win": true
   },
   {
    "num": "周三049",
    "m": "瑞士·2:1",
    "b": 0.55,
    "win": true
   },
   {
    "num": "周三050",
    "m": "波黑·3:1",
    "b": 0.14,
    "win": true
   },
   {
    "num": "周三051",
    "m": "苏格兰·0:3",
    "b": 0.11,
    "win": true
   },
   {
    "num": "周三052",
    "m": "摩洛哥·4:2",
    "b": 0.04,
    "win": true
   },
   {
    "num": "周三053",
    "m": "南非·1:0",
    "b": 1.15,
    "win": false
   },
   {
    "num": "周三054",
    "m": "捷克·0:3",
    "b": 0.4,
    "win": true
   }
  ],
  "headline": "已喂 54 场预测 · 集成 Brier 0.516 vs 市场去水 0.4981（仍未跑赢）· 只比随机0.667好一点（地板线,非alpha）",
  "lesson": "**28场复盘硬结论(诚实版):** 集成 Brier 0.516 **仍没跑赢市场去水(0.4981)**——模型暂无可证明的边。它只比'瞎猜'(随机0.667)好一点,那是地板不是本事。平局占36%(异常高)模型从不押平→10个自动判错卡死命中率;回测所有补救都≤57%,平局事前分不出来。**边在纪律和情报、不在模型方向**(可迁股市:高效市场里纯模型必收敛到市场)。⚠️别把'跑赢随机'当 alpha——真市场CLV还在攒(竞彩收盘价未留存),没有真CLV前'有没有边'仍是自说自话。",
  "graduation": "完成训练 = 喂满50场 + Brier稳定且**真CLV转正** + 权重收敛。当前 54/50,权重已收敛(A市场去水重仓),但**Brier尚未跑赢市场、CLV待积累**——离'有边'还差关键一步:留存赛前收盘价算真CLV。"
 }
};