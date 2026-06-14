// ============================================================
// WC26 竞彩作战板 · 策展数据层
// 由每日工作流维护(预测/赛果/情报/持仓/资金池)。赔率实时数据在 odds_data.js,
// 运行 python3 refresh_odds.py 刷新;预测引擎: ~/.claude/skills/match-prediction/
// ============================================================
window.DASH_DATA = {
  meta: {
    round: "小组赛第 1 轮",
    updated: "2026-06-14 07:10",
    disclaimer: "竞彩胜平负盘实测 vig 12.9%,比分盘更高,长期期望为负。本看板的使命是决策质量管理:亏得最少、给运气最大杠杆。资金池纪律高于一切预测。理性购彩。"
  },

  // ---------- 资金池作战计划(全赛程) ----------
  bankroll: {
    start: 200, startDate: "06-11",
    cashNow: 188.2, pending: 0,
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
      ["保本线 200(重建模式)", "池<200=重建,但防御≠最小档(2026-06-13用户定调):剔除一切负EV纯热门票,对正EV/打平结构下真实仓位(可达1/2~1Kelly),单日≤池25%且最坏全损后池≥120;串关须以价值≥1.0的票为锚"],
      ["警戒线 160", "池 <160:只许核心仓且日 ≤20,直至回到 200;绝对地板 80 不变"],
      ["棘轮保护", "每越过里程碑,保本线上移至该里程碑 50%(500→250,1500→750…),赚到的台阶永不吐回"]
    ],
    targetCurve: [
      { d: "06-11", v: 200 }, { d: "06-18", v: 500 }, { d: "06-27", v: 1500 },
      { d: "07-07", v: 4500 }, { d: "07-14", v: 10000 }, { d: "07-19", v: 20000 }
    ],
    actualCurve: [
      { d: "06-11", v: 200 }, { d: "06-12", v: 255.5 }, { d: "06-13", v: 188.2 }
    ],
    // 纯数学期望路径:每日投50%仓、每注期望约-5%(已优化后的口径) → 日衰减约2.5%
    // 这条线是"没有任何运气"时钱的走向,目标线与它的差距=价值筛选+方差+棘轮纪律要去挣的部分
    evCurve: [
      { d: "06-11", v: 200 }, { d: "06-18", v: 168 }, { d: "06-27", v: 133 },
      { d: "07-07", v: 104 }, { d: "07-19", v: 76 }
    ],
    note: "2万是北极星(方向)。架构=CPPI安全垫,但防御≠最小档(2026-06-13用户定调)。当前池 188.2<保本线200=重建/进取模式:土耳其三主力伤疑+内马尔缺阵情报终核后tilt重跑,确认4张正EV独立单关:澳大利亚胜@5.15(价值1.16)×22元+巴西3:0@17(价值1.18)×10元+澳0:0@11(价值1.16)×8元+巴0:0@10(价值1.03)×4元。合计44元(23%池),最坏-44池→144.2>地板120;全EV=+6.8元;最佳:澳胜+巴3:0返283元净+239,直指里程碑500。",

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
      },
      {
        d: "06-13", pool: 188.2, pnl: -67.3,
        records: [
          "🏆 加拿大 1:1 波黑(03:00 完赛)",
          "　✗ 加拿大胜 44@1.62 → 0",
          "　✗ 比分0:0 12@9.50 → 0",
          "　✗ 比分1:0 14@5.70 → 0",
          "　✗ 2串1·加拿大胜×美国胜 16@2.88 → 0(串关腿已死)",
          "🏆 美国 4:1 巴拉圭(09:00 完赛)",
          "　✓ 美国胜 24@1.78 → 42.7",
          "📊 当日小计:投110 回42.7 净-67.3 | 池 255.5→188.2(仍低于保本线200,防御模式)"
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
        actualPnl: -67.3, status: "已结算",
        note: "资金池 255.5,110 元 = 43% 仓位,符合 ≤50% 规则,按原额出票;期望区间 -3.1(集成) ~ -7.6(保守),损耗已从首轮 -16% 压到 -5%;加波场86已挂(-86),美巴24在场待结"
      },
      {
        date: "06-14", desc: "周六4单:澳胜22+巴3:0×10+澳0:0×8+巴0:0×4",
        stake: 44, evPnl: 6.8, winProb: 37.8,
        actualPnl: null, status: "待结算",
        note: "进取重建模式(池188.2<200);4张全正EV独立单关(价值1.16/1.18/1.16/1.03);土耳其三主力伤疑tilt→澳胜EV+0.165/元;内马尔缺阵tilt→巴3:0 EV+0.176/元;最坏-44→池144.2高于地板120"
      }
    ]
  },

  // ---------- 今日比赛 ----------
  todayMatches: [
      {
          "num": "周六005",
          "group": "B组",
          "home": "卡塔尔",
          "away": "瑞士",
          "time": "06-14 03:00",
          "status": "finished",
          "actual": "1:1",
          "predManual": "未出票",
          "predModel": "客胜74.2%",
          "ensemble": {"h": 8.6, "d": 17.2, "a": 74.2},
          "note": "恩博洛17'点球先破门(0:1);卡塔尔胡科黑90'+4'定角球头球补时惊天扳平(阿明助攻),终场1:1。集成74.2%客胜全误(Brier=1.325≫随机0.667);赔率权重大幅向市场倾斜(A→74.8%);卡塔尔Elo+9.5。竞彩揭幕前未开盘,无持仓影响。"
      },
      {
          "num": "周六006",
          "group": "C组",
          "home": "巴西",
          "away": "摩洛哥",
          "time": "06-14 06:00",
          "status": "upcoming",
          "actual": null,
          "predManual": "1:0",
          "predModel": "1:0",
          "ensemble": {"h": 60.1, "d": 24.7, "a": 15.2},
          "note": "巴西大热(集成60.1%主胜),摩洛哥2022四强的低位防反正是克制控球的剧本;实时比分见红色「进行中」。无持仓(竞彩巴西胜1.49负EV未出票)。"
      }
  ],

  // ---------- 持仓账本(本轮:6/13两场,110元) ----------
  holdings: {
      "invested": 110,
      "returned": 42.7,
      "pendingStake": 0,
      "condEV": -1.3,
      "condWinProb": 53,
      "tickets": [
          {
              "match": "加拿大 vs 波黑",
              "pick": "胜平负·加拿大胜",
              "stake": 44,
              "odds": 1.62,
              "status": "lose",
              "payout": 0
          },
          {
              "match": "加拿大 vs 波黑",
              "pick": "比分·加拿大 1:0",
              "stake": 14,
              "odds": 5.7,
              "status": "lose",
              "payout": 0
          },
          {
              "match": "加拿大 vs 波黑",
              "pick": "比分·0:0",
              "stake": 12,
              "odds": 9.5,
              "status": "lose",
              "payout": 0
          },
          {
              "match": "美国 vs 巴拉圭",
              "pick": "胜平负·美国胜",
              "stake": 24,
              "odds": 1.78,
              "status": "win",
              "payout": 42.7
          },
          {
              "match": "加拿大胜×美国胜",
              "pick": "2串1 @2.88",
              "stake": 16,
              "odds": 2.88,
              "status": "lose",
              "payout": 0
          }
      ],
      "scenariosTitle": "美巴终局推演 · 本轮110元盈亏(柱上为概率)",
      "scenarios": [
          {
              "label": "美国胜",
              "pnl": -67.3,
              "prob": 53
          },
          {
              "label": "美国不胜",
              "pnl": -110.0,
              "prob": 47
          }
      ]
  },

  // ---------- 明日焦点(6/14,防御模式;卡塔尔vs瑞士竞彩未开盘暂不列) ----------
  focus: [
      {
          "num": "周六007",
          "home": "海地",
          "away": "苏格兰",
          "time": "06-14 09:00",
          "group": "C组",
          "models": {
              "labels": [
                  "主胜",
                  "平局",
                  "客胜"
              ],
              "A": [
                  12.0,
                  21.5,
                  66.6
              ],
              "B": [
                  14.4,
                  21.4,
                  64.2
              ],
              "C": [
                  11.1,
                  23.1,
                  65.8
              ],
              "ens": [
                  12.4,
                  22.1,
                  65.4
              ]
          },
          "radar": {
              "dims": [
                  "状态",
                  "阵容",
                  "战术",
                  "环境",
                  "历史",
                  "心理"
              ],
              "home": [
                  5,
                  5,
                  5,
                  5,
                  4,
                  6
              ],
              "away": [
                  7,
                  7,
                  7,
                  6,
                  6,
                  6
              ]
          },
          "scores": [
              {
                  "s": "0:1",
                  "p": 15.0,
                  "odds": 5.4,
                  "value": 0.81
              },
              {
                  "s": "0:2",
                  "p": 14.5,
                  "odds": 5.25,
                  "value": 0.76
              },
              {
                  "s": "1:1",
                  "p": 10.6,
                  "odds": 7.5,
                  "value": 0.79
              },
              {
                  "s": "0:0",
                  "p": 9.4,
                  "odds": 11.0,
                  "value": 1.03
              },
              {
                  "s": "1:2",
                  "p": 9.0,
                  "odds": 7.0,
                  "value": 0.63
              },
              {
                  "s": "0:3",
                  "p": 8.9,
                  "odds": 8.0,
                  "value": 0.71
              }
          ],
          "wdlValue": [
              {
                  "pick": "海地胜",
                  "prob": 12.4,
                  "odds": 7.4,
                  "value": 0.92
              },
              {
                  "pick": "平局",
                  "prob": 22.1,
                  "odds": 4.12,
                  "value": 0.91
              },
              {
                  "pick": "苏格兰胜",
                  "prob": 65.4,
                  "odds": 1.33,
                  "value": 0.87
              }
          ],
          "verdict": "实力差明确:苏格兰胜0.87可买但赔率太低(1.33);海地冷门0.92反而更有价值结构,但防御模式不碰非核心。放弃本场。",
          "radarWhy": [
              {
                  "dim": "状态",
                  "h": 5,
                  "hw": "大赛首秀,热身样本少",
                  "a": 7,
                  "aw": "欧洲区附加赛突围,状态在线"
              },
              {
                  "dim": "阵容",
                  "h": 5,
                  "hw": "旅欧球员有限,深度薄",
                  "a": 7,
                  "aw": "麦克托米奈领衔,英超中坚为骨架"
              },
              {
                  "dim": "战术",
                  "h": 5,
                  "hw": "体系简单,依赖个体",
                  "a": 7,
                  "aw": "4-2-3-1稳守反击,定位球强"
              },
              {
                  "dim": "环境",
                  "h": 5,
                  "hw": "中立场,无加成",
                  "a": 6,
                  "aw": "苏格兰球迷远征文化著名"
              },
              {
                  "dim": "历史",
                  "h": 4,
                  "hw": "1974年后首进世界杯",
                  "a": 6,
                  "aw": "多次大赛小组未出线,渴望破咒"
              },
              {
                  "dim": "心理",
                  "h": 6,
                  "hw": "无包袱,享受比赛",
                  "a": 6,
                  "aw": "'终于不能再输'的压力"
              }
          ],
          "modelNotes": [
              {
                  "k": "A 竞彩去水",
                  "note": "竞彩 7.4/4.12/1.33 去水≈13% → 12.0/21.5/66.6"
              },
              {
                  "k": "B Elo",
                  "note": "海地 1450 vs 苏格兰 1700(估计±50)+竞彩主队场地分60 → 14.4/21.4/64.2;中立场地下场地分是最大不确定项"
              },
              {
                  "k": "C Poisson+DC",
                  "note": "λ=0.62/1.84,Dixon-Coles ρ=-0.08 → 11.1/23.1/65.8"
              },
              {
                  "k": "D 国际共识",
                  "note": "Polymarket+Smarkets 加权 → 15.9/22.3/61.9"
              },
              {
                  "k": "集成(学习权重)",
                  "note": "权重 A31/B24/C40/D6(加波后 Elo 被降权、Poisson 上位) → 12.4/22.1/65.4"
              }
          ]
      },
      {
          "num": "周六008",
          "home": "澳大利亚",
          "away": "土耳其",
          "time": "06-14 12:00",
          "group": "B组",
          "models": {
              "labels": [
                  "主胜",
                  "平局",
                  "客胜"
              ],
              "A": [
                  16.7,
                  25.1,
                  58.2
              ],
              "B": [
                  33.0,
                  28.2,
                  38.8
              ],
              "C": [
                  15.8,
                  26.7,
                  57.5
              ],
              "ens": [
                  20.3,
                  26.5,
                  53.2
              ]
          },
          "radar": {
              "dims": [
                  "状态",
                  "阵容",
                  "战术",
                  "环境",
                  "历史",
                  "心理"
              ],
              "home": [
                  6,
                  6,
                  6,
                  6,
                  6,
                  7
              ],
              "away": [
                  7,
                  7,
                  7,
                  6,
                  6,
                  6
              ]
          },
          "scores": [
              {
                  "s": "0:1",
                  "p": 14.8,
                  "odds": 6.0,
                  "value": 0.89
              },
              {
                  "s": "0:2",
                  "p": 12.6,
                  "odds": 6.5,
                  "value": 0.82
              },
              {
                  "s": "1:1",
                  "p": 12.2,
                  "odds": 6.2,
                  "value": 0.76
              },
              {
                  "s": "0:0",
                  "p": 10.7,
                  "odds": 9.5,
                  "value": 1.02
              },
              {
                  "s": "1:2",
                  "p": 9.1,
                  "odds": 6.45,
                  "value": 0.58
              },
              {
                  "s": "0:3",
                  "p": 6.7,
                  "odds": 11.5,
                  "value": 0.77
              }
          ],
          "wdlValue": [
              {
                  "pick": "澳大利亚胜",
                  "prob": 20.3,
                  "odds": 5.3,
                  "value": 1.08
              },
              {
                  "pick": "平局",
                  "prob": 26.5,
                  "odds": 3.53,
                  "value": 0.94
              },
              {
                  "pick": "土耳其胜",
                  "prob": 53.2,
                  "odds": 1.52,
                  "value": 0.81
              }
          ],
          "verdict": "今晚唯一核心票:澳大利亚胜 @5.30 价值1.07(正期望+7.4%/元)——市场对土耳其的纸面偏爱压出了冷门价值。但概率仅20%,quarter-Kelly仅0.4%池:防御模式下小仓出击,输了不伤元气,中了+43修复安全垫。",
          "radarWhy": [
              {
                  "dim": "状态",
                  "h": 6,
                  "hw": "亚洲区稳定出线,整备常规",
                  "a": 7,
                  "aw": "欧洲区强势,锋线状态好"
              },
              {
                  "dim": "阵容",
                  "h": 6,
                  "hw": "旅欧中坚为主,无超巨",
                  "a": 7,
                  "aw": "居莱尔/恰尔汗奥卢,创造力占优"
              },
              {
                  "dim": "战术",
                  "h": 6,
                  "hw": "身体+定位球+整体跑动",
                  "a": 7,
                  "aw": "技术流控球,但防线高位有隙"
              },
              {
                  "dim": "环境",
                  "h": 6,
                  "hw": "中立场,竞彩列为主队",
                  "a": 6,
                  "aw": "中立场,无加成"
              },
              {
                  "dim": "历史",
                  "h": 6,
                  "hw": "连续六届晋级正赛,大赛经验足",
                  "a": 6,
                  "aw": "2002季军后大赛断档明显"
              },
              {
                  "dim": "心理",
                  "h": 7,
                  "hw": "被普遍低估,轻装上阵",
                  "a": 6,
                  "aw": "'必须赢澳洲'的舆论压力"
              }
          ],
          "modelNotes": [
              {
                  "k": "A 竞彩去水",
                  "note": "竞彩 5.3/3.53/1.52 去水≈13% → 16.7/25.1/58.2"
              },
              {
                  "k": "B Elo",
                  "note": "澳大利亚 1700 vs 土耳其 1780(估计±50)+竞彩主队场地分60 → 33.0/28.2/38.8;中立场地下场地分是最大不确定项"
              },
              {
                  "k": "C Poisson+DC",
                  "note": "λ=0.72/1.60,Dixon-Coles ρ=-0.08 → 15.8/26.7/57.5"
              },
              {
                  "k": "D 国际共识",
                  "note": "Polymarket+Smarkets 加权 → 18.1/25.4/56.5"
              },
              {
                  "k": "集成(学习权重)",
                  "note": "权重 A31/B24/C40/D6(加波后 Elo 被降权、Poisson 上位) → 20.3/26.5/53.2"
              }
          ]
      }
  ],

  // ---------- 情报流 ----------
  news: [
    { date: "06-14", match: "澳大利亚 vs 土耳其", impact: "⚠️恰尔汗奥卢确认预计首发(队长身份)·减仓规则触发·须在12:00前将澳胜从22降至16元", tone: "away",
      text: "07:10巡检更新:covers.com明确'恰尔汗奥卢将以队长身份出现在中场',RotoWire预测XI同向——两家独立信源均将其列为首发。这是对之前'临场决定'状态的决定性升级,触发slip预设减仓规则:澳大利亚胜仓位须从22元降至16元。亚尔德孜依然缺席首发。(来源:covers.com/RotoWire)",
      en: "07:10 patrol update: covers.com states Calhanoglu 'is set to have a spot in midfield for Turkey as captain'; RotoWire predicted XI aligns — two independent sources now list him as a starter. This is a definitive upgrade from the 'game-time decision' status. Pre-set slip rule triggered: reduce Australia-win stake from 22 to 16 yuan before 12:00 kickoff. Yildiz still not expected to start. (per covers.com / RotoWire)",
      full: "07:10 BJT巡检二次确认(触发slip减仓):①covers.com明确写道恰尔汗奥卢将以队长身份首发于4-2-3-1中场枢纽位置(恰尔汗/于克塞克双后腰),这比前一条'Sports Mole预测首发+RotoWire临场决定'的措辞更为确定;②RotoWire预测XI同向:卡基尔;杰利克、德米拉尔、巴尔达克奇、埃尔马勒;恰尔汗奥卢、于克塞克;居勒、科克丘、亦尔马兹;古尔。③亚尔德孜(腓肠肌):仍'首发将令人意外',不在预测名单中。④澳大利亚全员健康,3-4-2-1出战。综合判断:恰尔汗首发令土耳其中场控制力部分恢复,tilt假设中的×0.75客队λ折扣偏乐观。slip预设规则明确指出'恰尔汗奥卢意外首发→澳胜从22元降至16元',当前确认触发条件成立。⚠️ 主会话须在赛前60分钟(约11:00前)根据官方XI执行最终仓位调整。",
      enFull: "07:10 BJT patrol — second source confirmation triggers stake-reduction rule: (1) covers.com explicitly states Calhanoglu 'is set to have a spot in midfield for Turkey as captain,' placing him in the 4-2-3-1 double-pivot alongside Yuksek — a more definitive statement than the earlier 'managed carefully/game-time decision' framing. (2) RotoWire predicted XI mirrors: Cakir; Celik, Demiral, Bardakci, Elmali; Calhanoglu, Yuksek; Guler, Kokcu, Yilmaz; Gul. (3) Yildiz (calf): still 'would be a surprise to feature' per Sports Mole. (4) Australia: no injury concerns, expected 3-4-2-1. Assessment: Calhanoglu starting partially restores Turkey's midfield structure, making the away-λ×0.75 tilt less defensible. The pre-set slip rule condition is met. ⚠️ Main session must execute stake trim (22→16 yuan) before official XI confirmation ~60 min before 12:00 kickoff.",
      links: [{"name": "covers.com · Turkey vs Australia prediction", "url": "https://www.covers.com/world-cup/turkey-vs-australia-prediction-picks-odds-sunday-6-14-2026"}, {"name": "RotoWire · Australia vs Turkey preview", "url": "https://www.rotowire.com/soccer/article/australia-vs-turkey-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-d-117953"}]
    },
    { date: "06-14", match: "海地 vs 苏格兰", impact: "切·亚当斯已列入预测首发·双前锋搭档完整·较昨日'疑问'状态升级", tone: "away",
      text: "07:10巡检:RotoWire与Sports Mole最新预测首发均将切·亚当斯列入苏格兰阵容(亚当斯-尚克兰德-多克三前锋),较昨日'临场疑问'状态明确升级;甘首发门将、麦克托米奈中场确认出战。苏格兰攻守架构趋于完整,64.4%胜率国际共识未变。(来源:RotoWire/Sports Mole)",
      en: "07:10 patrol: RotoWire and Sports Mole predicted XIs both include Ché Adams in Scotland's starting eleven (Adams–Shankland–Doak front three), an upgrade from yesterday's 'doubtful' tag. Angus Gunn confirmed in goal, McTominay fit to start. Scotland's full attacking lineup intact; 64.4% market win probability unchanged. (per RotoWire / Sports Mole)",
      full: "07:10 BJT巡检更新(赛前~1.5小时):①切·亚当斯(苏格兰前锋):RotoWire预测首发将其列入正选,亚当斯-尚克兰德搭档双前锋方案(或含多克三前锋);昨日Sports Mole将他列为'临场疑问',此次升级表明伤情评估已向好。②昂格斯·甘:多数预测XI确认首发门将,排挤43岁老将克雷格·戈登;甘的积极出击风格契合苏格兰控球打法。③麦克托米奈:健康确认无虞,中场核心出战不变。④海地:预计4-3-3,贝莱加德-伊索尔-皮耶罗特锋线,全员无伤。⑤市场赔率:苏格兰胜1.54(Smarkets),今日较昨日+2.6pp,海地胜6.90。综合:亚当斯首发是此前预期的最优阵型方案,苏格兰进攻纵深恢复,64.4%胜率共识合理。无持仓,本条为模型校准与后续情报参考。",
      enFull: "07:10 BJT pre-match patrol (~1.5 hours before kickoff): (1) Ché Adams: RotoWire predicted XI includes him in Scotland's starting lineup alongside Shankland, forming the two-striker or three-front partnership with Doak. Previous Sports Mole item (06-14) flagged him as 'doubtful' — this is a clear upgrade in status. (2) Angus Gunn confirmed as starting goalkeeper ahead of 43-year-old Craig Gordon. (3) Scott McTominay: fully fit, midfield axis intact. (4) Haiti: expected 4-3-3 with Bellegarde–Isidor–Pierrot in attack, no injury concerns. (5) Market: Scotland win 1.54 on Smarkets (+2.6pp since opening); Haiti win 6.90. Assessment: Adams's inclusion restores Scotland's optimal attacking structure. The 64.4% consensus win probability is well-supported. No current slip exposure; primarily for model calibration reference.",
      links: [{"name": "RotoWire · Haiti vs Scotland preview", "url": "https://www.rotowire.com/soccer/article/haiti-vs-scotland-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-c-117818"}, {"name": "Sports Mole · Haiti vs Scotland preview", "url": "https://www.sportsmole.co.uk/football/haiti/world-cup-2026/preview/haiti-vs-scotland-prediction-team-news-lineups_598953.html"}]
    },
    { date: "06-14", match: "巴西 vs 摩洛哥", impact: "马兹劳伊确认预计首发·防线比tilt假设更完整", tone: "away",
      text: "Sports Mole和RotoWire最新预测首发均确认马兹劳伊(肩伤已恢复训练)出现在摩洛哥右后卫位置;此前连续两条情报将其列为'临场决定/存疑'。若首发:摩洛哥后防较预期更稳固,巴西维尼修斯-拉菲尼亚双翼面临更完整的对位防守。当前slip无巴西相关票,本条为模型校准参考。(来源:Sports Mole/RotoWire)",
      en: "Sports Mole and RotoWire predicted XIs both list Mazraoui in Morocco's starting lineup at right-back following shoulder injury recovery. Previous two items flagged him as 'game-time decision/doubtful.' If confirmed: Morocco's defensive structure is more intact than the attrition tilt assumed. No slip exposure; for model calibration. (per Sports Mole / RotoWire)",
      full: "赛前约2小时情报更新:①马兹劳伊(拜仁/摩洛哥右后卫):对挪威热身赛肩部脱臼后曾被连续列为'临场决定',今晨Sports Mole与RotoWire两家独立预测首发均将他排入右后卫首发位置。预计摩洛哥后防四人组:马兹劳伊、里亚德(中卫)、迪奥普(中卫)、哈基米(左后卫)。②阿圭尔(腹股沟)和阿布代(膝)仍全赛季缺阵不变。③巴西预计首发:阿利松;达尼洛、加布里埃尔、马尔基尼奥斯、亚历克斯·桑德罗;基马朗伊斯、卡塞米罗;路易斯·恩里克、拉菲尼亚、维尼修斯;库尼亚。内马尔缺席已定。④综合影响:马兹劳伊首发令摩洛哥防线比tilt模型假设(away-λ×0.90)更完整,巴西右路维尼修斯/达尼洛方向的边路撕扯受阻力更大。如他成功跑满90分钟,赛后复盘应上调摩洛哥防线稳健参数。当前无任何巴西相关票在slip中(主会话已决策不买本场)。⚠️ 官方XI须赛前60分钟确认,若马兹劳伊临场退出则按'tilt防线'重新评估。",
      enFull: "Pre-match update ~2 hours before 06:00 BJT kickoff: (1) Noussair Mazraoui (Bayern / Morocco RB): after being flagged as 'game-time decision' following a shoulder dislocation vs Norway, both Sports Mole and RotoWire's latest predicted XIs now include him at right-back. Projected Morocco back four: Mazraoui, Riad, Diop, Hakimi. (2) Nayef Aguerd (groin) and Ez Abde (knee) remain full-tournament absentees. (3) Brazil expected XI: Alisson; Danilo, Gabriel, Marquinhos, Alex Sandro; Guimaraes, Casemiro; Luiz Henrique, Raphinha, Vinicius Jr; Cunha. Neymar confirmed absent. (4) Impact: Mazraoui's expected start means Morocco's backline is more cohesive than the 'defensive attrition' tilt (away-λ×0.90) assumed. Post-match calibration should adjust Morocco's defensive stability coefficient if he completes 90 minutes. No current slip exposure on this match. ⚠️ Confirmed XIs ~60 min before 06:00 BJT kickoff; if Mazraoui withdraws late, revert to attrition-tilt defensive assessment.",
      links: [{"name": "Sports Mole · Brazil vs Morocco preview", "url": "https://www.sportsmole.co.uk/football/brazil/world-cup-2026/preview/brazil-vs-morocco-prediction-team-news-lineups_598948.html"}, {"name": "RotoWire · Brazil vs Morocco", "url": "https://www.rotowire.com/soccer/article/brazil-vs-morocco-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-c-117816"}]
    },
    { date: "06-14", match: "澳大利亚 vs 土耳其", impact: "⚠️恰尔汗奥卢预测首发·触发减仓规则·出票前须确认", tone: "away",
      text: "Sports Mole最新预测阵容将恰尔汗奥卢(小腿)列入土耳其首发;RotoWire确认其友谊赛以替补出场后仍被谨慎管理中——若官方名单确认首发,按slip预设规则须将澳胜仓位从22元降至16元。(来源:Sports Mole/RotoWire)",
      en: "Sports Mole's latest predicted XI places Calhanoglu in Turkey's starting lineup; RotoWire confirms he is 'being managed carefully' after returning as a substitute in a friendly. Per pre-set slip rule: if confirmed starting → reduce Australia-win stake from 22 to 16 yuan. (per Sports Mole / RotoWire)",
      full: "赛前约10小时情报更新(触发slip减仓条件):①Sports Mole发布土耳其预测首发,恰尔汗奥卢(队长/中场发动机)出现在首发位置,这与20:33终盘评估中'三人全缺悲观情景'出现偏差;②RotoWire专项文章题为'Hakan Calhanoglu Injury: Being managed carefully',指出他在友谊赛对北马其顿时以替补出场,医疗组谨慎管控恢复节奏,目前仍为临场决定;③亚尔德兹:单独训练,Sports Mole确认'几乎不可能首发';阿尔达·居勒:确认健康并预计首发;④澳大利亚全员无伤。综合评估:恰尔汗奥卢至少有替补出场概率,Sports Mole甚至预测他首发——若首发,土耳其中场体系部分恢复,之前tilt假设(×0.75)将偏乐观。⚠️ 按slip预设规则:赛前约60分钟官方名单公布后若确认恰尔汗首发→澳胜仓位22元→16元;若缺席或替补则维持22元。",
      enFull: "Intelligence update ~10 hours before kickoff (triggers pre-set slip adjustment rule): (1) Sports Mole's latest Turkey predicted XI lists Calhanoglu in the starting lineup — diverging from the 20:33 'all-three-absent pessimistic tilt' scenario used for value calculation. (2) RotoWire headline: 'Hakan Calhanoglu Injury: Being managed carefully' — he came off the bench in a friendly win over North Macedonia; medical staff taking a measured approach to his return. (3) Yildiz (calf, training alone): unlikely to start per Sports Mole. Arda Guler: confirmed fit and expected to start. (4) Australia: no injury concerns. Assessment: if Calhanoglu starts, Turkey's midfield structure is materially restored and the away-λ×0.75 tilt discount is overstated. ⚠️ Per pre-set slip rule: check official XIs ~60 min before the 12:00 BJT kickoff — Calhanoglu confirmed starting → reduce Australia-win stake from 22 to 16 yuan; if he is a late scratch or sub → maintain 22 yuan.",
      links: [{"name": "Sports Mole · Turkey predicted XI vs Australia", "url": "https://www.sportsmole.co.uk/football/australia/world-cup-2026/predicted-lineups/will-yildiz-be-involved-how-turkey-could-line-up-against-australia_599009.html"}, {"name": "RotoWire · Calhanoglu injury update", "url": "https://www.rotowire.com/soccer/headlines/hakan-calhanoglu-injury-being-managed-carefully-518742"}]
    },
    { date: "06-14", match: "卡塔尔 vs 瑞士", impact: "赛前2小时确认:两队全员健康·瓦尔加斯出战无虞·恩博洛首发概率领先", tone: "away",
      text: "赛前终盘确认:卡塔尔与瑞士均无伤停困扰。瑞士主帅穆拉特·雅金确认全员可用,恩博洛与阿姆多尼竞争首发前锋位置,瓦尔加斯临场决定疑问已完全解除。卡塔尔主帅洛佩特吉亦有完整阵容可供调度,预计4-3-3登场:埃德米尔森·朱尼奥尔、阿克拉姆·阿菲夫、尤素福·阿布都里扎格担当三前锋。(来源:Sports Mole/RotoWire)",
      en: "Pre-match confirmation: both Qatar and Switzerland report no injury concerns. Yakin has a fully fit squad; Embolo leads to start ahead of Amdouni with Vargas doubts fully resolved. Lopetegui also picks from a complete group, expected 4-3-3 with Edmilson Junior, Afif, Abdurisag. (per Sports Mole / RotoWire)",
      full: "赛前不到2小时确认:①卡塔尔:洛佩特吉全员健康,无任何伤停缺阵。预计4-3-3,布迪亚夫坐镇中场,阿克拉姆·阿菲夫(现效力马竞)预计出任最强进攻点,埃德米尔森·朱尼奥尔和阿布都里扎格两翼。②瑞士:主帅雅金确认无伤停困扰,瓦尔加斯早前肌肉疑问已完全解除可以首发;恩博洛与阿姆多尼争抢第一中锋,共识正向恩博洛偏移(签证获批晚导致训练量略不足是唯一变数)。③赔率背景:国际市场卡塔尔主胜仅5.9%,瑞士胜率高达81.6%,分组同日加拿大1:1波黑——瑞士赢球即可在B组占据主动。⚠️首发XI须赛前60分钟公布确认。",
      enFull: "Pre-match status under 2 hours from kickoff: (1) Qatar: Lopetegui reports a fully fit squad, no injuries. Expected 4-3-3 with Boudiaf in midfield; Akram Afif, Edmilson Junior, and Abdurisag as the attacking trio. (2) Switzerland: Yakin confirms no injury concerns; Vargas muscle doubts fully resolved and he is expected to start; Embolo vs Amdouni is the one selection question — consensus drifting toward Embolo despite slightly less training after late visa clearance; Shaqiri and Zakaria fit. (3) Market context: international markets price Qatar at just 5.9% win probability, Switzerland at 81.6%. With Canada and Bosnia drawing 1-1 earlier, a Switzerland win seizes Group B control. ⚠️ Confirmed XIs expected ~60 minutes before 03:00 BJT kickoff.",
      links: [{"name": "Sports Mole · Qatar vs Switzerland team news", "url": "https://www.sportsmole.co.uk/football/switzerland/world-cup/team-news/qatar-vs-switzerland-injury-suspension-list-predicted-xis_598997.html"}, {"name": "RotoWire · Qatar vs Switzerland preview", "url": "https://www.rotowire.com/soccer/article/qatar-vs-switzerland-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-b-117815"}]
    },
    { date: "06-14", match: "海地 vs 苏格兰", impact: "切·亚当斯临场疑问·甘首发门将·苏格兰锋线有变数", tone: "home",
      text: "最新更新:切·亚当斯(苏格兰核心前锋)临场疑问,若缺阵则尚克兰德或须独挑锋线;预计甘(Angus Gunn)首发门将,43岁老将克雷格·戈登边缘化。海地方面无任何伤停,贝莱加德+伊索尔预计搭档首发。(来源:Sports Mole/ESPN)",
      en: "Late update: Ché Adams listed as doubtful — if absent Shankland leads Scotland's line alone in a reshaped 4-4-2. Angus Gunn now more likely to start in goal over 43-year-old Craig Gordon. Haiti zero injury concerns; Bellegarde and Isidor expected to partner up front. (per Sports Mole / ESPN)",
      full: "赛前最新伤情(较06-13档案有重要变动):①切·亚当斯(苏格兰联合前锋):Sports Mole确认为临场疑问——若缺阵,苏格兰4-4-2中劳伦斯·尚克兰德须独担前锋,进攻纵深受损,与海地差距收窄。②门将:主帅克拉克现倾向昂格斯·甘首发,而非43岁老将克雷格·戈登——甘更为积极,适合苏格兰预期掌控的比赛节奏。③麦克托米奈:已确认出战,中场核心问题解决。④海地:完全无伤停或禁赛,贝莱加德(狼队)与威尔逊·伊索尔(桑德兰)预计首发,队史最佳射手达肯斯·纳松亦在列。⑤国际市场苏格兰胜率63.7%,海地主胜仅15.4%。⚠️需赛前60分钟确认苏格兰官方名单以核实亚当斯出战与否。",
      enFull: "Pre-match update with key change from 06-13 entry: (1) Ché Adams (Scotland co-striker) listed as doubtful per Sports Mole — if absent, Lawrence Shankland operates as a lone striker, narrowing Scotland's attacking depth. (2) Goalkeeping slot: consensus now favors Angus Gunn over 43-year-old Craig Gordon; Gunn's athleticism suits Scotland's expected possession game. (3) Scott McTominay: fully fit (confirmed 06-13) — midfield axis intact. (4) Haiti: zero injury or suspension concerns; Bellegarde (Wolves), Wilson Isidor (Sunderland), and record scorer Duckens Nazon all available. (5) Market: Scotland 63.7% win, Haiti 15.4%. ⚠️ Adams' participation to be confirmed in the official squad announcement ~60 minutes before the 09:00 BJT kickoff.",
      links: [{"name": "Sports Mole · Haiti vs Scotland preview", "url": "https://www.sportsmole.co.uk/football/haiti/world-cup-2026/preview/haiti-vs-scotland-prediction-team-news-lineups_598953.html"}, {"name": "ESPN · Haiti vs Scotland preview", "url": "https://www.espn.com/soccer/story/_/id/49026945/haiti-scotland-kickoff-how-watch-stats-team-news-fifa-world-cup-2026"}]
    },
    { date: "06-13", match: "海地 vs 苏格兰", impact: "麦克托米奈胃病痊愈确认出战·吉尔摩伤缺·苏格兰门将位置待定·海地无伤情", tone: "away",
      text: "苏格兰核心中场麦克托米奈(周四胃病缺训)已完全康复,主帅克拉克确认'状态完美,随时可上';吉尔摩(膝)缺席本届世界杯。门将位置在43岁老将克雷格·戈登与昂格斯·甘之间悬而未决。海地无伤停困扰,本土联赛中锋威尔逊·伊索尔与中场贝莱加德预计首发。(来源:Sports Mole/Yahoo Sports)",
      en: "Scotland's key midfielder Scott McTominay (stomach complaint, missed Thursday training) is fully recovered — Clarke: 'perfect and ready to go.' Billy Gilmour (knee) is ruled out for the tournament. Scotland's goalkeeping slot remains undecided between 43-year-old Craig Gordon and Angus Gunn. Haiti have no injury concerns; Wilson Isidor and Jean-Ricner Bellegarde expected to start. (per Sports Mole / Yahoo Sports)",
      full: "苏格兰出征海地前最新伤情汇总:①麦克托米奈(胃病):周四缺席训练令外界担忧,但主帅史蒂夫·克拉克在赛前发布会上确认'他状态完美,随时可以出战'——核心中场出战无虞;②吉尔摩(膝):已正式宣布伤缺本届世界杯全程,中场深度受损;③门将悬案:43岁老将克雷格·戈登与昂格斯·甘竞争首发位置,克拉克尚未公开首发人选。苏格兰预计4-4-2:切·亚当斯与劳伦斯·尚克兰德搭档双前锋。海地无伤停困扰,预计沿用对新西兰和秘鲁热身赛的4-4-2阵型:贝莱加德+伊索尔担当锋线。整体而言,苏格兰主力中场健康是利好,门将悬案是小变数,对本场赔率影响有限。",
      enFull: "Scotland's pre-match injury picture for the Haiti opener: (1) Scott McTominay (stomach complaint) — missed Thursday's training session but declared 'perfect and ready to go' by manager Steve Clarke at the pre-match press conference; no concern for his availability. (2) Billy Gilmour (knee) officially ruled out for the entire tournament — weakens Scotland's midfield depth beyond the McTominay-Tierney axis. (3) Goalkeeper dilemma: 43-year-old Craig Gordon vs Angus Gunn for the starting spot; Clarke yet to reveal his choice publicly. Scotland expected to deploy a 4-4-2 with Che Adams partnering Lawrence Shankland. Haiti report zero injury or suspension concerns and are expected to replicate their warm-up 4-4-2 with Jean-Ricner Bellegarde (Wolves) and Wilson Isidor (Sunderland) in key roles. Assessment: McTominay fit is the biggest positive; Gilmour's absence is a known quantity; goalkeeper uncertainty has minimal odds impact. ⚠️ Official confirmed XI roughly 60 minutes before the 09:00 BJT kickoff.",
      links: [{"name": "Sports Mole · Haiti vs Scotland team news", "url": "https://www.sportsmole.co.uk/football/haiti/injury-news/team-news/haiti-vs-scotland-injury-suspension-list-predicted-xis_598956.html"}, {"name": "Yahoo Sports · Scotland XI vs Haiti", "url": "https://uk.sports.yahoo.com/news/scotland-xi-vs-haiti-confirmed-235146194.html"}]
    },
    { date: "06-14", match: "澳大利亚 vs 土耳其", impact: "终盘定稿:三主力伤情确认·Tilt澳胜价值1.16·EV+0.165", tone: "home",
      text: "20:33终盘:亚尔德孜(小腿)单独训练几乎确认缺席,卡尔汉奥卢(小腿)临场决定,卡迪奥卢临场决定;澳大利亚全员无伤。Tilt客λ×0.75重跑:澳胜集成22.6%,@5.15=价值1.16,EV+0.165/元——全日最强正EV单关。",
      en: "Final 20:33 BJT: Yildiz (calf, training alone) effectively out; Calhanoglu (calf) and Kadioglu both GTD. Australia fully fit. Post-tilt (away-λ×0.75): Australia-win ensemble 22.6%, @5.15 → value 1.16, EV+0.165/yuan — strongest positive-EV single on the slate.",
      full: "20:33终盘三主力伤情汇总:①亚尔德孜(小腿):单独训练,ESPN确认'极可能缺席首战';②卡尔汉奥卢(小腿,中场发动机):RotoWire列为临场决定,若首发土耳其体系接近完整;③卡迪奥卢(左后卫/翼卫):同列临场决定。Tilt参数(主λ×1.0,客λ×0.75)假设三人全缺悲观情景:集成概率主胜22.6%、平26.8%、客50.6%;澳胜@5.15=价值1.16(EV+0.165),平局@3.72=价值1.00(EV≈0)。选定:澳胜22元(核心)+比分0:0×8元(价值)。⚠️ 出票前30分钟务必确认土耳其首发——若卡尔汉奥卢意外首发可酌情减仓。",
      enFull: "Final 20:33 BJT injury triage: (1) Yildiz (calf, training alone) is effectively ruled out per ESPN — 'would be a surprise if he features.' (2) Calhanoglu (calf, midfield anchor) listed as game-time decision per RotoWire; if he starts Turkey's system recovers partially. (3) Kadioglu (left-back/winger) also GTD. Tilt applied (home-λ×1.0, away-λ×0.75, all-three-absent scenario): post-tilt ensemble Australia win 22.6% / draw 26.8% / Turkey win 50.6%. Australia @5.15 → value 1.16 (EV+0.165/yuan); draw @3.72 → value 1.00 (EV≈0). Stake selected: 22 yuan (HAD-win, core) + 8 yuan (score 0:0, value). ⚠️ Confirm Turkey XI 30 min before kickoff — Calhanoglu starting would partially erode the value edge.",
      links: [{"name": "Sports Mole · Australia vs Turkey team news", "url": "https://www.sportsmole.co.uk/football/australia/world-cup/team-news/australia-vs-turkey-injury-suspension-list-predicted-xis_599006.html"}, {"name": "RotoWire · Australia vs Turkey preview", "url": "https://www.rotowire.com/soccer/article/australia-vs-turkey-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-d-117953"}]
    },
    { date: "06-14", match: "巴西 vs 摩洛哥", impact: "终盘定稿:内马尔缺阵+摩洛哥三伤·Tilt巴3:0价值1.18·EV+0.176", tone: "home",
      text: "20:33终盘:内马尔二级腓肠肌撕裂缺席揭幕战(昂切洛蒂确认);摩洛哥马兹劳伊(肩脱臼)临场待定;Tilt主λ×0.88/客λ×0.90重跑:巴西3:0集成6.9%×@17.00=价值1.18(EV+0.176),巴摩0:0集成10.3%×@10.00=价值1.03(EV+0.031)。",
      en: "Final 20:33 check: Neymar (grade-2 calf tear) confirmed out for opener; Morocco's Mazraoui (shoulder dislocation) GTD. Post-tilt (home-λ×0.88, away-λ×0.90): Brazil 3:0 value 1.18 (EV+0.176), scoreless draw value 1.03 (EV+0.031). Selected: Brazil 3:0 × 10 yuan + 0:0 × 4 yuan.",
      full: "20:33终盘确认:①内马尔二级腓肠肌撕裂,康复期2-3周,昂切洛蒂:'把他带来毫无遗憾,等淘汰赛发力。'伊戈尔-蒂亚戈领衔前锋,维尼修斯/拉菲尼亚在侧。②摩洛哥:阿圭尔(腹股沟,全程缺席)+厄布德(膝,全程缺席)已确认;马兹劳伊(肩脱臼)临场决定。Tilt参数(巴西主λ×0.88,摩洛哥客λ×0.90)反映双向削弱:巴西3:0集成6.9%,@17.00=价值1.18,EV=+0.176/元;0:0集成10.3%,@10.00=价值1.03,EV=+0.031/元;所有HAD均为负EV,不出。选定:巴西3:0×10元(价值)+0:0×4元(价值)。⚠️ 出票前确认马兹劳伊首发与否。",
      enFull: "Final 20:33 BJT confirmation: (1) Neymar confirmed out with grade-2 right calf strain; Ancelotti: 'No regrets — we believe he can be decisive in the knockouts.' Igor Thiago leads the line with Vinicius Jr. and Raphinha wide. (2) Morocco: Aguerd (groin, full-tournament) and Abde (knee, full-tournament) confirmed absent; Mazraoui (shoulder dislocation) is a game-time decision. Post-tilt (home-λ×0.88 for Neymar absence; away-λ×0.90 for Morocco defensive attrition): Brazil 3:0 ensemble 6.9% × @17.00 = value 1.18 (EV+0.176/yuan); 0:0 10.3% × @10.00 = value 1.03 (EV+0.031/yuan). All HAD outcomes remain negative EV — excluded from slip. ⚠️ Confirm Mazraoui's participation 30 min before kickoff — his absence further weakens Morocco's backline.",
      links: [{"name": "Olympics.com · Neymar ruled out of opener", "url": "https://www.olympics.com/en/news/neymar-ruled-out-brazil-world-cup-2026-opener"}, {"name": "Morocco World News · Mazraoui shoulder dislocation", "url": "https://www.moroccoworldnews.com/2026/06/316592/mazraoui-diagnosed-with-shoulder-dislocation-ahead-of-brazil-2026-world-cup-opener/"}]
    },
    { date: "06-13", match: "卡塔尔 vs 瑞士", impact: "媒体共识转向恩博洛首发·覆盖早前阿姆多尼先发预测", tone: "home",
      text: "多家媒体预测出现反转:RotoWire/tips.gg/Yahoo Sports 均将布雷尔·恩博洛列为首发中锋(预测阵:Kobel;Widmer,Elvedi,Akanji,Rodríguez;Freuler,Xhaka;Ndoye,Aebischer,Manzambi;Embolo),覆盖6小时前SportsMole/khelnow预测的'阿姆多尼先发'。推测穆里尼奥认定恩博洛6月5日后的训练量已达首发标准;恩博洛大赛经验与对抗强度均高于阿姆多尼,利好瑞士进攻效率。(来源:RotoWire/tips.gg)",
      en: "Media consensus has reversed: RotoWire, tips.gg and Yahoo Sports all project Breel Embolo to START against Qatar (predicted XI: Kobel; Widmer, Elvedi, Akanji, Rodríguez; Freuler, Xhaka; Ndoye, Aebischer, Manzambi; Embolo), superseding earlier SportsMole/khelnow calls for Amdouni up front. Embolo's six days of training since his June 5 arrival deemed sufficient; his superior aerial presence and big-game experience are a marginal upgrade on Amdouni. (per RotoWire / tips.gg)",
      full: "上一巡检(约1小时前)SportsMole与khelnow.com预测阿姆多尼首发9号,理由是恩博洛6月5日才抵营、集训时间不足。最新媒体共识逆转:①RotoWire卡塔尔vs瑞士预测文章将恩博洛列为首发中锋;②tips.gg预测XI:Kobel;Widmer,Elvedi,Akanji,Rodríguez;Freuler,Xhaka;Ndoye,Aebischer,Manzambi;Embolo;③Yahoo Sports给出相同阵容。变化逻辑:恩博洛六天密集训练被穆里尼奥认定满足首发要求,其身体对抗和空中优势在对阵卡塔尔防线时比阿姆多尼更具针对性。实际影响为正:恩博洛大赛经验更丰富、高压对抗下的控球衔接更可靠,瑞士集成74.2%客胜概率维持不变或微升。⚠️ 官方首发仍需临场30分钟前确认,此条为媒体预测共识,非官方消息。",
      enFull: "Approximately six hours ago, SportsMole and khelnow.com predicted Amdouni to start over Embolo, citing Embolo's late June 5 arrival and insufficient integrated training time. The media consensus has now reversed. RotoWire's match preview, tips.gg, and Yahoo Sports all now project Embolo in the starting XI with the predicted lineup reading: Kobel; Widmer, Elvedi, Akanji, Rodríguez; Freuler, Xhaka; Ndoye, Aebischer, Manzambi; Embolo. The likely reasoning is that six intensive training days satisfied Murat Yakin's fitness threshold, and Embolo's physical profile — aerial dominance, strength in tight spaces — is better suited to pin back Qatar's center-backs than Amdouni. Practical assessment: Embolo starting is a marginal positive over Amdouni given superior big-game experience and hold-up play reliability. Switzerland's 74.2% ensemble win probability is unchanged or very slightly upgraded. ⚠️ Official XI confirmed 30 minutes before kickoff — treat all predictions as provisional until then. This item supersedes the earlier 'Amdouni to start' entry.",
      links: [{"name": "RotoWire · Qatar vs Switzerland preview", "url": "https://www.rotowire.com/soccer/article/qatar-vs-switzerland-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-b-117815"}, {"name": "tips.gg · Qatar vs Switzerland predicted lineups", "url": "https://tips.gg/article/qatar-switzerland-predicted-lineups-story/"}]
    },
    { date: "06-13", match: "澳大利亚 vs 土耳其", impact: "土耳其三主力受伤·恰尔汗奥卢/耶尔德兹/卡迪奥卢均临场疑问·耶尔德兹实际几乎出局", tone: "home",
      text: "土耳其对澳大利亚揭幕战伤情雪上加霜:队长恰尔汗奥卢(小腿)、明星球员耶尔德兹(小腿)、左后卫卡迪奥卢均被列为临场决定;耶尔德兹单独训练,SportsMole称'令人惊讶的是他能上场'——实际几乎出局。三人若均缺席,土耳其中场创造力与左路纵深大损,澳大利亚防线压力显著减轻。(来源:RotoWire/SportsMole)",
      en: "Turkey head into their Australia opener with three key men in doubt: captain Hakan Calhanoglu (calf, game-time), Kenan Yildiz (calf, effectively out — 'would be a surprise if he features') and Ferdi Kadioglu (game-time). If Yildiz and Calhanoglu both miss, Turkey lose their primary creators; Australia have no injury concerns. (per RotoWire / SportsMole)",
      full: "土耳其对澳大利亚揭幕战伤情雪上加霜:①队长恰尔汗奥卢(小腿):被RotoWire列为临场疑问,部分媒体预测阵容仍将他安置在中场锚链位置,但确定性存疑。②耶尔德兹(小腿):近日单独训练,SportsMole明确表示'如果他能上场将是令人惊讶的事',基本确认缺席揭幕战——上一条情报(耶尔德兹升级临场疑问)由本条覆盖。③卡迪奥卢(左后卫):被RotoWire列为临场疑问。三人若同时缺席,土耳其阵型变动显著:居莱尔与卡赫韦吉需独撑创造力,左路纵深大幅削弱;澳大利亚无伤情困扰,身体状态完整。集成模型给澳大利亚20.3%胜率,若土耳其伤情属实,实际胜率或小幅上修。⚠️ 恰尔汗奥卢首发与否将在开球前最后确认。",
      enFull: "Turkey's injury situation ahead of their World Cup opener against Australia has escalated into a three-man concern. Captain Hakan Calhanoglu is listed as a game-time decision with a calf complaint — multiple sources project him in the starting XI, but his inclusion is far from certain. Kenan Yildiz trained individually in the days before the match and SportsMole state it 'would be a surprise to see him feature,' making him effectively an absentee for the opener (this item supersedes the earlier 'game-time doubt' entry). Ferdi Kadioglu, the versatile left-back/winger, is also on the game-time decision list. If all three miss out, Turkey's creative depth is severely reduced — Arda Güler and Irfan Kahveci would carry the attacking burden alone, and the left flank loses its dynamism. Australia have no injury concerns going into the match. ⚠️ Calhanoglu's participation should become clearer in the 30-minute pre-kickoff confirmation window.",
      links: [{"name": "RotoWire · Australia vs Turkey preview", "url": "https://www.rotowire.com/soccer/article/australia-vs-turkey-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-d-117953"}, {"name": "SportsMole · Turkey injury list", "url": "https://www.sportsmole.co.uk/football/australia/world-cup/team-news/australia-vs-turkey-injury-suspension-list-predicted-xis_599006.html"}]
    },
    { date: "06-13", match: "卡塔尔 vs 瑞士", impact: "多媒体预测阿姆多尼首发中锋·恩博洛训练时间不足或仅替补登场", tone: "home",
      text: "多家媒体(SportsMole/khelnow.com)预测泽基·阿姆多尼(伯恩利)而非布雷尔·恩博洛作为首发中锋:原因是恩博洛因签证风波晚到营地,完整集训时间不足。穆里尼奥或以状态稳定的阿姆多尼先发,留恩博洛作下半场冲击牌。瑞士进攻整体仍强,但首发锋线对抗强度略减。(来源:SportsMole/khelnow.com)",
      en: "Multiple sources (SportsMole, khelnow.com) predict Zeki Amdouni (Burnley) to start as centre-forward ahead of Breel Embolo against Qatar — Embolo's late visa arrival left him short on integrated training time. Switzerland's attack remains capable, but Embolo may feature only as an impact sub. (per SportsMole / khelnow.com)",
      full: "多家媒体预测首发变化:①SportsMole的瑞士阵容预测将泽基·阿姆多尼(伯恩利,22岁)列为中锋首发,恩博洛替补;②khelnow.com的预测XI同样将阿姆多尼列在9号位;③SI.com则维持恩博洛首发预测——媒体存在分歧。分析逻辑:恩博洛于6月5日确认签证并飞抵圣地亚哥,与全程集训的阿姆多尼相比完整训练时间差约10天。穆里尼奥可能选择以阿姆多尼先发,为恩博洛保留更多体能到关键时刻。对瑞士的实际影响较小:阿姆多尼本赛季伯恩利联赛11球,执行能力可靠;恩博洛的对抗强度和大赛经验更高,是理想替补砝码。⚠️ 官方首发待临场30分钟前确认,两人均具首发可能。",
      enFull: "The striker debate for Switzerland's Qatar opener has crystallized around Zeki Amdouni and Breel Embolo. SportsMole's predicted Swiss lineup places Amdouni at center-forward with Embolo among the substitutes; khelnow.com's predicted XI mirrors that call. The rationale is logistical — Embolo only arrived in San Diego on June 5 after his visa complications, leaving him roughly 10 days of integrated squad training versus Amdouni who has been with the group throughout. SI.com still projects Embolo in the XI, so genuine media disagreement remains. In practical terms the difference is modest: Amdouni scored 11 goals for Burnley this season and is a reliable finisher; Embolo brings superior physicality and big-game experience from the bench. ⚠️ Official lineups confirmed 30 minutes before kickoff — treat all predictions as provisional.",
      links: [{"name": "SportsMole · Switzerland predicted XI", "url": "https://www.sportsmole.co.uk/football/switzerland/world-cup-2026/predicted-lineups/the-old-guard-how-switzerland-could-line-up-against-qatar_598999.html"}, {"name": "khelnow.com · Switzerland XI vs Qatar", "url": "https://khelnow.com/football/world-football-switzerland-xi-vs-qatar-predicted-lineup-team-news-fifa-world-cup-202606"}]
    },
    { date: "06-13", match: "卡塔尔 vs 瑞士", impact: "瓦尔加斯完全康复随队训练·临场疑问解除·预计首发", tone: "away",
      text: "瑞士右翼卢本·瓦尔加斯(奥格斯堡)伤情解除:RotoWire更新为'完全随队训练',khelnow.com预测首发XI中他回归右路先发——此前因肌肉不适被列为'临场疑问'的阴云消散,瑞士定位球核心支点和角球传递随之恢复完整。上条存疑情报已被本条覆盖。(来源:RotoWire/khelnow.com)",
      en: "Switzerland winger Ruben Vargas (Augsburg) upgraded to full training — RotoWire bulletin reads 'Trains fully with Switzerland,' and khelnow.com's predicted XI restores him to right wing; earlier game-time doubt is resolved. Previous 'questionable' item superseded. (per RotoWire / khelnow.com)",
      full: "瓦尔加斯此前因赛季末对阵塞尔塔维戈的8分钟替补登场后肌肉不适复发,被列为对卡塔尔揭幕战的临场疑问球员。最新RotoWire更新标题为'Trains fully with Switzerland'(完全随队训练),是对上一条'Trains partially'(部分训练)的明确升级。khelnow.com的预测首发XI同步将他列在右路位置,与恩博洛+扎卡/弗罗伊勒的主体系无缝衔接。这意味着瑞士角球/定位球核心传球点恢复到位,里德无需顶替右路,阵型整洁度提升。在已有恩博洛确认可战的基础上,瑞士锋线深度完整,对卡塔尔的火力输出预期保持在集成74.2%客胜概率以上。⚠️ 官方首发仍需临场30分钟前核实,但伤情层面疑问已基本消除。",
      enFull: "Vargas had re-aggravated a muscular issue after coming off the bench briefly for Celta Vigo near the end of the season — leaving his availability for the Qatar opener uncertain. RotoWire's latest update is headlined 'Trains fully with Switzerland,' a clear upgrade from the earlier 'Trains partially with team' bulletin. khelnow.com's predicted starting XI simultaneously slots him back on the right wing alongside the Xhaka/Freuler midfield engine and Embolo through the middle. With this upgrade, Switzerland's set-piece delivery from wide-right (Vargas is the primary corner taker) is restored, and Fabian Rieder does not need to cover the right flank — a cleaner tactical shape going into the opener. Combined with Embolo's earlier visa clearance, Switzerland arrive at the Qatar match with a near-complete attacking unit. ⚠️ Confirm official starting XI 30 minutes before kickoff — the injury situation is resolved, but lineup confirmation is routine practice.",
      links: [{"name": "RotoWire · Vargas trains fully", "url": "https://www.rotowire.com/soccer/headlines/ruben-vargas-injury-trains-fully-with-switzerland-519186"}, {"name": "khelnow.com · Switzerland XI vs Qatar", "url": "https://khelnow.com/football/world-football-switzerland-xi-vs-qatar-predicted-lineup-team-news-fifa-world-cup-202606"}]
    },
    { date: "06-13", match: "卡塔尔 vs 瑞士", impact: "恩博洛签证获批·确认加入大名单·揭幕战可上阵", tone: "home",
      text: "瑞士前锋布雷尔·恩博洛(摩纳哥)因2018年巴塞尔斗殴及2023年威胁罪相关材料被美国当局审查,无法随队出发;6月5日签证批准后飞抵圣地亚哥营地,主帅穆里尼奥确认参加对卡塔尔揭幕战。瑞士锋线实力完整,进攻火力无损。(来源:ESPN/Yahoo Sports)",
      en: "Switzerland striker Breel Embolo (Monaco) was unable to travel with the squad after his ESTA was placed under additional review tied to a 2018 altercation and a 2023 threats conviction; he received visa approval and flew to San Diego on June 5, confirmed available for the Qatar opener — Switzerland's attacking firepower is intact. (per ESPN / Yahoo Sports)",
      full: "恩博洛于6月5日持最新签证抵达瑞士圣地亚哥集训基地,结束了长达数日的法律-外交风波。美国当局在出发前对其ESTA授权启动额外审查,原因涉及两件记录在案的法律事件:①2018年巴塞尔斗殴案件相关文件;②2023年因多次威胁行为被判处缓期处罚,该判决今年初正式生效具有法律约束力。瑞士足协为此联系美国领馆提交法院记录,最终于周三获批临时签证。恩博洛当即飞赴圣地亚哥,完成了6月14日揭幕战前的全部集训。对阵卡塔尔一役,他预计作为中锋首发——配合格拉内特·扎卡/雷莫·弗罗伊勒中场体系,以速度和对抗能力针对卡塔尔防线。⚠️ 此事件无队内影响,穆里尼奥阵容规划始终以恩博洛在场为前提。",
      enFull: "Embolo's ESTA travel authorization was flagged for additional review at the last minute, preventing him from boarding the squad's charter. U.S. authorities requested documentation related to two legal records: a 2018 altercation in Basel and a 2023 suspended fine for multiple threats that became legally binding earlier this year. The Swiss football federation coordinated with the U.S. Embassy in Bern, submitted the court records, and secured a temporary visa by Wednesday. Embolo flew immediately to San Diego and completed all pre-match training before the June 14 Qatar opener. He is projected to start as the center forward — his pace and physical presence as the focal point of Switzerland's attack remains intact alongside the Xhaka/Freuler midfield engine. ⚠️ No squad-related fallout: Switzerland's coaching staff planned around Embolo from day one; his clearance removes the only meaningful uncertainty in their lineup depth.",
      links: [{"name": "ESPN · Embolo gets visa", "url": "https://www.espn.com/soccer/story/_/id/48969072/switzerland-striker-embolo-gets-visa-us-world-cup"}, {"name": "Yahoo Sports · Swiss striker cleared", "url": "https://ca.sports.yahoo.com/news/nightmare-over-breel-embolo-switzerland-075451350.html"}]
    },
    { date: "06-13", match: "澳大利亚 vs 土耳其", impact: "耶尔德兹升级临场决定·部分随队训练·预计出场", tone: "away",
      text: "土耳其耶尔德兹(尤文图斯)小腿伤情好转:从单独训练升级为部分随队训练,被列为临场决定且'预计出场'——较此前'首发概率极低'显著利好土耳其;若他最终首发,土耳其右路爆点恢复,澳大利亚胜@5.30的价值1.07可能降至接近甚至低于1.0。(来源:RotoWire/Sports Mole)",
      en: "Kenan Yildiz (Juventus) calf injury upgraded: from training separately to training partially with the Turkey squad, now a game-time decision 'projected to feature' — far more optimistic than earlier reports. If Yildiz starts, Turkey's right-flank explosiveness is restored and Australia's upset value at @5.30 may fall to or below 1.0. (per RotoWire / Sports Mole)",
      full: "耶尔德兹在土耳其亚利桑那训练营期间因小腿问题单独训练,此前外界判断'首发出场将是意外之举'。RotoWire最新动态更新为'Trains partially with team',Sports Mole预测首发中也指出'三名伤愈临场决定球员均预计出场'——其中包括耶尔德兹。若他首发:土耳其右路宽域直线爆破完全复原,我们集成概率20.3%(澳大利亚胜)中内含的耶尔德兹缺阵折扣将被收回,5.30赔率对应价值1.07可能降至接近1.0甚至以下,押注价值消失。若他仍替补:居勒主控,现有评估基本维持,澳大利亚价值信号有效。⚠️ 临场前30分钟确认土耳其官方首发是本场最关键的临场变量,定票必须等首发确认后再执行。",
      enFull: "Yildiz had been training individually in Arizona due to a calf complaint, with multiple outlets calling it 'a surprise if he starts.' RotoWire's latest bulletin is now headlined 'Trains partially with team,' and Sports Mole's team-news preview lists him among three game-time decisions 'all currently projected to feature.' If Yildiz starts: Turkey's direct wide-channel threat on the right is fully restored. Our ensemble Australia-win probability of 20.3% carries an implicit Yildiz-absence discount; that discount is partially or fully removed if he plays, and the true value of Australia @5.30 may fall to or below 1.0 — removing the betting case. If benched: the existing assessment and value call hold. ⚠️ Confirm Turkey's official starting XI no later than 30 minutes before kickoff — this is the single most important late-breaking variable for the Australia stake decision.",
      links: [{"name": "RotoWire · Yildiz trains partially with team", "url": "https://www.rotowire.com/soccer/headlines/kenan-yildiz-injury-trains-partially-with-team-519087"}, {"name": "Sports Mole · Australia vs Turkey team news", "url": "https://www.sportsmole.co.uk/football/australia/world-cup/team-news/australia-vs-turkey-injury-suspension-list-predicted-xis_599006.html"}]
    },
    { date: "06-13", match: "巴西 vs 摩洛哥", impact: "阿圭尔+阿布代确认缺席整届世界杯·萨达内替补入队", tone: "home",
      text: "摩洛哥伤情升级:最强中卫阿圭尔(马赛)确认缺席整届世界杯——并非因伤复发,而是腹股沟手术后体能不足以应对顶级赛事,本人表态'康复顺利但竞技状态未达标';边锋阿布代膝伤亦确认缺席全程。两人分别由萨达内、斯巴伊火线替补。此前情报将阿圭尔标为'首发存疑',现升级为整届缺阵。(来源:GhanaSoccernet/DailySports)",
      en: "Morocco injury upgrade: CB Nayef Aguerd (Marseille) confirmed out for the entire World Cup — not a relapse, but insufficient match fitness post-groin surgery; he stated 'recovery has gone well but I am not at the level required.' Winger Ez Abde is also out for the full tournament. Marwane Saadane and Amine Sbai join as replacements. Previous item listed Aguerd as 'doubtful for opener' — upgraded to full-tournament absence. (per GhanaSoccernet / DailySports)",
      full: "阿圭尔3月因腹股沟伤动手术,此后未参加任何俱乐部比赛。摩洛哥宣布他从大名单退出,本人随即发文:'我的康复进展顺利,伤病已经过去,但我目前的竞技状态还不足以参加世界杯这样的顶级赛事。'这意味着摩洛哥在揭幕战对阵巴西时,2022年赖以成名的核心中卫链(阿圭尔+萨伊斯)将缺失一环;依萨·迪奥普与沙迪·里亚德需临时顶起后防。边锋阿布代的膝伤(1:1平挪威热身赛中受伤)经扫描确认为中度韧带撕裂,全程缺席。摩洛哥防守深度和进攻宽度双双受损——对巴西维尼修斯/拉菲尼亚的边路突破构成重大利好。⚠️ 马兹劳伊(肩伤)仍为临场决定,预计跑满90分钟能力存疑。",
      enFull: "Aguerd operated on his groin in March and has not played club football since. Morocco announced his withdrawal; Aguerd posted: 'My recovery has gone well and the injury is behind me — but I am not yet at the competitive level required to participate in the World Cup.' This removes Morocco's best aerial center-back from the entire tournament. Issa Diop and Chadi Riad form the likely pairing versus Brazil. Winger Ez Abde had scans confirm a moderate knee ligament tear (sustained in the 1-1 warmup vs Norway) and is also out for the full competition. The double absence weakens both Morocco's defensive compactness and their attacking width on the right flank — a material positive for Brazil's Vinicius Jr. and Raphinha. ⚠️ Mazraoui (shoulder) remains a late call; his ability to last 90 minutes is uncertain.",
      links: [{"name": "GhanaSoccernet · Aguerd ruled out", "url": "https://ghanasoccernet.com/world-cup-2026-morocco-defender-nayef-aguerd-gutted-after-being-ruled-out-of-tournament"}, {"name": "DailySports · Morocco double blow", "url": "https://dailysports.net/news/morocco-suffer-double-injury-blow-as-nayef-aguerd-and-abde-ezzalzouli-are-ruled-out-of-the-2026-world-cup/"}]
    },
    { date: "06-13", match: "巴西 vs 摩洛哥", impact: "韦斯利大腿内收肌撕裂·缺席整届世界杯·埃德森补位", tone: "away",
      text: "巴西22岁右后卫韦斯利(罗马)6月7日热身赛对阵埃及仅17分钟后流泪离场,MRI确认左大腿内收肌严重撕裂,缺席整届世界杯;埃德森(亚特兰大)火线征召。达尼洛/伊班尼斯将应急顶右后卫,均非本位,巴西右路可能成为摩洛哥定点突破口。(来源:Fox Sports/heavy.com)",
      en: "Brazil's 22-year-old right-back Wesley (Roma) left in tears after just 17 minutes in the June 7 friendly vs Egypt; MRI confirmed a severe left thigh adductor tear ruling him out of the entire World Cup — Éderson (Atalanta) is his replacement. Danilo or Ibáñez at right-back are stopgap solutions; Morocco may target Brazil's right flank as a vulnerability. (per Fox Sports / heavy.com)",
      full: "韦斯利是巴西本届世界杯主力右后卫人选,在6月7日克利夫兰举行的对阵埃及热身赛中第17分钟即感不适,流泪被担架抬离场。当日核磁共振显示左大腿内收肌严重损伤,昂切洛蒂随即于6月8日征召亚特兰大中场埃德森(被测试于右后卫位置)填补名额。达尼洛(经验丰富但年龄大)和伊班尼斯(惯用中卫)是临时右后卫选项,两人均非本位球员。在对阵摩洛哥时,右路防守短板如被哈基米或阿布代(已伤出)的替位者针对,可能产生危险。整体上,巴西在攻防两端均有缺损(无内马尔+右后卫降级),不过模型集成仍维持60.1%主胜概率,因为对手摩洛哥伤情更为严重。",
      enFull: "Wesley was Brazil's first-choice right-back entering the World Cup. In a June 7 warmup vs Egypt in Cleveland, he left the field in tears after just 17 minutes. MRI confirmed a severe left adductor tear; Ancelotti called up Éderson (Atalanta) on June 8 as the replacement, testing him in the right-back slot during training. Danilo (veteran, advanced age) or Ibáñez (natural center-back) are the in-tournament options at right-back — neither a specialist. Against Morocco, their right flank could be targeted by Hakimi (Morocco's best player) pushing forward. The compounded absences (Neymar + Wesley) weaken Brazil at both ends, though the ensemble model holds at 60.1% win probability given Morocco's even larger injury toll (Aguerd + Abde fully out, Mazraoui doubtful).",
      links: [{"name": "Fox Sports · Wesley ruled out", "url": "https://www.foxsports.com/stories/soccer/brazil-right-back-wesley-is-out-of-the-world-cup-with-a-thigh-injury-and-ederson-is-replacing-him"}, {"name": "heavy.com · Brazil injury blow", "url": "https://heavy.com/sports/soccer/brazil-dealt-crushing-blow-as-rising-star-franca-wesley-ruled-out-of-2026-world-cup/"}]
    },
    { date: "06-13", match: "海地 vs 苏格兰", impact: "Gilmour 膝伤缺席整届世界杯·苏格兰中场受损", tone: "home",
      text: "苏格兰中场核心比利·吉尔摩(纳波利,24岁)在WC2026最后一场热身赛4-1胜库拉索时无接触倒地受伤,扫描确认膝盖受损,缺席整届世界杯;教练克拉克:'这太残忍了。'曼联19岁中场泰勒·弗莱彻补位入选大名单。吉尔摩是苏格兰进攻组织和中场传导最关键环节,其缺席削弱中场衔接,海地防守反击空间或相对扩大。(来源:Sky Sports/beIN Sports)",
      en: "Scotland midfielder Billy Gilmour (Napoli, 24) suffered a knee injury in the 4-1 warm-up win over Curacao and has been ruled out of the entire 2026 World Cup; coach Steve Clarke called it 'so cruel.' Manchester United teenager Tyler Fletcher (19) replaces him in the squad — Scotland lose their most influential midfield creative link ahead of the Haiti opener. (per Sky Sports / beIN Sports)",
      full: "吉尔摩在苏格兰出发前最后一场热身赛中无接触倒地,经扫描确认膝盖韧带受损,将返回俱乐部进行康复。这是苏格兰本届世界杯首个退赛名额,主帅克拉克公开表示:'为比利感到心碎,因为他是我们世界杯预选赛不可或缺的一部分,伤病时机太残忍了。'泰勒·弗莱彻(19岁,曼联)在临场紧急征召期间获得优先考虑,尽管此前仅为苏格兰出战1场。吉尔摩的缺席使苏格兰在对阵海地的揭幕战中,中场控制力和快速推进能力明显下降。需额外关注:麦克托米奈周四因胃部不适缺席训练,周五恢复且预计首发;斯科特·麦肯纳首发状态也在疑问之中。若多名关键球员同时打折扣,苏格兰揭幕战压迫强度将进一步受限。",
      enFull: "Gilmour collapsed without contact during the final warm-up, a 4-1 win over Curacao; a post-match scan confirmed a knee injury ruling him out for the entire tournament — Scotland's first World Cup withdrawal. Clarke's statement: 'I am devastated for Billy — the timing of this injury is so cruel and we all feel for him.' Tyler Fletcher, a 19-year-old Manchester United midfielder who earned his first cap vs Curacao, has been called into the squad as the replacement. Gilmour's absence strips Scotland of their primary deep-lying creative outlet. Additional concern: McTominay missed Thursday training with a stomach complaint but trained fully on Friday and is expected to start; centre-back Scott McKenna is also a doubt. Stacking injury concerns complicate Scotland's opener against a Haiti side with a clean bill of health.",
      links: [{"name": "Sky Sports · Gilmour WC injury", "url": "https://www.skysports.com/football/news/12017/13549373/billy-gilmour-scotland-midfielder-ruled-out-of-world-cup-with-knee-injury"}, {"name": "beIN Sports · Scotland lose Gilmour", "url": "https://www.beinsports.com/en-us/soccer/fifa-world-cup-2026/articles/scotland-lose-billy-gilmour-before-the-2026-world-cup-after-knee-injury-in-major-blow-to-their-midfield-ahead-of-the-tournament-2026-05-31"}]
    },
    { date: "06-13", match: "卡塔尔 vs 瑞士", impact: "瓦尔加斯肌肉伤疑问·临场决定是否出战", tone: "home",
      text: "瑞士右翼卢本·瓦尔加斯(奥格斯堡)因肌肉伤疑问出战对卡塔尔揭幕战,伤势在赛季末对阵塞尔塔维戈替补出场后复发,临场最终决定。若缺阵,法比安·里德顺移右翼,瑞士角球和定位球传递少一核心支点;整体实力影响有限,扎卡/弗罗伊勒主体系完整。(来源:RotoWire/Sports Mole)",
      en: "Switzerland winger Ruben Vargas (Augsburg) is questionable for the Qatar opener with a muscle issue that flared after his substitute appearance against Celta Vigo; final call at kickoff. If absent, Rieder shifts right and Switzerland lose their primary corner/set-piece delivery from the right flank — limited overall impact with Xhaka/Freuler's core system intact. (per RotoWire / Sports Mole)",
      full: "瓦尔加斯此前因伤缺阵,赛季末从塞尔塔维戈替补登场约8分钟后再次出现肌肉不适,导致世界杯揭幕战出场存疑。RotoWire和Sports Mole均将其列为疑问状态,可能返回日期标注为比赛当日(6月14日)。若瓦尔加斯缺席:里德从内切型中路移到右路,米歇尔·埃比谢尔可能左路出场;角球/任意球主传递员缺失可能影响定位球布置。对卡塔尔的意义:瑞士整体以1.24国际盘定价在80%胜率区间,瓦尔加斯缺阵无法根本改变力量对比,但竞彩开盘若出现瑞士胜1.30+,此利空可作为小仓保守信号之一。⚠️ 开赛前30分钟关注瑞士官方首发确认。",
      enFull: "Vargas sustained a muscular setback approximately eight minutes after coming off the bench for Celta Vigo — re-aggravating a previous injury that had already sidelined him since late November. RotoWire and Sports Mole both flag him as questionable with a potential return on matchday. If Vargas misses: Fabian Rieder shifts to right wing, and Michel Aebischer may retain the left channel; Switzerland lose their primary corner and free-kick taker from wide-right. Against Qatar (priced at 1.24 ≈ 80% win probability internationally), this does not shift the outcome prediction materially — but if China Lottery opens Switzerland at 1.30 or higher, Vargas's doubt is one factor supporting a cautious approach. ⚠️ Confirm official XI 30 minutes before kickoff.",
      links: [{"name": "RotoWire · Qatar vs Switzerland preview", "url": "https://www.rotowire.com/soccer/article/qatar-vs-switzerland-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-b-117815"}, {"name": "Sports Mole · Qatar vs Switzerland team news", "url": "https://www.sportsmole.co.uk/football/switzerland/world-cup/team-news/qatar-vs-switzerland-injury-suspension-list-predicted-xis_598997.html"}]
    },
    { date: "06-13", match: "澳大利亚 vs 土耳其", impact: "耶尔德兹小腿伤单独训练·首发几乎出局", tone: "home",
      text: "土耳其最大牌新星凯南·耶尔德兹(尤文图斯)因小腿伤单独训练,首发概率极低;阿尔达·居勒(皇马)伤愈将首发登场。耶尔德兹缺失令土耳其右路爆点消失,进攻深度下降,澳大利亚爆冷胜的价值信号进一步增强。(来源:Sports Mole/Squawka)",
      en: "Turkey standout Kenan Yildiz (Juventus) is training alone with a calf injury and unlikely to start vs Australia; Arda Guler (Real Madrid) is fit and set to play from kick-off. Yildiz's likely absence removes Turkey's explosive right-side threat — a further positive signal for Australia's upset price. (per Sports Mole / Squawka)",
      full: "耶尔德兹本赛季为尤文立下战功,入选土耳其大名单后小腿出现不适,近日一直单独康复训练而非参与全队集训。Sports Mole与Squawka双双在预测首发XI中将其排除,认为'他首发出场将是意外之举'。皇马中场居勒则完成赛季末伤病复出,据报将从开场首发;其内切型踢法可部分弥补创造力,但无法复制耶尔德兹的宽域直线爆破——土耳其的快攻威力在无耶尔德兹情况下明显下降。这对我们押澳大利亚胜@5.30(价值1.07)构成利好:土耳其进攻端削弱,澳大利亚定位球与整体跑动反超概率相对提升。⚠️ 临场前确认耶尔德兹是否奇迹入选首发。",
      enFull: "Yildiz developed a calf problem after Turkey's squad was announced and has been training individually — Sports Mole and Squawka both omit him from their predicted XIs, calling it 'a surprise if he starts.' Real Madrid midfielder Arda Guler has recovered from his end-of-season injury and is expected to start from kick-off, providing creativity as an inside-forward. However, Guler cannot replicate Yildiz's direct wide-channel explosiveness — Turkey's counter-attacking pace threat is meaningfully reduced without him. For our Australia-to-win position at @5.30 (value 1.07): a weakened Turkish attack increases Australia's probability of controlling transitions and exploiting set pieces. ⚠️ Monitor official lineups at kickoff for any Yildiz surprise inclusion.",
      links: [{"name": "Sports Mole · Turkey lineup vs Australia", "url": "https://www.sportsmole.co.uk/football/australia/world-cup-2026/predicted-lineups/will-yildiz-be-involved-how-turkey-could-line-up-against-australia_599009.html"}, {"name": "Squawka · Australia vs Turkey team news", "url": "https://www.squawka.com/en/news/world-cup/australia-vs-turkey-team-news-predicted-lineups/"}]
    },
    { date: "06-13", match: "巴西 vs 摩洛哥", impact: "阿圭尔/马兹劳伊/厄布德·摩洛哥防守链堆叠伤缺", tone: "home",
      text: "摩洛哥伤情叠加:最强中卫阿圭尔(耻骨炎)首发存疑,左后卫马兹劳伊(肩伤)能力待定,边锋厄布德膝韧带中度撕裂缺席整个小组赛。2022四强赖以成名的防守架构在揭幕战即承压,巴西双翼维尼修斯/拉菲尼亚的突破空间或扩大。(来源:Sports Mole/RotoWire)",
      en: "Morocco's injury list piles up: best CB Nayef Aguerd (pubalgia) is questionable, left-back Mazraoui (shoulder) is doubtful, and winger Ez Abde is ruled out of the entire group stage with a moderate knee ligament sprain — the defensive spine that reached the 2022 semis faces its first test weakened. (per Sports Mole / RotoWire)",
      full: "摩洛哥在首战前遭遇三重伤情:①最佳中卫纳伊夫·阿圭尔因耻骨炎未在预测首发XI中出现,伊萨·迪奥普与沙迪·里亚德预计顶上;②左后卫努塞尔·马兹劳伊肩伤存疑,全场作战能力不确定;③边锋厄兹·阿布德核磁共振确认膝关节韧带中度撕裂,缺席整个小组赛阶段。三名关键球员伤情叠加,削弱了2022年帮助摩洛哥杀入四强的低失球+定位球防守体系。巴西维尼修斯和拉菲尼亚面对拼凑后防,侧路突破空间或增大——这在一定程度上抵消了内马尔缺阵对巴西进攻指标的负面影响。摩洛哥的克星剧本依赖完整防守链,三处漏洞同时出现令其防反成功率难以保证。",
      enFull: "Morocco arrive at their opener carrying a three-point injury burden: (1) Best center-back Nayef Aguerd is absent from predicted XIs due to pubalgia, with Issa Diop and Chadi Riad expected to partner at the back; (2) Left-back Noussair Mazraoui is doubtful with a shoulder injury and may not last 90 minutes; (3) Winger Ez Abde had scans confirm a moderate knee ligament sprain, ruling him out of the entire group stage. The compounded injury toll weakens the defensive framework that carried Morocco to the 2022 semis on low goals conceded and set-piece efficiency. Brazil's Vinicius Jr. and Raphinha face a patchwork backline — potentially widening the space in behind that neutralizes Morocco's counter-attacking blueprint. This development partially offsets the negative signal from Neymar's absence on Brazil's attacking metrics.",
      links: [{"name": "Sports Mole · Brazil vs Morocco preview", "url": "https://www.sportsmole.co.uk/football/brazil/world-cup-2026/preview/brazil-vs-morocco-prediction-team-news-lineups_598948.html"}, {"name": "RotoWire · Brazil vs Morocco", "url": "https://www.rotowire.com/soccer/article/brazil-vs-morocco-preview-predicted-lineups-team-news-tactical-analysis-2026-world-cup-group-c-117816"}]
    },
    { date: "06-13", match: "巴西 vs 摩洛哥", impact: "内马尔小腿二级撕裂·确认缺席揭幕战", tone: "away",
      text: "内马尔(34岁)因小腿二级撕裂缺席6月14日对摩洛哥首战:巴西足协6月8日核磁共振显示康复顺利但仍需2-3周,昂切洛蒂称'无悔把他带来,等淘汰赛发力'。伊戈尔·蒂亚戈料领衔前锋,维尼修斯/拉菲尼亚/库尼亚三叉戟依然高火力,但定点攻坚创造力下降。(来源:ESPN/Yahoo Sports)",
      en: "Neymar (34) confirmed out for Brazil's June 14 opener vs Morocco with a grade-2 calf strain: a June 8 CBF scan showed improvement but projected 2-3 more weeks of recovery; Ancelotti said 'no regrets — waiting for the knockouts.' Igor Thiago is expected to lead the line ahead of Vinicius Jr., Raphinha and Matheus Cunha. (per ESPN / Yahoo Sports)",
      full: "5月中旬小腿二级撕裂后,内马尔被带进大名单但缺席了对巴拿马、埃及两场热身赛。巴西足协6月8日核磁共振报告显示康复进展顺利,仍明确注明需2-3周恢复期,确认揭幕战无缘登场。昂切洛蒂赛前明确表态:'把他带来毫无遗憾,我们相信他能在淘汰赛发挥关键作用。'阵型预计4-2-3-1:伊戈尔·蒂亚戈担任中锋,维尼修斯/拉菲尼亚/马修斯·库尼亚组成攻击三叉戟。对比分影响:1:0概率轻微下调,0:0概率略升。摩洛哥防线自身有伤情(见另条情报),两队互有削弱,整体比分盘谨慎看待。⚠️ 内马尔后续小组赛能否复出视康复进展而定。",
      enFull: "Neymar tore his calf (grade 2) in mid-May and joined Brazil's training camp despite missing warmups against Panama and Egypt. The CBF's June 8 scan confirmed steady recovery but maintained a 2-3 week timeline — ruling him out of the June 14 Morocco opener and leaving later group-stage availability uncertain. Coach Ancelotti stated: 'I have no regrets bringing him — we believe he can be decisive in the knockout stage.' Brazil are expected to deploy a 4-2-3-1: Igor Thiago leads the line with Vinicius Jr., Raphinha and Matheus Cunha in support. Scoring impact: 1:0 probability nudges marginally down, 0:0 slightly up. Note that Morocco's own injury accumulation (see separate item) partially offsets this — both sides are weakened, warranting caution on correct-score bets. ⚠️ Neymar's return for later group games depends on daily rehab progress.",
      links: [{"name": "ESPN · Ancelotti on Neymar", "url": "https://www.espn.com/soccer/story/_/id/48922562/brazil-carlo-ancelotti-neymar-injury-2026-world-cup"}, {"name": "Yahoo Sports · Neymar vs Morocco", "url": "https://sports.yahoo.com/articles/neymar-playing-vs-morocco-latest-083001270.html"}]
    },
    { date: "06-13", match: "美国 vs 巴拉圭", impact: "恩西索 MRI 无结构性撕裂·仍高度疑问", tone: "away",
      text: "恩西索伤情最新:核磁共振排除大腿肌肉结构性撕裂,这正是教练阿尔法罗能说'门敞开'的依据;但他依然被多家媒体评为'高度疑问',是否能参加对美国首场比赛将临场决定,若上场巴拉圭反击创造力接近完整状态。(来源:covers.com/freetips.com)",
      en: "Enciso MRI update: scans ruled out a structural muscle tear — the medical basis for coach Alfaro's 'door is open' comment — but he remains highly doubtful for the USA opener with a final call near kickoff; if he starts, Paraguay's counter-attacking creativity is near full strength. (per covers.com / freetips.com)",
      full: "6月5日对尼加拉瓜热身赛受伤后,巴拉圭医疗团队对恩西索进行了核磁共振检查,结果排除了大腿肌肉结构性撕裂,这是最关键的利好信息。没有结构性撕裂意味着损伤程度属于软组织挫伤/拉紧类别,康复窗口比韧带或肌腱损伤快得多。这也是教练阿尔法罗能够公开表示'大门敞开'的医学依据。然而多家媒体(covers.com伤情报告、freetips.com)仍将他评定为'高度疑问',是否入选首发将在临近开赛时作最终决定。若恩西索上场:巴拉圭的持球推进和反击创造力接近完整,美国胜面隐含优势收窄。若继续坐板凳:迭戈·戈麦斯顶上更靠前的位置,巴拉圭仍具备防守体系但缺乏顶级创造力。⚠️ 临场前30分钟必须盯@albirroja官方首发。",
      enFull: "Following his June 5 injury vs Nicaragua, Paraguay's medical team conducted an MRI on Enciso that came back negative for any structural muscle tear — the critical positive finding that medically justifies coach Alfaro's 'door is open' posture. No structural tear places the injury in the soft-tissue contusion/strain category, which has a shorter recovery window than ligament or tendon damage. Multiple outlets (covers.com injury tracker, freetips.com) still rate him highly doubtful for the USA opener, with a final call expected within 30 minutes of kickoff. If Enciso starts: Paraguay's hold-up play and counter-attacking creativity approaches full strength, narrowing the implied edge on USA-win bets. If he is benched: Diego Gomez slots into a more central role — Paraguay retain their defensive structure but lose their top-five-league creative outlet. ⚠️ Monitor @albirroja's official starting XI no later than 30 minutes before kickoff.",
      links: [{"name": "Covers.com 伤情报告", "url": "https://www.covers.com/world-cup/injury-report-2026"}, {"name": "FreeTips.com", "url": "https://www.freetips.com/football/julio-enciso-injury-20260610-0026/"}]
    },
    { date: "06-13", match: "美国 vs 巴拉圭", impact: "美国热身4场仅1胜3负·进攻防守均存漏洞", tone: "away",
      text: "美国队2026年4场热身赛仅1胜3负(3月2:5负比利时、0:2负葡萄牙;5月末3:2险胜塞内加尔;6月6日1:2负德国),东道主热身成绩堪忧,进攻衔接与防守韧性存疑;泡切蒂诺称'正赛与热身完全不同',Elo积分仍支撑53%主胜。(来源:NBC Sports/ESPN)",
      en: "USMNT went 1W-3L in four pre-tournament warmups (L 2-5 Belgium, L 0-2 Portugal, W 3-2 Senegal, L 1-2 Germany), raising questions over attacking connectivity and defensive resilience; Pochettino insists 'competitive football is completely different' and Elo models still give USA ~53% to win. (per NBC Sports / ESPN)",
      full: "美国队2026世界杯备战期间4场热身赛战绩堪忧:3月28日2:5负比利时,3月31日0:2负葡萄牙,5月31日3:2险胜塞内加尔,6月6日在芝加哥主场1:2负于德国——整体1胜3负,作为东道主成绩不甚理想。失球问题尤为突出,特别是对比利时一役暴露了中后场组织漏洞。主帅泡切蒂诺在赛前媒体会上坚持认为热身赛只是磨合战术与调试轮换的平台,'竞争性正式比赛完全是另一回事'。从数据模型角度看,美国队Elo积分仍维持在1840-1850区间,集成模型依然给出53.2%的主胜概率,热身成绩不直接映射正式赛。⚠️ 需关注的风险点:若巴拉圭成功打出高效防守反击,美国赛前暴露的防守连接问题可能在正赛第一时间被针对。",
      enFull: "The USMNT posted a 1W-3L record across four pre-tournament warmups: a heavy 2-5 loss to Belgium (March 28), 0-2 defeat to Portugal (March 31), a narrow 3-2 win over Senegal (May 31), and a 1-2 home loss to Germany (June 6 in Chicago). Defensive fragility — especially the Belgium concession rate — has been the most discussed concern. Coach Pochettino has consistently maintained that warmup friendlies serve as a tactical and rotation laboratory and that 'competitive international football is a completely different thing.' Statistically, the USMNT's Elo rating remains in the 1840-1850 range and the ensemble model still projects 53.2% USA-win probability, so warmup form is not directly mapped to this prediction. ⚠️ Risk flag: if Paraguay executes their counter-attacking system efficiently, the defensive gaps exposed in the warmups could be exploited from the opening whistle.",
      links: [{"name": "NBC Sports USMNT Schedule", "url": "https://www.nbcsports.com/soccer/news/usmnt-2026-schedule-results"}, {"name": "ESPN USA 1-2 Germany", "url": "https://www.espn.com/soccer/report/_/gameId/762260"}]
    },
    { date: "06-13", match: "加拿大 vs 波黑", impact: "已结算", tone: "neutral",
      text: "加拿大 1-1 波黑:卢基奇21分钟角球头球先拔头筹(波黑定位球体系兑现);替补拉林78分钟补射扳平,加拿大历史首个世界杯积分。模型集成(61.4%主胜)与手工选择均押加拿大胜,实际平局,方向全误,4张加拿大相关票归零。(来源:CBC/Yahoo Sports)",
      en: "Canada 1-1 Bosnia: Lukic headed in from a corner on 21 minutes; substitute Larin equalized in the 78th — Canada's first-ever point at a men's World Cup. Our model (61.4% Canada win) and manual picks both predicted Canada win; all four Canada-related bets lost. (per CBC / Yahoo Sports)",
      full: "波黑后卫卢基奇(Jovo Lukic)第21分钟顶入角球先破门,波黑定位球威胁如赛前所料兑现。哲科以替补身份下半场出场,持续制造制空威胁。替补拉林(Cyle Larin)第78分钟在禁区内补射入网,为加拿大历史性地在男子世界杯拿下首个积分。加拿大主场多伦多气氛热烈,但波黑防守组织远超预期。模型集成给出61.4%主胜概率,Elo模型更激进至72.4%,实际平局令所有模型蒙受高Brier惩罚(ens=0.928)。加拿大胜(44元)、比分0:0(12元)、比分1:0(14元)、2串1(16元)四票全灭,共损失86元,资金池从255.5降至169.5,跌破200保本线。",
      enFull: "Bosnia defender Jovo Lukic headed in from a corner on 21 minutes, validating the pre-match set-piece risk flag. Dzeko came on as a second-half substitute and continued to pose an aerial threat. Substitute Cyle Larin equalized in the 78th minute with a close-range finish, handing Canada their first-ever point at a men's FIFA World Cup. Despite a fervent home atmosphere in Toronto, Bosnia's defensive organization outperformed expectations. The model ensemble (61.4% Canada win) and manual picks all pointed to a Canada victory — the draw inflicts heavy Brier penalties across all models (ens=0.928). All four Canada-related tickets (win, 0:0, 1:0, two-fold parlay) were losses totaling 86 yuan, dropping the bankroll from 255.5 to 169.5 — below the 200 safety floor.",
      links: [{"name": "CBC Sports", "url": "https://www.cbc.ca/sports/livestory/fifa-world-cup-2026-canada-vs-bosnia-and-herzegovina-june-12-live-updates-9.7222390"}, {"name": "Yahoo Sports", "url": "https://sports.yahoo.com/soccer/live/world-cup-schedule-scores-live-updates-group-stage-usmnt-paraguay-canada-bosnia-herzegovina-180000044.html"}]
    },
    { date: "06-13", match: "美国 vs 巴拉圭", impact: "门将变阵:弗里斯料首发", tone: "neutral",
      text: "美国队门将锁定弗里斯(Matt Freese)首发:泡切蒂诺执教以来18场弗里斯首发15场,热身赛末战打满90分钟;特纳联赛扑救率78.2%优于弗里斯73.9%,双方竞争至临场,但用人脉络清晰指向弗里斯。门将变阵对比分赔率影响可忽略。(来源:Yahoo Sports/CBS Sports)",
      en: "USMNT GK race leans Freese: Matt Freese has started 15 of 18 matches under Pochettino and went the full 90 in the final warm-up; Turner has the better 2026 MLS save rate (78.2% vs 73.9%) but the selection pattern points clearly to Freese. Negligible impact on correct-score odds. (per Yahoo Sports / CBS Sports)",
      links: [{"name": "Yahoo Sports", "url": "https://sports.yahoo.com/soccer/article/matt-freese-usmnts-harvard-educated-goalkeeper-poised-to-start-world-cup-opener-vs-paraguay-003007584.html"}, {"name": "CBS Sports", "url": "https://www.cbssports.com/soccer/news/usmnts-matt-turner-push-for-world-cup-starting-spot-2026/"}],
      full: "美国队主帅泡切蒂诺(Pochettino)在揭幕战门将人选上倾向于弗里斯:过去18场比赛他首发15场,最近一场热身赛亦打满90分钟。特纳数据端表现更抢眼——2026年MLS扑救率78.2%(联赛第三),弗里斯为73.9%(第六);两人竞争健康,都表示'会支持最终人选'。用人脉络基本锁定弗里斯,但泡切蒂诺可能根据对位特点做最后微调。两人均为高水平职业门将,对押比分1:0或0:0的防守价值票无实质影响。⚠️ 官方首发候开赛前确认。",
      enFull: "USMNT head coach Pochettino is expected to hand the starting gloves to Matt Freese (NYCFC) for the Paraguay opener: Freese has started 15 of 18 matches under Pochettino and played a full 90 in the final warmup. Turner makes a statistical case — his 2026 MLS save rate of 78.2% ranks third in the league versus Freese's 73.9% (sixth) — and both keepers say they are ready for any role. Pochettino's 12-month usage pattern points firmly to Freese, though a last-minute call is not impossible. The GK choice does not materially affect the win-probability or the value assessment on the 1:0 or 0:0 correct-score bets. ⚠️ Confirm at kickoff." },
    { date: "06-13", match: "加拿大 vs 波黑", impact: "首发出炉:博比托/哲科均替补", tone: "neutral",
      text: "赛前1小时首发官宣:加拿大首发(4-4-2)克雷佩奥;拉雷亚、科内利厄斯、德福热罗尔、约翰斯顿;米勒、科内、欧斯达基奥、布坎南;奥卢瓦塞伊、大卫——博比托替补。波黑首发:哲科替补,德米洛维奇+卢基奇搭档锋线。哲科缺席首发削弱波黑定位球体系(资格赛22球中11个来自定位球),对0:0比分票偏利。(来源:khelnow.com/Bolavip)",
      en: "Official starting XIs (1hr pre-kickoff): Canada (4-4-2) Crépeau; Laryea, Cornelius, De Fougerolles, Johnston; Millar, Koné, Eustáquio, Buchanan; Oluwaseyi, David — Bombito on bench. Bosnia: Dzeko on bench, Demirović+Lukic lead the line. Dzeko's absence reduces Bosnia's set-piece threat (11/22 qualifying goals from set pieces), marginally positive for the 0:0 correct-score bet. (per khelnow.com / Bolavip)",
      links: [{"name": "khelnow.com", "url": "https://khelnow.com/football/world-football-canada-starting-lineup-vs-bosnia-herzegovina-fifa-world-cup-202606"}, {"name": "Bolavip", "url": "https://bolavip.com/en/world-cup/canada-vs-bosnia-and-herzegovina-predicted-lineups-for-their-2026-world-cup-debut"}],
      full: "赛前约1小时,两队官方首发出炉。加拿大(4-4-2):克雷佩奥门将;后卫拉雷亚、科内利厄斯(中卫)、德福热罗尔(中卫)、约翰斯顿;中场米勒、科内、欧斯达基奥(队长)、布坎南;前锋奥卢瓦塞伊、大卫。博比托尽管确认健康,仍在替补席——马什选择谨慎管理其骨折复出首战负荷。波黑(4-4-2):瓦西尔门将;科拉西纳茨、穆哈雷莫维奇、卡提奇、德迪奇;梅米奇、塔希罗维奇、巴西奇、巴伊拉克塔雷维奇;前锋德米洛维奇+卢基奇——哲科替补。哲科首发缺席是本场最重要的阵容变量:波黑资格赛22球中11个来自定位球,绝大多数通过哲科的高空支点传导。其替补出场意味着波黑进攻开局火力降级,0:0的概率小幅上升。",
      enFull: "Official confirmed starting XIs released approximately one hour before kickoff. Canada (4-4-2): Crépeau; Laryea, Cornelius, De Fougerolles, Johnston; Millar, Koné, Eustáquio (captain), Buchanan; Oluwaseyi, David. Bombito is on the bench — Marsch managing his tibia fracture return for Game 1. Bosnia (4-4-2): Vasilj; Kolašinac, Muharemović, Katić, Dedić; Memić, Tahirović, Bašić, Bajraktarević; Demirović, Lukic. Dzeko starts on the bench. With 11 of Bosnia's 22 qualifying goals sourced from set pieces, most routed through Dzeko's aerial presence, his absence materially reduces Bosnia's scoring threat — net positive for the 0:0 correct-score bet." },
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

  // ---------- 明日下单 · 21:00最终版 ----------
  slip: {
      "title": "6月14日 · 澳洲单关 · 22元",
      "status": "主会话把20:30管家的44元方案砍到22元。原方案4张里有3张靠猜比分(巴西3:0、澳0:0、巴摩0:0),而我们模型猜比分历史0/3、从没准过,那种'价值'是虚的;还在同一场买了互相矛盾的票(澳洲胜又买0:0=没人赢)。只留唯一真有边的:澳大利亚胜@5.15(胜平负,价值1.16,EV+3.6元)——土耳其三主力(亚尔德孜/恰尔汗奥卢/卡迪奥卢)伤疑大减员,这是我们的真实便宜。⚠️ 出票前看一眼土耳其首发:若恰尔汗奥卢意外首发,把澳胜减到16元。想要比分搏冷门的上限是你的选择,但我不推荐那3张。",
      "items": [
          {
              "num": "周六008",
              "match": "澳大利亚 vs 土耳其",
              "pick": "胜平负·澳大利亚胜",
              "tier": "核心",
              "stake": 22,
              "odds": 5.15,
              "value": 1.16,
              "ev": 3.6
          }
      ],
      "summary": {
          "stake": 22,
          "evLow": 3.6,
          "evHigh": 3.6,
          "winProb": 22.5,
          "best": {
              "label": "澳大利亚取胜",
              "pnl": 91
          },
          "worst": {
              "label": "澳不胜",
              "pnl": -22
          },
          "keyScenarios": [
              {"label": "澳不胜(77.5%)", "pnl": -22},
              {"label": "澳大利亚胜(22.5%)", "pnl": 91}
          ]
      },
      "matrix": [
          {"label": "澳大利亚胜", "recover": 113, "pnl": 91, "prob": 22.5},
          {"label": "澳大利亚不胜(平或负)", "recover": 0, "pnl": -22, "prob": 77.5}
      ],
      "copyText": "老板你好,帮我买竞彩足球,6月14日(周六):\\n\\n场次:周六008  澳大利亚 vs 土耳其\\n买:澳大利亚 赢(玩法「胜平负」,选主队胜)\\n方式:单关(只买这一场)\\n金额:22 元\\n\\n一共 22 元,谢谢!"
  },

  // ---------- 校准记录 ----------
  calibration: {
    stats: { direction: "3/5", scoreManual: "1/4", scoreModel: "0/4" },
    // 在线学习状态(learn.py 每场赛后自动更新): 乘法权重 + Elo + Dixon-Coles
    learning: {
      weights: { A: 66.0, B: 15.2, C: 9.4, D: 9.4 },
      brier: { A: 0.507, B: 0.623, C: 0.678, D: 0.899, ens: 0.663 },
      note: "⚠️ 修复了学习二重计数事故(周五003/004曾被重复settle 2-3次,Elo/权重/进球环境被多算),已重置按每场一次重建并加幂等锁。5场后真相扎心:市场(A)权重飙到66%,Elo/Poisson/国际共识全被压到≤15%——模型越自信越翻车:加拿大61%→平、瑞士74%→平,开幕两个本命都被逼平。集成已大幅向竞彩市场倾斜=更谦卑。进球环境预期11.9 vs 实际14(比率1.18仍偏高)。"
    },
    records: [
      {
        date: "06-13", match: "美国 vs 巴拉圭", actual: "4:1", briers: { A: 0.384, B: 0.311, C: 0.399, ens: 0.374 },
        manual: "1:0", model: "1:0", dirHit: true, manualHit: false, modelHit: false,
        note: "方向命中(集成53.2%美国胜,实际4:1大胜);比分偏守1:0与实际大比分差距明显,进球环境再次高估。博巴迪利亚7'乌龙+巴洛贡31'/45+5'双响奠定半场3:0,毛里西奥73'扳回一城,弗里曼90+8'锁定终场4:1。美国Elo+16.4→1909.1。B-Elo(0.311)本场最优,D国际共识(0.429)表现最差。"
      },
      {
        date: "06-13", match: "加拿大 vs 波黑", actual: "1:1", briers: { A: 0.871, B: 1.153, C: 0.831, ens: 0.928 },
        manual: "1:0", model: "1:0", dirHit: false, manualHit: false, modelHit: false,
        note: "方向误判:集成61.4%主胜,实际平局。卢基奇21分钟角球先拔(定位球风险标记已有但未入模),替补拉林78分钟扳平。Elo激进(72.4%主胜)受到最重惩罚,Brier=1.153;B权重从38.1%锐降至23.6%。教训:①东道主主场溢价被高估,模型应引入'首场谨慎因子';②0:0比分票终因1:1落空,但定价逻辑(10.7%→@9.50)赛前仍是正期望;③波黑防守组织超预期,提示Poisson λ客队设定偏高。"
      },
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
