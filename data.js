// ============================================================
// WC26 竞彩作战板 · 策展数据层
// 由每日工作流维护(预测/赛果/情报/持仓/资金池)。赔率实时数据在 odds_data.js,
// 运行 python3 refresh_odds.py 刷新;预测引擎: ~/.claude/skills/match-prediction/
// ============================================================
window.DASH_DATA = {
  meta: {
    round: "小组赛第 1 轮",
    updated: "2026-06-13 01:11",
    disclaimer: "竞彩胜平负盘实测 vig 12.9%,比分盘更高,长期期望为负。本看板的使命是决策质量管理:亏得最少、给运气最大杠杆。资金池纪律高于一切预测。理性购彩。"
  },

  // ---------- 资金池作战计划(全赛程) ----------
  bankroll: {
    start: 200, startDate: "06-11",
    cashNow: 255.5, pending: 0,
    goal: 20000, floor: 80,
    milestones: [
      { date: "06-18", label: "首轮收官", target: 500 },
      { date: "06-27", label: "小组收官", target: 1500 },
      { date: "07-07", label: "16强战罢", target: 4500 },
      { date: "07-14", label: "四强产生", target: 10000 },
      { date: "07-19", label: "决赛日", target: 20000 }
    ],
    rules: [
      ["优先级", "①本金200不亏(底线) ②风险可控下利润最大化(主航道) ③2万北极星(方向,不为追它加赌性)"],
      ["安全垫机制", "安全垫 = 资金池 - 200本金。高方差票(价值仓+倍数仓)只许花安全垫;本金部分只做价值 ≥0.95 的核心票"],
      ["单日仓位", "≤ 资金池 40%,且价值+倍数合计 ≤ 安全垫;盈利全部滚存"],
      ["核心仓", "价值分 ≥0.95 的胜平负单关,损耗最低,本金的唯一去处"],
      ["价值仓", "价值分 0.85-0.95 的比分/冷门票,花安全垫"],
      ["倍数仓", "≤ 安全垫 40%,2串1(腿价值 ≥0.90);垫越厚仓越大——复利自驱,不靠赌性驱动"],
      ["保本线 200", "池跌回 200:倍数仓清零、价值仓减半,核心慢攻修复安全垫"],
      ["警戒线 160", "池 <160:只许核心仓且日 ≤20,直至回到 200;绝对地板 80 不变"],
      ["棘轮保护", "每越过里程碑,保本线上移至该里程碑 50%(500→250,1500→750…),赚到的台阶永不吐回"]
    ],
    targetCurve: [
      { d: "06-11", v: 200 }, { d: "06-18", v: 500 }, { d: "06-27", v: 1500 },
      { d: "07-07", v: 4500 }, { d: "07-14", v: 10000 }, { d: "07-19", v: 20000 }
    ],
    actualCurve: [
      { d: "06-11", v: 200 }, { d: "06-12", v: 255.5 }
    ],
    // 纯数学期望路径:每日投50%仓、每注期望约-5%(已优化后的口径) → 日衰减约2.5%
    // 这条线是"没有任何运气"时钱的走向,目标线与它的差距=价值筛选+方差+棘轮纪律要去挣的部分
    evCurve: [
      { d: "06-11", v: 200 }, { d: "06-18", v: 168 }, { d: "06-27", v: 133 },
      { d: "07-07", v: 104 }, { d: "07-19", v: 76 }
    ],
    note: "2万是北极星(方向),不是赌注(KPI)。架构=CPPI安全垫:本金200只碰最低损耗的核心票,高方差票只花赚来的钱;垫厚则攻,垫薄则守,棘轮把每个台阶变成新保本线。当前安全垫 55.5。",

    // 每日资金池日记:收益曲线数据源,每点悬停展示当日逐笔记录(AI管家每日结算后追加)
    daily: [
      {
        d: "06-11", pool: 200, pnl: 0,
        records: [
          "🎫 启动日 · 出票 6 张共 200 元(首轮)",
          "　墨西哥胜 80@1.26 ｜ 墨南比分1:0 30@5.65 ｜ 墨南比分2:0 20@4.00",
          "　韩国胜 30@2.49 ｜ 韩捷平局 30@2.75 ｜ 韩捷比分1:1 10@3.65"
        ]
      },
      {
        d: "06-12", pool: 255.5, pnl: 55.5,
        records: [
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
      }
    ],

    // 每晚投放 EV 台账:投放当晚记期望,结算后回填实际,长期看"实际-期望"的累计差
    evLedger: [
      {
        date: "06-11", desc: "首轮 6 票:墨南 130 + 韩捷 70",
        stake: 200, evPnl: -32, winProb: 32.3,
        actualPnl: 55.5, status: "已结算",
        note: "墨场 +50.8(墨胜+比分2:0 双中) + 韩捷 +4.7(韩国胜中);实际跑赢期望 +87.5,首轮即兑现正方差"
      },
      {
        date: "06-12", desc: "次轮草案 5 票:加波 70 + 美巴 24 + 2串1 16",
        stake: 110, evPnl: -5.4, winProb: 48.6,
        actualPnl: null, status: "已确认",
        note: "资金池 255.5,110 元 = 43% 仓位,符合 ≤50% 规则,按原额出票;期望区间 -3.1(集成) ~ -7.6(保守),损耗已从首轮 -16% 压到 -5%"
      }
    ]
  },

  // ---------- 今日比赛 ----------
  todayMatches: [
    {
      num: "周四001", group: "A组", home: "墨西哥", away: "南非",
      time: "06-12 03:00", status: "finished",
      actual: "2:0",
      predManual: "2:0", predModel: "1:0",
      ensemble: { h: 67.0, d: 21.8, a: 11.2 },
      note: "开场10分钟基尼奥内斯打进本届首球,下半场希门尼斯头球扩大;南非全场0进球+2张红牌。手工首选2:0命中。"
    },
    {
      num: "周四002", group: "A组", home: "韩国", away: "捷克",
      time: "06-12 10:00", status: "finished",
      actual: "2:1",
      predManual: "1:1", predModel: "1:0",
      ensemble: { h: 41.1, d: 28.9, a: 30.0 },
      note: "克雷伊奇第58分钟为捷克先拔头筹(赛前标记的定位球威胁兑现),黄仁范66分钟扳平,替补吴贤揆80分钟绝杀逆转。韩国胜恰落在模型概率最高(41%)的剧本;持仓中韩国胜@2.49命中,回收74.7。"
    }
  ],

  // ---------- 持仓账本(本轮) ----------
  holdings: {
    invested: 200,
    returned: 255.5,
    pendingStake: 0,
    condEV: 0, condWinProb: 0,
    tickets: [
      { match: "墨西哥 vs 南非", pick: "胜平负·墨西哥胜", stake: 80, odds: 1.26, status: "win",  payout: 100.8 },
      { match: "墨西哥 vs 南非", pick: "比分·1:0",        stake: 30, odds: 5.65, status: "lose", payout: 0 },
      { match: "墨西哥 vs 南非", pick: "比分·2:0",        stake: 20, odds: 4.00, status: "win",  payout: 80.0 },
      { match: "韩国 vs 捷克",   pick: "胜平负·韩国胜",   stake: 30, odds: 2.49, status: "win",  payout: 74.7 },
      { match: "韩国 vs 捷克",   pick: "胜平负·平局",     stake: 30, odds: 2.75, status: "lose", payout: 0 },
      { match: "韩国 vs 捷克",   pick: "比分·1:1",        stake: 10, odds: 3.65, status: "lose", payout: 0 }
    ],
    scenarios: [
      { label: "韩捷 1:1",   pnl: 99.8,  prob: 13 },
      { label: "其他平局",   pnl: 63.3,  prob: 16 },
      { label: "韩国胜",     pnl: 55.5,  prob: 41 },
      { label: "捷克胜",     pnl: -19.2, prob: 30 }
    ]
  },

  // ---------- 明日焦点(match-prediction skill 引擎 2026-06-12 08:56 实时输出) ----------
  focus: [
    {
      num: "周五003", home: "加拿大", away: "波黑", time: "06-13 03:00", group: "B组",
      models: {
        labels: ["主胜", "平局", "客胜"],
        A: [54.7, 26.7, 18.6],
        B: [72.4, 18.6, 9.0],
        C: [57.3, 25.7, 16.9],
        ens: [61.4, 23.7, 14.9]
      },
      radar: {
        dims: ["状态", "阵容", "战术", "环境", "历史", "心理"],
        home: [7, 7, 7, 9, 6, 7],
        away: [6, 6, 6, 4, 5, 6]
      },
      scores: [
        { s: "1:0", p: 16.5, odds: 5.70, value: 0.94 },
        { s: "2:0", p: 12.6, odds: 6.50, value: 0.82 },
        { s: "1:1", p: 11.5, odds: 5.00, value: 0.57 },
        { s: "0:0", p: 10.7, odds: 9.50, value: 1.02 },
        { s: "2:1", p: 8.8,  odds: 6.25, value: 0.55 },
        { s: "3:0", p: 6.4,  odds: 14.00, value: 0.90 }
      ],
      wdlValue: [
        { pick: "加拿大胜", prob: 61.4, odds: 1.62, value: 1.00 },
        { pick: "平局",     prob: 23.7, odds: 3.32, value: 0.79 },
        { pick: "波黑胜",   prob: 14.9, odds: 4.75, value: 0.71 }
      ],
      verdict: "东道主主场首秀,Elo(72%)显著强于市场(55%),分歧在波黑哲科一代的经验溢价。加拿大胜价值 1.00 全盘最高;0:0 被市场低估到 @9.50,价值 1.02,本届第一张正期望票。1:1/2:1 资金涌入后价值崩至 0.55-0.57,继续避开。",
      radarWhy: [{"dim": "状态", "h": 7, "hw": "2026年热身不败,6/9对乌兹别克斯坦收官战取胜;但戴维斯伤缺让锐度打折", "a": 6, "aw": "附加赛险胜晋级,近期热身平庸,锋线伤情打乱备战节奏"}, {"dim": "阵容", "h": 7, "hw": "大卫领衔主力框架齐整;扣分项:队长戴维斯缺首战+弗洛雷斯整届报销+博比托存疑", "a": 6, "aw": "哲科40岁仍是支点;塔巴科维奇伤缺后锋线只剩一套人马"}, {"dim": "战术", "h": 7, "hw": "马什高位压迫体系成型两年;少了戴维斯左路爆点,压迫转化率打折", "a": 6, "aw": "巴尔巴雷兹防守反击+定位球,套路清晰但容错率低"}, {"dim": "环境", "h": 9, "hw": "多伦多主场+东道主首秀全国狂热+全部小组赛本土作战,六维最大优势", "a": 4, "aw": "客场+长途+2014年后首次大赛,环境分全场最低"}, {"dim": "历史", "h": 6, "hw": "大赛底蕴薄(2022小组出局),但近三年对欧洲中游队战绩持续改善", "a": 5, "aw": "唯一一次世界杯2014小组出局,黄金一代已老去"}, {"dim": "心理", "h": 7, "hw": "东道主期待是动力也是压力,马什公开强调'无所畏惧'", "a": 6, "aw": "放手一搏无包袱,但核心伤病连环打击士气"}],
      modelNotes: [{"k": "A 竞彩去水", "note": "竞彩 1.62/3.32/4.75 → 倒数归一去掉 12.9% 抽水 → 54.7/26.7/18.6。这是市场(国家开盘+全国投注资金)的共识。"}, {"k": "B Elo", "note": "加拿大 1870 vs 波黑 1690(估计值±50)+东道主主场 +80 → 评分差 260 → 期望分 1/(1+10^(-260/400))=81.8% → 扣除平局份额后 72.4/18.6/9.0。它最激进,赌的是'纸面实力差就该这么大';东道主溢价是最大不确定项。"}, {"k": "C Poisson+DC", "note": "用市场概率反推进球率 λ=加1.53/波0.70,叠加+5%主场气势修正与 Dixon-Coles ρ=-0.08 低比分修正(修复独立性假设在0:0/1:1上的系统偏差) → 57.3/25.7/16.9。它是比分分布的发生器。"}, {"k": "D 国际共识", "note": "Polymarket 真金预测市场 Yes 价格归一 → 53.2/27.4/19.4(06-12 22:42 快照)。全球资金比竞彩更谨慎,几乎没给东道主情绪溢价。"}, {"k": "集成", "note": "在线学习权重 A28.1/B38.1/C33.8(D 以均值入场)加权平均 → 61.4/23.7/14.9。Elo 首轮两连中获得最高话语权;若它对东道主的激进被打脸,learn.py 会自动降它的权。"}]
    },
    {
      num: "周五004", home: "美国", away: "巴拉圭", time: "06-13 09:00", group: "D组",
      models: {
        labels: ["主胜", "平局", "客胜"],
        A: [49.7, 28.6, 21.7],
        B: [57.4, 23.4, 19.2],
        C: [52.3, 27.7, 19.9],
        ens: [53.2, 26.6, 20.3]
      },
      radar: {
        dims: ["状态", "阵容", "战术", "环境", "历史", "心理"],
        home: [7, 7, 7, 9, 6, 6],
        away: [7, 6, 7, 5, 6, 7]
      },
      scores: [
        { s: "1:0", p: 16.6, odds: 5.80, value: 0.96 },
        { s: "1:1", p: 12.2, odds: 5.25, value: 0.64 },
        { s: "0:0", p: 12.0, odds: 8.00, value: 0.96 },
        { s: "2:0", p: 11.3, odds: 7.50, value: 0.84 },
        { s: "2:1", p: 8.7,  odds: 6.60, value: 0.58 },
        { s: "0:1", p: 8.6,  odds: 9.75, value: 0.83 }
      ],
      wdlValue: [
        { pick: "美国胜",   prob: 53.2, odds: 1.78, value: 0.95 },
        { pick: "平局",     prob: 26.6, odds: 3.10, value: 0.82 },
        { pick: "巴拉圭胜", prob: 20.3, odds: 4.08, value: 0.83 }
      ],
      verdict: "比加拿大场更胶着:巴拉圭以南美区铁血防守+防反见长,美国胜率仅五成出头。主胜 0.95 过线,1:0 与 0:0 双双 0.96 领跑比分价值;情怀票 1:1/2:1 连续第三场垫底。本场只配核心仓,不重仓。",
      radarWhy: [{"dim": "状态", "h": 7, "hw": "6月热身连胜收官,理查兹伤愈复出补上防线最后一块", "a": 7, "aw": "南美区预选赛末段强势,防守端零封率联赛级;恩西索重伤是唯一阴霾"}, {"dim": "阵容", "h": 7, "hw": "普利西奇领衔旅欧军团,理查兹+雷姆中卫组合恢复满配", "a": 6, "aw": "恩西索(斯特拉斯堡12球)伤缺=唯一五大联赛级创造点消失"}, {"dim": "战术", "h": 7, "hw": "控球+边路渗透,主场敢于高位逼抢", "a": 7, "aw": "阿尔法罗铁血防反体系成熟,预选赛失球南美最少之列"}, {"dim": "环境", "h": 9, "hw": "东道主主场首秀,声浪与适应性全占", "a": 5, "aw": "客场,但北美南美侨民多,不算纯敌对环境"}, {"dim": "历史", "h": 6, "hw": "2022十六强,大赛下限稳但无突破", "a": 6, "aw": "2010十六强后连缺三届,经验断层但无历史包袱"}, {"dim": "心理", "h": 6, "hw": "东道主舆论压力大,慢热是隐患", "a": 7, "aw": "16年重返世界杯,放手一搏的防反心态天然适配客场"}],
      modelNotes: [{"k": "A 竞彩去水", "note": "竞彩 1.78/3.10/4.08 → 去水 12.95% → 49.7/28.6/21.7,市场认为这是五五开偏主。"}, {"k": "B Elo", "note": "美国 1850 vs 巴拉圭 1790(估计值±50)+主场 +80 → 评分差 140 → 57.4/23.4/19.2。"}, {"k": "C Poisson+DC", "note": "λ=美1.39/巴0.74 + DC ρ=-0.08 → 52.3/27.7/19.9;巴拉圭的低 λ 是其铁血防守的镜像。"}, {"k": "D 国际共识", "note": "Polymarket 46.7/29.6/23.6 — 全球资金明显比竞彩和我们的模型都看衰美国,这个 6 个点的分歧是本场最值得尊重的反方意见。"}, {"k": "集成", "note": "权重 A28.1/B38.1/C33.8 → 53.2/26.6/20.3。比加拿大场胶着得多,所以只配核心仓不重仓。"}]
    }
  ],

  // ---------- 情报流 ----------
  news: [
    { date: "06-13", match: "加拿大 vs 波黑", impact: "博比托确认可出场", tone: "home",
      text: "博比托确认参战加拿大揭幕战:主帅马什表示他'将能出战并做出贡献',已完成最高速度测试,此前'临场裁决'疑云消散,中卫组合恢复完整。有利0:0防守票,波黑从博比托缺阵获益的预期落空。(来源:TSN/Canadian Press)",
      en: "Moise Bombito cleared for Canada's opener vs Bosnia: coach Marsch confirms he 'will be ready to contribute' and 'has reached his top speed' in his comeback from last October's tibia fracture — earlier game-time uncertainty now resolved. Positive signal for the 0:0 correct-score bet. (per TSN / Canadian Press)",
      links: [{"name": "TSN", "url": "https://www.tsn.ca/soccer/fifa-world-cup/article/canada-coach-marsch-keeps-injured-defender-bombito-on-canmnts-world-cup-squad/"}, {"name": "Canadian Press", "url": "https://www.thecanadianpressnews.ca/sports/mo-se-bombito-available-for-canadas-world-cup-opener-alphonso-davies-confirmed-out/article_ed4550c0-49b9-5aa7-aeac-730031e45c65.html"}],
      full: "博比托去年10月骨折左胫骨,6月9日热身仅打38分钟便跛行离场,首发一度存疑。赛前发布会马什明确:'他将能出战并贡献力量','已达到最高速度'。TSN与加拿大通讯社双双引用马什原话确认参战。加拿大中卫线预计由德福热罗尔+科内利厄斯+博比托三人组镇守,阵容趋于完整,波黑借其缺阵放大哲科高空威胁的预期落空。对押0:0的防守票偏利。",
      enFull: "Bombito, returning from a left tibia fracture suffered in October 2025, limped off after 38 minutes in the June 9 warmup, raising game-time doubts. Coach Jesse Marsch confirmed at the pre-match press conference: 'He will be ready to contribute' and 'has reached his top speed.' Both TSN and the Canadian Press cite Marsch directly. Canada's center-back line (projected: de Fougerolles + Cornelius + Bombito) approaches full strength, removing the scenario where Dzeko exploits a weakened backline. Net positive for the 0:0 correct-score bet." },
    { date: "06-13", match: "加拿大 vs 波黑", impact: "哲科伤情稳定但首发存疑", tone: "neutral",
      text: "哲科三月底世预赛决定性比赛肩膀受伤,赛季末仅累计64分钟上场时间;教练巴尔巴雷兹确认他完成周四全队训练、可参战揭幕战,但Sports Mole等媒体预测首发XI将他排除,以德米洛维奇/巴兹达尔先发。⚠️ 临场关注官方首发——哲科上场则波黑空中威胁完整,无缘首发则进攻火力下降。(来源:northeastnow.com/Outlook India)",
      en: "Dzeko (shoulder, since late March) confirmed available by coach Barbarez after a full Thursday training session, but multiple predicted XIs omit him in favour of Demirovic+Bazdar. ⚠️ Check official lineup at kickoff — if Dzeko starts Bosnia's aerial threat is full strength; if benched their attacking output drops. (per northeastnow.com / Outlook India)",
      links: [{"name": "northeastnow.com", "url": "https://northeastnow.com/2026/06/11/edin-dzeko-available-for-bosnia-herzegovinas-world-cup-opener-against-canada/"}, {"name": "Outlook India", "url": "https://www.outlookindia.com/sports/football/bosnia-and-herzegovina-fifa-world-cup-2026-edin-dzeko-importance-and-shoulder-injury-concern"}],
      full: "哲科在3月31日世预赛对意大利附加赛决赛中肩部受伤,赛季内此后仅上场64分钟。他随队抵达多伦多,教练巴尔巴雷兹6月11日确认他已完成完整训练、可出战揭幕战。然而Sports Mole/khelnow等媒体预测首发XI将哲科排除,以德米洛维奇与巴兹达尔为前锋搭档,Northern Tribune仍将其列为'疑问'。若哲科首发:其定位球和高空威胁完整(波黑资格赛22球中11球来自定位球),加拿大防线面临更大压力。若坐板凳:波黑仅依靠德米洛维奇持球突破,进攻体系简化,0:0概率上升。",
      enFull: "Dzeko injured his shoulder in Bosnia's qualifying playoff final vs Italy on March 31 and has accumulated just 64 minutes of game time since. Coach Barbarez confirmed on June 11 that Dzeko completed a full team training session and is available for the opener. However, Sports Mole and Khelnow both project him out of the starting XI, going with Demirovic + Bazdar, and Northern Tribune still lists him as 'questionable.' If Dzeko starts, Bosnia's set-piece and aerial threat is at full strength (11 of 22 qualifying goals from set pieces); if benched, Bosnia simplify to Demirovic's hold-up play and the probability of 0:0 rises." },
    { date: "06-13", match: "美国 vs 巴拉圭", impact: "恩西索状态反转", tone: "away",
      text: "恩西索可能参战:教练阿尔法罗改口'大门敞开',临场决定是否首发;此前'确认缺阵至少首两场'或过于悲观。NESN/Sports Mole 均将他列入预测首发XI中标注存疑,若上场巴拉圭反击威力恢复,美国胜的票面优势收窄。(来源:NESN/Sports Mole)",
      en: "Enciso status flip: coach Alfaro says 'the door is open' for him to start vs USA — final call near kickoff. Both NESN and Sports Mole list him as questionable (thigh) in projected XIs; earlier 'confirmed first-two-games absent' reports may have reflected the injury at its worst. If he plays, Paraguay's counter-attacking creativity rises sharply. (per NESN / Sports Mole)",
      links: [{"name": "NESN", "url": "https://nesn.com/soccer/news/usa-paraguay-lineups-starting-11-usmnt-world-cup-2026/788d6bd807ab152c78f1b843"}, {"name": "Sports Mole", "url": "https://www.sportsmole.co.uk/football/paraguay/world-cup-2026/predicted-lineups/enciso-doubt-hangs-over-world-cup-kickoff-predicted-paraguay-lineup-vs-usa_598935.html"}],
      full: "⚠️ 状态反转:巴拉圭教练阿尔法罗最新表态'大门敞开',恩西索有可能参加对美国一役。NESN 援引教练话指出'他有明显进步';Sports Mole 的预测首发XI将他列为存疑(大腿),若无缘首发则迭戈·戈麦斯顶上更中心位置。此前 beIN Sports/新华社 报道的'确认缺席前两场'可能是伤情最严重时刻的悲观评估,并非最终定论。⚠️ 临场前必须盯 @albirroja 官方首发名单——若恩西索出战,巴拉圭的反击创造力接近完整状态,押美国胜(价值 0.95)的赔率隐含优势收窄,需结合首发名单重新判断是否持有。",
      enFull: "⚠️ Status reversal: coach Alfaro is now 'leaving the door open' for Enciso to start vs USA, with a final call expected close to kickoff. NESN reports he has shown 'encouraging progress'; Sports Mole lists him as questionable (thigh) in the projected XI, with Diego Gomez as the fallback. The earlier 'first two games out' framing from beIN/Xinhua may have reflected peak-injury pessimism rather than a final verdict. Monitor @albirroja's official starting XI at kickoff — if Enciso starts, Paraguay's counter-attacking creativity approaches full strength and the implied edge in our USA-win bet (value 0.95) narrows meaningfully." },
    { date: "06-12", match: "加拿大 vs 波黑", impact: "加拿大防线存疑", tone: "away",
      text: "加拿大中卫博比托(Bombito)骨折复出状态存疑,教练马什承诺'临场最后裁决':他6月9日对乌兹别克斯坦热身赛仅打38分钟即一瘸一拐退场,球队称属计划内保护,但首战是否出阵至今未定——去年10月胫骨骨折至今未完全恢复。若缺阵加拿大中卫深度明显下降,波黑老将哲科的空中威胁受益。(来源:TSN/Canadian Press)",
      en: "Canada center-back Moise Bombito is a game-time decision for the opener: he limped off after 38 minutes in the June 9 friendly vs Uzbekistan. The team calls it planned load management in his return from last October's tibia fracture, but coach Marsch says a final call comes on matchday; if he misses out, Dzeko's aerial threat looms larger. (per TSN / Canadian Press)",
      links: [],
      full: "博比托去年 10 月胫骨骨折,6 月 9 日对乌兹别克斯坦的热身赛仅打 38 分钟便一瘸一拐离场。球队称这是复出计划内的负荷管理,马什表示首发与否'临场最后裁决'。若他缺阵,加拿大中卫深度吃紧,哲科的高空威胁将被放大——与我们押 0:0 的防守逻辑形成微妙对冲,临场必须盯首发名单。",
      enFull: "Bombito, returning from last October's tibia fracture, limped off after 38 minutes in the June 9 friendly vs Uzbekistan. The team frames it as planned load management and coach Marsch says the final call comes on matchday. If he misses out, Canada's center-back depth thins and Dzeko's aerial threat looms larger." },
    { date: "06-12", match: "加拿大 vs 波黑", impact: "利空加拿大深度", tone: "away",
      text: "加拿大攻击中场弗洛雷斯(Marcelo Flores,21岁)ACL断裂确认缺阵整届世界杯:联赛决赛对托卡鉴撕裂韧带,6月5日已手术,威顿-纳尔逊(Jayden Nelson)接替名额入选大名单。弗洛雷斯非主力首发但是关键替代牌,整届缺阵令替补线多功能性受损,加拿大本已因戴维斯缺阵而进攻深度打折。(来源:ESPN/CBC Sports)",
      en: "Canada attacking midfielder Marcelo Flores (21) is out of the entire World Cup with a torn ACL suffered in the Liga MX final; he had surgery on June 5 and Jayden Nelson replaces him in the squad - another blow to Canada's attacking depth with Davies already out for the opener. (per ESPN / CBC Sports)",
      links: [],
      full: "弗洛雷斯在联赛决赛中前交叉韧带断裂,6 月 5 日完成手术,确认缺席整届世界杯,纳尔逊替补入选大名单。他虽非主力首发,但作为多面手替补牌整届缺阵,叠加戴维斯伤缺与博比托存疑,加拿大的阵容深度在首战被三重削弱。",
      enFull: "Flores tore his ACL in the Liga MX final and had surgery on June 5, ruling him out of the entire World Cup; Jayden Nelson replaces him in the squad. Though not a starter, losing the versatile substitute - stacked on Davies' absence and Bombito's doubt - leaves Canada's depth triple-hit for the opener." },
    { date: "06-12", match: "美国 vs 巴拉圭", impact: "利多美国防线", tone: "home",
      text: "美国主力中卫克里斯·理查兹(Richards)踝韧带伤后确认出战首战:赛前官方表示'感觉良好,已准备好',重返与队长雷姆搭档中卫的最优组合。他5月17日水晶宫联赛末轮韧带撕裂,缺席最后两场热身赛,此番归队令美国后防线更稳固。(来源:ESPN/CBS Sports)",
      en: "USA center-back Chris Richards is confirmed fit for the opener vs Paraguay after his ankle ligament injury; he says he 'feels good and is ready to go', rejoining captain Tim Ream in the first-choice pairing. (per ESPN / CBS Sports)",
      links: [],
      full: "理查兹 5 月 17 日代表水晶宫的联赛收官战踝韧带受伤,缺席了美国队最后两场热身。赛前他向媒体确认'感觉良好,已经准备好出战',将重返与队长雷姆搭档的首发中卫组合。他的回归让美国防线恢复最优配置,对位巴拉圭的防反冲击尤为关键。",
      enFull: "Richards hurt his ankle ligaments in Crystal Palace's league finale on May 17 and missed the USMNT's final two friendlies. Ahead of the opener he confirmed he 'feels good and is ready to go', rejoining captain Tim Ream in the first-choice center-back pairing - a key boost against Paraguay's counter-attacking threat." },
    { date: "06-12", match: "加拿大 vs 波黑", impact: "利空波黑锋线", tone: "home",
      text: "波黑核心前锋塔巴科维奇(Tabakovic)踝关节骨折确认缺阵首战:他随队抵达多伦多但仍单独接受康复治疗,官方明确'不会出战首轮对加拿大一役'。波黑锋线只剩40岁老将哲科+德米洛维奇搭档,进攻火力大打折扣,加拿大防线压力明显减轻。(来源:RotoWire/BuliNews)",
      en: "Bosnia striker Haris Tabakovic (ankle fracture) is ruled out of the opener vs Canada. He traveled to Toronto but is rehabbing separately; officials confirm he will not feature in the first match, leaving 40-year-old Dzeko to lead the line. (per RotoWire / BuliNews)",
      links: [{"name": "RotoWire", "url": "https://www.rotowire.com/soccer/headlines/haris-tabakovic-injury-not-facing-canada-519149"}, {"name": "BuliNews", "url": "https://bulinews.com/haris-tabakovic-expected-miss-world-cup-bosnia-after-suffering-injury-for-gladbach"}],
      full: "波黑主帅巴尔巴雷兹确认塔巴科维奇无缘揭幕战:'现在还太早,最好的情况是他能赶上第二场。'他赛季末段在门兴踝部受伤,虽随队抵达多伦多但单独康复。锋线重担落回 40 岁的哲科——他刚克服小伤,预计首发突前。",
      enFull: "Bosnia coach Sergej Barbarez confirmed Tabakovic will miss the opener: 'It's too early - in the best case he'll play in the second game.' He picked up an ankle injury late in the season with Gladbach and is rehabbing separately in Toronto. Veteran captain Edin Dzeko, having shaken off minor issues, is expected to lead the line." },
    { date: "06-12", match: "加拿大 vs 波黑", impact: "利空加拿大首场", tone: "away",
      text: "队长戴维斯(拜仁)确认缺阵对波黑首战:主帅马什证实其左腿腘绳肌未愈,预计6/18对卡塔尔后归队。戴维斯是左路核心与进攻发动机,首场缺阵令加拿大压迫强度与创造力打折,注意0:0防守票不受影响。(来源:SI.com/Yahoo Sports)",
      en: "Canada captain Alphonso Davies (Bayern) misses the opener vs Bosnia with a hamstring issue; coach Jesse Marsch confirms he is targeting the June 18 Qatar match for his return. (per SI.com / Yahoo Sports)",
      links: [{"name": "Yahoo Sports", "url": "https://sports.yahoo.com/articles/why-alphonso-davies-missing-2026-213721175.html"}, {"name": "Goal.com", "url": "https://www.goal.com/en-sa/lists/world-cup-news-canada-alphonso-davies-injury-misses-opener/blt70b8865d97c189dc"}],
      full: "戴维斯 5 月 6 日欧冠半决赛次回合对巴黎圣日耳曼拉伤左腿腘绳肌,主帅马什证实他缺席 6 月 12 日对波黑的揭幕战;乐观预期是 6 月 18 日温哥华对卡塔尔一役复出。作为队长与左路发动机,他的缺阵让加拿大失去最具爆点的推进通道——对我们的 0:0 防守票影响中性偏正。",
      enFull: "Davies injured his left hamstring in Bayern's Champions League semifinal second leg vs PSG on May 6. Coach Jesse Marsch confirmed he will be held out of the opener vs Bosnia; the realistic return target is June 18 vs Qatar in Vancouver. As captain and Canada's primary left-side engine, his absence removes their most explosive progression outlet." },
    { date: "06-12", match: "美国 vs 巴拉圭", impact: "利多美国", tone: "home",
      text: "巴拉圭22岁攻击中场恩西索(Enciso)因大腿伤确认缺阵至少首两场小组赛,对美国一役无缘出战。他是巴拉圭进攻最具创造力的球员,缺阵令其反击体系受损,美国控盘更有把握。(来源:beIN Sports/新华社)",
      en: "Paraguay playmaker Julio Enciso (thigh) will miss at least the first two group games, including the USA match - a major blow to Paraguay's counter-attacking creativity. (per beIN Sports / Xinhua)",
      links: [{"name": "beIN SPORTS", "url": "https://www.beinsports.com/en-au/football/fifa-world-cup-2026/articles/paraguay-s-julio-enciso-injured-ahead-of-world-cup-2026-06-06"}, {"name": "SI", "url": "https://www.si.com/soccer/usmnt-first-world-cup-opponent-injury-blow-star-player"}, {"name": "The Mirror", "url": "https://www.themirror.com/sport/soccer/enciso-injury-world-cup-usmnt-1873343"}],
      full: "6 月 5 日对尼加拉瓜热身赛第 25 分钟,恩西索在连续两次撞击后被担架抬离场,当场落泪。主帅阿尔法罗:'他同时遭遇两处伤——撞击致腘绳肌拉紧,腰部受击又波及股四头肌区域',已安排核磁共振。他本赛季为斯特拉斯堡打进 12 球,是这支以硬朗著称的球队里唯一的五大联赛级创造点。阿尔法罗对赶上揭幕战留有一线乐观,但多家媒体预计他缺席前两场——对美国一役大概率无缘。⚠️ 注意:并非官方确认缺阵,临场需盯首发名单。",
      enFull: "Enciso was stretchered off in tears about 25 minutes into the June 5 friendly vs Nicaragua after two quick blows. Coach Alfaro: 'Julio suffered two simultaneous injuries: a tight hamstring from impact and a blow to his waist affecting the quadriceps area.' An MRI was ordered. He scored 12 goals for Strasbourg this season and is Paraguay's only top-five-league creator. Alfaro kept faint hope for the opener, but multiple outlets expect him to miss the first two matches - not yet officially ruled out, so check the starting XI." },
    { date: "06-12", match: "韩国 vs 捷克", impact: "已结算", tone: "neutral",
      text: "韩国 2-1 逆转捷克:克雷伊奇第58分钟定位球破门,黄仁范66分钟世界波扳平,替补吴贤揆80分钟绝杀。首轮两场全部命中方向,资金池 200 → 255.5(+27.8%)。",
      en: "South Korea came from behind to beat Czechia 2-1: Ladislav Krejci scored from a set piece (58'), Hwang In-beom equalized with a strike (66'), and substitute Oh Hyeon-gyu hit the 80th-minute winner. (per ESPN / Sky Sports)" },
    { date: "06-12", match: "加拿大 vs 波黑", impact: "价值信号", tone: "home",
      text: "0:0 赔率被推高到 @9.50,模型概率 10.7%,价值分 1.02:本届第一张数学正期望票。大众资金都在追加拿大大胜比分,防御票被错杀。",
      en: "The 0:0 correct-score price has drifted out to 9.50 on China Sports Lottery while our model puts the probability near 11-12% - a rare positive-EV ticket as public money chases Canada blowout scorelines." },
    { date: "06-12", match: "韩国 vs 捷克", impact: "利好韩国", tone: "home",
      text: "捷克74岁主帅库贝克接手至今只指挥过2场正式比赛,战术体系安装时间极短;韩国洪明甫已带队两年,体系成熟。",
      en: "Czech head coach Miroslav Koubek, 74, has overseen only two competitive matches since replacing Hasek after the Faroe Islands upset; Korea's Hong Myung-bo is two years into a settled system." },
    { date: "06-12", match: "韩国 vs 捷克", impact: "利空韩国", tone: "away",
      text: "捷克资格赛22个进球中11个来自定位球;克雷伊奇/索切克/希克全是高点,韩国三中卫除金玟哉外高度普通。",
      en: "11 of Czechia's 22 qualifying goals came from set pieces; Krejci, Soucek and Schick are all aerial threats against a Korean back three with little height beyond Kim Min-jae." },
    { date: "06-12", match: "韩国 vs 捷克", impact: "支持小球", tone: "neutral",
      text: "韩国近15场只有1场双方都进球、近7场有5场总进球低于2.5;两队输家次轮即陷生死战,开局求稳概率高。",
      en: "Korea registered just one both-teams-scored match in their last 15, with 5 of the last 7 going under 2.5 goals; with the loser facing a must-win vs South Africa, a cagey opening was widely expected." },
    { date: "06-11", match: "韩国 vs 捷克", impact: "市场信号", tone: "neutral",
      text: "1:1 比分赔率从预估 6.5 一路被砸到 3.65:大众资金疯狂涌入共识比分,方向与模型一致但价值已被买空,情怀票陷阱活教材。",
      en: "The 1:1 correct-score odds collapsed from an expected ~6.5 to 3.65 as retail money piled into the consensus scoreline - the direction matched our model, but all betting value was gone." },
    { date: "06-12", match: "加拿大 vs 波黑", impact: "利好加拿大", tone: "home",
      text: "东道主主场首秀(多伦多),三国合办下加拿大全部小组赛在本土进行;Elo 模型给出 72% 主胜,显著高于市场 55%。",
      en: "Canada open at home in Toronto and, as co-hosts, play every group game on home soil. Our Elo model rates them ~72% to win, well above the market's ~55% - the gap is the Dzeko-generation experience premium." },
    { date: "06-12", match: "美国 vs 巴拉圭", impact: "利空美国", tone: "away",
      text: "巴拉圭凭南美区预选赛的低失球防守体系晋级,典型防反打法,正是容易把比赛拖入小球绞杀局的类型。",
      en: "Paraguay qualified on the back of one of CONMEBOL's stingiest defenses and play a counter-attacking style that tends to drag matches into low-scoring grinds." },
    { date: "06-12", match: "墨西哥 vs 南非", impact: "已结算", tone: "neutral",
      text: "揭幕战墨西哥 2-0 南非:基尼奥内斯第10分钟推射打进本届第一球,希门尼斯下半场头球锁定;南非2红牌0射正,方向预判全部兑现。",
      en: "Mexico beat South Africa 2-0 in the opener: Quinones scored the tournament's first goal on 10 minutes and Jimenez headed the second; South Africa finished with two red cards and zero goals. (per ESPN / AP)" }
  ],

  // ---------- 明日下单草案(待拍板) ----------
  slip: {
    title: "6月13日 · 资金池仓位 110 元 · 含 2串1 倍数仓",
    status: "✅ 已确认:韩捷结算后资金池 255.5,110 元 = 43% 仓位,合规,按原额出票。出票前最后跑一遍 predict.py 复核赔率,价值跌破 0.85 的票放弃。",
    items: [
      { num: "周五003", match: "加拿大 vs 波黑", pick: "胜平负·加拿大胜",        tier: "核心", stake: 44, odds: 1.62, value: 1.00, ev: -0.2 },
      { num: "周五004", match: "美国 vs 巴拉圭", pick: "胜平负·美国胜",          tier: "核心", stake: 24, odds: 1.78, value: 0.95, ev: -1.3 },
      { num: "周五003", match: "加拿大 vs 波黑", pick: "比分·0:0",               tier: "价值", stake: 12, odds: 9.50, value: 1.02, ev: 0.2 },
      { num: "周五003", match: "加拿大 vs 波黑", pick: "比分·加拿大 1:0",        tier: "价值", stake: 14, odds: 5.70, value: 0.94, ev: -0.8 },
      { num: "串关",    match: "加拿大胜 × 美国胜", pick: "2串1 @2.88",          tier: "倍数", stake: 16, odds: 2.88, value: 0.94, ev: -0.9 }
    ],
    summary: {
      stake: 110,
      evLow: -7.6, evHigh: -3.1,
      winProb: 48.6,
      best: { label: "加拿大1:0 + 美国胜", pnl: 129.9 },
      worst: { label: "加不胜(非0:0) + 美不胜", pnl: -110 },
      keyScenarios: [
        { label: "双主胜(30%)", pnl: 50.1 },
        { label: "加胜+美不胜(27%)", pnl: -38.7 },
        { label: "0:0+美胜", pnl: 46.7 },
        { label: "加不胜+美胜", pnl: -67.3 }
      ]
    },
    // 全结局矩阵:8 种组合从最优到最劣,概率合计 100%
    matrix: [
      { label: "加拿大 1:0 + 美国胜",          recover: 239.9, pnl: 129.9,  prob: 8.6 },
      { label: "加胜其他比分 + 美国胜",        recover: 160.1, pnl: 50.1,   prob: 21.4 },
      { label: "加波 0:0 + 美国胜",            recover: 156.7, pnl: 46.7,   prob: 5.6 },
      { label: "加拿大 1:0 + 美国不胜",        recover: 151.1, pnl: 41.1,   prob: 7.8 },
      { label: "加波 0:0 + 美国不胜",          recover: 114.0, pnl: 4.0,    prob: 5.1 },
      { label: "加胜其他比分 + 美国不胜",      recover: 71.3,  pnl: -38.7,  prob: 19.4 },
      { label: "加不胜(非0:0) + 美国胜",       recover: 42.7,  pnl: -67.3,  prob: 16.8 },
      { label: "加不胜(非0:0) + 美国不胜",     recover: 0,     pnl: -110.0, prob: 15.2 }
    ],
    copyText: `老板你好,竞彩足球,6月13日两场世界杯:

【周五003】加拿大 vs 波黑
① 胜平负 · 加拿大胜 - 44元(单关)
② 比分 · 0:0 - 12元(单关)
③ 比分 · 加拿大 1:0 - 14元(单关)

【周五004】美国 vs 巴拉圭
④ 胜平负 · 美国胜 - 24元(单关)

【过关】周五003 加拿大胜 × 周五004 美国胜
⑤ 2串1 - 16元

合计 110 元,①-④单关,⑤是2串1,谢谢!`
  },

  // ---------- 校准记录 ----------
  calibration: {
    stats: { direction: "2/2", scoreManual: "1/2", scoreModel: "0/2" },
    // 在线学习状态(learn.py 每场赛后自动更新): 乘法权重 + Elo + Dixon-Coles
    learning: {
      weights: { A: 28.1, B: 38.1, C: 33.8 },
      brier: { A: 0.387, B: 0.311, C: 0.341, ens: 0.345 },
      note: "权重由等权(33/33/33)经 2 场学习进化;集成 Brier 0.345 < 市场基线 0.387(越低越准,随机=0.667)。Elo 已随赛果更新:墨西哥+6.1/韩国+15.5;比分网格已加 Dixon-Coles 低比分修正(ρ=-0.08),0:0 概率 10.7%→12.3%。"
    },
    records: [
      {
        date: "06-12", match: "韩国 vs 捷克", actual: "2:1", briers: { A: 0.590, B: 0.487, C: 0.491, ens: 0.520 },
        manual: "1:1", model: "1:0", dirHit: true, manualHit: false, modelHit: false,
        note: "方向再中(韩胜=模型最高项41.1%)但复盘有三条硬教训:①仓位结构错——为'合成不败'把57%仓位(40/70)放在价值0.79/0.49的不及格票上,该结构赛前期望-15%,而唯一及格票韩胜(价值1.02)只配了30;降方差的正确手段是降仓位,不是买安慰票。②情报未量化——明知捷克定位球占22球之11,却没上调λ客,克雷伊奇定位球先入正中盲区;此后强情报必须转为tilt参数。③小球先验被打脸(预期2.05球实际3球),已建进球环境跟踪。三条已分别固化为:价值闸≥0.85无例外、情报必须进参数、λ全局校正(≥6场生效)。"
      },
      {
        date: "06-12", match: "墨西哥 vs 南非", actual: "2:0", briers: { A: 0.184, B: 0.135, C: 0.192, ens: 0.169 },
        manual: "2:0", model: "1:0", dirHit: true, manualHit: true, modelHit: false,
        note: "方向全对:主胜(67%)/小球/零封/南非0进球全部兑现。手工首选2:0命中,模型首选1:0飞了,两者赛前仅差1.8pp,人脑赢机器半子。"
      }
    ]
  }
};
