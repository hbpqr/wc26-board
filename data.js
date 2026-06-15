window.DASH_DATA = {
 "meta": {
  "round": "小组赛第 1 轮",
  "updated": "2026-06-15 20:14",
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
  "note": "2万是北极星(方向)。架构=CPPI安全垫+塔勒布杠铃,防御≠最小档。6/14收官:只押澳洲胜22@5.15(土耳其伤兵tilt,价值1.16),命中+91.3,池 188.2→279.5,**重新站上保本线200**。其余3场本命被逼平/贴水,按纪律没碰=躲过坑。下一里程碑500(6/18),差220.5。",
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
 "focus": [
  {
   "num": "周一013",
   "home": "西班牙",
   "away": "佛得角",
   "time": "00:00",
   "models": {
    "A": [],
    "B": [
     91.8,
     12,
     -3.8
    ],
    "C": [
     91.9,
     6.7,
     1.4
    ],
    "ens": [
     91.8,
     8.8,
     -0.6
    ]
   },
   "wdlValue": [],
   "scores": [],
   "verdict": "🔴深让镜像区(西班牙-2)。情报:西班牙双星亚马尔/尼科·维廉斯本周存疑、预计替补→进攻或略减。深让大热门信市场让线,模型无 edge,不碰。"
  },
  {
   "num": "周一014",
   "home": "比利时",
   "away": "埃及",
   "time": "03:00",
   "models": {
    "A": [
     61.9,
     23,
     15.1
    ],
    "B": [
     75.4,
     17.4,
     7.1
    ],
    "C": [
     63.8,
     22.2,
     13.9
    ],
    "ens": [
     65.6,
     21.5,
     12.9
    ]
   },
   "wdlValue": [
    {
     "pick": "主胜",
     "odds": 1.43,
     "prob": 66,
     "value": 0.94
    },
    {
     "pick": "平局",
     "odds": 3.85,
     "prob": 22,
     "value": 0.83
    },
    {
     "pick": "客胜",
     "odds": 5.86,
     "prob": 13,
     "value": 0.76
    }
   ],
   "scores": [],
   "verdict": "★今晚真候选(比利时-1 让胜)。情报:埃及核心萨拉赫伤疑管控(6/6 仅替补 45')、比利时满血(德布劳内/卢卡库/多库全在,仅德巴斯特缺)→支持比利时大胜。模型让胜 40%/价值 0.94 差一口气;盯 T-30 首发,若萨拉赫确认缺阵或替补→概率上修可能过闸,届时娱乐小仓让胜。"
  },
  {
   "num": "周一015",
   "home": "沙特",
   "away": "乌拉圭",
   "time": "06:00",
   "models": {
    "A": [
     12.3,
     20.6,
     67.1
    ],
    "B": [
     11.9,
     20.2,
     67.9
    ],
    "C": [
     11,
     19.6,
     69.4
    ],
    "ens": [
     11.8,
     20.5,
     67.7
    ]
   },
   "wdlValue": [
    {
     "pick": "主胜",
     "odds": 7.2,
     "prob": 12,
     "value": 0.85
    },
    {
     "pick": "平局",
     "odds": 4.3,
     "prob": 21,
     "value": 0.88
    },
    {
     "pick": "客胜",
     "odds": 1.32,
     "prob": 68,
     "value": 0.89
    }
   ],
   "scores": [],
   "verdict": "⚠️情报识破的陷阱(沙特vs乌拉圭)。模型给乌拉圭让1胜 46.5%、edge +5.5pp 看着是机会,但情报:乌拉圭防线重创(希门尼斯/阿劳霍/德阿拉斯卡耶塔等核心后防+中场全缺/伤疑)→满血模型高估乌拉圭,大胜概率实际下修→假 edge,不买。不挖情报就买进去了。"
  },
  {
   "num": "周一016",
   "home": "伊朗",
   "away": "新西兰",
   "time": "09:00",
   "models": {
    "A": [
     55,
     27.7,
     17.4
    ],
    "B": [
     67.9,
     20.2,
     11.9
    ],
    "C": [
     56.8,
     26.9,
     16.3
    ],
    "ens": [
     57.9,
     25.8,
     16.3
    ]
   },
   "wdlValue": [
    {
     "pick": "主胜",
     "odds": 1.61,
     "prob": 58,
     "value": 0.93
    },
    {
     "pick": "平局",
     "odds": 3.2,
     "prob": 26,
     "value": 0.83
    },
    {
     "pick": "客胜",
     "odds": 5.1,
     "prob": 16,
     "value": 0.83
    }
   ],
   "scores": [],
   "verdict": "情报反向(伊朗-1 让胜)。伊朗联赛停摆 3 个月体能断档+队长切什米确认缺席→模型让胜 0.97 该下修,谨慎不碰;新西兰加贝特升格首发。"
  }
 ],
 "news": [
  {
   "date": "06-16",
   "match": "沙特 vs 乌拉圭",
   "impact": "卡塞雷斯比尼亚预测首发",
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
   "date": "06-14",
   "match": "荷兰 vs 日本",
   "impact": "荷兰多核缺阵",
   "tone": "away",
   "text": "荷兰主力GK维尔布吕根臀伤存疑,德里格、蒂姆伯、哈维·西蒙斯均确认缺席;四名主力告缺严重削弱荷兰竞争力。(来源:Sports Mole/Rotowire)",
   "en": "Netherlands GK Bart Verbruggen is a major doubt with a hip injury; de Ligt, Timber and Xavi Simons are confirmed absences — four key players missing before the Group F opener. (per Sports Mole / Rotowire)",
   "full": "根据Sports Mole与Rotowire赛前报道,荷兰迎战日本前已确认多名主力缺席:德里格与蒂姆伯均因伤缺席世界杯,哈维·西蒙斯也在伤缺名单;主力门将巴特·维尔布吕根赛前在热身中受到臀伤困扰,是否首发存疑,后备门将弗莱肯(拜尔勒沃库森)或罗伊夫斯候补。整体阵容缺口直接影响荷兰后防与中前场组织,是本场最关键的背景变量。国际市场:荷兰胜率开盘以来下行1.2pp至46.7%(Smarkets),与伤情曝光时间线吻合。⚠️赛前确认GK首发及后防组合是最后的关键变量。",
   "enFull": "Ahead of the Group F opener vs Japan, Netherlands face significant injury headaches: Matthijs de Ligt, Jurrien Timber and Xavi Simons are all confirmed absentees. Starting GK Bart Verbruggen suffered a hip problem in their final warm-up and is a major doubt; Bayer Leverkusen's Mark Flekken or Robin Roefs would deputise. The absences weaken both the defensive unit and the creative midfield. International market: Netherlands win probability has drifted down 1.2pp since opening to 46.7% on Smarkets, timing consistent with injury news spreading. ⚠️ Confirming the GK and central defensive partnership in the starting XI is the last key variable before kick-off.",
   "links": [
    {
     "name": "Sports Mole · Netherlands vs Japan team news",
     "url": "https://www.sportsmole.co.uk/football/netherlands/world-cup-2026/team-news/netherlands-vs-japan-injury-suspension-list-predicted-xis_599066.html"
    },
    {
     "name": "Rotowire · Netherlands vs Japan preview",
     "url": "https://www.rotowire.com/soccer/article/netherlands-vs-japan-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-f-117958"
    }
   ]
  },
  {
   "date": "06-14",
   "match": "荷兰 vs 日本",
   "impact": "日本双核缺阵",
   "tone": "home",
   "text": "日本队长远藤航因脚伤宣布退出国家队,三笘薫同样因伤缺席世界杯;攻守两端核心均告缺,日本实力打折。(来源:Sports Mole/CBS Sports)",
   "en": "Japan captain Wataru Endo announced his international retirement due to a foot injury; livewire winger Kaoru Mitoma is also absent — Japan missing both their defensive anchor and their most dangerous wide attacker. (per Sports Mole / CBS Sports)",
   "full": "Sports Mole与CBS Sports报道,日本在世界杯开赛前遭遇双重打击:队长远藤航(利物浦,防守核心)在脚伤未愈情况下宣布退出国家队;快马翼卫三笘薫同样因伤无缘本届赛事。远藤航是日本中场防守支柱,负责拦截和组织节奏;三笘薫是日本在边路最具威胁的进攻武器,两名核心缺阵直接压低日本攻防两端上限。尽管如此,日本防守体系完备,久保建英、堂安律等仍在,不可低估。国际市场:日本目前客胜赔率3.92(Smarkets),市场给荷兰仅46.7%胜率;结合荷兰自身伤情,两队均有减员,比赛走向不确定性上升。",
   "enFull": "Japan suffered two major pre-tournament blows: captain Wataru Endo (Liverpool) announced his international retirement after failing to recover from a foot injury, while electrifying winger Kaoru Mitoma also missed out injured. Endo was Japan's defensive midfield anchor and rhythm controller; Mitoma their most creative wide threat. Despite these losses, Japan retain Takefusa Kubo, Ritsu Doan, and Daichi Kamada and should not be underestimated. International market: Japan at 25.3% win (Smarkets) at odds of ~3.92; combined with Netherlands' own injury issues, match uncertainty is elevated. ⚠️ Both teams significantly weakened — market efficiency may lag the full injury picture.",
   "links": [
    {
     "name": "Sports Mole · Netherlands vs Japan team news",
     "url": "https://www.sportsmole.co.uk/football/netherlands/world-cup-2026/team-news/netherlands-vs-japan-injury-suspension-list-predicted-xis_599066.html"
    },
    {
     "name": "CBS Sports · Netherlands vs Japan preview",
     "url": "https://www.cbssports.com/soccer/news/netherlands-vs-japan-live-stream-prediction-lineups-and-how-to-watch-2026-world-cup/"
    }
   ]
  },
  {
   "date": "06-14",
   "match": "科特迪瓦 vs 厄瓜多尔",
   "impact": "恩迪卡确定缺席",
   "tone": "home",
   "text": "科特迪瓦主力中卫恩迪卡(罗马)因大腿伤确定缺席首战,后防线需重组;科苏努复出候补中卫。(来源:Rotowire/Sports Mole)",
   "en": "Ivory Coast first-choice centre-back Evan N'Dicka (Roma) is ruled out with a thigh injury; Kossounou is fit to start as replacement — Ivory Coast defensive line forced to reorganise. (per Rotowire / Sports Mole)",
   "full": "Rotowire与Sports Mole赛前报道确认,科特迪瓦主力中卫埃文·恩迪卡(效力罗马)因大腿伤确定缺席6月15日与厄瓜多尔的首战。恩迪卡是科特迪瓦防线的绝对主力,身材高大、覆盖面广,是后防关键人物。好消息是奥迪隆·科苏努已从大腿伤复出,预计搭档迪奥芒代镇守中路。但科苏努此前在友谊赛中仅出战60分钟(赛前恢复性热身),磨合默契度不如恩迪卡在队时。预测阵容:福法纳;古埃·杜埃、辛戈、迪奥芒代、科南;迪亚基特、凯西耶、塞科·福法纳、扬·迪奥芒代;阿马德·迪亚洛、阿丁格拉。厄瓜多尔锋线若能利用科特迪瓦后防重组期形成威胁,将是突破口。⚠️结合瓦伦西亚伤疑,双方均有关键人物存疑/缺阵,全场风险双向释放。",
   "enFull": "Rotowire and Sports Mole confirm Ivory Coast first-choice centre-back Evan N'Dicka (Roma) is ruled out with a thigh injury for the June 15 Group E opener vs Ecuador. N'Dicka is a commanding presence at the back and his absence forces a defensive reshuffle. The silver lining: Odilon Kossounou is fit to deputise after recovering from his own thigh issue, though he only played 60 minutes of a recent friendly. Predicted Ivory Coast XI: Fofana; Doue, Singo, Diomande, Konan; Diakite, Kessie, Seko Fofana, Yan Diomande; Amad Diallo, Adingra. Ecuador's frontline may target the reshuffled Ivory Coast backline as a point of entry. ⚠️ With Valencia also a doubt for Ecuador, both teams face uncertainty over key personnel — a higher-variance match than the market currently prices.",
   "links": [
    {
     "name": "Rotowire · Ivory Coast vs Ecuador preview",
     "url": "https://www.rotowire.com/soccer/article/ivory-coast-vs-ecuador-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-e-117960"
    },
    {
     "name": "Sports Mole · Ivory Coast vs Ecuador team news",
     "url": "https://www.sportsmole.co.uk/football/ivory-coast/injury-news/team-news/ivory-coast-vs-ecuador-injury-suspension-list-predicted-xis_599041.html"
    }
   ]
  },
  {
   "date": "06-14",
   "match": "科特迪瓦 vs 厄瓜多尔",
   "impact": "瓦伦西亚伤疑",
   "tone": "away",
   "text": "厄瓜多尔队长恩纳·瓦伦西亚临赛前被列为轻微伤疑,正式首发存疑;若缺席或受限,厄瓜多尔失去49球历史最佳射手,进攻火力受明显影响。(来源:Rotowire/Sports Mole)",
   "en": "Ecuador captain Enner Valencia is listed as a minor fitness doubt ahead of the June 15 opener vs Ivory Coast; if absent or limited, Ecuador lose their 49-goal all-time top scorer in attack. (per Rotowire / Sports Mole)",
   "full": "多家媒体(Rotowire、Sports Mole)在厄瓜多尔对科特迪瓦06-15首战前将恩纳·瓦伦西亚标注为轻微伤疑。瓦伦西亚是厄瓜多尔历史最佳射手(49球,现效力LAFC),长期以来是球队的进攻核心与精神领袖;他在赛前有小伤困扰,正式首发状态尚未获官方确认。若缺席或仅能出任替补:厄瓜多尔第一进攻点告缺,卡塞多中场发动机出球但缺少终结者,整体进攻产出预计下降10-15%。但需要注意的是:多项预测阵容仍将其列入首发,伤势程度尚属轻微。Rotowire预测厄瓜多尔XI:加林德斯;奥尔多涅斯、帕乔、因卡皮耶、埃斯图皮南;卡塞多、维特;耶博亚、普拉塔、安古洛;瓦伦西亚。国际市场:厄瓜多尔客胜37.3%(Smarkets),已是略大热;瓦伦西亚若缺阵市场可能重新定价向平局倾斜。⚠️赛前60分钟确认瓦伦西亚出战状态——是本场最关键的临场变量。",
   "enFull": "Multiple outlets (Rotowire, Sports Mole, Yahoo Sports) have flagged Ecuador captain Enner Valencia as a minor fitness concern heading into the June 15 Group E opener against Ivory Coast. Valencia, Ecuador's all-time top scorer with 49 international goals (now at LAFC), is the team's primary attacking reference and spiritual leader. He is reportedly dealing with a minor pre-match physical issue, and his starting status has not been officially confirmed. If unavailable or limited: Ecuador's most reliable finisher is absent, placing heavier creative burden on Moises Caicedo and Gonzalo Plata. Projected scoring output could fall 10-15%. Caveat: most predicted XIs still include him in the lineup, and the concern is flagged as 'minor' — not a confirmed absence. Rotowire projected XI: Galindez; Ordonez, Pacho, Hincapie, Estupinan; Caicedo, Vite; Yeboah, Plata, Angulo; Valencia. International market: Ecuador at 37.3% win (Smarkets), already slight favourites; Valencia's absence could shift odds toward a draw. ⚠️ Confirm Valencia's status in the official XI 60 minutes before kickoff — the most important late-breaking variable for this match.",
   "links": [
    {
     "name": "Rotowire · Ivory Coast vs Ecuador preview",
     "url": "https://www.rotowire.com/soccer/article/ivory-coast-vs-ecuador-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-e-117960"
    },
    {
     "name": "Sports Mole · Ivory Coast vs Ecuador team news",
     "url": "https://www.sportsmole.co.uk/football/ivory-coast/world-cup-2026/preview/ivory-coast-vs-ecuador-prediction-team-news-lineups_599029.html"
    }
   ]
  },
  {
   "date": "06-14",
   "match": "科特迪瓦 vs 厄瓜多尔",
   "impact": "科苏努复出就绪",
   "tone": "home",
   "text": "象牙海岸中卫奥迪隆·科苏努从近期伤病中恢复,预计出任首发中卫搭档阿格巴多,部分弥补N迪卡缺阵造成的防守真空;科苏努本赛季拜耳勒沃库森表现出色,后防完整度好于最悲观预期。(来源:Rotowire/Squawka)",
   "en": "Ivory Coast defender Odilon Kossounou has recovered from injury and is expected to start alongside Agbadou, partially offsetting N'Dicka's absence; Kossounou's return improves Ivory Coast's central defensive depth ahead of the Ecuador match. (per Rotowire / Squawka)",
   "full": "象牙海岸中卫奥迪隆·科苏努(拜耳勒沃库森)赛前有伤势困扰,各方一度不确定其首发状态。据Rotowire和Squawka最新更新:科苏努已从训练伤病中康复,预计出任首发中卫,与马努埃尔·阿格巴多搭档。科苏努本赛季在德甲冠军拜耳表现稳定,是当今非洲中卫水平最高之一。上一条情报(N迪卡伤缺)显示象牙海岸中卫组合降级——科苏努就绪令情况好于最悲观预期。预计首发XI:Y.福法纳;杜埃、阿格巴多、科苏努、科南;凯西、桑加雷、S.福法纳;迪亚罗、古萨尼、迪奥曼德。⚠️ 官方XI仍须赛前60分钟确认;关注科苏努是否有临场反应。",
   "enFull": "Ivory Coast centre-back Odilon Kossounou (Bayer Leverkusen) was previously flagged as a fitness concern ahead of the June 15 Group E opener vs Ecuador. Latest reports from Rotowire and Squawka indicate he has recovered from the injury and is expected to start alongside Manuel Agbadou in central defence. Kossounou was a key performer in Leverkusen's Bundesliga title defence and is one of the best African defenders at club level. His availability partially offsets the blow of Evan N'Dicka's confirmed absence — the central defensive pairing is now better than the worst-case scenario suggested. Projected Ivory Coast XI: Y. Fofana; Doue, Agbadou, Kossounou, Konan; Kessie, Sangare, S. Fofana; Diallo, Guessand, Diomande. Ivory Coast's defensive line is still weakened vs their optimal setup (N'Dicka absent, Akpa out) but retains a capable and experienced CB core. ⚠️ Confirm official XI 60 minutes before kickoff and monitor any late Kossounou reaction to training.",
   "links": [
    {
     "name": "Rotowire · Ivory Coast vs Ecuador preview",
     "url": "https://www.rotowire.com/soccer/article/ivory-coast-vs-ecuador-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-e-117960"
    },
    {
     "name": "Squawka · Ivory Coast vs Ecuador lineups",
     "url": "https://www.squawka.com/en/news/world-cup/ivory-coast-vs-ecuador-team-news-predicted-lineups/"
    }
   ]
  },
  {
   "date": "06-14",
   "match": "瑞典 vs 突尼斯",
   "impact": "古德蒙森伤愈就绪",
   "tone": "home",
   "text": "左后卫加布里埃尔·古德蒙森(利兹联)赛前病毒性感冒已康复,获确认首发出战06-15揭幕战;上条情报将其标注为'出战存疑',现状态升级为就绪,瑞典左路防线更为完整。(来源:Sports Mole/Yahoo Sports)",
   "en": "Sweden left-back Gabriel Gudmundsson (Leeds United) has recovered from a pre-tournament viral illness and is deemed fit to start vs Tunisia on June 15 — an upgrade from the 'doubtful' status noted in earlier reports. (per Sports Mole / Yahoo Sports)",
   "full": "上条新闻(库鲁谢夫斯基缺阵 full文本)提及左后卫加布里埃尔·古德蒙森在集训期间感染病毒性感冒,出战存疑。最新来自Sports Mole和Yahoo Sports:古德蒙森已从感冒中恢复,被确认为首发级别('deemed fit to start'),将在格雷厄姆·波特的4-3-3/4-2-3-1阵型中出任左后卫。这对瑞典是一个小型积极更新:左路防守完整性恢复,吉约克莱斯(独立队/最近加盟俱乐部)+伊萨克(纽卡)双核进攻依旧是最大威胁。突尼斯:汉尼拔·梅布里(伯恩利)出战状态仍存疑,斯基里-赫代拉后腰组合防守型配置,与瑞典中场优势或形成对比。⚠️赛前60分钟确认古德蒙森/汉尼拔双方出战状态,两者均是各自球队的状态变量。",
   "enFull": "Sweden left-back Gabriel Gudmundsson (Leeds United) was listed as a fitness concern in earlier reports after battling a viral illness during Sweden's pre-tournament camp. Updated information from Sports Mole and Yahoo Sports confirms that Gudmundsson has recovered and is 'deemed fit to start' against Tunisia on June 15. Graham Potter is expected to deploy him at left-back in Sweden's XI. This is a minor positive update for Sweden: left-side defensive solidity is restored, with Alexander Isak (Newcastle) and Viktor Gyökeres (recently moved club) leading the attack alongside Anthony Elanga in what is expected to be a front-three. For Tunisia, Hannibal Mejbri remains a fitness doubt following a pre-tournament injury — his status remains the most critical team news item for this fixture. Sweden's forward line retains significant quality; if Hannibal is absent, Tunisia's creative options thin considerably. ⚠️ Confirm both Gudmundsson and Hannibal's starting status in the official XI 60 minutes before the June 15 10:00 BJT kickoff.",
   "links": [
    {
     "name": "Sports Mole · Sweden vs Tunisia team news",
     "url": "https://www.sportsmole.co.uk/football/sweden/world-cup-2026/team-news/sweden-vs-tunisia-injury-suspension-list-predicted-xis_599053.html"
    },
    {
     "name": "Yahoo Sports · Sweden vs Tunisia preview",
     "url": "https://sports.yahoo.com/articles/preview-sweden-vs-tunisia-team-020500034.html"
    }
   ]
  },
  {
   "date": "06-14",
   "match": "荷兰 vs 日本",
   "impact": "德帕伊维布双双就绪",
   "tone": "home",
   "text": "ESPN 06-14最新确认:德帕伊与维尔布鲁根均健康放行、预计首发出战06-15揭幕战。德帕伊3月起大腿伤曾令科曼明言'须证明状态';维尔布鲁根髋伤已恢复训练。两人就绪令荷兰阵容比悲观预期更完整,但三项HAD价值仍<0.90,无票建议不变。⚠️Sports Mole一篇文章预测弗莱肯首发(与多数共识相反),赛前60分钟确认官方XI。(来源:ESPN/cryptobriefing.com)",
   "en": "ESPN confirmed June 14: Both Memphis Depay (thigh injury since March) and Bart Verbruggen (hip bruise) are fit to start vs Japan on June 15. Koeman had required Depay to 'prove fitness'; both players rejoined training and are now cleared. Lineup stronger than worst-case models assumed — but all HAD value scores remain <0.90 (negative EV), no bet. ⚠️ One Sports Mole article projects Flekken starting (vs consensus Verbruggen); confirm official XI 60 min before 04:00 BJT. (per ESPN / cryptobriefing.com)",
   "full": "ESPN于2026年6月14日发出明确报道:'Netherlands' Memphis Depay, Bart Verbruggen both fit to face Japan'。①德帕伊(科林蒂安斯/历史最佳射手):3月底大腿伤后缺席至今,赛前还有另一条腿疼痛传言,科曼明言'必须证明体能才能首发';德帕伊本人从未公开表示放弃。最新:已完成康复返回训练,ESPN确认预计06-15出战。②维尔布鲁根(布莱顿):乌兹别克斯坦热身赛落地伤髋,本周五重回全队训练,多数媒体确认预计首发;Sports Mole有一篇文章预测弗莱肯首发(可能是较早版本或编辑意见分歧)。综合评估:两人就绪令荷兰进攻线与门将线均比悲观情景更完整,集成50.6%主胜可能微升1-2pp。三项HAD价值最高约0.90(价值闸1.10以下),无票建议维持。⚠️赛前60分钟确认官方首发,关注弗莱肯/维尔布鲁根最终人选。",
   "enFull": "ESPN confirmed June 14, 2026: 'Netherlands' Memphis Depay, Bart Verbruggen both fit to face Japan.' (1) Depay (Corinthians): sidelined since late March with a thigh injury, compounded by reports of pain in a second leg days before the tournament. Coach Koeman publicly demanded he 'prove fitness' before earning a starting slot. Depay dismissed the doubts and returned to full training; ESPN now clears him for the opener. (2) Verbruggen (Brighton): bruised hip from friendly vs Uzbekistan led to goalkeeping doubt; rejoined full training Friday, expected to start ahead of Flekken — though one Sports Mole lineup piece projects Flekken as starter (likely a dissenting editorial opinion, not the consensus). Assessment: Both players available makes Netherlands' squad noticeably stronger than the worst-case assumptions that were priced into many pre-match models. Ensemble Netherlands win probability may tick 1-2pp above 50.6%. However, all three HAD market outcomes remain negative-EV (max value ~0.90, vs buy-gate ≥1.10) — no bet recommended. ⚠️ Confirm official XI 60 minutes before 04:00 BJT kickoff; Verbruggen vs Flekken is the last open question.",
   "links": [
    {
     "name": "ESPN · Depay and Verbruggen fit vs Japan",
     "url": "https://www.espn.com/soccer/story/_/id/49054964/netherlands-memphis-depay-bart-verbruggen-fit-face-japan-world-cup"
    },
    {
     "name": "cryptobriefing.com · Netherlands Depay Verbruggen fit",
     "url": "https://cryptobriefing.com/netherlands-depay-verbruggen-fit-japan-world-cup/"
    }
   ]
  },
  {
   "date": "06-14",
   "match": "瑞典 vs 突尼斯",
   "impact": "库鲁谢夫斯基缺阵",
   "tone": "neutral",
   "text": "德扬·库鲁谢夫斯基(托特纳姆)因膝伤(2025年5月起缺席超一年)未入选瑞典26人大名单,彻底无缘本届世界杯;瑞典右路冲击力削减,吉约克莱斯+伊萨克组合仍是进攻支柱。(来源:Goal.com/myKhel/Passport Soccer)",
   "en": "Dejan Kulusevski (Tottenham) officially misses the 2026 World Cup entirely — omitted from Sweden's 26-man squad after 12+ months out with a right patella cartilage injury; Gyökeres and Isak remain Sweden's attacking pillars but right-wing threat is reduced. (per Goal.com / myKhel / Passport Soccer)",
   "full": "德扬·库鲁谢夫斯基自2025年5月在热刺对阵水晶宫的比赛中膝软骨伤出现后连续缺席超过一年,因伤势被医生描述为'难以处理',始终未能回到全训。球员本人有强烈意愿争取时间,但纳格尔斯曼最终在公布大名单时将其排除在26人名单之外,宣告其世界杯梦想终结。库鲁谢夫斯基自2024年起再未为瑞典出战。对战术影响:库鲁谢夫斯基本是瑞典右路持球推进和技术突破的核心,缺席令格里芬胡芬/斯特劳德等人须顶上;但吉约克莱斯(独立队)与亚历山大·伊萨克(纽卡斯尔)仍构成一流双前锋,整体胜率评估影响有限。Gabriel Gudmundsson赛前亦有病毒性感冒,出战存疑。(来源:Goal.com、myKhel、Passport Soccer/X)",
   "enFull": "Dejan Kulusevski has officially missed the 2026 World Cup after being left out of Sweden's 26-man squad. The Tottenham midfielder suffered a right patella cartilage injury in May 2025 and has been sidelined for over 12 months without recovering in time for the tournament. Sweden's team doctor described the injury as 'difficult to treat' — Kulusevski was unable to complete full training at Hotspur Way ahead of the squad deadline. The player, who last appeared for Sweden in 2024, had expressed a strong desire to recover in time but ultimately his fitness could not be guaranteed. Tactical impact: Kulusevski was Sweden's primary ball-carrier on the right flank, providing technical creativity between the lines. His absence means reliance on Griefenhofen or Stroud; however, Gyökeres (Club Atlético Independiente Rivadavia) and Isak (Newcastle) remain a feared strike partnership. Additionally, Gabriel Gudmundsson has been battling a pre-match virus and is touch-and-go for the June 15 opener vs Tunisia. ⚠️ Confirm Gudmundsson's availability in the official XI 60 minutes before kickoff.",
   "links": [
    {
     "name": "Goal.com · Kulusevski World Cup miss",
     "url": "https://www.goal.com/en/lists/world-cup-dejan-kulusevski-injury-tottenham-sweden-viktor-gyokeres-alexander-isak/bltd56651aa57664624"
    },
    {
     "name": "Sports Bible · Kulusevski injury explained",
     "url": "https://www.sportbible.com/football/football-news/fifa-world-cup/spurs-dejan-kulusevski-sweden-world-cup-062753-20260528"
    }
   ]
  },
  {
   "date": "06-14",
   "match": "瑞典 vs 突尼斯",
   "impact": "汉尼拔伤疑出战",
   "tone": "home",
   "text": "突尼斯核心中场汉尼拔·梅布里在赛前热身赛对阵奥地利中受伤,出战06-15揭幕战存疑;若缺席将严重削弱突尼斯中场组织推进能力,利好瑞典中路控制。(来源:Sports Mole/koorabreak.com)",
   "en": "Tunisia midfielder Hannibal Mejbri picked up an injury in a pre-tournament friendly vs Austria and is a doubt for the June 15 opener vs Sweden; if absent, Tunisia lose their primary creative outlet in midfield — benefits Sweden's midfield dominance. (per Sports Mole / koorabreak.com)",
   "full": "突尼斯中场汉尼拔·梅布里(伯恩利)是突尼斯最重要的中场推进和创造力来源,被视为球队核心。他在赛前与奥地利的热身赛中受伤,虽有报道称可能是大腿/腘绳肌损伤(4-10周级别),具体伤情仍有争议——另有媒体将其纳入对瑞典的预测首发阵容,最终状态须赛前确认。若汉尼拔确实缺席或未能全时出战:突尼斯在预测XI中以赫代拉、斯基里(防守型)为中场基础,创造力大幅下降,正面对抗瑞典中场将处于明显劣势。从价值闸看:瑞典(集成52.4%)赔率1.71对应价值0.90仍负EV,汉尼拔缺阵利好瑞典但不足以产生明显alpha缺口。仍以无票观望为主策略,关注正式首发确认。⚠️ 赛前60分钟确认汉尼拔出战状态。",
   "enFull": "Hannibal Mejbri (Burnley), Tunisia's primary creative midfielder and playmaker, sustained an injury during a pre-tournament friendly against Austria. Reports vary on severity — one source (koorabreak.com) cited a potential hamstring tear that could mean 4-10 weeks out, while Sports Mole described him as 'a doubt for the opening match.' Multiple predicted XIs still include Hannibal in the starting lineup, suggesting his availability remains uncertain rather than confirmed absent. If Mejbri is unavailable or limited, Tunisia's midfield creativity falls substantially — Skhiri and Khédira are more defensive-minded profiles, and the team would struggle to break down Sweden's organised midfield block. From a value-gate perspective: Sweden's 52.4% win probability at odds 1.71 implies value of 0.90 (still negative-EV). Hannibal's absence benefits Sweden but doesn't yet open a clear alpha gap. Current recommendation: no bet, monitor official XI 60 minutes before the June 15 10:00 BJT kickoff. ⚠️ Hannibal's status is the single most important pre-match update for this fixture.",
   "links": [
    {
     "name": "Sports Mole · Sweden vs Tunisia team news",
     "url": "https://www.sportsmole.co.uk/football/sweden/world-cup-2026/team-news/sweden-vs-tunisia-injury-suspension-list-predicted-xis_599053.html"
    },
    {
     "name": "koorabreak · Hannibal injury",
     "url": "https://koorabreak.com/en/270327/"
    }
   ]
  },
  {
   "date": "06-14",
   "match": "德国 vs 库拉索",
   "impact": "卡尔临战退出",
   "tone": "neutral",
   "text": "18岁翼锋伦纳特·卡尔(拜仁)训练受伤退出大名单,阿萨尼·乌埃达奥戈紧急补位;德国右路首发或回归萨内,对阵库拉索胜率(92%+)不受影响,但让球盘节奏或有微调。(来源:Yahoo Sports/Sports Mole)",
   "en": "18-year-old winger Lennart Karl (Bayern) picked up a training injury and withdrew from Germany's WC squad; Assan Ouédraogo called up as replacement — right-wing role defaults to Sané; win probability vs Curaçao unchanged at 92%+. (per Yahoo Sports / Sports Mole)",
   "full": "伦纳特·卡尔是纳格尔斯曼为德国世界杯大名单选入的18岁翼锋(拜仁慕尼黑),赛前被认为有较高概率出任右路首发,其速度和直线冲击是主要卖点。卡尔在集训期间训练受伤,被迫退出大名单,阿萨尼·乌埃达奥戈作为紧急替补加入。德国右翼人选因此回归萨内,威尔茨/穆西亚拉居中不变。对阵库拉索(FIFA #82,本届首秀)整体实力悬殊,人员变动对胜平负结果影响极小——集成92%以上主胜。主要影响在进攻节奏:卡尔的直线速度冲击被萨内的技术型变速所取代,或减缓比分积累速度。⚠️ 官方首发赛前60分钟确认;让球盘开出后重新评估进球数预期。",
   "enFull": "Lennart Karl, 18-year-old Bayern Munich winger, was among Nagelsmann's selected names for Germany's World Cup squad and was projected to have a real shot at starting on the right flank given his explosive pace. Karl suffered a training injury during camp preparations and was forced to withdraw; Assan Ouédraogo was called up as emergency replacement. Germany's right wing role will now most likely fall to Sané, with Wirtz and Musiala in their usual central positions, and Havertz as the lone striker. The personnel change has negligible impact on Germany's win probability against Curaçao (FIFA #82, World Cup debut) — ensemble probability remains above 92%. The more relevant question is how Karl's pace-based disruption vs Sané's technically-driven build-up affects the total goals and handicap markets. ⚠️ Confirm official XI 60 minutes before the 01:00 BJT kickoff; re-evaluate handicap lines once released.",
   "links": [
    {
     "name": "Yahoo Sports · Germany XI vs Curaçao",
     "url": "https://uk.sports.yahoo.com/news/germany-xi-vs-curacao-confirmed-122125951.html"
    },
    {
     "name": "Sports Mole · Germany team news",
     "url": "https://www.sportsmole.co.uk/football/germany/world-cup-2026/team-news/germany-vs-curacao-injury-suspension-list-predicted-xis_599045.html"
    }
   ]
  },
  {
   "date": "06-14",
   "match": "荷兰 vs 日本",
   "impact": "德利赫特缺阵",
   "tone": "away",
   "text": "荷兰中卫马蒂斯·德利赫特确认缺席2026世界杯(加入西蒙斯/斯豪滕/廷贝尔缺阵列表,四主力齐缺);同时更新:维尔布鲁根髋伤已恢复,预计首发出战,门将悬念解除。(来源:ESPN/Sports Mole)",
   "en": "Matthijs de Ligt confirmed out for the 2026 World Cup, adding to Dutch absences of Simons (ACL), Schouten (knee), and Timber — four key players missing; positive update: Verbruggen (hip) now expected to start vs Japan, goalkeeping doubt resolved. (per ESPN / Sports Mole)",
   "full": "荷兰伤情更新:马蒂斯·德利赫特(前拜仁/曼联中卫)正式确认缺席本届世界杯,与哈维·西蒙斯(ACL)、耶尔迪·斯豪滕(膝)、尤里安·廷贝尔(背部)并列,四名主力同时缺席。德利赫特的缺阵令荷兰中卫深度更加吃紧,本·耶达拉或范登博格将补位搭档。积极更新:主力门将巴特·维尔布鲁根在多家媒体最新预测XI中已恢复首发位置,髋伤已基本康复,门将悬念解除。总体评估:荷兰仍有加克波、弗伦基·德容、德佩、杜姆弗里斯等核心可战,但四主力缺席令阵容深度与协调性低于最佳状态。集成50.6%荷兰主胜,三项HAD价值均<0.90(负EV)——本场维持无票观望。⚠️ 赛前60分钟确认官方首发。",
   "enFull": "Updated Netherlands injury picture ahead of the June 15 opener vs Japan: Matthijs de Ligt is confirmed absent for the 2026 World Cup, joining Xavi Simons (ACL, full tournament), Jerdy Schouten (knee) and Jurrien Timber (back) — four key Dutch players missing. De Ligt's absence further depletes Netherlands' central defensive depth; Ben Yedder or Van den Berg are expected to cover. Positive update: goalkeeper Bart Verbruggen, who suffered a hip injury in the final warmup and whose availability was previously flagged as uncertain, is now expected to start per multiple latest media XI projections — the goalkeeping doubt noted in the earlier entry is largely resolved. Quality names remain available (Gakpo, De Jong, Depay, Dumfries) but the four absences collectively reduce squad flexibility and creativity. Ensemble Netherlands win probability at 50.6%; all three HAD outcomes are negative-EV (max 0.90). Monitor official XIs 60 minutes before kickoff — no bet recommended.",
   "links": [
    {
     "name": "ESPN · 2026 WC injury tracker",
     "url": "https://www.espn.com/soccer/story/_/id/48572979/2026-fifa-world-cup-injuries-tracker-which-stars-miss-latest-info"
    },
    {
     "name": "Sports Mole · Netherlands vs Japan team news",
     "url": "https://www.sportsmole.co.uk/football/netherlands/world-cup-2026/team-news/netherlands-vs-japan-injury-suspension-list-predicted-xis_599066.html"
    }
   ]
  },
  {
   "date": "06-14",
   "match": "科特迪瓦 vs 厄瓜多尔",
   "impact": "N迪卡伤缺",
   "tone": "away",
   "text": "象牙海岸核心中卫埃文·恩迪卡(AS罗马)因大腿伤确认缺席06-15揭幕战;左后卫克莱门特·阿克帕亦因伤退出大名单,由克里斯托弗·奥佩里顶位。双重后防空缺令厄瓜多尔侧路突破和定位球进攻空间明显扩大。(来源:Sports Mole/Squawka)",
   "en": "Ivory Coast CB Evan N'Dicka (AS Roma) ruled out of the June 15 opener vs Ecuador with a thigh injury; LB Clément Akpa also exits the squad injured, replaced by Christopher Operi — two defensive absences open space for Ecuador's attacking transitions. (per Sports Mole / Squawka)",
   "full": "象牙海岸在06-15首战前遭受双重防守打击:①埃文·恩迪卡(AS罗马/象牙海岸最强中卫)大腿伤确认缺阵——恩迪卡身高1.90米,是象牙海岸禁区对抗核心与出球支点,同赛季在意甲以稳定性著称,其缺席直接令中卫组合降级;②左后卫克莱门特·阿克帕因伤从大名单退出,克里斯托弗·奥佩里紧急补入。预计象牙海岸后防由阿格巴多+科苏努搭档中卫,科南顶左后卫。反观厄瓜多尔:莫伊塞斯·凯塞多(布莱顿)领衔中场,帕乔+因卡皮耶中卫双核健在,普拉塔边路突破具威胁。国际市场已将厄瓜多尔定为略微大热(Smarkets:客胜37.7% vs 主胜29.3%);象牙海岸防线受损或进一步扩大这一差距。⚠️ 官方首发须赛前60分钟确认,关注科苏努中卫搭档最终人选。",
   "enFull": "Ivory Coast face their June 15 World Cup Group E opener vs Ecuador with two significant defensive injuries: (1) Evan N'Dicka (AS Roma) — Ivory Coast's best centre-back and a 1.90m aerial presence — is ruled out with a thigh injury. N'Dicka was integral to the Ivorian defensive structure and his absence is a material blow to their line organisation and set-piece defence. (2) Left-back Clément Akpa has also been forced out of the squad with injury; Christopher Operi joins as his replacement. The projected Ivory Coast backline now depends on Agbadou and Kossounou in central defence with Konan at left-back — all capable but a step below the intended setup. Ecuador arrive with their key players largely fit: Moises Caicedo, Piero Hincapie, Pervis Estupinan and Plata are all available. The international market already has Ecuador as slight favourites (Smarkets: 37.7% away win vs 29.3% Ivory Coast); the defensive double absence reinforces that lean. ⚠️ Confirm official XIs 60 minutes before the June 15 kickoff and monitor if Kossounou can anchor the CB pairing effectively.",
   "links": [
    {
     "name": "Sports Mole · Ivory Coast vs Ecuador team news",
     "url": "https://www.sportsmole.co.uk/football/ivory-coast/injury-news/team-news/ivory-coast-vs-ecuador-injury-suspension-list-predicted-xis_599041.html"
    },
    {
     "name": "Squawka · Ivory Coast vs Ecuador lineups",
     "url": "https://www.squawka.com/en/news/world-cup/ivory-coast-vs-ecuador-team-news-predicted-lineups/"
    }
   ]
  },
  {
   "date": "06-14",
   "match": "德国 vs 库拉索",
   "impact": "诺伊尔复出首战",
   "tone": "home",
   "text": "诺伊尔(拜仁)从赛季末小腿伤中康复复出,多家媒体确认将以首发门将身份出战德国06-15 01:00揭幕战;纳格尔斯曼预计4-2-3-1:诺伊尔;基米希、塔、吕迪格、劳姆;格罗斯、帕夫洛维奇;维尔茨、穆西亚拉、萨内;哈弗茨。德国赛前已连赢9场。(来源:Yahoo Sports/Sports Mole)",
   "en": "Manuel Neuer (Bayern) returns from a calf injury and is expected to start in Germany's World Cup opener vs Curaçao (June 15 01:00 BJT). Nagelsmann's projected 4-2-3-1: Neuer; Kimmich (c), Tah, Rüdiger, Raum; Groß, Pavlović; Wirtz, Musiala, Sané; Havertz. Germany on a 9-match winning run. (per Yahoo Sports / Sports Mole)",
   "full": "诺伊尔在拜仁赛季末最后一场德甲赛事中腿部受伤,被迫缺席赛前两场热身赛(4:0胜芬兰、2:1胜美国),外界一度担忧其能否出战世界杯首战。最新确认:Yahoo Sports、Sports Mole、bulinews均将诺伊尔列入德国首发门将,正式回归国际赛场。纳格尔斯曼体系不变——4-2-3-1:基米希右后卫、劳姆左后卫、塔+吕迪格中卫,格罗斯+帕夫洛维奇双后腰,维尔茨、穆西亚拉、萨内三前腰,哈弗茨中锋。库拉索本届世界杯历史首秀(FIFA排名第82),主要球员:前队长莱安德罗·巴库纳(前阿斯顿维拉,中场)与前锋塔希斯·洪(谢菲尔德联)。综合:德国集成92-94%胜率,库拉索实力差距悬殊。本场主要价值在让球盘/大球盘——胜平负单关德国胜赔率约1.05无肉,等开盘再评估。⚠️ 官方XI须赛前60分钟确认,关注诺伊尔是否有临场变化。",
   "enFull": "Neuer sustained a calf injury in Bayern Munich's final Bundesliga fixture and sat out both pre-tournament warm-ups (4-0 vs Finland, 2-1 vs USA). He has returned to full training and is projected to start by Yahoo Sports, Sports Mole, and bulinews. Nagelsmann's expected 4-2-3-1: Neuer; Kimmich (c), Tah, Rüdiger, Raum; Groß, Pavlović; Wirtz, Musiala, Sané; Havertz. Germany arrive on a nine-match winning run. Curaçao make their World Cup debut as FIFA #82; key players include captain Leandro Bacuna (ex-Aston Villa) and forward Tahith Chong (Sheffield United). Assessment: Germany's 92-94% win probability makes the HAD market near-valueless (expected odds ~1.05). True opportunity lies in the handicap/total goals market — wait for lines to open before evaluating. ⚠️ Confirm official XI 60 minutes before 01:00 BJT kickoff and monitor any late Neuer update.",
   "links": [
    {
     "name": "Yahoo Sports · Germany vs Curaçao preview",
     "url": "https://sports.yahoo.com/articles/preview-germany-vs-cura-ao-170000931.html"
    },
    {
     "name": "Sports Mole · Germany vs Curaçao preview",
     "url": "https://www.sportsmole.co.uk/football/germany/world-cup-2026/preview/germany-vs-curacao-prediction-team-news-lineups_599044.html"
    }
   ]
  },
  {
   "date": "06-14",
   "match": "荷兰 vs 日本",
   "impact": "日本双核缺阵",
   "tone": "home",
   "text": "日本队长远藤航(利物浦)因脚踝伤确认缺席整届世界杯(6月11日宣布退出并宣告国家队退役);边锋三笘薫亦确认全程缺阵——双核同退,日本中场控制与边路突破力大幅削弱,荷兰客观受益。(来源:Olympics.com/cryptobriefing.com)",
   "en": "Japan captain Wataru Endo (Liverpool) has officially withdrawn from the 2026 World Cup with a persistent ankle injury, simultaneously announcing his international retirement; winger Kaoru Mitoma is also ruled out for the entire tournament — Japan lose their two most influential players ahead of their June 15 opener vs Netherlands. (per Olympics.com / cryptobriefing.com)",
   "full": "远藤航于6月11日正式宣布退出2026年世界杯大名单,同时宣告国家队生涯结束。原因为脚踝伤势持续困扰,复出时间线不符合本届大赛要求。远藤是日本资历最深的中场领袖——在利物浦出任双后腰核心,2022年世界杯亦是日本创造历史性成绩的关键拼图。Ajax中卫板仓滉人接任队长袖标。另:边锋三笘薫(布莱顿)亦确认因伤缺席整届世界杯,取代球员从同联赛抽调。两人合计缺失令日本失去中场组织与右路突破两条最稳定的输出渠道;荷兰(主队)中场压迫在失去远藤这个对抗点后,理论上更容易建立球权。⚠️ 日本主帅森保一将以更注重整体纪律和防守反击的阵式应对,不可低估集体战术补位能力。",
   "enFull": "Japan captain Wataru Endo announced on June 11 that he was withdrawing from the 2026 World Cup squad due to a persistent foot and ankle injury that has not sufficiently healed, simultaneously retiring from international football. Endo was the Liverpool central midfielder and defensive anchor who had played a key role in Japan's 2022 World Cup run to the round of 16. Itakura Ko (Ajax), now the likely captain replacement, is a center-back by trade — a different profile from Endo's ball-winning and recycling function. Winger Kaoru Mitoma (Brighton) is also confirmed absent for the full tournament; Machino Shuto (Borussia Mönchengladbach) replaces him. The combined loss removes Japan's most reliable creative outlet and their top pressing trigger. For Netherlands (designated home side), the absence of Endo reduces the physical contest in midfield, potentially allowing Frenkie de Jong and Xavi Simons's replacement to dominate transitions. ⚠️ Japan under Moriyasu have historically compensated for individual absences with disciplined collective defending — treat this as a material negative for Japan rather than a decisive one.",
   "links": [
    {
     "name": "Olympics.com · Endo withdraws",
     "url": "https://www.olympics.com/en/news/fifa-world-cup-2026-japan-wataru-endo-o"
    },
    {
     "name": "cryptobriefing.com · Endo retires",
     "url": "https://cryptobriefing.com/japan-captain-wataru-endo-withdraws-from-2026-world-cup-due-to-injury/"
    }
   ]
  },
  {
   "date": "06-14",
   "match": "荷兰 vs 日本",
   "impact": "荷兰阵容受损",
   "tone": "away",
   "text": "荷兰多名主力缺阵:西蒙斯(ACL,全程缺席)、维尔布鲁根(髋伤,第一守门员悬念)、斯豪滕(膝伤)、廷贝尔(未完全康复)——进攻创造和门将线均有隐忧;利好日本反击布局。(来源:Sports Mole/OneFootball)",
   "en": "Netherlands carry multiple absences into their Japan opener: Xavi Simons (ACL, full tournament), goalkeeper Bart Verbruggen (hip, availability uncertain), Jerdy Schouten (knee) and Jurrien Timber (not fully fit) — Netherlands' creative and defensive depth is stretched, leaving room for a Japanese counter-attacking performance. (per Sports Mole / OneFootball)",
   "full": "荷兰赛前伤情积累明显:①哈维·西蒙斯(RB莱比锡)4月遭遇ACL撕裂,确认缺席整届世界杯,失去其锋线最具创造力的突破手段;②主力门将巴特·维尔布鲁根在最后一场热身赛中遭受髋部伤势,能否首发存疑,马克·弗莱肯可能顶上;③后腰耶尔迪·斯豪滕(膝)亦已报废全程;④中卫尤里安·廷贝尔此前因背部问题未完全康复。荷兰赛前剩余阵容仍具相当质量——科迪·加克波/德容/杜姆弗里斯均可战——但整体深度受损,控球节奏和禁区创造力较完整状态下降。日本若能保持高位压迫+快速反击体系,理论上可在荷兰门将线存疑时抢夺定位球和反击机会。⚠️ 集成50.6%荷兰主胜,三项价值均<0.90(负EV),本场不建议下注;继续观察两队首发官方确认。",
   "enFull": "Netherlands enter their June 15 World Cup opener carrying a notable injury toll. Xavi Simons ruptured his ACL in April and is out for the full tournament — removing their most incisive creative forward runner from PSV/RB Leipzig. Starting goalkeeper Bart Verbruggen sustained a hip injury in the Netherlands' final World Cup warmup and his availability remains uncertain; Mark Flekken is next in line. Defensive midfielder Jerdy Schouten (knee) is similarly ruled out, and centre-back Jurrien Timber has not been fully fit following a back issue. The Dutch squad retains quality names — Gakpo, De Jong, Dumfries, and Depay — but collective depth and creative directness are noticeably weaker than at full strength. Japan's counter-attacking system historically excels against teams that control the ball but lack final-third precision. ⚠️ The ensemble model gives Netherlands 50.6% win probability, but all three outcomes are negative-EV (max 0.90). This game is priced efficiently — avoid betting; monitor official starting XIs for any further late changes.",
   "links": [
    {
     "name": "Sports Mole · Netherlands vs Japan team news",
     "url": "https://www.sportsmole.co.uk/football/netherlands/world-cup-2026/team-news/netherlands-vs-japan-injury-suspension-list-predicted-xis_599066.html"
    },
    {
     "name": "OneFootball · Netherlands vs Japan preview",
     "url": "https://onefootball.com/en/news/netherlands-vs-japan-prediction-world-cup-2026-preview-best-bets-42993964"
    }
   ]
  },
  {
   "date": "06-14",
   "match": "澳大利亚 vs 土耳其",
   "impact": "减仓已触发",
   "tone": "away",
   "text": "07:10巡检更新:covers.com明确'恰尔汗奥卢将以队长身份出现在中场',RotoWire预测XI同向——两家独立信源均将其列为首发。这是对之前'临场决定'状态的决定性升级,触发slip预设减仓规则:澳大利亚胜仓位须从22元降至16元。亚尔德孜依然缺席首发。(来源:covers.com/RotoWire)",
   "en": "07:10 patrol update: covers.com states Calhanoglu 'is set to have a spot in midfield for Turkey as captain'; RotoWire predicted XI aligns — two independent sources now list him as a starter. This is a definitive upgrade from the 'game-time decision' status. Pre-set slip rule triggered: reduce Australia-win stake from 22 to 16 yuan before 12:00 kickoff. Yildiz still not expected to start. (per covers.com / RotoWire)",
   "full": "07:10 BJT巡检二次确认(触发slip减仓):①covers.com明确写道恰尔汗奥卢将以队长身份首发于4-2-3-1中场枢纽位置(恰尔汗/于克塞克双后腰),这比前一条'Sports Mole预测首发+RotoWire临场决定'的措辞更为确定;②RotoWire预测XI同向:卡基尔;杰利克、德米拉尔、巴尔达克奇、埃尔马勒;恰尔汗奥卢、于克塞克;居勒、科克丘、亦尔马兹;古尔。③亚尔德孜(腓肠肌):仍'首发将令人意外',不在预测名单中。④澳大利亚全员健康,3-4-2-1出战。综合判断:恰尔汗首发令土耳其中场控制力部分恢复,tilt假设中的×0.75客队λ折扣偏乐观。slip预设规则明确指出'恰尔汗奥卢意外首发→澳胜从22元降至16元',当前确认触发条件成立。⚠️ 主会话须在赛前60分钟(约11:00前)根据官方XI执行最终仓位调整。",
   "enFull": "07:10 BJT patrol — second source confirmation triggers stake-reduction rule: (1) covers.com explicitly states Calhanoglu 'is set to have a spot in midfield for Turkey as captain,' placing him in the 4-2-3-1 double-pivot alongside Yuksek — a more definitive statement than the earlier 'managed carefully/game-time decision' framing. (2) RotoWire predicted XI mirrors: Cakir; Celik, Demiral, Bardakci, Elmali; Calhanoglu, Yuksek; Guler, Kokcu, Yilmaz; Gul. (3) Yildiz (calf): still 'would be a surprise to feature' per Sports Mole. (4) Australia: no injury concerns, expected 3-4-2-1. Assessment: Calhanoglu starting partially restores Turkey's midfield structure, making the away-λ×0.75 tilt less defensible. The pre-set slip rule condition is met. ⚠️ Main session must execute stake trim (22→16 yuan) before official XI confirmation ~60 min before 12:00 kickoff.",
   "links": [
    {
     "name": "covers.com · Turkey vs Australia prediction",
     "url": "https://www.covers.com/world-cup/turkey-vs-australia-prediction-picks-odds-sunday-6-14-2026"
    },
    {
     "name": "RotoWire · Australia vs Turkey preview",
     "url": "https://www.rotowire.com/soccer/article/australia-vs-turkey-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-d-117953"
    }
   ]
  },
  {
   "date": "06-14",
   "match": "海地 vs 苏格兰",
   "impact": "双前锋就绪",
   "tone": "away",
   "text": "07:10巡检:RotoWire与Sports Mole最新预测首发均将切·亚当斯列入苏格兰阵容(亚当斯-尚克兰德-多克三前锋),较昨日'临场疑问'状态明确升级;甘首发门将、麦克托米奈中场确认出战。苏格兰攻守架构趋于完整,64.4%胜率国际共识未变。(来源:RotoWire/Sports Mole)",
   "en": "07:10 patrol: RotoWire and Sports Mole predicted XIs both include Ché Adams in Scotland's starting eleven (Adams–Shankland–Doak front three), an upgrade from yesterday's 'doubtful' tag. Angus Gunn confirmed in goal, McTominay fit to start. Scotland's full attacking lineup intact; 64.4% market win probability unchanged. (per RotoWire / Sports Mole)",
   "full": "07:10 BJT巡检更新(赛前~1.5小时):①切·亚当斯(苏格兰前锋):RotoWire预测首发将其列入正选,亚当斯-尚克兰德搭档双前锋方案(或含多克三前锋);昨日Sports Mole将他列为'临场疑问',此次升级表明伤情评估已向好。②昂格斯·甘:多数预测XI确认首发门将,排挤43岁老将克雷格·戈登;甘的积极出击风格契合苏格兰控球打法。③麦克托米奈:健康确认无虞,中场核心出战不变。④海地:预计4-3-3,贝莱加德-伊索尔-皮耶罗特锋线,全员无伤。⑤市场赔率:苏格兰胜1.54(Smarkets),今日较昨日+2.6pp,海地胜6.90。综合:亚当斯首发是此前预期的最优阵型方案,苏格兰进攻纵深恢复,64.4%胜率共识合理。无持仓,本条为模型校准与后续情报参考。",
   "enFull": "07:10 BJT pre-match patrol (~1.5 hours before kickoff): (1) Ché Adams: RotoWire predicted XI includes him in Scotland's starting lineup alongside Shankland, forming the two-striker or three-front partnership with Doak. Previous Sports Mole item (06-14) flagged him as 'doubtful' — this is a clear upgrade in status. (2) Angus Gunn confirmed as starting goalkeeper ahead of 43-year-old Craig Gordon. (3) Scott McTominay: fully fit, midfield axis intact. (4) Haiti: expected 4-3-3 with Bellegarde–Isidor–Pierrot in attack, no injury concerns. (5) Market: Scotland win 1.54 on Smarkets (+2.6pp since opening); Haiti win 6.90. Assessment: Adams's inclusion restores Scotland's optimal attacking structure. The 64.4% consensus win probability is well-supported. No current slip exposure; primarily for model calibration reference.",
   "links": [
    {
     "name": "RotoWire · Haiti vs Scotland preview",
     "url": "https://www.rotowire.com/soccer/article/haiti-vs-scotland-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-c-117818"
    },
    {
     "name": "Sports Mole · Haiti vs Scotland preview",
     "url": "https://www.sportsmole.co.uk/football/haiti/world-cup-2026/preview/haiti-vs-scotland-prediction-team-news-lineups_598953.html"
    }
   ]
  },
  {
   "date": "06-14",
   "match": "巴西 vs 摩洛哥",
   "impact": "马兹劳伊首发",
   "tone": "away",
   "text": "Sports Mole和RotoWire最新预测首发均确认马兹劳伊(肩伤已恢复训练)出现在摩洛哥右后卫位置;此前连续两条情报将其列为'临场决定/存疑'。若首发:摩洛哥后防较预期更稳固,巴西维尼修斯-拉菲尼亚双翼面临更完整的对位防守。当前slip无巴西相关票,本条为模型校准参考。(来源:Sports Mole/RotoWire)",
   "en": "Sports Mole and RotoWire predicted XIs both list Mazraoui in Morocco's starting lineup at right-back following shoulder injury recovery. Previous two items flagged him as 'game-time decision/doubtful.' If confirmed: Morocco's defensive structure is more intact than the attrition tilt assumed. No slip exposure; for model calibration. (per Sports Mole / RotoWire)",
   "full": "赛前约2小时情报更新:①马兹劳伊(拜仁/摩洛哥右后卫):对挪威热身赛肩部脱臼后曾被连续列为'临场决定',今晨Sports Mole与RotoWire两家独立预测首发均将他排入右后卫首发位置。预计摩洛哥后防四人组:马兹劳伊、里亚德(中卫)、迪奥普(中卫)、哈基米(左后卫)。②阿圭尔(腹股沟)和阿布代(膝)仍全赛季缺阵不变。③巴西预计首发:阿利松;达尼洛、加布里埃尔、马尔基尼奥斯、亚历克斯·桑德罗;基马朗伊斯、卡塞米罗;路易斯·恩里克、拉菲尼亚、维尼修斯;库尼亚。内马尔缺席已定。④综合影响:马兹劳伊首发令摩洛哥防线比tilt模型假设(away-λ×0.90)更完整,巴西右路维尼修斯/达尼洛方向的边路撕扯受阻力更大。如他成功跑满90分钟,赛后复盘应上调摩洛哥防线稳健参数。当前无任何巴西相关票在slip中(主会话已决策不买本场)。⚠️ 官方XI须赛前60分钟确认,若马兹劳伊临场退出则按'tilt防线'重新评估。",
   "enFull": "Pre-match update ~2 hours before 06:00 BJT kickoff: (1) Noussair Mazraoui (Bayern / Morocco RB): after being flagged as 'game-time decision' following a shoulder dislocation vs Norway, both Sports Mole and RotoWire's latest predicted XIs now include him at right-back. Projected Morocco back four: Mazraoui, Riad, Diop, Hakimi. (2) Nayef Aguerd (groin) and Ez Abde (knee) remain full-tournament absentees. (3) Brazil expected XI: Alisson; Danilo, Gabriel, Marquinhos, Alex Sandro; Guimaraes, Casemiro; Luiz Henrique, Raphinha, Vinicius Jr; Cunha. Neymar confirmed absent. (4) Impact: Mazraoui's expected start means Morocco's backline is more cohesive than the 'defensive attrition' tilt (away-λ×0.90) assumed. Post-match calibration should adjust Morocco's defensive stability coefficient if he completes 90 minutes. No current slip exposure on this match. ⚠️ Confirmed XIs ~60 min before 06:00 BJT kickoff; if Mazraoui withdraws late, revert to attrition-tilt defensive assessment.",
   "links": [
    {
     "name": "Sports Mole · Brazil vs Morocco preview",
     "url": "https://www.sportsmole.co.uk/football/brazil/world-cup-2026/preview/brazil-vs-morocco-prediction-team-news-lineups_598948.html"
    },
    {
     "name": "RotoWire · Brazil vs Morocco",
     "url": "https://www.rotowire.com/soccer/article/brazil-vs-morocco-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-c-117816"
    }
   ]
  },
  {
   "date": "06-14",
   "match": "澳大利亚 vs 土耳其",
   "impact": "恰尔汗首发",
   "tone": "away",
   "text": "Sports Mole最新预测阵容将恰尔汗奥卢(小腿)列入土耳其首发;RotoWire确认其友谊赛以替补出场后仍被谨慎管理中——若官方名单确认首发,按slip预设规则须将澳胜仓位从22元降至16元。(来源:Sports Mole/RotoWire)",
   "en": "Sports Mole's latest predicted XI places Calhanoglu in Turkey's starting lineup; RotoWire confirms he is 'being managed carefully' after returning as a substitute in a friendly. Per pre-set slip rule: if confirmed starting → reduce Australia-win stake from 22 to 16 yuan. (per Sports Mole / RotoWire)",
   "full": "赛前约10小时情报更新(触发slip减仓条件):①Sports Mole发布土耳其预测首发,恰尔汗奥卢(队长/中场发动机)出现在首发位置,这与20:33终盘评估中'三人全缺悲观情景'出现偏差;②RotoWire专项文章题为'Hakan Calhanoglu Injury: Being managed carefully',指出他在友谊赛对北马其顿时以替补出场,医疗组谨慎管控恢复节奏,目前仍为临场决定;③亚尔德兹:单独训练,Sports Mole确认'几乎不可能首发';阿尔达·居勒:确认健康并预计首发;④澳大利亚全员无伤。综合评估:恰尔汗奥卢至少有替补出场概率,Sports Mole甚至预测他首发——若首发,土耳其中场体系部分恢复,之前tilt假设(×0.75)将偏乐观。⚠️ 按slip预设规则:赛前约60分钟官方名单公布后若确认恰尔汗首发→澳胜仓位22元→16元;若缺席或替补则维持22元。",
   "enFull": "Intelligence update ~10 hours before kickoff (triggers pre-set slip adjustment rule): (1) Sports Mole's latest Turkey predicted XI lists Calhanoglu in the starting lineup — diverging from the 20:33 'all-three-absent pessimistic tilt' scenario used for value calculation. (2) RotoWire headline: 'Hakan Calhanoglu Injury: Being managed carefully' — he came off the bench in a friendly win over North Macedonia; medical staff taking a measured approach to his return. (3) Yildiz (calf, training alone): unlikely to start per Sports Mole. Arda Guler: confirmed fit and expected to start. (4) Australia: no injury concerns. Assessment: if Calhanoglu starts, Turkey's midfield structure is materially restored and the away-λ×0.75 tilt discount is overstated. ⚠️ Per pre-set slip rule: check official XIs ~60 min before the 12:00 BJT kickoff — Calhanoglu confirmed starting → reduce Australia-win stake from 22 to 16 yuan; if he is a late scratch or sub → maintain 22 yuan.",
   "links": [
    {
     "name": "Sports Mole · Turkey predicted XI vs Australia",
     "url": "https://www.sportsmole.co.uk/football/australia/world-cup-2026/predicted-lineups/will-yildiz-be-involved-how-turkey-could-line-up-against-australia_599009.html"
    },
    {
     "name": "RotoWire · Calhanoglu injury update",
     "url": "https://www.rotowire.com/soccer/headlines/hakan-calhanoglu-injury-being-managed-carefully-518742"
    }
   ]
  },
  {
   "date": "06-14",
   "match": "卡塔尔 vs 瑞士",
   "impact": "双方全员就绪",
   "tone": "away",
   "text": "赛前终盘确认:卡塔尔与瑞士均无伤停困扰。瑞士主帅穆拉特·雅金确认全员可用,恩博洛与阿姆多尼竞争首发前锋位置,瓦尔加斯临场决定疑问已完全解除。卡塔尔主帅洛佩特吉亦有完整阵容可供调度,预计4-3-3登场:埃德米尔森·朱尼奥尔、阿克拉姆·阿菲夫、尤素福·阿布都里扎格担当三前锋。(来源:Sports Mole/RotoWire)",
   "en": "Pre-match confirmation: both Qatar and Switzerland report no injury concerns. Yakin has a fully fit squad; Embolo leads to start ahead of Amdouni with Vargas doubts fully resolved. Lopetegui also picks from a complete group, expected 4-3-3 with Edmilson Junior, Afif, Abdurisag. (per Sports Mole / RotoWire)",
   "full": "赛前不到2小时确认:①卡塔尔:洛佩特吉全员健康,无任何伤停缺阵。预计4-3-3,布迪亚夫坐镇中场,阿克拉姆·阿菲夫(现效力马竞)预计出任最强进攻点,埃德米尔森·朱尼奥尔和阿布都里扎格两翼。②瑞士:主帅雅金确认无伤停困扰,瓦尔加斯早前肌肉疑问已完全解除可以首发;恩博洛与阿姆多尼争抢第一中锋,共识正向恩博洛偏移(签证获批晚导致训练量略不足是唯一变数)。③赔率背景:国际市场卡塔尔主胜仅5.9%,瑞士胜率高达81.6%,分组同日加拿大1:1波黑——瑞士赢球即可在B组占据主动。⚠️首发XI须赛前60分钟公布确认。",
   "enFull": "Pre-match status under 2 hours from kickoff: (1) Qatar: Lopetegui reports a fully fit squad, no injuries. Expected 4-3-3 with Boudiaf in midfield; Akram Afif, Edmilson Junior, and Abdurisag as the attacking trio. (2) Switzerland: Yakin confirms no injury concerns; Vargas muscle doubts fully resolved and he is expected to start; Embolo vs Amdouni is the one selection question — consensus drifting toward Embolo despite slightly less training after late visa clearance; Shaqiri and Zakaria fit. (3) Market context: international markets price Qatar at just 5.9% win probability, Switzerland at 81.6%. With Canada and Bosnia drawing 1-1 earlier, a Switzerland win seizes Group B control. ⚠️ Confirmed XIs expected ~60 minutes before 03:00 BJT kickoff.",
   "links": [
    {
     "name": "Sports Mole · Qatar vs Switzerland team news",
     "url": "https://www.sportsmole.co.uk/football/switzerland/world-cup/team-news/qatar-vs-switzerland-injury-suspension-list-predicted-xis_598997.html"
    },
    {
     "name": "RotoWire · Qatar vs Switzerland preview",
     "url": "https://www.rotowire.com/soccer/article/qatar-vs-switzerland-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-b-117815"
    }
   ]
  },
  {
   "date": "06-14",
   "match": "海地 vs 苏格兰",
   "impact": "苏格兰锋线疑",
   "tone": "home",
   "text": "最新更新:切·亚当斯(苏格兰核心前锋)临场疑问,若缺阵则尚克兰德或须独挑锋线;预计甘(Angus Gunn)首发门将,43岁老将克雷格·戈登边缘化。海地方面无任何伤停,贝莱加德+伊索尔预计搭档首发。(来源:Sports Mole/ESPN)",
   "en": "Late update: Ché Adams listed as doubtful — if absent Shankland leads Scotland's line alone in a reshaped 4-4-2. Angus Gunn now more likely to start in goal over 43-year-old Craig Gordon. Haiti zero injury concerns; Bellegarde and Isidor expected to partner up front. (per Sports Mole / ESPN)",
   "full": "赛前最新伤情(较06-13档案有重要变动):①切·亚当斯(苏格兰联合前锋):Sports Mole确认为临场疑问——若缺阵,苏格兰4-4-2中劳伦斯·尚克兰德须独担前锋,进攻纵深受损,与海地差距收窄。②门将:主帅克拉克现倾向昂格斯·甘首发,而非43岁老将克雷格·戈登——甘更为积极,适合苏格兰预期掌控的比赛节奏。③麦克托米奈:已确认出战,中场核心问题解决。④海地:完全无伤停或禁赛,贝莱加德(狼队)与威尔逊·伊索尔(桑德兰)预计首发,队史最佳射手达肯斯·纳松亦在列。⑤国际市场苏格兰胜率63.7%,海地主胜仅15.4%。⚠️需赛前60分钟确认苏格兰官方名单以核实亚当斯出战与否。",
   "enFull": "Pre-match update with key change from 06-13 entry: (1) Ché Adams (Scotland co-striker) listed as doubtful per Sports Mole — if absent, Lawrence Shankland operates as a lone striker, narrowing Scotland's attacking depth. (2) Goalkeeping slot: consensus now favors Angus Gunn over 43-year-old Craig Gordon; Gunn's athleticism suits Scotland's expected possession game. (3) Scott McTominay: fully fit (confirmed 06-13) — midfield axis intact. (4) Haiti: zero injury or suspension concerns; Bellegarde (Wolves), Wilson Isidor (Sunderland), and record scorer Duckens Nazon all available. (5) Market: Scotland 63.7% win, Haiti 15.4%. ⚠️ Adams' participation to be confirmed in the official squad announcement ~60 minutes before the 09:00 BJT kickoff.",
   "links": [
    {
     "name": "Sports Mole · Haiti vs Scotland preview",
     "url": "https://www.sportsmole.co.uk/football/haiti/world-cup-2026/preview/haiti-vs-scotland-prediction-team-news-lineups_598953.html"
    },
    {
     "name": "ESPN · Haiti vs Scotland preview",
     "url": "https://www.espn.com/soccer/story/_/id/49026945/haiti-scotland-kickoff-how-watch-stats-team-news-fifa-world-cup-2026"
    }
   ]
  },
  {
   "date": "06-13",
   "match": "海地 vs 苏格兰",
   "impact": "苏格兰门将待定",
   "tone": "away",
   "text": "苏格兰核心中场麦克托米奈(周四胃病缺训)已完全康复,主帅克拉克确认'状态完美,随时可上';吉尔摩(膝)缺席本届世界杯。门将位置在43岁老将克雷格·戈登与昂格斯·甘之间悬而未决。海地无伤停困扰,本土联赛中锋威尔逊·伊索尔与中场贝莱加德预计首发。(来源:Sports Mole/Yahoo Sports)",
   "en": "Scotland's key midfielder Scott McTominay (stomach complaint, missed Thursday training) is fully recovered — Clarke: 'perfect and ready to go.' Billy Gilmour (knee) is ruled out for the tournament. Scotland's goalkeeping slot remains undecided between 43-year-old Craig Gordon and Angus Gunn. Haiti have no injury concerns; Wilson Isidor and Jean-Ricner Bellegarde expected to start. (per Sports Mole / Yahoo Sports)",
   "full": "苏格兰出征海地前最新伤情汇总:①麦克托米奈(胃病):周四缺席训练令外界担忧,但主帅史蒂夫·克拉克在赛前发布会上确认'他状态完美,随时可以出战'——核心中场出战无虞;②吉尔摩(膝):已正式宣布伤缺本届世界杯全程,中场深度受损;③门将悬案:43岁老将克雷格·戈登与昂格斯·甘竞争首发位置,克拉克尚未公开首发人选。苏格兰预计4-4-2:切·亚当斯与劳伦斯·尚克兰德搭档双前锋。海地无伤停困扰,预计沿用对新西兰和秘鲁热身赛的4-4-2阵型:贝莱加德+伊索尔担当锋线。整体而言,苏格兰主力中场健康是利好,门将悬案是小变数,对本场赔率影响有限。",
   "enFull": "Scotland's pre-match injury picture for the Haiti opener: (1) Scott McTominay (stomach complaint) — missed Thursday's training session but declared 'perfect and ready to go' by manager Steve Clarke at the pre-match press conference; no concern for his availability. (2) Billy Gilmour (knee) officially ruled out for the entire tournament — weakens Scotland's midfield depth beyond the McTominay-Tierney axis. (3) Goalkeeper dilemma: 43-year-old Craig Gordon vs Angus Gunn for the starting spot; Clarke yet to reveal his choice publicly. Scotland expected to deploy a 4-4-2 with Che Adams partnering Lawrence Shankland. Haiti report zero injury or suspension concerns and are expected to replicate their warm-up 4-4-2 with Jean-Ricner Bellegarde (Wolves) and Wilson Isidor (Sunderland) in key roles. Assessment: McTominay fit is the biggest positive; Gilmour's absence is a known quantity; goalkeeper uncertainty has minimal odds impact. ⚠️ Official confirmed XI roughly 60 minutes before the 09:00 BJT kickoff.",
   "links": [
    {
     "name": "Sports Mole · Haiti vs Scotland team news",
     "url": "https://www.sportsmole.co.uk/football/haiti/injury-news/team-news/haiti-vs-scotland-injury-suspension-list-predicted-xis_598956.html"
    },
    {
     "name": "Yahoo Sports · Scotland XI vs Haiti",
     "url": "https://uk.sports.yahoo.com/news/scotland-xi-vs-haiti-confirmed-235146194.html"
    }
   ]
  },
  {
   "date": "06-14",
   "match": "澳大利亚 vs 土耳其",
   "impact": "Tilt定稿",
   "tone": "home",
   "text": "20:33终盘:亚尔德孜(小腿)单独训练几乎确认缺席,卡尔汉奥卢(小腿)临场决定,卡迪奥卢临场决定;澳大利亚全员无伤。Tilt客λ×0.75重跑:澳胜集成22.6%,@5.15=价值1.16,EV+0.165/元——全日最强正EV单关。",
   "en": "Final 20:33 BJT: Yildiz (calf, training alone) effectively out; Calhanoglu (calf) and Kadioglu both GTD. Australia fully fit. Post-tilt (away-λ×0.75): Australia-win ensemble 22.6%, @5.15 → value 1.16, EV+0.165/yuan — strongest positive-EV single on the slate.",
   "full": "20:33终盘三主力伤情汇总:①亚尔德孜(小腿):单独训练,ESPN确认'极可能缺席首战';②卡尔汉奥卢(小腿,中场发动机):RotoWire列为临场决定,若首发土耳其体系接近完整;③卡迪奥卢(左后卫/翼卫):同列临场决定。Tilt参数(主λ×1.0,客λ×0.75)假设三人全缺悲观情景:集成概率主胜22.6%、平26.8%、客50.6%;澳胜@5.15=价值1.16(EV+0.165),平局@3.72=价值1.00(EV≈0)。选定:澳胜22元(核心)+比分0:0×8元(价值)。⚠️ 出票前30分钟务必确认土耳其首发——若卡尔汉奥卢意外首发可酌情减仓。",
   "enFull": "Final 20:33 BJT injury triage: (1) Yildiz (calf, training alone) is effectively ruled out per ESPN — 'would be a surprise if he features.' (2) Calhanoglu (calf, midfield anchor) listed as game-time decision per RotoWire; if he starts Turkey's system recovers partially. (3) Kadioglu (left-back/winger) also GTD. Tilt applied (home-λ×1.0, away-λ×0.75, all-three-absent scenario): post-tilt ensemble Australia win 22.6% / draw 26.8% / Turkey win 50.6%. Australia @5.15 → value 1.16 (EV+0.165/yuan); draw @3.72 → value 1.00 (EV≈0). Stake selected: 22 yuan (HAD-win, core) + 8 yuan (score 0:0, value). ⚠️ Confirm Turkey XI 30 min before kickoff — Calhanoglu starting would partially erode the value edge.",
   "links": [
    {
     "name": "Sports Mole · Australia vs Turkey team news",
     "url": "https://www.sportsmole.co.uk/football/australia/world-cup/team-news/australia-vs-turkey-injury-suspension-list-predicted-xis_599006.html"
    },
    {
     "name": "RotoWire · Australia vs Turkey preview",
     "url": "https://www.rotowire.com/soccer/article/australia-vs-turkey-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-d-117953"
    }
   ]
  },
  {
   "date": "06-14",
   "match": "巴西 vs 摩洛哥",
   "impact": "内马尔缺阵",
   "tone": "home",
   "text": "20:33终盘:内马尔二级腓肠肌撕裂缺席揭幕战(昂切洛蒂确认);摩洛哥马兹劳伊(肩脱臼)临场待定;Tilt主λ×0.88/客λ×0.90重跑:巴西3:0集成6.9%×@17.00=价值1.18(EV+0.176),巴摩0:0集成10.3%×@10.00=价值1.03(EV+0.031)。",
   "en": "Final 20:33 check: Neymar (grade-2 calf tear) confirmed out for opener; Morocco's Mazraoui (shoulder dislocation) GTD. Post-tilt (home-λ×0.88, away-λ×0.90): Brazil 3:0 value 1.18 (EV+0.176), scoreless draw value 1.03 (EV+0.031). Selected: Brazil 3:0 × 10 yuan + 0:0 × 4 yuan.",
   "full": "20:33终盘确认:①内马尔二级腓肠肌撕裂,康复期2-3周,昂切洛蒂:'把他带来毫无遗憾,等淘汰赛发力。'伊戈尔-蒂亚戈领衔前锋,维尼修斯/拉菲尼亚在侧。②摩洛哥:阿圭尔(腹股沟,全程缺席)+厄布德(膝,全程缺席)已确认;马兹劳伊(肩脱臼)临场决定。Tilt参数(巴西主λ×0.88,摩洛哥客λ×0.90)反映双向削弱:巴西3:0集成6.9%,@17.00=价值1.18,EV=+0.176/元;0:0集成10.3%,@10.00=价值1.03,EV=+0.031/元;所有HAD均为负EV,不出。选定:巴西3:0×10元(价值)+0:0×4元(价值)。⚠️ 出票前确认马兹劳伊首发与否。",
   "enFull": "Final 20:33 BJT confirmation: (1) Neymar confirmed out with grade-2 right calf strain; Ancelotti: 'No regrets — we believe he can be decisive in the knockouts.' Igor Thiago leads the line with Vinicius Jr. and Raphinha wide. (2) Morocco: Aguerd (groin, full-tournament) and Abde (knee, full-tournament) confirmed absent; Mazraoui (shoulder dislocation) is a game-time decision. Post-tilt (home-λ×0.88 for Neymar absence; away-λ×0.90 for Morocco defensive attrition): Brazil 3:0 ensemble 6.9% × @17.00 = value 1.18 (EV+0.176/yuan); 0:0 10.3% × @10.00 = value 1.03 (EV+0.031/yuan). All HAD outcomes remain negative EV — excluded from slip. ⚠️ Confirm Mazraoui's participation 30 min before kickoff — his absence further weakens Morocco's backline.",
   "links": [
    {
     "name": "Olympics.com · Neymar ruled out of opener",
     "url": "https://www.olympics.com/en/news/neymar-ruled-out-brazil-world-cup-2026-opener"
    },
    {
     "name": "Morocco World News · Mazraoui shoulder dislocation",
     "url": "https://www.moroccoworldnews.com/2026/06/316592/mazraoui-diagnosed-with-shoulder-dislocation-ahead-of-brazil-2026-world-cup-opener/"
    }
   ]
  },
  {
   "date": "06-13",
   "match": "卡塔尔 vs 瑞士",
   "impact": "恩博洛首发",
   "tone": "home",
   "text": "多家媒体预测出现反转:RotoWire/tips.gg/Yahoo Sports 均将布雷尔·恩博洛列为首发中锋(预测阵:Kobel;Widmer,Elvedi,Akanji,Rodríguez;Freuler,Xhaka;Ndoye,Aebischer,Manzambi;Embolo),覆盖6小时前SportsMole/khelnow预测的'阿姆多尼先发'。推测穆里尼奥认定恩博洛6月5日后的训练量已达首发标准;恩博洛大赛经验与对抗强度均高于阿姆多尼,利好瑞士进攻效率。(来源:RotoWire/tips.gg)",
   "en": "Media consensus has reversed: RotoWire, tips.gg and Yahoo Sports all project Breel Embolo to START against Qatar (predicted XI: Kobel; Widmer, Elvedi, Akanji, Rodríguez; Freuler, Xhaka; Ndoye, Aebischer, Manzambi; Embolo), superseding earlier SportsMole/khelnow calls for Amdouni up front. Embolo's six days of training since his June 5 arrival deemed sufficient; his superior aerial presence and big-game experience are a marginal upgrade on Amdouni. (per RotoWire / tips.gg)",
   "full": "上一巡检(约1小时前)SportsMole与khelnow.com预测阿姆多尼首发9号,理由是恩博洛6月5日才抵营、集训时间不足。最新媒体共识逆转:①RotoWire卡塔尔vs瑞士预测文章将恩博洛列为首发中锋;②tips.gg预测XI:Kobel;Widmer,Elvedi,Akanji,Rodríguez;Freuler,Xhaka;Ndoye,Aebischer,Manzambi;Embolo;③Yahoo Sports给出相同阵容。变化逻辑:恩博洛六天密集训练被穆里尼奥认定满足首发要求,其身体对抗和空中优势在对阵卡塔尔防线时比阿姆多尼更具针对性。实际影响为正:恩博洛大赛经验更丰富、高压对抗下的控球衔接更可靠,瑞士集成74.2%客胜概率维持不变或微升。⚠️ 官方首发仍需临场30分钟前确认,此条为媒体预测共识,非官方消息。",
   "enFull": "Approximately six hours ago, SportsMole and khelnow.com predicted Amdouni to start over Embolo, citing Embolo's late June 5 arrival and insufficient integrated training time. The media consensus has now reversed. RotoWire's match preview, tips.gg, and Yahoo Sports all now project Embolo in the starting XI with the predicted lineup reading: Kobel; Widmer, Elvedi, Akanji, Rodríguez; Freuler, Xhaka; Ndoye, Aebischer, Manzambi; Embolo. The likely reasoning is that six intensive training days satisfied Murat Yakin's fitness threshold, and Embolo's physical profile — aerial dominance, strength in tight spaces — is better suited to pin back Qatar's center-backs than Amdouni. Practical assessment: Embolo starting is a marginal positive over Amdouni given superior big-game experience and hold-up play reliability. Switzerland's 74.2% ensemble win probability is unchanged or very slightly upgraded. ⚠️ Official XI confirmed 30 minutes before kickoff — treat all predictions as provisional until then. This item supersedes the earlier 'Amdouni to start' entry.",
   "links": [
    {
     "name": "RotoWire · Qatar vs Switzerland preview",
     "url": "https://www.rotowire.com/soccer/article/qatar-vs-switzerland-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-b-117815"
    },
    {
     "name": "tips.gg · Qatar vs Switzerland predicted lineups",
     "url": "https://tips.gg/article/qatar-switzerland-predicted-lineups-story/"
    }
   ]
  },
  {
   "date": "06-13",
   "match": "澳大利亚 vs 土耳其",
   "impact": "三主力伤疑",
   "tone": "home",
   "text": "土耳其对澳大利亚揭幕战伤情雪上加霜:队长恰尔汗奥卢(小腿)、明星球员耶尔德兹(小腿)、左后卫卡迪奥卢均被列为临场决定;耶尔德兹单独训练,SportsMole称'令人惊讶的是他能上场'——实际几乎出局。三人若均缺席,土耳其中场创造力与左路纵深大损,澳大利亚防线压力显著减轻。(来源:RotoWire/SportsMole)",
   "en": "Turkey head into their Australia opener with three key men in doubt: captain Hakan Calhanoglu (calf, game-time), Kenan Yildiz (calf, effectively out — 'would be a surprise if he features') and Ferdi Kadioglu (game-time). If Yildiz and Calhanoglu both miss, Turkey lose their primary creators; Australia have no injury concerns. (per RotoWire / SportsMole)",
   "full": "土耳其对澳大利亚揭幕战伤情雪上加霜:①队长恰尔汗奥卢(小腿):被RotoWire列为临场疑问,部分媒体预测阵容仍将他安置在中场锚链位置,但确定性存疑。②耶尔德兹(小腿):近日单独训练,SportsMole明确表示'如果他能上场将是令人惊讶的事',基本确认缺席揭幕战——上一条情报(耶尔德兹升级临场疑问)由本条覆盖。③卡迪奥卢(左后卫):被RotoWire列为临场疑问。三人若同时缺席,土耳其阵型变动显著:居莱尔与卡赫韦吉需独撑创造力,左路纵深大幅削弱;澳大利亚无伤情困扰,身体状态完整。集成模型给澳大利亚20.3%胜率,若土耳其伤情属实,实际胜率或小幅上修。⚠️ 恰尔汗奥卢首发与否将在开球前最后确认。",
   "enFull": "Turkey's injury situation ahead of their World Cup opener against Australia has escalated into a three-man concern. Captain Hakan Calhanoglu is listed as a game-time decision with a calf complaint — multiple sources project him in the starting XI, but his inclusion is far from certain. Kenan Yildiz trained individually in the days before the match and SportsMole state it 'would be a surprise to see him feature,' making him effectively an absentee for the opener (this item supersedes the earlier 'game-time doubt' entry). Ferdi Kadioglu, the versatile left-back/winger, is also on the game-time decision list. If all three miss out, Turkey's creative depth is severely reduced — Arda Güler and Irfan Kahveci would carry the attacking burden alone, and the left flank loses its dynamism. Australia have no injury concerns going into the match. ⚠️ Calhanoglu's participation should become clearer in the 30-minute pre-kickoff confirmation window.",
   "links": [
    {
     "name": "RotoWire · Australia vs Turkey preview",
     "url": "https://www.rotowire.com/soccer/article/australia-vs-turkey-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-d-117953"
    },
    {
     "name": "SportsMole · Turkey injury list",
     "url": "https://www.sportsmole.co.uk/football/australia/world-cup/team-news/australia-vs-turkey-injury-suspension-list-predicted-xis_599006.html"
    }
   ]
  },
  {
   "date": "06-13",
   "match": "巴西 vs 摩洛哥",
   "impact": "摩洛哥双伤",
   "tone": "home",
   "text": "摩洛哥伤情升级:最强中卫阿圭尔(马赛)确认缺席整届世界杯——并非因伤复发,而是腹股沟手术后体能不足以应对顶级赛事,本人表态'康复顺利但竞技状态未达标';边锋阿布代膝伤亦确认缺席全程。两人分别由萨达内、斯巴伊火线替补。此前情报将阿圭尔标为'首发存疑',现升级为整届缺阵。(来源:GhanaSoccernet/DailySports)",
   "en": "Morocco injury upgrade: CB Nayef Aguerd (Marseille) confirmed out for the entire World Cup — not a relapse, but insufficient match fitness post-groin surgery; he stated 'recovery has gone well but I am not at the level required.' Winger Ez Abde is also out for the full tournament. Marwane Saadane and Amine Sbai join as replacements. Previous item listed Aguerd as 'doubtful for opener' — upgraded to full-tournament absence. (per GhanaSoccernet / DailySports)",
   "full": "阿圭尔3月因腹股沟伤动手术,此后未参加任何俱乐部比赛。摩洛哥宣布他从大名单退出,本人随即发文:'我的康复进展顺利,伤病已经过去,但我目前的竞技状态还不足以参加世界杯这样的顶级赛事。'这意味着摩洛哥在揭幕战对阵巴西时,2022年赖以成名的核心中卫链(阿圭尔+萨伊斯)将缺失一环;依萨·迪奥普与沙迪·里亚德需临时顶起后防。边锋阿布代的膝伤(1:1平挪威热身赛中受伤)经扫描确认为中度韧带撕裂,全程缺席。摩洛哥防守深度和进攻宽度双双受损——对巴西维尼修斯/拉菲尼亚的边路突破构成重大利好。⚠️ 马兹劳伊(肩伤)仍为临场决定,预计跑满90分钟能力存疑。",
   "enFull": "Aguerd operated on his groin in March and has not played club football since. Morocco announced his withdrawal; Aguerd posted: 'My recovery has gone well and the injury is behind me — but I am not yet at the competitive level required to participate in the World Cup.' This removes Morocco's best aerial center-back from the entire tournament. Issa Diop and Chadi Riad form the likely pairing versus Brazil. Winger Ez Abde had scans confirm a moderate knee ligament tear (sustained in the 1-1 warmup vs Norway) and is also out for the full competition. The double absence weakens both Morocco's defensive compactness and their attacking width on the right flank — a material positive for Brazil's Vinicius Jr. and Raphinha. ⚠️ Mazraoui (shoulder) remains a late call; his ability to last 90 minutes is uncertain.",
   "links": [
    {
     "name": "GhanaSoccernet · Aguerd ruled out",
     "url": "https://ghanasoccernet.com/world-cup-2026-morocco-defender-nayef-aguerd-gutted-after-being-ruled-out-of-tournament"
    },
    {
     "name": "DailySports · Morocco double blow",
     "url": "https://dailysports.net/news/morocco-suffer-double-injury-blow-as-nayef-aguerd-and-abde-ezzalzouli-are-ruled-out-of-the-2026-world-cup/"
    }
   ]
  },
  {
   "date": "06-13",
   "match": "美国 vs 巴拉圭",
   "impact": "恩西索 MRI 无结构性撕裂·仍高度疑问",
   "tone": "away",
   "text": "恩西索伤情最新:核磁共振排除大腿肌肉结构性撕裂,这正是教练阿尔法罗能说'门敞开'的依据;但他依然被多家媒体评为'高度疑问',是否能参加对美国首场比赛将临场决定,若上场巴拉圭反击创造力接近完整状态。(来源:covers.com/freetips.com)",
   "en": "Enciso MRI update: scans ruled out a structural muscle tear — the medical basis for coach Alfaro's 'door is open' comment — but he remains highly doubtful for the USA opener with a final call near kickoff; if he starts, Paraguay's counter-attacking creativity is near full strength. (per covers.com / freetips.com)",
   "full": "6月5日对尼加拉瓜热身赛受伤后,巴拉圭医疗团队对恩西索进行了核磁共振检查,结果排除了大腿肌肉结构性撕裂,这是最关键的利好信息。没有结构性撕裂意味着损伤程度属于软组织挫伤/拉紧类别,康复窗口比韧带或肌腱损伤快得多。这也是教练阿尔法罗能够公开表示'大门敞开'的医学依据。然而多家媒体(covers.com伤情报告、freetips.com)仍将他评定为'高度疑问',是否入选首发将在临近开赛时作最终决定。若恩西索上场:巴拉圭的持球推进和反击创造力接近完整,美国胜面隐含优势收窄。若继续坐板凳:迭戈·戈麦斯顶上更靠前的位置,巴拉圭仍具备防守体系但缺乏顶级创造力。⚠️ 临场前30分钟必须盯@albirroja官方首发。",
   "enFull": "Following his June 5 injury vs Nicaragua, Paraguay's medical team conducted an MRI on Enciso that came back negative for any structural muscle tear — the critical positive finding that medically justifies coach Alfaro's 'door is open' posture. No structural tear places the injury in the soft-tissue contusion/strain category, which has a shorter recovery window than ligament or tendon damage. Multiple outlets (covers.com injury tracker, freetips.com) still rate him highly doubtful for the USA opener, with a final call expected within 30 minutes of kickoff. If Enciso starts: Paraguay's hold-up play and counter-attacking creativity approaches full strength, narrowing the implied edge on USA-win bets. If he is benched: Diego Gomez slots into a more central role — Paraguay retain their defensive structure but lose their top-five-league creative outlet. ⚠️ Monitor @albirroja's official starting XI no later than 30 minutes before kickoff.",
   "links": [
    {
     "name": "Covers.com 伤情报告",
     "url": "https://www.covers.com/world-cup/injury-report-2026"
    },
    {
     "name": "FreeTips.com",
     "url": "https://www.freetips.com/football/julio-enciso-injury-20260610-0026/"
    }
   ]
  },
  {
   "date": "06-13",
   "match": "加拿大 vs 波黑",
   "impact": "已结算",
   "tone": "neutral",
   "text": "加拿大 1-1 波黑:卢基奇21分钟角球头球先拔头筹(波黑定位球体系兑现);替补拉林78分钟补射扳平,加拿大历史首个世界杯积分。模型集成(61.4%主胜)与手工选择均押加拿大胜,实际平局,方向全误,4张加拿大相关票归零。(来源:CBC/Yahoo Sports)",
   "en": "Canada 1-1 Bosnia: Lukic headed in from a corner on 21 minutes; substitute Larin equalized in the 78th — Canada's first-ever point at a men's World Cup. Our model (61.4% Canada win) and manual picks both predicted Canada win; all four Canada-related bets lost. (per CBC / Yahoo Sports)",
   "full": "波黑后卫卢基奇(Jovo Lukic)第21分钟顶入角球先破门,波黑定位球威胁如赛前所料兑现。哲科以替补身份下半场出场,持续制造制空威胁。替补拉林(Cyle Larin)第78分钟在禁区内补射入网,为加拿大历史性地在男子世界杯拿下首个积分。加拿大主场多伦多气氛热烈,但波黑防守组织远超预期。模型集成给出61.4%主胜概率,Elo模型更激进至72.4%,实际平局令所有模型蒙受高Brier惩罚(ens=0.928)。加拿大胜(44元)、比分0:0(12元)、比分1:0(14元)、2串1(16元)四票全灭,共损失86元,资金池从255.5降至169.5,跌破200保本线。",
   "enFull": "Bosnia defender Jovo Lukic headed in from a corner on 21 minutes, validating the pre-match set-piece risk flag. Dzeko came on as a second-half substitute and continued to pose an aerial threat. Substitute Cyle Larin equalized in the 78th minute with a close-range finish, handing Canada their first-ever point at a men's FIFA World Cup. Despite a fervent home atmosphere in Toronto, Bosnia's defensive organization outperformed expectations. The model ensemble (61.4% Canada win) and manual picks all pointed to a Canada victory — the draw inflicts heavy Brier penalties across all models (ens=0.928). All four Canada-related tickets (win, 0:0, 1:0, two-fold parlay) were losses totaling 86 yuan, dropping the bankroll from 255.5 to 169.5 — below the 200 safety floor.",
   "links": [
    {
     "name": "CBC Sports",
     "url": "https://www.cbc.ca/sports/livestory/fifa-world-cup-2026-canada-vs-bosnia-and-herzegovina-june-12-live-updates-9.7222390"
    },
    {
     "name": "Yahoo Sports",
     "url": "https://sports.yahoo.com/soccer/live/world-cup-schedule-scores-live-updates-group-stage-usmnt-paraguay-canada-bosnia-herzegovina-180000044.html"
    }
   ]
  },
  {
   "date": "06-12",
   "match": "韩国 vs 捷克",
   "impact": "已结算",
   "tone": "neutral",
   "text": "韩国 2-1 逆转捷克:克雷伊奇第58分钟定位球破门,黄仁范66分钟世界波扳平,替补吴贤揆80分钟绝杀。首轮两场全部命中方向,资金池 200 → 255.5(+27.8%)。",
   "en": "South Korea came from behind to beat Czechia 2-1: Ladislav Krejci scored from a set piece (58'), Hwang In-beom equalized with a strike (66'), and substitute Oh Hyeon-gyu hit the 80th-minute winner. (per ESPN / Sky Sports)"
  },
  {
   "date": "06-12",
   "match": "墨西哥 vs 南非",
   "impact": "已结算",
   "tone": "neutral",
   "text": "揭幕战墨西哥 2-0 南非:基尼奥内斯第10分钟推射打进本届第一球,希门尼斯下半场头球锁定;南非2红牌0射正,方向预判全部兑现。",
   "en": "Mexico beat South Africa 2-0 in the opener: Quinones scored the tournament's first goal on 10 minutes and Jimenez headed the second; South Africa finished with two red cards and zero goals. (per ESPN / AP)"
  }
 ],
 "slip": {
  "title": "6月15日 · 正常模式(池279.5) · 21:00终盘版 · 空仓",
  "status": "**空仓** · 周日批四场×全盘口已扫,无一达买入门槛(≥1.10),§11合规,纪律执行✓",
  "detail": "**20:32终盘巡检完毕——四场×全盘口扫完，无一达买入门槛(≥1.10)，按宪法§3/§5杠铃策略空仓。** 逐场记录：①周日009德国vs库拉索(01:00)：胜平负未开盘，让球(-3)让负value1.53但模型输出显示🪞镜像假核心(深让区市场已吸收全主力阵容信息，模型50.2%vs市场29%去水，差距来自模型尾部不可靠，不是真实edge)；②周日010荷兰vs日本(04:00)：三项胜平负最高value0.93，让球(-1)均<1.00，0:0比分value1.07(<1.10)；情报确认Depay+Verbruggen已健在、但Simons/Timber/de Ligt三缺，日本Endo+Mitoma双核退出——双方均受损，市场已消化，实际荷兰胜率约50-53%，即便tilt也达不到1.10(需59.1%才够)；③周日011科特迪瓦vs厄瓜多尔(07:00)：胜平负全<0.90，0:0比分value1.16但§5明令禁猜比分票(模型历史0/4，价值虚假)；④周日012瑞典vs突尼斯(10:00)：胜平负全<0.90，0:0比分value1.16同上禁。§11合规:已扫每场×每盘口(胜平负+让球+比分)，无漏检。宁可错过，绝不在噪声里送钱。",
  "items": [],
  "summary": {
   "stake": 0,
   "evLow": 0,
   "evHigh": 0,
   "winProb": 0,
   "best": {
    "label": "空仓不亏",
    "pnl": 0
   },
   "worst": {
    "label": "空仓不亏",
    "pnl": 0
   },
   "keyScenarios": [
    {
     "label": "空仓(无符合纪律的票)",
     "pnl": 0
    }
   ]
  },
  "matrix": [],
  "copyText": "今晚(6/15)没有符合要求的票，不买，谢谢！",
  "reviewNote": "✓ 已独立复核 20:39 ｜ 草稿空仓合规,无删改 ｜ 009让球1.53系镜像假核心(§6降权)、011/012比分1.16系禁比分票(§5)、010全盘口≤0.93均<1.10门槛(§3)——四场×全盘口扫完,空仓正确"
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
