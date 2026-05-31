<script setup>
import familyImage from './assets/images/card-image-ahorra-happy-woman.jpg'
import simpleProcessImage from './assets/images/simple-process.jpg'
import womanImage from './assets/images/woman.jpg'
import happyWomanImage from './assets/images/happy-woman.png'

const AHORRA_PAGE_STYLES =
  '.ahorra-scope-hero {\n      --deep: #12105a;\n      --deep-2: #092f64;\n      --blue: #073d73;\n      --green: #00e06d;\n      --green-soft: #73ffb5;\n      --cyan: #18d5e5;\n      --white: #ffffff;\n      --muted: rgba(255,255,255,.78);\n      --line: rgba(255,255,255,.22);\n      --glass: rgba(255,255,255,.13);\n      --container: 1400px;\n      --shadow: 0 30px 90px rgba(0, 16, 60, .32);\n    }\n\n    .ahorra-scope-hero, .ahorra-scope-hero * { box-sizing: border-box; margin: 0; padding: 0; }\n    .ahorra-scope-hero { scroll-behavior: smooth; }\n    .ahorra-scope-hero {\n      min-height: 100vh;\n      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;\n      color: var(--white);\n      background: var(--deep);\n      overflow-x: hidden;\n    }\n    .ahorra-scope-hero a { color: inherit; text-decoration: none; }\n    .ahorra-scope-hero img { display: block; max-width: 100%; }\n\n    .ahorra-scope-hero .hero {\n      position: relative;\n      min-height: 100svh;\n      overflow: hidden;\n      background:\n        radial-gradient(circle at 10% 80%, rgba(0,224,109,.92), transparent 30%),\n        radial-gradient(circle at 78% 8%, rgba(0,214,101,.84), transparent 23%),\n        radial-gradient(circle at 88% 78%, rgba(24,213,229,.78), transparent 28%),\n        radial-gradient(circle at 28% 10%, rgba(76,32,148,.76), transparent 32%),\n        radial-gradient(circle at 58% 58%, rgba(8,37,101,.95), transparent 38%),\n        linear-gradient(135deg, #12105a 0%, #102b68 44%, #052f59 100%);\n    }\n\n    .ahorra-scope-hero .hero::before {\n      content: "";\n      position: absolute;\n      inset: 0;\n      background-image:\n        linear-gradient(rgba(255,255,255,.052) 1px, transparent 1px),\n        linear-gradient(90deg, rgba(255,255,255,.052) 1px, transparent 1px);\n      background-size: 56px 56px;\n      mask-image: linear-gradient(to bottom, rgba(0,0,0,.76), transparent 90%);\n      pointer-events: none;\n    }\n\n    .ahorra-scope-hero .hero::after {\n      content: "";\n      position: absolute;\n      inset: 0;\n      background: linear-gradient(90deg, rgba(6,10,64,.16), transparent 52%);\n      pointer-events: none;\n    }\n\n    .ahorra-scope-hero .orb { position: absolute; border-radius: 999px; filter: blur(22px); pointer-events: none; opacity: .9; }\n    .ahorra-scope-hero .orb.one { width: 420px; height: 420px; left: -150px; top: 150px; background: rgba(0,224,109,.34); }\n    .ahorra-scope-hero .orb.two { width: 620px; height: 620px; right: -220px; bottom: -190px; background: rgba(24,213,229,.24); }\n\n    .ahorra-scope-hero .energy-wave {\n      position: absolute;\n      z-index: 1;\n      left: 22%;\n      bottom: -24%;\n      width: min(980px, 82vw);\n      height: 330px;\n      border-radius: 999px;\n      background: linear-gradient(105deg, rgba(255,255,255,.92), rgba(115,255,181,.54) 48%, rgba(24,213,229,.30));\n      transform: rotate(18deg);\n      opacity: .62;\n      filter: drop-shadow(0 34px 80px rgba(0,0,0,.32));\n    }\n\n    .ahorra-scope-hero .energy-wave::after {\n      content: "";\n      position: absolute;\n      inset: 82px;\n      border-radius: inherit;\n      background: #11135a;\n    }\n\n    .ahorra-scope-hero .hero-inner {\n      position: relative;\n      z-index: 3;\n      width: min(100% - 40px, var(--container));\n      min-height: 100svh;\n      margin-inline: auto;\n      display: flex;\n      flex-direction: column;\n    }\n\n    .ahorra-scope-hero .header {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      gap: 28px;\n      padding: 30px 0;\n    }\n\n    .ahorra-scope-hero .brand { display: inline-flex; align-items: center; min-width: max-content; }\n    .ahorra-scope-hero .brand-logo {\n      width: clamp(168px, 16vw, 265px);\n      height: auto;\n      filter: drop-shadow(0 12px 26px rgba(0,0,0,.20));\n    }\n\n    .ahorra-scope-hero .nav {\n      display: flex;\n      align-items: center;\n      gap: clamp(18px, 2.2vw, 38px);\n      font-size: 15px;\n      font-weight: 720;\n      color: rgba(255,255,255,.86);\n    }\n    .ahorra-scope-hero .nav a { transition: opacity .18s ease, transform .18s ease; }\n    .ahorra-scope-hero .nav a:hover { opacity: .72; transform: translateY(-1px); }\n\n    .ahorra-scope-hero .header-actions { display: flex; align-items: center; gap: 18px; min-width: max-content; }\n    .ahorra-scope-hero .phone { font-size: 14px; line-height: 1.16; font-weight: 850; }\n    .ahorra-scope-hero .phone span { display: block; color: rgba(255,255,255,.64); font-weight: 750; }\n\n    .ahorra-scope-hero .client-btn {\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      min-height: 48px;\n      padding: 0 22px;\n      border-radius: 14px;\n      color: #082c39;\n      background: rgba(255,255,255,.92);\n      font-weight: 850;\n      box-shadow: 0 18px 42px rgba(0,0,0,.22);\n      transition: transform .18s ease, box-shadow .18s ease;\n    }\n    .ahorra-scope-hero .client-btn:hover { transform: translateY(-2px); box-shadow: 0 22px 52px rgba(0,0,0,.3); }\n\n    .ahorra-scope-hero .menu {\n      display: none;\n      width: 46px;\n      height: 46px;\n      border: 1px solid rgba(255,255,255,.18);\n      border-radius: 14px;\n      background: rgba(255,255,255,.12);\n      backdrop-filter: blur(16px);\n    }\n    .ahorra-scope-hero .menu span { display: block; width: 18px; height: 2px; margin: 4px auto; border-radius: 99px; background: #fff; }\n\n    .ahorra-scope-hero .hero-content {\n      flex: 1;\n      display: grid;\n      grid-template-columns: minmax(0, 720px) 1fr;\n      align-items: center;\n      gap: 40px;\n      padding: clamp(52px, 7vw, 112px) 0 36px;\n    }\n\n    .ahorra-scope-hero .eyebrow {\n      display: inline-flex;\n      align-items: center;\n      gap: 10px;\n      margin-bottom: 30px;\n      padding: 11px 18px;\n      border: 1px solid rgba(255,255,255,.24);\n      border-radius: 999px;\n      background: rgba(255,255,255,.14);\n      backdrop-filter: blur(18px);\n      color: rgba(255,255,255,.92);\n      font-size: 14px;\n      font-weight: 850;\n      box-shadow: 0 18px 56px rgba(0,0,0,.18);\n    }\n    .ahorra-scope-hero .eyebrow::before {\n      content: "";\n      width: 9px;\n      height: 9px;\n      border-radius: 50%;\n      background: var(--green);\n      box-shadow: 0 0 0 6px rgba(0,224,109,.16);\n    }\n\n    .ahorra-scope-hero h1 {\n      max-width: 760px;\n      font-size: clamp(54px, 7.8vw, 116px);\n      line-height: .94;\n      letter-spacing: -.08em;\n      font-weight: 900;\n      text-wrap: balance;\n    }\n\n    .ahorra-scope-hero .lead {\n      max-width: 660px;\n      margin-top: 28px;\n      color: var(--muted);\n      font-size: clamp(21px, 2.4vw, 34px);\n      line-height: 1.08;\n      letter-spacing: -.045em;\n      font-weight: 620;\n      text-wrap: balance;\n    }\n\n    .ahorra-scope-hero .cta-row {\n      display: flex;\n      flex-wrap: wrap;\n      gap: 16px;\n      margin-top: clamp(42px, 6vw, 78px);\n    }\n\n    .ahorra-scope-hero .cta {\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      gap: 14px;\n      min-height: 64px;\n      padding: 0 18px 0 30px;\n      border-radius: 999px;\n      font-size: 16px;\n      font-weight: 900;\n      letter-spacing: -.03em;\n      box-shadow: var(--shadow);\n      transition: transform .18s ease, box-shadow .18s ease;\n    }\n    .ahorra-scope-hero .cta:hover { transform: translateY(-3px); box-shadow: 0 34px 100px rgba(0,0,0,.38); }\n    .ahorra-scope-hero .cta.primary { background: linear-gradient(135deg, var(--green), var(--green-soft)); color: #07115a; }\n    .ahorra-scope-hero .cta.secondary {\n      border: 1px solid rgba(255,255,255,.22);\n      background: rgba(255,255,255,.15);\n      color: #fff;\n      backdrop-filter: blur(18px);\n    }\n    .ahorra-scope-hero .cta-icon {\n      display: inline-grid;\n      place-items: center;\n      width: 46px;\n      height: 46px;\n      border-radius: 50%;\n      background: rgba(255,255,255,.94);\n      color: #07115a;\n      flex: 0 0 auto;\n    }\n\n    .ahorra-scope-hero .visual {\n      position: relative;\n      min-height: 520px;\n    }\n\n    .ahorra-scope-hero .visual::before {\n      content: "";\n      position: absolute;\n      right: 5%;\n      top: 18%;\n      width: min(360px, 34vw);\n      aspect-ratio: 1;\n      border-radius: 42% 58% 52% 48%;\n      background: linear-gradient(135deg, rgba(255,255,255,.22), rgba(115,255,181,.18), rgba(24,213,229,.18));\n      border: 1px solid rgba(255,255,255,.18);\n      backdrop-filter: blur(18px);\n      box-shadow: 0 34px 90px rgba(0,0,0,.18);\n      opacity: .55;\n    }\n\n    .ahorra-scope-hero .visual::after {\n      content: "";\n      position: absolute;\n      right: 20%;\n      bottom: 22%;\n      width: min(190px, 22vw);\n      height: min(190px, 22vw);\n      border-radius: 999px;\n      background: radial-gradient(circle, rgba(0,224,109,.28), rgba(24,213,229,.12), transparent 72%);\n      filter: blur(4px);\n      opacity: .75;\n    }\n\n    .ahorra-scope-hero .hero-footer {\n      display: grid;\n      grid-template-columns: 1fr auto;\n      align-items: end;\n      gap: 24px;\n      padding: 24px 0 42px;\n      border-top: 1px solid var(--line);\n      font-size: 15px;\n    }\n    .ahorra-scope-hero .hero-footer strong { display: block; margin-bottom: 8px; font-weight: 900; }\n    .ahorra-scope-hero .hero-footer a { color: rgba(255,255,255,.82); font-weight: 750; }\n    .ahorra-scope-hero .footer-right { text-align: right; }\n\n    @media (max-width: 1180px) {\n      .ahorra-scope-hero .nav { display: none; }\n      .ahorra-scope-hero .menu { display: inline-block; }\n      .ahorra-scope-hero .visual { min-height: 420px; }\n    }\n\n    @media (max-width: 920px) {\n      .ahorra-scope-hero .hero-inner { width: min(100% - 32px, var(--container)); }\n      .ahorra-scope-hero .header { padding: 22px 0; }\n      .ahorra-scope-hero .phone, .ahorra-scope-hero .client-btn { display: none; }\n      .ahorra-scope-hero .hero-content { grid-template-columns: 1fr; padding: 48px 0 28px; }\n      .ahorra-scope-hero .visual { min-height: 220px; }\n      .ahorra-scope-hero .visual::before { right: -40px; top: 10px; width: 280px; opacity: .34; }\n      .ahorra-scope-hero .visual::after { right: 70px; bottom: 20px; width: 140px; height: 140px; opacity: .42; }\n      .ahorra-scope-hero .energy-wave { left: 5%; bottom: 8%; width: 720px; height: 250px; opacity: .42; }\n      .ahorra-scope-hero .hero-footer { grid-template-columns: 1fr; align-items: start; }\n      .ahorra-scope-hero .footer-right { text-align: left; }\n    }\n\n    @media (max-width: 560px) {\n      .ahorra-scope-hero .hero-inner { width: min(100% - 24px, var(--container)); }\n      .ahorra-scope-hero .brand-logo { width: 175px; }\n      .ahorra-scope-hero .eyebrow { margin-bottom: 22px; font-size: 13px; }\n      .ahorra-scope-hero h1 { font-size: clamp(46px, 15vw, 72px); letter-spacing: -.075em; }\n      .ahorra-scope-hero .lead { margin-top: 22px; font-size: 22px; line-height: 1.12; }\n      .ahorra-scope-hero .cta-row { display: grid; grid-template-columns: 1fr; margin-top: 36px; }\n      .ahorra-scope-hero .cta { width: 100%; min-height: 60px; justify-content: space-between; }\n      .ahorra-scope-hero .visual { min-height: 160px; }\n      .ahorra-scope-hero .visual::before { right: -90px; width: 260px; opacity: .26; }\n      .ahorra-scope-hero .visual::after { right: 40px; width: 120px; height: 120px; opacity: .34; }\n      .ahorra-scope-hero .energy-wave { left: -28%; width: 640px; height: 220px; opacity: .34; }\n      .ahorra-scope-hero .hero-footer { padding-bottom: 28px; font-size: 14px; }\n    }\n\n    @media (prefers-reduced-motion: reduce) {\n      .ahorra-scope-hero, .ahorra-scope-hero *, .ahorra-scope-hero::before, .ahorra-scope-hero *::before, .ahorra-scope-hero::after, .ahorra-scope-hero *::after { scroll-behavior: auto !important; transition: none !important; }\n    }\n\n.ahorra-scope-benefits {\n      --asl-green: #00b894;\n      --asl-green-light: #70edc7;\n      --asl-blue: #083a78;\n      --asl-blue-soft: #256d9f;\n      --asl-cyan: #00b8c8;\n      --asl-ink: #071827;\n      --asl-text: #4f5d73;\n      --asl-muted: #6f7b8f;\n      --asl-bg: #f5f8fb;\n      --asl-card: #ffffff;\n      --asl-line: rgba(8, 58, 120, 0.11);\n      --asl-shadow: 0 24px 70px rgba(7, 24, 39, 0.09);\n      --asl-radius: 24px;\n      --asl-container: 1180px;\n    }\n\n    .ahorra-scope-benefits, .ahorra-scope-benefits * { box-sizing: border-box; margin: 0; padding: 0; }\n    .ahorra-scope-benefits { scroll-behavior: smooth; }\n    .ahorra-scope-benefits {\n      min-height: 100vh;\n      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;\n      color: var(--asl-ink);\n      background: #ffffff;\n      overflow-x: hidden;\n    }\n\n    .ahorra-scope-benefits .benefits-section {\n      position: relative;\n      overflow: hidden;\n      padding: clamp(72px, 8vw, 118px) 20px clamp(80px, 9vw, 130px);\n      background:\n        radial-gradient(circle at 16% 20%, rgba(0, 184, 148, 0.13), transparent 28%),\n        radial-gradient(circle at 82% 8%, rgba(0, 184, 200, 0.11), transparent 25%),\n        linear-gradient(180deg, #f8fbff 0%, #f3f8fb 58%, #eef7fb 100%);\n    }\n\n    .ahorra-scope-benefits .benefits-section::before {\n      content: "";\n      position: absolute;\n      inset: 0;\n      background-image:\n        linear-gradient(rgba(8, 58, 120, 0.035) 1px, transparent 1px),\n        linear-gradient(90deg, rgba(8, 58, 120, 0.035) 1px, transparent 1px);\n      background-size: 48px 48px;\n      mask-image: linear-gradient(to bottom, rgba(0,0,0,0.55), transparent 76%);\n      pointer-events: none;\n    }\n\n    .ahorra-scope-benefits .benefits-container {\n      position: relative;\n      z-index: 1;\n      width: min(100%, var(--asl-container));\n      margin-inline: auto;\n    }\n\n    .ahorra-scope-benefits .benefits-top {\n      display: grid;\n      grid-template-columns: minmax(0, 0.86fr) minmax(420px, 1fr);\n      gap: clamp(48px, 7vw, 108px);\n      align-items: start;\n    }\n\n    .ahorra-scope-benefits .benefits-copy { padding-top: clamp(8px, 3vw, 34px); }\n\n    .ahorra-scope-benefits .section-kicker {\n      display: inline-flex;\n      align-items: center;\n      gap: 10px;\n      margin-bottom: 18px;\n      color: var(--asl-blue-soft);\n      font-size: clamp(14px, 1.3vw, 16px);\n      font-weight: 850;\n      letter-spacing: -0.02em;\n    }\n\n    .ahorra-scope-benefits .section-kicker::before {\n      content: "";\n      width: 9px;\n      height: 9px;\n      border-radius: 50%;\n      background: linear-gradient(135deg, var(--asl-green), var(--asl-cyan));\n      box-shadow: 0 0 0 7px rgba(0, 184, 148, 0.12);\n    }\n\n    .ahorra-scope-benefits .benefits-title {\n      max-width: 540px;\n      font-size: clamp(40px, 5.4vw, 66px);\n      line-height: 0.98;\n      letter-spacing: -0.07em;\n      font-weight: 900;\n      color: var(--asl-ink);\n      text-wrap: balance;\n    }\n\n    .ahorra-scope-benefits .benefits-description {\n      max-width: 530px;\n      margin-top: 24px;\n      color: var(--asl-text);\n      font-size: clamp(17px, 1.6vw, 21px);\n      line-height: 1.42;\n      letter-spacing: -0.025em;\n      font-weight: 520;\n    }\n\n    .ahorra-scope-benefits .benefits-list {\n      display: grid;\n      gap: clamp(26px, 3.2vw, 42px);\n    }\n\n    .ahorra-scope-benefits .benefit-item {\n      display: grid;\n      grid-template-columns: 54px 1fr;\n      gap: 18px;\n      align-items: start;\n    }\n\n    .ahorra-scope-benefits .benefit-icon {\n      display: grid;\n      place-items: center;\n      width: 54px;\n      height: 54px;\n      border-radius: 16px;\n      color: var(--asl-blue);\n      background: linear-gradient(180deg, rgba(255,255,255,0.92), rgba(255,255,255,0.64));\n      border: 1px solid var(--asl-line);\n      box-shadow: 0 14px 34px rgba(8, 58, 120, 0.08);\n      backdrop-filter: blur(12px);\n    }\n\n    .ahorra-scope-benefits .benefit-icon svg {\n      width: 25px;\n      height: 25px;\n      stroke: currentColor;\n      stroke-width: 2;\n      fill: none;\n      stroke-linecap: round;\n      stroke-linejoin: round;\n    }\n\n    .ahorra-scope-benefits .benefit-item h3 {\n      margin-bottom: 8px;\n      color: var(--asl-blue-soft);\n      font-size: clamp(20px, 2vw, 24px);\n      line-height: 1.15;\n      letter-spacing: -0.04em;\n      font-weight: 850;\n    }\n\n    .ahorra-scope-benefits .benefit-item p {\n      max-width: 540px;\n      color: var(--asl-text);\n      font-size: clamp(16px, 1.45vw, 18px);\n      line-height: 1.46;\n      letter-spacing: -0.02em;\n      font-weight: 500;\n    }\n\n    .ahorra-scope-benefits .family-card {\n      position: relative;\n      margin-top: clamp(56px, 7vw, 86px);\n      border-radius: 30px;\n      overflow: hidden;\n      min-height: clamp(340px, 42vw, 520px);\n      background:\n        radial-gradient(circle at 18% 18%, rgba(112, 237, 199, 0.55), transparent 28%),\n        radial-gradient(circle at 86% 14%, rgba(0, 184, 200, 0.38), transparent 32%),\n        linear-gradient(135deg, #eafcf7 0%, #f8fbff 48%, #e8f7ff 100%);\n      box-shadow: var(--asl-shadow);\n      border: 1px solid rgba(255,255,255,0.74);\n      isolation: isolate;\n    }\n\n    .ahorra-scope-benefits .family-card::before {\n      content: "";\n      position: absolute;\n      inset: 0;\n      background-image:\n        linear-gradient(rgba(8, 58, 120, 0.04) 1px, transparent 1px),\n        linear-gradient(90deg, rgba(8, 58, 120, 0.04) 1px, transparent 1px);\n      background-size: 42px 42px;\n      opacity: 0.7;\n    }\n\n    .ahorra-scope-benefits .family-card::after {\n      content: "";\n      position: absolute;\n      left: 6%;\n      right: 6%;\n      bottom: 7%;\n      height: 32%;\n      border-radius: 999px 999px 44px 44px;\n      background: linear-gradient(135deg, #0e4c7c, #00b894);\n      opacity: 0.14;\n      filter: blur(2px);\n    }\n\n    .ahorra-scope-benefits .family-illustration {\n      position: absolute;\n      inset: auto 0 0;\n      z-index: 2;\n      width: 100%;\n      height: 100%;\n    }\n\n    .ahorra-scope-benefits .media-badge {\n      position: absolute;\n      left: clamp(18px, 3vw, 34px);\n      bottom: clamp(18px, 3vw, 34px);\n      z-index: 4;\n      display: inline-flex;\n      align-items: center;\n      gap: 10px;\n      padding: 12px 16px;\n      border-radius: 999px;\n      color: #ffffff;\n      font-size: 14px;\n      font-weight: 800;\n      letter-spacing: -0.02em;\n      background: rgba(7, 24, 39, 0.42);\n      border: 1px solid rgba(255,255,255,0.22);\n      backdrop-filter: blur(16px);\n      box-shadow: 0 18px 50px rgba(7,24,39,0.22);\n    }\n\n    .ahorra-scope-benefits .media-badge span {\n      width: 9px;\n      height: 9px;\n      border-radius: 50%;\n      background: var(--asl-green-light);\n      box-shadow: 0 0 0 6px rgba(112,237,199,0.18);\n    }\n\n    @media (max-width: 980px) {\n      .ahorra-scope-benefits .benefits-top { grid-template-columns: 1fr; gap: 44px; }\n      .ahorra-scope-benefits .benefits-copy { padding-top: 0; }\n      .ahorra-scope-benefits .benefits-title, .ahorra-scope-benefits .benefits-description { max-width: 720px; }\n      .ahorra-scope-benefits .benefits-list { grid-template-columns: 1fr; }\n    }\n\n    @media (max-width: 640px) {\n      .ahorra-scope-benefits .benefits-section {\n        padding: 64px 16px 82px;\n        background:\n          radial-gradient(circle at 10% 10%, rgba(0, 184, 148, 0.12), transparent 32%),\n          linear-gradient(180deg, #f8fbff 0%, #f4f9fb 58%, #eef7fb 100%);\n      }\n      .ahorra-scope-benefits .benefits-title { font-size: clamp(38px, 12vw, 52px); }\n      .ahorra-scope-benefits .benefit-item { grid-template-columns: 46px 1fr; gap: 14px; }\n      .ahorra-scope-benefits .benefit-icon { width: 46px; height: 46px; border-radius: 14px; }\n      .ahorra-scope-benefits .benefit-icon svg { width: 22px; height: 22px; }\n      .ahorra-scope-benefits .family-card { margin-top: 44px; min-height: 420px; border-radius: 24px; }\n      .ahorra-scope-benefits .family-illustration { width: 148%; left: -24%; }\n      .ahorra-scope-benefits .media-badge { left: 14px; right: 14px; justify-content: center; text-align: center; }\n    }\n\n    @media (prefers-reduced-motion: reduce) {\n      .ahorra-scope-benefits, .ahorra-scope-benefits *, .ahorra-scope-benefits::before, .ahorra-scope-benefits *::before, .ahorra-scope-benefits::after, .ahorra-scope-benefits *::after { scroll-behavior: auto !important; transition: none !important; }\n    }\n\n.ahorra-scope-solutions {\n      --primary: #00b894;\n      --primary-2: #20e98b;\n      --secondary: #0097a7;\n      --blue: #102a72;\n      --indigo: #27136d;\n      --ink: #071426;\n      --muted: #5f6b7f;\n      --line: rgba(7, 20, 38, 0.10);\n      --card: rgba(255, 255, 255, 0.84);\n      --soft: #f6faf9;\n      --shadow: 0 24px 70px rgba(16, 42, 114, 0.10);\n      --radius: 22px;\n      --container: 1080px;\n    }\n\n    .ahorra-scope-solutions, .ahorra-scope-solutions * {\n      box-sizing: border-box;\n      margin: 0;\n      padding: 0;\n    }\n\n    .ahorra-scope-solutions {\n      min-height: 100vh;\n      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;\n      color: var(--ink);\n      background:\n        radial-gradient(circle at 12% 8%, rgba(32, 233, 139, .16), transparent 28%),\n        radial-gradient(circle at 88% 18%, rgba(0, 151, 167, .14), transparent 30%),\n        linear-gradient(180deg, #ffffff 0%, #f7fbfa 100%);\n    }\n\n    .ahorra-scope-solutions img,\n    .ahorra-scope-solutions svg {\n      display: block;\n      max-width: 100%;\n    }\n\n    .ahorra-scope-solutions a {\n      color: inherit;\n      text-decoration: none;\n    }\n\n    .ahorra-scope-solutions .services-section {\n      position: relative;\n      overflow: hidden;\n      padding: clamp(64px, 8vw, 108px) 20px;\n      background:\n        linear-gradient(180deg, rgba(255,255,255,.96), rgba(246,250,249,.98));\n    }\n\n    .ahorra-scope-solutions .services-section::before {\n      content: "";\n      position: absolute;\n      inset: 0;\n      background-image:\n        linear-gradient(rgba(0, 151, 167, .045) 1px, transparent 1px),\n        linear-gradient(90deg, rgba(0, 184, 148, .045) 1px, transparent 1px);\n      background-size: 54px 54px;\n      mask-image: linear-gradient(to bottom, rgba(0,0,0,.55), transparent 78%);\n      pointer-events: none;\n    }\n\n    .ahorra-scope-solutions .services-section::after {\n      content: "";\n      position: absolute;\n      width: 520px;\n      height: 520px;\n      right: -180px;\n      top: 80px;\n      border-radius: 50%;\n      background: radial-gradient(circle, rgba(32,233,139,.18), rgba(0,151,167,.08) 46%, transparent 70%);\n      filter: blur(8px);\n      pointer-events: none;\n    }\n\n    .ahorra-scope-solutions .container {\n      position: relative;\n      z-index: 1;\n      width: min(100%, var(--container));\n      margin-inline: auto;\n    }\n\n    .ahorra-scope-solutions .section-header {\n      max-width: 830px;\n      margin-inline: auto;\n      text-align: center;\n      margin-bottom: clamp(34px, 5vw, 52px);\n    }\n\n    .ahorra-scope-solutions .eyebrow {\n      display: inline-flex;\n      align-items: center;\n      gap: 10px;\n      margin-bottom: 16px;\n      padding: 9px 15px;\n      border-radius: 999px;\n      background: rgba(255,255,255,.76);\n      border: 1px solid rgba(0,184,148,.18);\n      box-shadow: 0 12px 36px rgba(0,151,167,.08);\n      color: var(--secondary);\n      font-size: 14px;\n      font-weight: 800;\n      letter-spacing: -0.02em;\n    }\n\n    .ahorra-scope-solutions .eyebrow span {\n      width: 8px;\n      height: 8px;\n      border-radius: 999px;\n      background: linear-gradient(135deg, var(--primary), var(--primary-2));\n      box-shadow: 0 0 0 6px rgba(0,184,148,.12);\n    }\n\n    .ahorra-scope-solutions h2 {\n      font-size: clamp(34px, 5vw, 58px);\n      line-height: .98;\n      letter-spacing: -0.065em;\n      color: #071426;\n      font-weight: 900;\n      text-wrap: balance;\n    }\n\n    .ahorra-scope-solutions .section-header p {\n      max-width: 760px;\n      margin: 18px auto 0;\n      color: var(--muted);\n      font-size: clamp(16px, 1.7vw, 20px);\n      line-height: 1.5;\n      letter-spacing: -0.025em;\n      text-wrap: balance;\n    }\n\n    .ahorra-scope-solutions .cards-grid {\n      display: grid;\n      grid-template-columns: repeat(3, minmax(0, 1fr));\n      gap: 28px;\n    }\n\n    .ahorra-scope-solutions .service-card {\n      position: relative;\n      overflow: hidden;\n      border-radius: var(--radius);\n      background: var(--card);\n      border: 1px solid var(--line);\n      box-shadow: 0 1px 0 rgba(255,255,255,.9) inset;\n      transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease;\n      backdrop-filter: blur(16px);\n    }\n\n    .ahorra-scope-solutions .service-card:hover {\n      transform: translateY(-6px);\n      box-shadow: var(--shadow);\n      border-color: rgba(0, 184, 148, .24);\n    }\n\n    .ahorra-scope-solutions .media {\n      position: relative;\n      min-height: 178px;\n      overflow: hidden;\n      background:\n        radial-gradient(circle at 18% 24%, rgba(32,233,139,.48), transparent 30%),\n        radial-gradient(circle at 78% 16%, rgba(0,151,167,.38), transparent 36%),\n        linear-gradient(135deg, var(--indigo), var(--blue) 48%, #0aa278);\n    }\n\n    .ahorra-scope-solutions .media::before {\n      content: "";\n      position: absolute;\n      inset: 0;\n      background-image:\n        linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px),\n        linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px);\n      background-size: 30px 30px;\n      opacity: .5;\n    }\n\n    .ahorra-scope-solutions .media::after {\n      content: "";\n      position: absolute;\n      inset: auto -20% -44% -20%;\n      height: 100px;\n      border-radius: 50%;\n      background: rgba(255,255,255,.18);\n      filter: blur(16px);\n    }\n\n    .ahorra-scope-solutions .service-illustration {\n      position: absolute;\n      inset: 0;\n      display: grid;\n      place-items: center;\n      padding: 28px;\n    }\n\n    .ahorra-scope-solutions .service-illustration svg {\n      width: 118px;\n      height: 118px;\n      filter: drop-shadow(0 24px 38px rgba(0,0,0,.25));\n    }\n\n    .ahorra-scope-solutions .card-body {\n      padding: 22px 22px 26px;\n    }\n\n    .ahorra-scope-solutions .card-title-row {\n      display: flex;\n      align-items: start;\n      justify-content: space-between;\n      gap: 12px;\n      margin-bottom: 10px;\n    }\n\n    .ahorra-scope-solutions h3 {\n      color: #0a1829;\n      font-size: 22px;\n      line-height: 1.1;\n      letter-spacing: -0.045em;\n      font-weight: 900;\n    }\n\n    .ahorra-scope-solutions .arrow {\n      display: grid;\n      place-items: center;\n      width: 34px;\n      height: 34px;\n      flex: 0 0 auto;\n      border-radius: 999px;\n      color: #072037;\n      background: rgba(0,184,148,.09);\n      border: 1px solid rgba(0,184,148,.14);\n      font-size: 18px;\n      font-weight: 900;\n      transition: transform .22s ease, background .22s ease;\n    }\n\n    .ahorra-scope-solutions .service-card:hover .arrow {\n      transform: translate(2px, -2px);\n      background: rgba(0,184,148,.16);\n    }\n\n    .ahorra-scope-solutions .card-body p {\n      color: var(--muted);\n      font-size: 15.5px;\n      line-height: 1.48;\n      letter-spacing: -0.018em;\n    }\n\n    .ahorra-scope-solutions .highlight {\n      color: var(--primary);\n      font-weight: 850;\n    }\n\n    @media (max-width: 980px) {\n      .ahorra-scope-solutions .cards-grid {\n        grid-template-columns: repeat(2, minmax(0, 1fr));\n      }\n    }\n\n    @media (max-width: 640px) {\n      .ahorra-scope-solutions .services-section {\n        padding: 56px 16px;\n      }\n\n      .ahorra-scope-solutions .section-header {\n        text-align: left;\n        margin-bottom: 30px;\n      }\n\n      .ahorra-scope-solutions .section-header p {\n        margin-inline: 0;\n      }\n\n      .ahorra-scope-solutions .cards-grid {\n        grid-template-columns: 1fr;\n        gap: 18px;\n      }\n\n      .ahorra-scope-solutions .media {\n        min-height: 156px;\n      }\n\n      .ahorra-scope-solutions .service-illustration svg {\n        width: 96px;\n        height: 96px;\n      }\n\n      .ahorra-scope-solutions .card-body {\n        padding: 20px;\n      }\n\n      .ahorra-scope-solutions h3 {\n        font-size: 21px;\n      }\n    }\n\n.ahorra-scope-clientes-faixa{\n      --deep:#15145c;\n      --blue:#083a78;\n      --cyan:#18c9db;\n      --green:#19e56f;\n      --violet:#37106f;\n      --white:#fff;\n      --muted:rgba(255,255,255,.78);\n    }\n\n    .ahorra-scope-clientes-faixa, .ahorra-scope-clientes-faixa *{box-sizing:border-box;margin:0;padding:0}\n\n    .ahorra-scope-clientes-faixa{\n      min-height:100vh;\n      display:grid;\n      place-items:center;\n      background:#f5f8fb;\n      font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;\n    }\n\n    .ahorra-scope-clientes-faixa .logo-marquee-section{\n      position:relative;\n      width:100%;\n      overflow:hidden;\n      isolation:isolate;\n      padding:clamp(20px,2.6vw,34px) 0;\n      color:var(--white);\n      background:\n        radial-gradient(circle at 12% 84%, rgba(25,229,111,.92), transparent 30%),\n        radial-gradient(circle at 80% 18%, rgba(24,201,219,.72), transparent 24%),\n        radial-gradient(circle at 52% 8%, rgba(55,16,111,.78), transparent 30%),\n        linear-gradient(115deg, #18125f 0%, #0b3772 44%, #0a715f 100%);\n      background-size:140% 140%;\n      animation:bgMove 16s ease-in-out infinite alternate;\n    }\n\n    .ahorra-scope-clientes-faixa .logo-marquee-section::before{\n      content:"";\n      position:absolute;\n      inset:0;\n      z-index:-2;\n      background:\n        linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px),\n        linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px);\n      background-size:56px 56px;\n      opacity:.32;\n      mask-image:linear-gradient(90deg, transparent, #000 14%, #000 86%, transparent);\n    }\n\n    .ahorra-scope-clientes-faixa .logo-marquee-section::after{\n      content:"";\n      position:absolute;\n      inset:-30%;\n      z-index:-1;\n      background:\n        radial-gradient(circle at 25% 40%, rgba(25,229,111,.24), transparent 22%),\n        radial-gradient(circle at 72% 60%, rgba(24,201,219,.22), transparent 20%),\n        radial-gradient(circle at 48% 18%, rgba(255,255,255,.12), transparent 18%);\n      filter:blur(28px);\n      animation:pulseGlow 7s ease-in-out infinite alternate;\n      pointer-events:none;\n    }\n\n    .ahorra-scope-clientes-faixa .marquee-container{\n      width:min(100% - 32px, 1440px);\n      margin-inline:auto;\n    }\n\n    .ahorra-scope-clientes-faixa .marquee-title{\n      margin-bottom:clamp(16px,1.8vw,24px);\n      text-align:center;\n      color:#fff;\n      font-size:clamp(18px,1.7vw,24px);\n      line-height:1.1;\n      letter-spacing:-.035em;\n      font-weight:850;\n      white-space:nowrap;\n      text-wrap:nowrap;\n      text-shadow:0 10px 30px rgba(0,0,0,.18);\n    }\n\n    .ahorra-scope-clientes-faixa .marquee-shell{\n      position:relative;\n      overflow:hidden;\n      width:100%;\n      mask-image:linear-gradient(90deg, transparent 0%, #000 9%, #000 91%, transparent 100%);\n    }\n\n    .ahorra-scope-clientes-faixa .marquee-track{\n      display:flex;\n      align-items:center;\n      gap:clamp(38px,5vw,86px);\n      width:max-content;\n      animation:scrollLogos 38s linear infinite;\n      will-change:transform;\n    }\n\n    .ahorra-scope-clientes-faixa .marquee-shell:hover .marquee-track{\n      animation-play-state:paused;\n    }\n\n    .ahorra-scope-clientes-faixa .logo-item{\n      flex:0 0 auto;\n      display:flex;\n      align-items:center;\n      justify-content:center;\n      min-width:clamp(150px,16vw,240px);\n      min-height:52px;\n      padding:6px 6px;\n      color:rgba(255,255,255,.9);\n      opacity:.88;\n      filter:drop-shadow(0 16px 24px rgba(0,0,0,.18));\n      transition:opacity .2s ease, transform .2s ease, filter .2s ease;\n    }\n\n    .ahorra-scope-clientes-faixa .logo-item:hover{\n      opacity:1;\n      transform:translateY(-2px) scale(1.015);\n      filter:drop-shadow(0 22px 32px rgba(0,0,0,.22));\n    }\n\n    .ahorra-scope-clientes-faixa .brand-word{\n      display:block;\n      font-weight:900;\n      letter-spacing:-.06em;\n      line-height:.9;\n      color:#fff;\n      text-align:center;\n      white-space:nowrap;\n    }\n\n    .ahorra-scope-clientes-faixa .brand-sub{\n      display:block;\n      margin-top:6px;\n      font-size:10px;\n      font-weight:700;\n      letter-spacing:.12em;\n      color:rgba(255,255,255,.68);\n      text-align:center;\n      text-transform:uppercase;\n    }\n\n    .ahorra-scope-clientes-faixa .digitus .brand-word{font-size:32px;filter:blur(.2px)}\n    .ahorra-scope-clientes-faixa .balanza .brand-word{font-size:18px;letter-spacing:-.04em;border:1px solid rgba(255,255,255,.72);border-radius:4px;padding:5px 10px;background:rgba(255,255,255,.12)}\n    .ahorra-scope-clientes-faixa .marbella .brand-word{font-size:16px;letter-spacing:.12em;line-height:1.05;text-transform:uppercase}\n    .ahorra-scope-clientes-faixa .fartons .brand-word{font-size:24px;letter-spacing:-.05em;font-style:italic}\n    .ahorra-scope-clientes-faixa .levante .brand-word{font-size:20px;letter-spacing:-.03em;border:2px solid rgba(255,255,255,.72);border-radius:999px;width:52px;height:52px;display:grid;place-items:center;margin:auto}\n    .ahorra-scope-clientes-faixa .acuidas .brand-word{font-size:28px;font-weight:500;letter-spacing:-.08em}\n    .ahorra-scope-clientes-faixa .veles .brand-word{font-size:28px;letter-spacing:.02em;line-height:.72}\n    .ahorra-scope-clientes-faixa .huertana .brand-word{font-size:25px;font-family:Georgia,serif;font-style:italic;font-weight:500;letter-spacing:-.05em}\n    .ahorra-scope-clientes-faixa .solar .brand-word{font-size:23px;letter-spacing:-.04em}\n    .ahorra-scope-clientes-faixa .nexo .brand-word{font-size:26px;letter-spacing:.02em}\n\n    @keyframes scrollLogos{\n      from{transform:translate3d(0,0,0)}\n      to{transform:translate3d(-50%,0,0)}\n    }\n\n    @keyframes bgMove{\n      0%{background-position:0% 40%}\n      50%{background-position:70% 30%}\n      100%{background-position:100% 80%}\n    }\n\n    @keyframes pulseGlow{\n      0%{opacity:.58;transform:translate3d(-1.5%,0,0) scale(1)}\n      100%{opacity:.9;transform:translate3d(1.5%,1%,0) scale(1.04)}\n    }\n\n    @media (max-width:768px){\n      .ahorra-scope-clientes-faixa .logo-marquee-section{padding:22px 0}\n      .ahorra-scope-clientes-faixa .marquee-title{max-width:none;margin-inline:auto;margin-bottom:18px;white-space:nowrap;font-size:16px}\n      .ahorra-scope-clientes-faixa .marquee-track{gap:34px;animation-duration:30s}\n      .ahorra-scope-clientes-faixa .logo-item{min-width:132px;min-height:48px}\n      .ahorra-scope-clientes-faixa .digitus .brand-word{font-size:27px}\n      .ahorra-scope-clientes-faixa .acuidas .brand-word,.ahorra-scope-clientes-faixa .veles .brand-word{font-size:24px}\n    }\n\n    @media (max-width:420px){\n      .ahorra-scope-clientes-faixa .marquee-title{font-size:13px;letter-spacing:-.025em}\n      .ahorra-scope-clientes-faixa .logo-item{min-width:118px}\n    }\n\n    @media (prefers-reduced-motion:reduce){\n      .ahorra-scope-clientes-faixa .logo-marquee-section,\n      .ahorra-scope-clientes-faixa .logo-marquee-section::after,\n      .ahorra-scope-clientes-faixa .marquee-track{animation:none!important}\n      .ahorra-scope-clientes-faixa .marquee-shell{overflow-x:auto;mask-image:none;padding-bottom:8px}\n    }\n\n.ahorra-scope-como-funciona{\n      --ink:#071827;\n      --muted:#647184;\n      --soft:#f6f9fb;\n      --line:rgba(7,24,39,.10);\n      --blue:#172a78;\n      --blue-2:#0b65b8;\n      --green:#00d47e;\n      --green-2:#00b894;\n      --cyan:#12c8d8;\n      --white:#fff;\n      --radius:34px;\n      --shadow:0 28px 90px rgba(15,32,70,.10);\n      --max:1180px;\n    }\n\n    .ahorra-scope-como-funciona, .ahorra-scope-como-funciona *{box-sizing:border-box;margin:0;padding:0}\n    .ahorra-scope-como-funciona{scroll-behavior:smooth}\n    .ahorra-scope-como-funciona{\n      font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",Inter,"Segoe UI",Roboto,Arial,sans-serif;\n      background:#fff;\n      color:var(--ink);\n      -webkit-font-smoothing:antialiased;\n      text-rendering:optimizeLegibility;\n    }\n\n    .ahorra-scope-como-funciona .asl-process{\n      position:relative;\n      overflow:hidden;\n      padding:clamp(72px,8vw,128px) 20px;\n      background:\n        radial-gradient(circle at 12% 18%, rgba(0,212,126,.10), transparent 30%),\n        radial-gradient(circle at 82% 34%, rgba(18,200,216,.12), transparent 28%),\n        linear-gradient(180deg,#fff 0%,#f7fbff 100%);\n    }\n\n    .ahorra-scope-como-funciona .asl-process::before{\n      content:"";\n      position:absolute;\n      inset:auto -10% -30% -10%;\n      height:55%;\n      background:\n        radial-gradient(circle at 24% 40%,rgba(0,212,126,.16),transparent 34%),\n        radial-gradient(circle at 78% 30%,rgba(23,42,120,.12),transparent 36%);\n      filter:blur(22px);\n      pointer-events:none;\n    }\n\n    .ahorra-scope-como-funciona .wrap{\n      position:relative;\n      z-index:1;\n      width:min(100%,var(--max));\n      margin-inline:auto;\n      display:grid;\n      grid-template-columns:minmax(320px, .92fr) minmax(360px, 1.08fr);\n      gap:clamp(44px,7vw,92px);\n      align-items:center;\n    }\n\n    .ahorra-scope-como-funciona .media{\n      position:relative;\n      min-height:clamp(390px,45vw,610px);\n      display:grid;\n      place-items:center;\n    }\n\n    .ahorra-scope-como-funciona .blob{\n      position:absolute;\n      width:min(86%,510px);\n      aspect-ratio:1;\n      border-radius:38% 62% 56% 44% / 44% 40% 60% 56%;\n      background:\n        radial-gradient(circle at 28% 18%,rgba(255,255,255,.55),transparent 26%),\n        linear-gradient(135deg,var(--green) 0%,var(--cyan) 38%,var(--blue) 100%);\n      box-shadow:0 42px 110px rgba(5,64,110,.20);\n      transform:rotate(-7deg);\n    }\n\n    .ahorra-scope-como-funciona .image-frame{\n      position:relative;\n      width:min(82%,470px);\n      aspect-ratio:4/5;\n      border-radius:42px;\n      padding:12px;\n      background:rgba(255,255,255,.48);\n      border:1px solid rgba(255,255,255,.68);\n      box-shadow:var(--shadow);\n      backdrop-filter:blur(18px);\n      overflow:hidden;\n    }\n\n    .ahorra-scope-como-funciona .image-placeholder{\n      width:100%;\n      height:100%;\n      border-radius:32px;\n      display:grid;\n      place-items:center;\n      text-align:center;\n      padding:32px;\n      background:\n        linear-gradient(135deg,rgba(255,255,255,.84),rgba(255,255,255,.42)),\n        radial-gradient(circle at 25% 20%,rgba(0,212,126,.25),transparent 32%),\n        radial-gradient(circle at 75% 72%,rgba(18,200,216,.22),transparent 32%);\n      border:1px dashed rgba(7,24,39,.22);\n      color:rgba(7,24,39,.58);\n    }\n\n    .ahorra-scope-como-funciona .image-placeholder strong{\n      display:block;\n      margin-bottom:8px;\n      font-size:clamp(22px,2.4vw,30px);\n      letter-spacing:-.045em;\n      color:rgba(7,24,39,.82);\n    }\n\n    .ahorra-scope-como-funciona .image-placeholder span{\n      display:block;\n      max-width:250px;\n      margin:auto;\n      font-size:15px;\n      line-height:1.5;\n    }\n\n    .ahorra-scope-como-funciona .content{\n      max-width:650px;\n    }\n\n    .ahorra-scope-como-funciona .kicker{\n      display:inline-flex;\n      align-items:center;\n      gap:10px;\n      margin-bottom:18px;\n      color:var(--green-2);\n      font-size:14px;\n      font-weight:750;\n      letter-spacing:-.01em;\n    }\n\n    .ahorra-scope-como-funciona .kicker::before{\n      content:"";\n      width:9px;\n      height:9px;\n      border-radius:50%;\n      background:linear-gradient(135deg,var(--green),var(--cyan));\n      box-shadow:0 0 0 7px rgba(0,212,126,.12);\n    }\n\n    .ahorra-scope-como-funciona h2{\n      max-width:640px;\n      font-size:clamp(42px,5vw,72px);\n      line-height:.96;\n      letter-spacing:-.065em;\n      font-weight:850;\n      color:var(--ink);\n    }\n\n    .ahorra-scope-como-funciona .intro{\n      max-width:560px;\n      margin-top:22px;\n      font-size:clamp(18px,1.8vw,22px);\n      line-height:1.36;\n      letter-spacing:-.025em;\n      color:var(--muted);\n      font-weight:450;\n    }\n\n    .ahorra-scope-como-funciona .steps{\n      margin-top:clamp(34px,4vw,52px);\n      display:grid;\n      gap:26px;\n      list-style:none;\n      counter-reset:step;\n    }\n\n    .ahorra-scope-como-funciona .step{\n      counter-increment:step;\n      display:grid;\n      grid-template-columns:58px 1fr;\n      gap:22px;\n      align-items:start;\n      padding-bottom:26px;\n      border-bottom:1px solid var(--line);\n    }\n\n    .ahorra-scope-como-funciona .step:last-child{\n      border-bottom:0;\n      padding-bottom:0;\n    }\n\n    .ahorra-scope-como-funciona .num{\n      width:58px;\n      height:58px;\n      display:grid;\n      place-items:center;\n      border-radius:999px;\n      background:\n        linear-gradient(#fff,#fff) padding-box,\n        linear-gradient(135deg,var(--green),var(--cyan),var(--blue-2)) border-box;\n      border:1.5px solid transparent;\n      color:var(--ink);\n      font-size:18px;\n      font-weight:800;\n      letter-spacing:-.04em;\n      box-shadow:0 16px 42px rgba(0,184,148,.14);\n    }\n\n    .ahorra-scope-como-funciona .step h3{\n      font-size:clamp(20px,2vw,26px);\n      line-height:1.08;\n      letter-spacing:-.045em;\n      font-weight:800;\n      color:var(--ink);\n    }\n\n    .ahorra-scope-como-funciona .step p{\n      max-width:520px;\n      margin-top:7px;\n      color:var(--muted);\n      font-size:16px;\n      line-height:1.45;\n      letter-spacing:-.015em;\n    }\n\n    @media(max-width:920px){\n      .ahorra-scope-como-funciona .wrap{\n        grid-template-columns:1fr;\n      }\n\n      .ahorra-scope-como-funciona .media{\n        min-height:420px;\n        order:2;\n      }\n\n      .ahorra-scope-como-funciona .content{\n        order:1;\n      }\n\n      .ahorra-scope-como-funciona .image-frame{\n        width:min(100%,430px);\n      }\n\n      .ahorra-scope-como-funciona h2,.ahorra-scope-como-funciona .intro{\n        max-width:100%;\n      }\n    }\n\n    @media(max-width:560px){\n      .ahorra-scope-como-funciona .asl-process{\n        padding:64px 16px;\n      }\n\n      .ahorra-scope-como-funciona .media{\n        min-height:330px;\n      }\n\n      .ahorra-scope-como-funciona .blob{\n        width:92%;\n      }\n\n      .ahorra-scope-como-funciona .image-frame{\n        width:92%;\n        border-radius:30px;\n        padding:9px;\n      }\n\n      .ahorra-scope-como-funciona .image-placeholder{\n        border-radius:23px;\n      }\n\n      .ahorra-scope-como-funciona .step{\n        grid-template-columns:44px 1fr;\n        gap:16px;\n      }\n\n      .ahorra-scope-como-funciona .num{\n        width:44px;\n        height:44px;\n        font-size:15px;\n      }\n\n      .ahorra-scope-como-funciona .step p{\n        font-size:15px;\n      }\n    }\n\n.ahorra-scope-cta{\n      --ink:#071827;\n      --muted:#647184;\n      --line:rgba(7,24,39,.12);\n      --blue:#172a78;\n      --blue-2:#0b65b8;\n      --green:#00d47e;\n      --green-2:#00b894;\n      --cyan:#12c8d8;\n      --white:#fff;\n      --max:1120px;\n      --shadow:0 28px 90px rgba(15,32,70,.10);\n    }\n\n    .ahorra-scope-cta, .ahorra-scope-cta *{box-sizing:border-box;margin:0;padding:0}\n\n    .ahorra-scope-cta{\n      min-height:100vh;\n      font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",Inter,"Segoe UI",Roboto,Arial,sans-serif;\n      color:var(--ink);\n      background:#fff;\n      -webkit-font-smoothing:antialiased;\n      text-rendering:optimizeLegibility;\n    }\n\n    .ahorra-scope-cta .newsletter{\n      position:relative;\n      overflow:hidden;\n      padding:clamp(72px,8vw,126px) 20px;\n      background:\n        radial-gradient(circle at 14% 18%, rgba(0,212,126,.10), transparent 30%),\n        radial-gradient(circle at 84% 36%, rgba(18,200,216,.13), transparent 30%),\n        linear-gradient(180deg,#fff 0%,#f7fbff 100%);\n    }\n\n    .ahorra-scope-cta .newsletter::before{\n      content:"";\n      position:absolute;\n      inset:auto -12% -34% -12%;\n      height:58%;\n      background:\n        radial-gradient(circle at 24% 40%,rgba(0,212,126,.16),transparent 34%),\n        radial-gradient(circle at 78% 30%,rgba(23,42,120,.12),transparent 36%);\n      filter:blur(22px);\n      pointer-events:none;\n    }\n\n    .ahorra-scope-cta .wrap{\n      position:relative;\n      z-index:1;\n      width:min(100%,var(--max));\n      margin:auto;\n      display:grid;\n      grid-template-columns:minmax(320px,.92fr) minmax(340px,1fr);\n      gap:clamp(48px,8vw,112px);\n      align-items:center;\n    }\n\n    .ahorra-scope-cta .copy{\n      max-width:520px;\n    }\n\n    .ahorra-scope-cta .kicker{\n      display:inline-flex;\n      align-items:center;\n      gap:10px;\n      margin-bottom:18px;\n      color:var(--green-2);\n      font-size:14px;\n      font-weight:750;\n      letter-spacing:-.01em;\n    }\n\n    .ahorra-scope-cta .kicker::before{\n      content:"";\n      width:9px;\n      height:9px;\n      border-radius:50%;\n      background:linear-gradient(135deg,var(--green),var(--cyan));\n      box-shadow:0 0 0 7px rgba(0,212,126,.12);\n    }\n\n    .ahorra-scope-cta h2{\n      font-size:clamp(42px,5vw,68px);\n      line-height:.98;\n      letter-spacing:-.064em;\n      font-weight:850;\n      color:var(--ink);\n      text-wrap:balance;\n    }\n\n    .ahorra-scope-cta .lead{\n      margin-top:22px;\n      max-width:460px;\n      color:var(--muted);\n      font-size:clamp(18px,1.8vw,22px);\n      line-height:1.38;\n      letter-spacing:-.025em;\n      font-weight:450;\n    }\n\n    .ahorra-scope-cta .form{\n      margin-top:36px;\n      display:grid;\n      gap:12px;\n      max-width:440px;\n    }\n\n    .ahorra-scope-cta .field{\n      width:100%;\n      height:54px;\n      padding:0 18px;\n      border:1px solid var(--line);\n      border-radius:16px;\n      background:rgba(255,255,255,.78);\n      color:var(--ink);\n      font:500 15px/1 -apple-system,BlinkMacSystemFont,"SF Pro Text",Inter,sans-serif;\n      outline:none;\n      box-shadow:0 10px 32px rgba(15,32,70,.04);\n      transition:border-color .18s ease, box-shadow .18s ease, background .18s ease;\n    }\n\n    .ahorra-scope-cta .field:focus{\n      border-color:rgba(0,184,148,.56);\n      background:#fff;\n      box-shadow:0 0 0 5px rgba(0,212,126,.10),0 16px 42px rgba(15,32,70,.06);\n    }\n\n    .ahorra-scope-cta .btn{\n      height:56px;\n      border:0;\n      border-radius:16px;\n      cursor:pointer;\n      color:#041b25;\n      font:800 15px/1 -apple-system,BlinkMacSystemFont,"SF Pro Text",Inter,sans-serif;\n      background:linear-gradient(135deg,var(--green) 0%,var(--cyan) 55%,#70e7c7 100%);\n      box-shadow:0 18px 48px rgba(0,184,148,.22);\n      transition:transform .18s ease, box-shadow .18s ease;\n    }\n\n    .ahorra-scope-cta .btn:hover{\n      transform:translateY(-2px);\n      box-shadow:0 26px 70px rgba(0,184,148,.28);\n    }\n\n    .ahorra-scope-cta .consent{\n      display:flex;\n      align-items:flex-start;\n      gap:9px;\n      margin-top:2px;\n      color:#46566b;\n      font-size:12px;\n      line-height:1.45;\n      letter-spacing:-.01em;\n    }\n\n    .ahorra-scope-cta .consent input{\n      margin-top:2px;\n      accent-color:var(--green-2);\n    }\n\n    .ahorra-scope-cta .visual{\n      position:relative;\n      min-height:clamp(360px,42vw,520px);\n      display:grid;\n      place-items:center;\n    }\n\n    .ahorra-scope-cta .blob{\n      position:absolute;\n      width:min(92%,520px);\n      aspect-ratio:1.14;\n      border-radius:42% 58% 50% 50% / 48% 44% 56% 52%;\n      background:\n        radial-gradient(circle at 28% 18%,rgba(255,255,255,.48),transparent 25%),\n        linear-gradient(135deg,var(--blue) 0%,var(--blue-2) 38%,var(--green) 100%);\n      box-shadow:0 44px 110px rgba(5,64,110,.20);\n      transform:rotate(5deg);\n    }\n\n    .ahorra-scope-cta .portrait{\n      position:relative;\n      width:min(74%,390px);\n      aspect-ratio:1;\n      display:grid;\n      place-items:end center;\n      overflow:hidden;\n      border-radius:0 0 42% 42%;\n      filter:drop-shadow(0 28px 48px rgba(15,32,70,.18));\n    }\n\n    .ahorra-scope-cta .person{\n      position:relative;\n      width:74%;\n      height:82%;\n    }\n\n    .ahorra-scope-cta .head{\n      position:absolute;\n      left:50%;\n      top:3%;\n      width:38%;\n      aspect-ratio:1;\n      transform:translateX(-50%);\n      border-radius:50%;\n      background:linear-gradient(135deg,#ffe0c9,#f6b891);\n      box-shadow:inset -10px -12px 24px rgba(139,70,40,.14);\n      z-index:3;\n    }\n\n    .ahorra-scope-cta .hair{\n      position:absolute;\n      left:50%;\n      top:-1%;\n      width:48%;\n      height:34%;\n      transform:translateX(-50%);\n      border-radius:48% 48% 42% 42%;\n      background:linear-gradient(135deg,#1b2432,#4b285a 70%,#da45a3);\n      z-index:2;\n    }\n\n    .ahorra-scope-cta .hair::after{\n      content:"";\n      position:absolute;\n      right:2%;\n      bottom:-34%;\n      width:22%;\n      height:70%;\n      border-radius:999px;\n      background:#d940a3;\n      transform:rotate(-8deg);\n    }\n\n    .ahorra-scope-cta .smile{\n      position:absolute;\n      left:50%;\n      top:58%;\n      width:28%;\n      height:10%;\n      border-bottom:3px solid rgba(90,45,34,.72);\n      border-radius:0 0 999px 999px;\n      transform:translateX(-50%);\n    }\n\n    .ahorra-scope-cta .eye{\n      position:absolute;\n      top:42%;\n      width:5px;\n      height:5px;\n      border-radius:50%;\n      background:#3b2a25;\n    }\n\n    .ahorra-scope-cta .eye.left{left:35%}\n    .ahorra-scope-cta .eye.right{right:35%}\n\n    .ahorra-scope-cta .body{\n      position:absolute;\n      left:50%;\n      bottom:0;\n      width:82%;\n      height:56%;\n      transform:translateX(-50%);\n      border-radius:40% 40% 0 0;\n      background:linear-gradient(180deg,#fff,#eef5f8);\n      box-shadow:inset 0 1px 0 rgba(255,255,255,.9);\n      z-index:1;\n    }\n\n    .ahorra-scope-cta .shoulder{\n      position:absolute;\n      left:50%;\n      bottom:0;\n      width:112%;\n      height:42%;\n      transform:translateX(-50%);\n      border-radius:48% 48% 0 0;\n      background:linear-gradient(135deg,#f9fbfd,#eaf2f5);\n      z-index:0;\n    }\n\n    .ahorra-scope-cta .floating-card{\n      position:absolute;\n      right:2%;\n      bottom:10%;\n      width:min(240px,48vw);\n      padding:16px 18px;\n      border-radius:24px;\n      background:rgba(255,255,255,.68);\n      border:1px solid rgba(255,255,255,.72);\n      box-shadow:0 24px 70px rgba(15,32,70,.13);\n      backdrop-filter:blur(18px);\n    }\n\n    .ahorra-scope-cta .floating-card strong{\n      display:block;\n      font-size:15px;\n      line-height:1.18;\n      letter-spacing:-.03em;\n    }\n\n    .ahorra-scope-cta .floating-card span{\n      display:block;\n      margin-top:5px;\n      color:var(--muted);\n      font-size:13px;\n      line-height:1.35;\n    }\n\n    @media(max-width:900px){\n      .ahorra-scope-cta .wrap{\n        grid-template-columns:1fr;\n      }\n\n      .ahorra-scope-cta .copy{\n        max-width:100%;\n      }\n\n      .ahorra-scope-cta .lead,.ahorra-scope-cta .form{\n        max-width:560px;\n      }\n\n      .ahorra-scope-cta .visual{\n        min-height:390px;\n      }\n\n      .ahorra-scope-cta .floating-card{\n        right:8%;\n      }\n    }\n\n    @media(max-width:560px){\n      .ahorra-scope-cta .newsletter{\n        padding:64px 16px;\n      }\n\n      .ahorra-scope-cta h2{\n        font-size:clamp(40px,13vw,58px);\n      }\n\n      .ahorra-scope-cta .lead{\n        font-size:18px;\n      }\n\n      .ahorra-scope-cta .form{\n        margin-top:30px;\n      }\n\n      .ahorra-scope-cta .field,.ahorra-scope-cta .btn{\n        height:52px;\n        border-radius:14px;\n      }\n\n      .ahorra-scope-cta .visual{\n        min-height:320px;\n      }\n\n      .ahorra-scope-cta .blob{\n        width:96%;\n      }\n\n      .ahorra-scope-cta .portrait{\n        width:78%;\n      }\n\n      .ahorra-scope-cta .floating-card{\n        display:none;\n      }\n    }\n\n    @media(prefers-reduced-motion:reduce){\n      .ahorra-scope-cta, .ahorra-scope-cta *{scroll-behavior:auto!important;transition:none!important}\n    }\n\n.ahorra-scope-resenas{\n      --ink:#071827;\n      --muted:#637084;\n      --white:#fff;\n      --blue:#172a78;\n      --blue-2:#0b65b8;\n      --green:#00d47e;\n      --green-2:#00b894;\n      --cyan:#12c8d8;\n      --card:rgba(255,255,255,.76);\n      --line:rgba(255,255,255,.36);\n      --shadow:0 24px 80px rgba(0,0,0,.18);\n      --max:1180px;\n    }\n\n    .ahorra-scope-resenas, .ahorra-scope-resenas *{box-sizing:border-box;margin:0;padding:0}\n\n    .ahorra-scope-resenas{\n      min-height:100vh;\n      font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",Inter,"Segoe UI",Roboto,Arial,sans-serif;\n      color:var(--ink);\n      background:#fff;\n      -webkit-font-smoothing:antialiased;\n      text-rendering:optimizeLegibility;\n      overflow-x:hidden;\n    }\n\n    .ahorra-scope-resenas .reviews{\n      position:relative;\n      overflow:hidden;\n      padding:clamp(64px,7vw,104px) 0;\n      background:\n        radial-gradient(circle at 12% 20%, rgba(0,212,126,.72), transparent 26%),\n        radial-gradient(circle at 78% 18%, rgba(0,212,126,.58), transparent 24%),\n        radial-gradient(circle at 86% 76%, rgba(18,200,216,.72), transparent 28%),\n        radial-gradient(circle at 28% 80%, rgba(0,184,148,.42), transparent 30%),\n        linear-gradient(135deg,#201064 0%,#172a78 42%,#073a64 100%);\n      isolation:isolate;\n    }\n\n    .ahorra-scope-resenas .reviews::before{\n      content:"";\n      position:absolute;\n      inset:-30%;\n      background:\n        radial-gradient(circle at 34% 24%, rgba(70,28,130,.46), transparent 22%),\n        radial-gradient(circle at 72% 64%, rgba(0,212,126,.26), transparent 22%);\n      animation:bgMove 14s ease-in-out infinite alternate;\n      filter:blur(22px);\n      z-index:-2;\n    }\n\n    .ahorra-scope-resenas .reviews::after{\n      content:"";\n      position:absolute;\n      inset:0;\n      background-image:\n        linear-gradient(rgba(255,255,255,.055) 1px, transparent 1px),\n        linear-gradient(90deg, rgba(255,255,255,.055) 1px, transparent 1px);\n      background-size:54px 54px;\n      mask-image:linear-gradient(to bottom,rgba(0,0,0,.9),rgba(0,0,0,.38));\n      z-index:-1;\n    }\n\n    @keyframes bgMove{\n      0%{transform:translate3d(-2%, -2%,0) scale(1)}\n      100%{transform:translate3d(3%, 2%,0) scale(1.08)}\n    }\n\n    .ahorra-scope-resenas .head{\n      width:min(100% - 32px,var(--max));\n      margin:0 auto 28px;\n      text-align:center;\n      color:#fff;\n    }\n\n    .ahorra-scope-resenas .kicker{\n      display:inline-flex;\n      align-items:center;\n      gap:10px;\n      margin-bottom:14px;\n      padding:9px 15px;\n      border-radius:999px;\n      background:rgba(255,255,255,.12);\n      border:1px solid rgba(255,255,255,.18);\n      backdrop-filter:blur(18px);\n      font-size:14px;\n      font-weight:760;\n    }\n\n    .ahorra-scope-resenas .dot{\n      width:8px;\n      height:8px;\n      border-radius:50%;\n      background:linear-gradient(135deg,var(--green),var(--cyan));\n      box-shadow:0 0 0 6px rgba(0,212,126,.14);\n    }\n\n    .ahorra-scope-resenas h2{\n      font-size:clamp(34px,4.5vw,58px);\n      line-height:1;\n      letter-spacing:-.06em;\n      font-weight:850;\n      text-wrap:balance;\n    }\n\n    .ahorra-scope-resenas h2 span{\n      text-decoration:underline;\n      text-decoration-thickness:3px;\n      text-underline-offset:8px;\n      text-decoration-color:rgba(0,212,126,.82);\n    }\n\n    .ahorra-scope-resenas .summary{\n      width:min(100% - 32px,var(--max));\n      margin:34px auto 18px;\n      border-radius:24px;\n      padding:18px 22px;\n      background:rgba(255,255,255,.78);\n      border:1px solid rgba(255,255,255,.52);\n      backdrop-filter:blur(22px);\n      box-shadow:var(--shadow);\n      display:flex;\n      align-items:center;\n      justify-content:space-between;\n      gap:18px;\n    }\n\n    .ahorra-scope-resenas .google{\n      display:flex;\n      align-items:center;\n      gap:12px;\n      font-weight:760;\n      letter-spacing:-.025em;\n    }\n\n    .ahorra-scope-resenas .google-mark{\n      font-weight:850;\n      letter-spacing:-.04em;\n    }\n\n    .ahorra-scope-resenas .google-mark .g1{color:#4285f4}\n    .ahorra-scope-resenas .google-mark .g2{color:#ea4335}\n    .ahorra-scope-resenas .google-mark .g3{color:#fbbc05}\n    .ahorra-scope-resenas .google-mark .g4{color:#4285f4}\n    .ahorra-scope-resenas .google-mark .g5{color:#34a853}\n    .ahorra-scope-resenas .google-mark .g6{color:#ea4335}\n\n    .ahorra-scope-resenas .rating{\n      display:flex;\n      align-items:center;\n      gap:10px;\n      color:#172a78;\n      font-weight:850;\n    }\n\n    .ahorra-scope-resenas .stars{\n      color:#00b894;\n      letter-spacing:1px;\n      font-size:18px;\n    }\n\n    .ahorra-scope-resenas .track-wrap{\n      position:relative;\n      margin-top:18px;\n      overflow:hidden;\n      padding:8px 0 14px;\n    }\n\n    .ahorra-scope-resenas .track-wrap::before,\n    .ahorra-scope-resenas .track-wrap::after{\n      content:"";\n      position:absolute;\n      top:0;\n      bottom:0;\n      width:12vw;\n      z-index:2;\n      pointer-events:none;\n    }\n\n    .ahorra-scope-resenas .track-wrap::before{\n      left:0;\n      background:linear-gradient(90deg,rgba(23,42,120,.95),transparent);\n    }\n\n    .ahorra-scope-resenas .track-wrap::after{\n      right:0;\n      background:linear-gradient(270deg,rgba(7,58,100,.95),transparent);\n    }\n\n    .ahorra-scope-resenas .track{\n      display:flex;\n      gap:20px;\n      width:max-content;\n      animation:scrollReviews 42s linear infinite;\n      padding-inline:20px;\n    }\n\n    .ahorra-scope-resenas .track-wrap:hover .track{\n      animation-play-state:paused;\n    }\n\n    @keyframes scrollReviews{\n      from{transform:translateX(0)}\n      to{transform:translateX(-50%)}\n    }\n\n    .ahorra-scope-resenas .review{\n      width:clamp(280px,29vw,390px);\n      min-height:184px;\n      padding:22px;\n      border-radius:26px;\n      background:var(--card);\n      border:1px solid var(--line);\n      backdrop-filter:blur(22px);\n      box-shadow:0 18px 60px rgba(0,0,0,.14);\n    }\n\n    .ahorra-scope-resenas .top{\n      display:flex;\n      align-items:center;\n      gap:13px;\n      margin-bottom:14px;\n    }\n\n    .ahorra-scope-resenas .avatar{\n      width:44px;\n      height:44px;\n      border-radius:50%;\n      display:grid;\n      place-items:center;\n      flex:0 0 auto;\n      color:white;\n      font-weight:850;\n      background:linear-gradient(135deg,var(--green),var(--cyan),var(--blue-2));\n      box-shadow:0 12px 26px rgba(0,184,148,.22);\n    }\n\n    .ahorra-scope-resenas .name{\n      font-size:16px;\n      font-weight:820;\n      letter-spacing:-.035em;\n      color:var(--ink);\n    }\n\n    .ahorra-scope-resenas .meta{\n      display:flex;\n      align-items:center;\n      gap:8px;\n      margin-top:4px;\n      font-size:13px;\n      color:var(--muted);\n    }\n\n    .ahorra-scope-resenas .review .stars{\n      font-size:15px;\n      letter-spacing:.5px;\n      color:#00b894;\n    }\n\n    .ahorra-scope-resenas .text{\n      color:#102033;\n      font-size:15.5px;\n      line-height:1.48;\n      letter-spacing:-.012em;\n    }\n\n    @media(max-width:700px){\n      .ahorra-scope-resenas .reviews{\n        padding:56px 0;\n      }\n\n      .ahorra-scope-resenas .summary{\n        align-items:flex-start;\n        flex-direction:column;\n        border-radius:22px;\n      }\n\n      .ahorra-scope-resenas .track{\n        gap:14px;\n        animation-duration:36s;\n      }\n\n      .ahorra-scope-resenas .review{\n        width:82vw;\n        min-height:190px;\n        border-radius:24px;\n      }\n\n      .ahorra-scope-resenas .track-wrap::before,\n      .ahorra-scope-resenas .track-wrap::after{\n        width:18vw;\n      }\n    }\n\n    @media(prefers-reduced-motion:reduce){\n      .ahorra-scope-resenas .track,.ahorra-scope-resenas .reviews::before{\n        animation:none!important;\n      }\n    }\n\n.ahorra-scope-form{\n      --ink:#071827;\n      --muted:#677487;\n      --line:rgba(7,24,39,.14);\n      --soft:#f7fbff;\n      --white:#fff;\n      --blue:#172a78;\n      --blue-2:#0b65b8;\n      --green:#00d47e;\n      --green-2:#00b894;\n      --cyan:#12c8d8;\n      --shadow:0 28px 90px rgba(15,32,70,.10);\n      --max:1120px;\n    }\n\n    .ahorra-scope-form, .ahorra-scope-form *{box-sizing:border-box;margin:0;padding:0}\n\n    .ahorra-scope-form{\n      min-height:100vh;\n      font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",Inter,"Segoe UI",Roboto,Arial,sans-serif;\n      color:var(--ink);\n      background:#fff;\n      -webkit-font-smoothing:antialiased;\n      text-rendering:optimizeLegibility;\n    }\n\n    .ahorra-scope-form .quote-section{\n      position:relative;\n      overflow:hidden;\n      padding:clamp(70px,8vw,124px) 20px;\n      background:\n        radial-gradient(circle at 14% 16%, rgba(0,212,126,.10), transparent 30%),\n        radial-gradient(circle at 82% 24%, rgba(18,200,216,.12), transparent 30%),\n        linear-gradient(180deg,#fff 0%,#f7fbff 100%);\n    }\n\n    .ahorra-scope-form .quote-section::before{\n      content:"";\n      position:absolute;\n      inset:auto -12% -34% -12%;\n      height:56%;\n      background:\n        radial-gradient(circle at 28% 42%,rgba(0,212,126,.14),transparent 34%),\n        radial-gradient(circle at 76% 30%,rgba(23,42,120,.11),transparent 36%);\n      filter:blur(22px);\n      pointer-events:none;\n    }\n\n    .ahorra-scope-form .wrap{\n      position:relative;\n      z-index:1;\n      width:min(100%,var(--max));\n      margin:auto;\n      display:grid;\n      grid-template-columns:minmax(340px,.95fr) minmax(380px,1.05fr);\n      gap:clamp(46px,7vw,92px);\n      align-items:center;\n    }\n\n    .ahorra-scope-form .left-panel{\n      display:grid;\n      gap:clamp(34px,4vw,54px);\n      align-content:start;\n    }\n\n    .ahorra-scope-form .visual{\n      position:relative;\n      min-height:clamp(330px,34vw,470px);\n      display:grid;\n      place-items:center;\n    }\n\n    .ahorra-scope-form .blob{\n      position:absolute;\n      width:min(88%,430px);\n      aspect-ratio:.88;\n      border-radius:48% 52% 43% 57% / 45% 44% 56% 55%;\n      background:\n        radial-gradient(circle at 28% 18%,rgba(255,255,255,.36),transparent 26%),\n        linear-gradient(135deg,var(--blue) 0%,var(--blue-2) 42%,var(--green) 100%);\n      box-shadow:0 44px 110px rgba(5,64,110,.18);\n      transform:rotate(-5deg);\n    }\n\n    .ahorra-scope-form .person{\n      position:relative;\n      width:min(68%,310px);\n      height:clamp(290px,30vw,410px);\n      filter:drop-shadow(0 28px 44px rgba(15,32,70,.18));\n    }\n\n    .ahorra-scope-form .head{\n      position:absolute;\n      left:50%;\n      top:8%;\n      width:31%;\n      aspect-ratio:1;\n      transform:translateX(-50%);\n      border-radius:50%;\n      background:linear-gradient(135deg,#ffe3ca,#f3b78c);\n      box-shadow:inset -10px -14px 24px rgba(117,58,30,.14);\n      z-index:4;\n    }\n\n    .ahorra-scope-form .hair{\n      position:absolute;\n      left:50%;\n      top:5%;\n      width:37%;\n      height:23%;\n      transform:translateX(-50%) rotate(-2deg);\n      border-radius:48% 52% 45% 45%;\n      background:linear-gradient(135deg,#7b4b2d,#2b1c18 78%);\n      z-index:5;\n    }\n\n    .ahorra-scope-form .ear{\n      position:absolute;\n      top:45%;\n      width:12%;\n      height:18%;\n      border-radius:50%;\n      background:#f1b384;\n      z-index:3;\n    }\n\n    .ahorra-scope-form .ear.left{left:28%}\n    .ahorra-scope-form .ear.right{right:28%}\n\n    .ahorra-scope-form .eye{\n      position:absolute;\n      top:48%;\n      width:5px;\n      height:5px;\n      border-radius:50%;\n      background:#3b2a25;\n    }\n\n    .ahorra-scope-form .eye.left{left:36%}\n    .ahorra-scope-form .eye.right{right:36%}\n\n    .ahorra-scope-form .smile{\n      position:absolute;\n      left:50%;\n      top:62%;\n      width:28%;\n      height:10%;\n      border-bottom:3px solid rgba(90,45,34,.72);\n      border-radius:0 0 999px 999px;\n      transform:translateX(-50%);\n    }\n\n    .ahorra-scope-form .neck{\n      position:absolute;\n      left:50%;\n      top:32%;\n      width:13%;\n      height:12%;\n      transform:translateX(-50%);\n      background:linear-gradient(#f2b88d,#e9a679);\n      border-radius:0 0 12px 12px;\n      z-index:2;\n    }\n\n    .ahorra-scope-form .body{\n      position:absolute;\n      left:50%;\n      bottom:3%;\n      width:76%;\n      height:57%;\n      transform:translateX(-50%);\n      border-radius:34% 34% 12% 12%;\n      background:linear-gradient(135deg,#f7f8fa,#dfe7ed);\n      z-index:1;\n      overflow:hidden;\n    }\n\n    .ahorra-scope-form .shirt{\n      position:absolute;\n      inset:0;\n      background:\n        linear-gradient(90deg,transparent 48%,rgba(120,128,140,.24) 49%,rgba(120,128,140,.24) 51%,transparent 52%),\n        repeating-linear-gradient(90deg,rgba(0,0,0,.08) 0 2px,transparent 2px 9px),\n        linear-gradient(135deg,#59616b,#2d343d);\n      opacity:.86;\n    }\n\n    .ahorra-scope-form .phone{\n      position:absolute;\n      left:48%;\n      bottom:9%;\n      width:31%;\n      aspect-ratio:.62;\n      border-radius:17px;\n      background:linear-gradient(135deg,#f3f7fb,#aab8c8);\n      border:3px solid rgba(255,255,255,.76);\n      transform:rotate(-10deg);\n      z-index:7;\n      box-shadow:0 18px 38px rgba(15,32,70,.22);\n    }\n\n    .ahorra-scope-form .phone::after{\n      content:"";\n      position:absolute;\n      top:9px;\n      left:50%;\n      width:22%;\n      height:4px;\n      border-radius:999px;\n      background:rgba(7,24,39,.24);\n      transform:translateX(-50%);\n    }\n\n    .ahorra-scope-form .arm{\n      position:absolute;\n      bottom:10%;\n      width:36%;\n      height:10%;\n      border-radius:999px;\n      background:linear-gradient(135deg,#f4bb91,#e4a06f);\n      z-index:6;\n    }\n\n    .ahorra-scope-form .arm.left{\n      left:19%;\n      transform:rotate(18deg);\n    }\n\n    .ahorra-scope-form .arm.right{\n      right:19%;\n      transform:rotate(-22deg);\n    }\n\n    .ahorra-scope-form .content{\n      max-width:620px;\n    }\n\n    .ahorra-scope-form .form-panel{\n      width:100%;\n      align-self:center;\n    }\n\n    .ahorra-scope-form .kicker{\n      display:inline-flex;\n      align-items:center;\n      gap:10px;\n      margin-bottom:18px;\n      color:var(--green-2);\n      font-size:14px;\n      font-weight:760;\n      letter-spacing:-.01em;\n    }\n\n    .ahorra-scope-form .kicker::before{\n      content:"";\n      width:9px;\n      height:9px;\n      border-radius:50%;\n      background:linear-gradient(135deg,var(--green),var(--cyan));\n      box-shadow:0 0 0 7px rgba(0,212,126,.12);\n    }\n\n    .ahorra-scope-form h2{\n      max-width:580px;\n      font-size:clamp(42px,5vw,68px);\n      line-height:.98;\n      letter-spacing:-.064em;\n      font-weight:850;\n      color:var(--ink);\n      text-wrap:balance;\n    }\n\n    .ahorra-scope-form .lead{\n      max-width:520px;\n      margin-top:22px;\n      color:var(--muted);\n      font-size:clamp(18px,1.8vw,21px);\n      line-height:1.38;\n      letter-spacing:-.025em;\n      font-weight:450;\n    }\n\n    .ahorra-scope-form .form{\n      margin-top:34px;\n      display:grid;\n      gap:16px;\n    }\n\n    .ahorra-scope-form .grid-2{\n      display:grid;\n      grid-template-columns:1fr 1fr;\n      gap:14px;\n    }\n\n    .ahorra-scope-form label{\n      display:grid;\n      gap:7px;\n      color:#586477;\n      font-size:13px;\n      font-weight:700;\n      letter-spacing:-.01em;\n    }\n\n    .ahorra-scope-form input,\n    .ahorra-scope-form textarea{\n      width:100%;\n      border:1px solid var(--line);\n      border-radius:16px;\n      background:rgba(255,255,255,.78);\n      color:var(--ink);\n      font:500 15px/1.2 -apple-system,BlinkMacSystemFont,"SF Pro Text",Inter,sans-serif;\n      outline:none;\n      box-shadow:0 10px 32px rgba(15,32,70,.04);\n      transition:border-color .18s ease, box-shadow .18s ease, background .18s ease;\n    }\n\n    .ahorra-scope-form input{\n      height:52px;\n      padding:0 16px;\n    }\n\n    .ahorra-scope-form textarea{\n      min-height:108px;\n      padding:15px 16px;\n      resize:vertical;\n    }\n\n    .ahorra-scope-form input:focus,\n    .ahorra-scope-form textarea:focus{\n      border-color:rgba(0,184,148,.56);\n      background:#fff;\n      box-shadow:0 0 0 5px rgba(0,212,126,.10),0 16px 42px rgba(15,32,70,.06);\n    }\n\n    .ahorra-scope-form .upload-row{\n      display:grid;\n      grid-template-columns:minmax(220px,1fr) auto;\n      gap:14px;\n      align-items:center;\n    }\n\n    .ahorra-scope-form .upload{\n      position:relative;\n      min-height:58px;\n      display:flex;\n      align-items:center;\n      gap:12px;\n      padding:14px 16px;\n      border:1px dashed rgba(7,24,39,.22);\n      border-radius:18px;\n      background:rgba(255,255,255,.64);\n      box-shadow:0 10px 32px rgba(15,32,70,.04);\n      cursor:pointer;\n    }\n\n    .ahorra-scope-form .upload input{\n      position:absolute;\n      inset:0;\n      opacity:0;\n      cursor:pointer;\n    }\n\n    .ahorra-scope-form .upload-icon{\n      width:34px;\n      height:34px;\n      border-radius:12px;\n      display:grid;\n      place-items:center;\n      background:linear-gradient(135deg,var(--green),var(--cyan));\n      color:#061923;\n      font-weight:900;\n      flex:0 0 auto;\n    }\n\n    .ahorra-scope-form .upload strong{\n      display:block;\n      color:var(--ink);\n      font-size:14px;\n      letter-spacing:-.02em;\n    }\n\n    .ahorra-scope-form .upload span{\n      display:block;\n      margin-top:3px;\n      color:var(--muted);\n      font-size:13px;\n    }\n\n    .ahorra-scope-form .max{\n      color:var(--muted);\n      font-size:13px;\n      font-weight:650;\n      white-space:nowrap;\n    }\n\n    .ahorra-scope-form .consent{\n      display:flex;\n      align-items:flex-start;\n      gap:9px;\n      color:#586477;\n      font-size:13px;\n      line-height:1.45;\n    }\n\n    .ahorra-scope-form .consent input{\n      width:auto;\n      height:auto;\n      margin-top:3px;\n      accent-color:var(--green-2);\n      box-shadow:none;\n    }\n\n    .ahorra-scope-form .btn{\n      height:58px;\n      border:0;\n      border-radius:17px;\n      cursor:pointer;\n      color:#041b25;\n      font:850 15px/1 -apple-system,BlinkMacSystemFont,"SF Pro Text",Inter,sans-serif;\n      background:linear-gradient(135deg,var(--green) 0%,var(--cyan) 55%,#70e7c7 100%);\n      box-shadow:0 18px 48px rgba(0,184,148,.22);\n      transition:transform .18s ease, box-shadow .18s ease;\n    }\n\n    .ahorra-scope-form .btn:hover{\n      transform:translateY(-2px);\n      box-shadow:0 26px 70px rgba(0,184,148,.28);\n    }\n\n    @media(max-width:920px){\n      .ahorra-scope-form .wrap{\n        grid-template-columns:1fr;\n      }\n\n      .ahorra-scope-form .left-panel{\n        order:1;\n      }\n\n      .ahorra-scope-form .form-panel{\n        order:2;\n      }\n\n      .ahorra-scope-form .visual{\n        min-height:360px;\n      }\n\n      .ahorra-scope-form .content{\n        max-width:100%;\n      }\n\n      .ahorra-scope-form h2,.ahorra-scope-form .lead{\n        max-width:100%;\n      }\n    }\n\n    @media(max-width:600px){\n      .ahorra-scope-form .quote-section{\n        padding:64px 16px;\n      }\n\n      .ahorra-scope-form h2{\n        font-size:clamp(40px,13vw,58px);\n      }\n\n      .ahorra-scope-form .grid-2,\n      .ahorra-scope-form .upload-row{\n        grid-template-columns:1fr;\n      }\n\n      .ahorra-scope-form .max{\n        white-space:normal;\n      }\n\n      .ahorra-scope-form .visual{\n        min-height:300px;\n      }\n\n      .ahorra-scope-form .person{\n        width:min(72%,270px);\n        height:300px;\n      }\n\n      .ahorra-scope-form .blob{\n        width:92%;\n      }\n\n      .ahorra-scope-form input{\n        height:50px;\n      }\n    }\n\n    @media(prefers-reduced-motion:reduce){\n      .ahorra-scope-form, .ahorra-scope-form *{scroll-behavior:auto!important;transition:none!important}\n    }\n\n.ahorra-scope-footer{\n      --ink:#071827;\n      --muted:#667386;\n      --line:rgba(7,24,39,.12);\n      --blue:#172a78;\n      --green:#00d47e;\n      --green-2:#00b894;\n      --cyan:#12c8d8;\n      --max:1120px;\n    }\n\n    .ahorra-scope-footer, .ahorra-scope-footer *{box-sizing:border-box;margin:0;padding:0}\n\n    .ahorra-scope-footer{\n      min-height:100vh;\n      font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text",Inter,"Segoe UI",Roboto,Arial,sans-serif;\n      color:var(--ink);\n      background:#fff;\n      -webkit-font-smoothing:antialiased;\n      text-rendering:optimizeLegibility;\n    }\n\n    .ahorra-scope-footer a{color:inherit;text-decoration:none}\n\n    .ahorra-scope-footer .footer{\n      position:relative;\n      overflow:hidden;\n      background:\n        radial-gradient(circle at 12% 18%, rgba(0,212,126,.10), transparent 30%),\n        radial-gradient(circle at 82% 26%, rgba(18,200,216,.10), transparent 28%),\n        linear-gradient(180deg,#fff 0%,#f7fbff 100%);\n    }\n\n    .ahorra-scope-footer .footer-main{\n      width:min(100% - 40px,var(--max));\n      margin:auto;\n      padding:clamp(54px,6vw,82px) 0;\n      display:grid;\n      grid-template-columns:minmax(360px,1.4fr) minmax(170px,.55fr) minmax(170px,.55fr);\n      gap:clamp(42px,7vw,110px);\n      align-items:start;\n    }\n\n    .ahorra-scope-footer .brand{max-width:470px}\n\n    .ahorra-scope-footer .logo{\n      width:min(245px,72vw);\n      height:auto;\n      object-fit:contain;\n      filter:drop-shadow(0 14px 28px rgba(0,184,148,.13));\n    }\n\n    .ahorra-scope-footer .fallback-logo{\n      display:inline-flex;\n      align-items:center;\n      gap:10px;\n      font-size:30px;\n      line-height:1;\n      font-weight:850;\n      letter-spacing:-.06em;\n    }\n\n    .ahorra-scope-footer .fallback-logo::before{\n      content:"";\n      width:18px;\n      height:18px;\n      border-radius:50%;\n      background:conic-gradient(from 120deg,var(--green),var(--cyan),var(--blue),var(--green));\n      box-shadow:0 0 0 6px rgba(0,212,126,.12);\n    }\n\n    .ahorra-scope-footer .brand-text{\n      margin-top:22px;\n      max-width:380px;\n      color:var(--muted);\n      font-size:16px;\n      line-height:1.5;\n      letter-spacing:-.018em;\n    }\n\n    .ahorra-scope-footer .subscribe{\n      margin-top:26px;\n      display:grid;\n      gap:12px;\n      max-width:440px;\n    }\n\n    .ahorra-scope-footer .subscribe-row{\n      display:grid;\n      grid-template-columns:1fr auto;\n      gap:10px;\n    }\n\n    .ahorra-scope-footer .input{\n      height:52px;\n      min-width:0;\n      padding:0 16px;\n      border:1px solid var(--line);\n      border-radius:16px;\n      background:rgba(255,255,255,.78);\n      color:var(--ink);\n      font:500 15px/1 -apple-system,BlinkMacSystemFont,"SF Pro Text",Inter,sans-serif;\n      outline:none;\n      box-shadow:0 10px 32px rgba(15,32,70,.04);\n    }\n\n    .ahorra-scope-footer .input:focus{\n      border-color:rgba(0,184,148,.55);\n      box-shadow:0 0 0 5px rgba(0,212,126,.10),0 16px 42px rgba(15,32,70,.06);\n    }\n\n    .ahorra-scope-footer .btn{\n      height:52px;\n      padding:0 22px;\n      border:0;\n      border-radius:16px;\n      cursor:pointer;\n      color:#041b25;\n      font:850 15px/1 -apple-system,BlinkMacSystemFont,"SF Pro Text",Inter,sans-serif;\n      background:linear-gradient(135deg,var(--green) 0%,var(--cyan) 58%,#76e9cb 100%);\n      box-shadow:0 18px 48px rgba(0,184,148,.20);\n      transition:transform .18s ease,box-shadow .18s ease;\n      white-space:nowrap;\n    }\n\n    .ahorra-scope-footer .btn:hover{\n      transform:translateY(-2px);\n      box-shadow:0 26px 70px rgba(0,184,148,.26);\n    }\n\n    .ahorra-scope-footer .consent{\n      display:flex;\n      align-items:flex-start;\n      gap:8px;\n      color:#586477;\n      font-size:12px;\n      line-height:1.45;\n    }\n\n    .ahorra-scope-footer .consent input{\n      margin-top:2px;\n      accent-color:var(--green-2);\n    }\n\n    .ahorra-scope-footer .col h3{\n      margin-bottom:18px;\n      font-size:14px;\n      font-weight:850;\n      letter-spacing:-.02em;\n      color:var(--ink);\n    }\n\n    .ahorra-scope-footer .links{\n      display:grid;\n      gap:13px;\n      list-style:none;\n    }\n\n    .ahorra-scope-footer .links a{\n      color:var(--muted);\n      font-size:14px;\n      font-weight:640;\n      letter-spacing:-.01em;\n      transition:color .18s ease,transform .18s ease;\n    }\n\n    .ahorra-scope-footer .links a:hover{\n      color:var(--green-2);\n      transform:translateX(2px);\n    }\n\n    .ahorra-scope-footer .footer-bottom{\n      position:relative;\n      overflow:hidden;\n      background:\n        radial-gradient(circle at 12% 12%,rgba(0,212,126,.58),transparent 26%),\n        radial-gradient(circle at 86% 20%,rgba(18,200,216,.54),transparent 26%),\n        linear-gradient(135deg,#201064 0%,#172a78 45%,#073a64 100%);\n      color:#fff;\n    }\n\n    .ahorra-scope-footer .footer-bottom::before{\n      content:"";\n      position:absolute;\n      inset:-50%;\n      background:\n        radial-gradient(circle at 30% 40%,rgba(0,212,126,.20),transparent 22%),\n        radial-gradient(circle at 75% 62%,rgba(18,200,216,.24),transparent 24%);\n      animation:moveBg 14s ease-in-out infinite alternate;\n      filter:blur(24px);\n    }\n\n    @keyframes moveBg{\n      from{transform:translate3d(-2%,-1%,0) scale(1)}\n      to{transform:translate3d(3%,2%,0) scale(1.08)}\n    }\n\n    .ahorra-scope-footer .bottom-inner{\n      position:relative;\n      z-index:1;\n      width:min(100% - 40px,var(--max));\n      min-height:74px;\n      margin:auto;\n      display:grid;\n      grid-template-columns:1fr auto 1fr;\n      align-items:center;\n      gap:24px;\n    }\n\n    .ahorra-scope-footer .copy{\n      font-size:14px;\n      font-weight:760;\n      color:rgba(255,255,255,.95);\n    }\n\n    .ahorra-scope-footer .legal{\n      display:flex;\n      align-items:center;\n      justify-content:center;\n      gap:clamp(18px,4vw,46px);\n      font-size:13px;\n      font-weight:720;\n      color:rgba(255,255,255,.68);\n    }\n\n    .ahorra-scope-footer .legal a:hover{color:#fff}\n\n    .ahorra-scope-footer .social{\n      display:flex;\n      justify-content:flex-end;\n      gap:12px;\n    }\n\n    .ahorra-scope-footer .social a{\n      width:34px;\n      height:34px;\n      display:grid;\n      place-items:center;\n      border-radius:12px;\n      background:rgba(255,255,255,.12);\n      border:1px solid rgba(255,255,255,.16);\n      color:#fff;\n      font-weight:850;\n      font-size:14px;\n      backdrop-filter:blur(16px);\n      transition:transform .18s ease,background .18s ease;\n    }\n\n    .ahorra-scope-footer .social a:hover{\n      transform:translateY(-2px);\n      background:rgba(255,255,255,.20);\n    }\n\n    @media(max-width:860px){\n      .ahorra-scope-footer .footer-main{\n        grid-template-columns:1fr 1fr;\n      }\n\n      .ahorra-scope-footer .brand{\n        grid-column:1/-1;\n      }\n\n      .ahorra-scope-footer .bottom-inner{\n        grid-template-columns:1fr;\n        justify-items:center;\n        text-align:center;\n        padding:22px 0;\n      }\n\n      .ahorra-scope-footer .social{justify-content:center}\n    }\n\n    @media(max-width:560px){\n      .ahorra-scope-footer .footer-main{\n        width:min(100% - 28px,var(--max));\n        grid-template-columns:1fr;\n        padding:52px 0;\n      }\n\n      .ahorra-scope-footer .subscribe-row{grid-template-columns:1fr}\n      .ahorra-scope-footer .btn{width:100%}\n\n      .ahorra-scope-footer .bottom-inner{\n        width:min(100% - 28px,var(--max));\n      }\n\n      .ahorra-scope-footer .legal{\n        flex-wrap:wrap;\n        gap:14px 24px;\n      }\n    }\n\n    @media(prefers-reduced-motion:reduce){\n      .ahorra-scope-footer, .ahorra-scope-footer *{scroll-behavior:auto!important;transition:none!important;animation:none!important}\n    }'

const AHORRA_PAGE_LAYOUT_FIXES = `
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap');

html, body, #app, .ahorra-page-host {
  margin: 0 !important;
  padding: 0 !important;
  width: 100%;
  min-height: 100%;
  overflow-x: hidden;
}

body {
  background: #102b68;
}

#app,
.ahorra-page-host,
.ahorra-page,
.ahorra-page > div {
  width: 100%;
  min-height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.ahorra-page,
.ahorra-page * {
  font-family: 'Manrope', 'Inter', sans-serif !important;
}

.ahorra-page button,
.ahorra-page input,
.ahorra-page textarea,
.ahorra-page select {
  font-family: 'Manrope', 'Inter', sans-serif !important;
}

.ahorra-scope-hero .nav,
.ahorra-scope-hero .phone,
.ahorra-scope-hero .client-btn,
.ahorra-scope-hero .hero-footer,
.ahorra-scope-solutions .section-header p,
.ahorra-scope-benefits .benefits-description,
.ahorra-scope-benefits .benefit-item p,
.ahorra-scope-como-funciona .intro,
.ahorra-scope-como-funciona .step p,
.ahorra-scope-cta .lead,
.ahorra-scope-resenas .review .text,
.ahorra-scope-form .lead,
.ahorra-scope-footer .brand-text {
  font-size: clamp(15px, 1.2vw, 16px) !important;
  line-height: 1.55 !important;
  font-weight: 400 !important;
  letter-spacing: -0.01em !important;
}

.ahorra-scope-hero h1 {
  font-size: clamp(42px, 5vw, 72px) !important;
  line-height: 0.95 !important;
  letter-spacing: -0.04em !important;
  font-weight: 700 !important;
}

.ahorra-scope-benefits .benefits-title,
.ahorra-scope-solutions .section-header h2,
.ahorra-scope-clientes-faixa .marquee-title,
.ahorra-scope-como-funciona h2,
.ahorra-scope-cta h2,
.ahorra-scope-resenas h2,
.ahorra-scope-form h2 {
  font-size: clamp(32px, 4vw, 56px) !important;
  line-height: 1 !important;
  letter-spacing: -0.035em !important;
  font-weight: 700 !important;
}

.ahorra-scope-form #quote-title {
  max-width: 720px !important;
  font-size: clamp(28px, 3.4vw, 44px) !important;
  line-height: 1.05 !important;
  letter-spacing: -0.045em !important;
  text-wrap: initial !important;
}

.ahorra-scope-hero .lead {
  font-size: clamp(16px, 1.5vw, 18px) !important;
  line-height: 1.55 !important;
  letter-spacing: -0.01em !important;
  font-weight: 400 !important;
}

.ahorra-scope-hero .nav,
.ahorra-scope-footer .links a,
.ahorra-scope-footer .copy,
.ahorra-scope-footer .legal {
  font-size: 14px !important;
  line-height: 1.4 !important;
  font-weight: 600 !important;
  letter-spacing: -0.01em !important;
}

.ahorra-scope-hero .nav a,
.ahorra-scope-hero .hero-footer a,
.ahorra-scope-footer .links a,
.ahorra-scope-footer .legal a {
  font-weight: 600 !important;
}

.ahorra-scope-hero .phone {
  font-size: 14px !important;
  line-height: 1.3 !important;
  font-weight: 700 !important;
  letter-spacing: -0.01em !important;
}

.ahorra-scope-hero .phone span,
.ahorra-scope-form .upload span,
.ahorra-scope-form .consent,
.ahorra-scope-cta .consent,
.ahorra-scope-footer .consent {
  font-size: 13px !important;
  line-height: 1.45 !important;
  font-weight: 400 !important;
  letter-spacing: -0.01em !important;
}

.ahorra-scope-form label,
.ahorra-scope-form .max {
  font-size: 13px !important;
  line-height: 1.45 !important;
  font-weight: 600 !important;
  letter-spacing: -0.01em !important;
}

.ahorra-scope-hero .phone span {
  font-size: 13px !important;
  line-height: 1.45 !important;
  font-weight: 500 !important;
  letter-spacing: -0.01em !important;
}

.ahorra-scope-hero .client-btn,
.ahorra-scope-hero .cta,
.ahorra-scope-cta .btn,
.ahorra-scope-form .btn,
.ahorra-scope-footer .btn {
  font-size: 14px !important;
  line-height: 1 !important;
  font-weight: 700 !important;
  letter-spacing: -0.01em !important;
}

.ahorra-scope-hero .eyebrow,
.ahorra-scope-benefits .section-kicker,
.ahorra-scope-solutions .section-header .eyebrow,
.ahorra-scope-como-funciona .kicker,
.ahorra-scope-cta .kicker,
.ahorra-scope-resenas .kicker,
.ahorra-scope-form .kicker,
.ahorra-scope-benefits .media-badge,
.ahorra-scope-como-funciona .num {
  font-size: 12px !important;
  line-height: 1.2 !important;
  font-weight: 700 !important;
  letter-spacing: 0.02em !important;
}

.ahorra-scope-hero .hero-footer strong,
.ahorra-scope-solutions .service-card h3,
.ahorra-scope-benefits .benefit-item h3,
.ahorra-scope-como-funciona .step h3,
.ahorra-scope-cta .floating-card strong,
.ahorra-scope-resenas .review .name {
  font-size: 18px !important;
  line-height: 1.2 !important;
  font-weight: 700 !important;
  letter-spacing: -0.02em !important;
}

.ahorra-scope-solutions .service-card p,
.ahorra-scope-cta .floating-card span,
.ahorra-scope-footer .col h3,
.ahorra-scope-footer .social a {
  font-size: 14px !important;
  line-height: 1.45 !important;
  font-weight: 400 !important;
  letter-spacing: -0.01em !important;
}

.ahorra-scope-solutions .service-card h3,
.ahorra-scope-footer .col h3 {
  font-weight: 700 !important;
}

.ahorra-scope-resenas .review .meta {
  font-size: 13px !important;
  line-height: 1.4 !important;
  font-weight: 500 !important;
  letter-spacing: -0.01em !important;
}

.ahorra-scope-benefits .media-badge,
.ahorra-scope-como-funciona .num {
  line-height: 1 !important;
}

.ahorra-scope-clientes-faixa .brand-word {
  font-weight: 700 !important;
  letter-spacing: -0.03em !important;
}

.ahorra-scope-clientes-faixa .brand-sub {
  font-size: 12px !important;
  line-height: 1.25 !important;
  font-weight: 600 !important;
  letter-spacing: 0.02em !important;
}

.ahorra-scope-resenas .summary,
.ahorra-scope-resenas .rating,
.ahorra-scope-resenas .google,
.ahorra-scope-form .upload strong {
  font-size: 14px !important;
  line-height: 1.35 !important;
  font-weight: 700 !important;
  letter-spacing: -0.01em !important;
}

.ahorra-scope-form input,
.ahorra-scope-form textarea,
.ahorra-scope-cta .field,
.ahorra-scope-footer .input {
  font-size: 15px !important;
  line-height: 1.5 !important;
  font-weight: 500 !important;
  letter-spacing: -0.01em !important;
}

@media (max-width: 768px) {
  .ahorra-scope-hero h1 {
    font-size: clamp(38px, 12vw, 52px) !important;
    line-height: 0.95 !important;
  }

  .ahorra-scope-benefits .benefits-title,
  .ahorra-scope-solutions .section-header h2,
  .ahorra-scope-clientes-faixa .marquee-title,
  .ahorra-scope-como-funciona h2,
  .ahorra-scope-cta h2,
  .ahorra-scope-resenas h2,
  .ahorra-scope-form h2 {
    font-size: clamp(22px, 7vw, 30px) !important;
    line-height: 1 !important;
  }

  .ahorra-scope-form #quote-title {
    font-size: clamp(30px, 8vw, 38px) !important;
    line-height: 1.05 !important;
  }

  .ahorra-scope-hero .lead,
  .ahorra-scope-solutions .section-header p,
  .ahorra-scope-benefits .benefits-description,
  .ahorra-scope-benefits .benefit-item p,
  .ahorra-scope-como-funciona .intro,
  .ahorra-scope-como-funciona .step p,
  .ahorra-scope-cta .lead,
  .ahorra-scope-resenas .review .text,
  .ahorra-scope-form .lead,
  .ahorra-scope-footer .brand-text {
    font-size: 15px !important;
    line-height: 1.5 !important;
  }
}

.ahorra-page main,
.ahorra-page section,
.ahorra-page footer {
  margin: 0;
}

.ahorra-scope-hero,
.ahorra-scope-hero .hero {
  width: 100%;
  margin: 0;
  min-height: 100svh;
}

.ahorra-scope-hero .hero-inner {
  width: min(100% - 48px, var(--container));
}

.ahorra-scope-benefits,
.ahorra-scope-solutions,
.ahorra-scope-clientes-faixa,
.ahorra-scope-como-funciona,
.ahorra-scope-cta,
.ahorra-scope-resenas,
.ahorra-scope-form,
.ahorra-scope-footer {
  min-height: auto !important;
  width: 100%;
  margin: 0;
  background: transparent !important;
}

.ahorra-scope-clientes-faixa {
  display: block !important;
  place-items: initial !important;
  overflow-y: hidden !important;
}

.ahorra-scope-flow {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 12% 18%, rgba(0, 212, 126, 0.10), transparent 30%),
    radial-gradient(circle at 82% 34%, rgba(18, 200, 216, 0.12), transparent 28%),
    linear-gradient(180deg, #fff 0%, #f7fbff 100%) !important;
}

.ahorra-scope-flow::before {
  content: "";
  position: absolute;
  inset: auto -10% -30% -10%;
  height: 55%;
  background:
    radial-gradient(circle at 24% 40%, rgba(0, 212, 126, 0.16), transparent 34%),
    radial-gradient(circle at 78% 30%, rgba(23, 42, 120, 0.12), transparent 36%);
  filter: blur(22px);
  pointer-events: none;
}

.ahorra-scope-benefits .benefits-section,
.ahorra-scope-solutions .services-section,
.ahorra-scope-clientes-faixa .logo-marquee-section,
.ahorra-scope-como-funciona .asl-process,
.ahorra-scope-cta .newsletter,
.ahorra-scope-resenas .reviews,
.ahorra-scope-form .quote-section,
.ahorra-scope-footer .footer {
  margin: 0;
}

.ahorra-scope-benefits .benefits-section,
.ahorra-scope-solutions .services-section,
.ahorra-scope-como-funciona .asl-process,
.ahorra-scope-cta .newsletter,
.ahorra-scope-resenas .reviews,
.ahorra-scope-form .quote-section {
  padding-top: clamp(56px, 7vw, 96px) !important;
  padding-bottom: clamp(56px, 7vw, 96px) !important;
}

.ahorra-scope-flow .asl-process,
.ahorra-scope-flow .newsletter {
  background: transparent !important;
}

.ahorra-scope-flow .asl-process::before,
.ahorra-scope-flow .newsletter::before {
  content: none !important;
  display: none !important;
}

.ahorra-scope-clientes-faixa .logo-marquee-section {
  position: relative;
  padding-top: clamp(20px, 2.4vw, 32px) !important;
  padding-bottom: clamp(20px, 2.4vw, 32px) !important;
  padding-left: 20px;
  padding-right: 20px;
  overflow-y: hidden !important;
  background:
    radial-gradient(circle at 12% 52%, rgba(0, 224, 109, 0.54), transparent 32%),
    radial-gradient(circle at 86% 34%, rgba(24, 213, 229, 0.24), transparent 30%),
    linear-gradient(90deg, #18a86f 0%, #19869a 28%, #203a86 56%, #25509d 76%, #1b8eaf 100%) !important;
  background-repeat: no-repeat !important;
  background-position: center center !important;
  background-size: 100% 100% !important;
}

.ahorra-scope-clientes-faixa .logo-marquee-section::before,
.ahorra-scope-clientes-faixa .logo-marquee-section::after,
.ahorra-scope-clientes-faixa .marquee-container::before,
.ahorra-scope-clientes-faixa .marquee-container::after,
.ahorra-scope-clientes-faixa .marquee-shell::before,
.ahorra-scope-clientes-faixa .marquee-shell::after {
  content: none !important;
  display: none !important;
}

.ahorra-scope-clientes-faixa .marquee-container,
.ahorra-scope-clientes-faixa .marquee-shell {
  overflow: hidden !important;
  overflow-x: hidden !important;
  overflow-y: hidden !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.ahorra-scope-clientes-faixa .marquee-shell {
  padding-bottom: 0 !important;
  mask-image: none !important;
  background: transparent !important;
}

.ahorra-scope-clientes-faixa .marquee-container,
.ahorra-scope-clientes-faixa .marquee-track {
  background: transparent !important;
}

.ahorra-scope-clientes-faixa .marquee-title {
  font-size: clamp(20px, 2.2vw, 32px) !important;
  line-height: 1.12 !important;
  letter-spacing: -0.02em !important;
  font-weight: 600 !important;
  position: static !important;
  transform: none !important;
  animation: none !important;
  transition: none !important;
  white-space: normal !important;
}

.ahorra-scope-clientes-faixa .marquee-shell::-webkit-scrollbar {
  display: none;
}

.ahorra-scope-clientes-faixa .balanza .brand-word,
.ahorra-scope-clientes-faixa .levante .brand-word {
  border: 0 !important;
  background: transparent !important;
  box-shadow: none !important;
}

.ahorra-scope-como-funciona .image-frame {
  width: min(100%, 560px) !important;
  min-height: clamp(420px, 48vw, 640px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.ahorra-scope-como-funciona .image-placeholder {
  aspect-ratio: 0.78;
  min-height: clamp(384px, 44vw, 600px);
  padding: clamp(5px, 0.7vw, 7px);
  display: block;
  background: linear-gradient(135deg, #0b4f8a 0%, #18d5e5 42%, #00e06d 100%);
}

.ahorra-scope-como-funciona .image-placeholder > div[aria-hidden='true'] {
  inset: clamp(5px, 0.7vw, 7px) !important;
  border-radius: 21px;
  pointer-events: none;
}

.ahorra-scope-como-funciona .image-placeholder img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 21px;
  object-fit: cover;
  object-position: center 18%;
}

@media (max-width: 920px) {
  .ahorra-scope-como-funciona .image-frame {
    margin-inline: auto;
    min-height: clamp(360px, 72vw, 560px);
  }

  .ahorra-scope-como-funciona .image-placeholder {
    min-height: clamp(330px, 68vw, 520px);
  }
}

@media (max-width: 640px) {
  .ahorra-scope-como-funciona .image-frame {
    min-height: clamp(300px, 108vw, 460px);
    border-radius: 26px !important;
    padding: 12px !important;
  }

  .ahorra-scope-como-funciona .image-placeholder {
    min-height: clamp(276px, 96vw, 420px);
    padding: 4px;
    border-radius: 21px !important;
  }

  .ahorra-scope-como-funciona .image-placeholder > div[aria-hidden='true'],
  .ahorra-scope-como-funciona .image-placeholder img {
    border-radius: 19px;
  }

  .ahorra-scope-como-funciona .image-placeholder > div[aria-hidden='true'] {
    inset: 4px !important;
  }
}

.ahorra-scope-footer .footer {
  background:
    radial-gradient(circle at 12% 16%, rgba(0, 127, 115, 0.42), transparent 30%),
    radial-gradient(circle at 86% 20%, rgba(5, 141, 164, 0.34), transparent 28%),
    linear-gradient(135deg, #007f73 0%, #111f67 48%, #058da4 100%);
}

.ahorra-scope-footer .footer::before {
  content: "";
  position: absolute;
  inset: -50%;
  background:
    radial-gradient(circle at 30% 40%, rgba(0, 127, 115, 0.18), transparent 22%),
    radial-gradient(circle at 75% 62%, rgba(5, 141, 164, 0.22), transparent 24%);
  animation: moveBg 14s ease-in-out infinite alternate;
  filter: blur(24px);
  pointer-events: none;
}

.ahorra-scope-footer .footer-main {
  position: relative;
  z-index: 1;
}

.ahorra-scope-footer .footer-bottom {
  background: transparent;
}

.ahorra-scope-footer .brand-text,
.ahorra-scope-footer .col h3,
.ahorra-scope-footer .links a,
.ahorra-scope-footer .consent,
.ahorra-scope-footer .copy,
.ahorra-scope-footer .legal,
.ahorra-scope-footer .legal a {
  color: rgba(255, 255, 255, 0.92) !important;
}

.ahorra-scope-footer .links a:hover,
.ahorra-scope-footer .legal a:hover {
  color: #ffffff !important;
}

@media (max-width: 920px) {
  .ahorra-scope-hero .hero-inner {
    width: min(100% - 32px, var(--container));
  }
}

@media (max-width: 560px) {
  .ahorra-scope-hero .hero-inner {
    width: min(100% - 24px, var(--container));
  }
}
`

const PAGE_STYLES = `${AHORRA_PAGE_STYLES}\n${AHORRA_PAGE_LAYOUT_FIXES}`

const markup = `<div class="ahorra-page">
        <div class="ahorra-scope-hero" style='font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif'>
          <main class="hero" aria-labelledby="hero-title">
            <div class="orb one" aria-hidden="true"></div>
            <div class="orb two" aria-hidden="true"></div>
            <div class="energy-wave" aria-hidden="true"></div>

            <div class="hero-inner">
              <header class="header">
                <a href="#" class="brand" aria-label="Ahorra Sin Líos">
                  <img
                    class="brand-logo"
                    src="data:image/png;base64,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"
                    alt="Ahorra Sin Líos"
                    width="520"
                    height="140"
                    loading="eager"
                  />
                </a>

                <nav class="nav" aria-label="Navegación principal">
                  <a href="#">Consultoría energética</a>
                  <a href="#">Comparador inteligente</a>
                  <a href="#">Nuestra energía</a>
                  <a href="#">Blog</a>
                  <a href="#">Contacto</a>
                </nav>

                <div class="header-actions">
                  <a class="phone" href="tel:+34900877155">
                    <span>Atención al cliente</span>900 877 155
                  </a>
                  <a class="client-btn" href="#">
                    Área Cliente
                  </a>
                  <button class="menu" type="button" aria-label="Abrir menú">
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </header>

              <section class="hero-content">
                <div class="copy">
                  <p class="eyebrow">Ahorro real en energía</p>
                  <h1 id="hero-title">Ahorra energía sin líos</h1>
                  <p class="lead">
                    Encontramos una tarifa energética más clara y económica para que ahorres de
                    verdad, sin papeleo ni complicaciones.
                  </p>

                  <div class="cta-row" aria-label="Acciones principales">
                    <a class="cta primary" href="#">
                      Comparar mi tarifa <span class="cta-icon">→</span>
                    </a>
                    <a class="cta secondary" href="#">
                      Hablar con un asesor <span class="cta-icon">☎</span>
                    </a>
                  </div>
                </div>

                <div class="visual" aria-hidden="true"></div>
              </section>

              <footer class="hero-footer">
                <div>
                  <strong>¡Habla con un asesor energético hoy!</strong>
                  <a href="mailto:hola@ahorrasinlios.com">hola@ahorrasinlios.com</a>
                </div>
                <div class="footer-right">
                  <strong>Estamos a solo una llamada de distancia</strong>
                  <a href="tel:+34900877155">900 877 155</a>
                </div>
              </footer>
            </div>
          </main>
        </div>

        <div class="ahorra-scope-benefits" style='font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif'>
          <main>
            <section class="benefits-section" aria-labelledby="benefits-title">
              <div class="benefits-container">
                <div class="benefits-top">
                  <div class="benefits-copy">
                    <span class="section-kicker">Vive la energía que mereces</span>
                    <h1 class="benefits-title" id="benefits-title">
                      ¡Tú eliges, tú ahorras, tú ganas!
                    </h1>
                    <p class="benefits-description">
                      Llevamos más de 15 años en el sector y conocemos todos los secretos para que
                      tu factura de la luz deje de ser un problema en tu vida.
                    </p>
                  </div>

                  <div class="benefits-list" aria-label="Beneficios principales">
                    <article class="benefit-item">
                      <div class="benefit-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                          <path d="M12 3l2 3 3.5.5-2.5 2.4.6 3.5L12 10.8 8.4 12.4 9 8.9 6.5 6.5 10 6l2-3z" />
                          <path d="M4 15.5c2 3.5 4.7 5.2 8 5.2s6-1.7 8-5.2" />
                        </svg>
                      </div>
                      <div>
                        <h3>Ahorro. Un objetivo, con diferentes caminos</h3>
                        <p>
                          Maximizamos tu ahorro energético con soluciones personalizadas, rápidas y
                          eficientes. ¡Análisis de factura gratis!
                        </p>
                      </div>
                    </article>

                    <article class="benefit-item">
                      <div class="benefit-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                          <path d="M4 21h16" />
                          <path d="M6 21V8h6v13" />
                          <path d="M12 21V4h6v17" />
                          <path d="M8.5 11h1" />
                          <path d="M8.5 15h1" />
                          <path d="M14.5 8h1" />
                          <path d="M14.5 12h1" />
                          <path d="M14.5 16h1" />
                        </svg>
                      </div>
                      <div>
                        <h3>Calidad. Las mejores compañías de luz</h3>
                        <p>
                          Trabajamos con comercializadoras del mercado para garantizarte acceso a
                          productos claros, competitivos y adaptados a ti.
                        </p>
                      </div>
                    </article>

                    <article class="benefit-item">
                      <div class="benefit-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                          <path d="M7 11a4 4 0 0 1 4-4h2" />
                          <path d="M13 7l-2-2" />
                          <path d="M13 7l-2 2" />
                          <path d="M17 13a4 4 0 0 1-4 4h-2" />
                          <path d="M11 17l2 2" />
                          <path d="M11 17l2-2" />
                          <path d="M7 15H5a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h2" />
                          <path d="M17 9h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2" />
                        </svg>
                      </div>
                      <div>
                        <h3>Contigo. De principio a fin</h3>
                        <p>
                          Disfruta de un servicio integral y fiable, con un equipo experto
                          disponible para ayudarte en todas tus necesidades y trámites.
                        </p>
                      </div>
                    </article>
                  </div>
                </div>

                <figure
                  class="family-card"
                  aria-label="Familia feliz disfrutando en casa"
                  style='width: 100%; max-width: 1080px; margin: clamp(56px, 7vw, 86px) auto 0; aspect-ratio: 2.3 / 1; min-height: clamp(300px, 36vw, 500px); padding: clamp(10px, 1.4vw, 18px); border-radius: 34px; overflow: hidden; border: 1px solid rgba(255,255,255,.72); background: linear-gradient(145deg, rgba(255,255,255,.56), rgba(255,255,255,.18)); box-shadow: 0 34px 110px rgba(7, 24, 39, 0.16), 0 12px 32px rgba(7, 24, 39, 0.08)'
                >
                  <div
                    aria-hidden="true"
                    style='position: absolute; inset: 10% 12% auto; height: 46%; border-radius: 999px; background: radial-gradient(circle, rgba(0, 184, 148, 0.26) 0%, rgba(0, 184, 200, 0.2) 38%, rgba(255,255,255,0) 74%); filter: blur(26px); opacity: .95'
                  ></div>
                  <div
                    style='position: relative; z-index: 2; width: 100%; height: 100%; border-radius: 28px; overflow: hidden; border: 1px solid rgba(255,255,255,.68); background: linear-gradient(180deg, rgba(255,255,255,.34), rgba(255,255,255,.12)); box-shadow: inset 0 1px 0 rgba(255,255,255,.6), 0 22px 60px rgba(8, 58, 120, 0.12)'
                  >
                    <div
                      aria-hidden="true"
                      style='position: absolute; inset: 0; background: linear-gradient(180deg, rgba(255,255,255,.16), transparent 22%, transparent 66%, rgba(7,24,39,.22) 100%); z-index: 3'
                    ></div>
                    <img
                      class="family-illustration"
                      src="${familyImage}"
                      alt="Familia feliz en casa"
                      loading="lazy"
                      style='object-fit: cover; object-position: center top; transform: scale(1); transform-origin: center top'
                    />
                  </div>
                  <figcaption
                    class="media-badge"
                    style='left: clamp(24px, 4vw, 36px); bottom: clamp(24px, 4vw, 36px); padding: 12px 18px; background: rgba(7, 24, 39, 0.42); border: 1px solid rgba(255,255,255,.26); box-shadow: 0 18px 44px rgba(7, 24, 39, 0.18), inset 0 1px 0 rgba(255,255,255,.18)'
                  >
                    <span aria-hidden="true"></span>Ahorra sin complicaciones
                  </figcaption>
                </figure>
              </div>
            </section>
          </main>
        </div>

        <div class="ahorra-scope-solutions" style='font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif'>
          <section class="services-section" aria-labelledby="services-title">
            <div class="container">
              <header class="section-header">
                <div class="eyebrow">
                  <span aria-hidden="true"></span>
                  Soluciones para ahorrar más
                </div>

                <h2 id="services-title">Así conseguimos tu ahorro energético</h2>

                <p>
                  Descubre cómo podemos ayudarte a vivir la energía que mereces: tarifas más claras,
                  mejores decisiones y soluciones pensadas para ahorrar sin complicaciones.
                </p>
              </header>

              <div class="cards-grid">
                <article class="service-card">
                  <div class="media" aria-hidden="true">
                    <div class="service-illustration">
                      <svg viewBox="0 0 120 120" fill="none">
                        <rect
                          x="20"
                          y="24"
                          width="80"
                          height="60"
                          rx="16"
                          fill="rgba(255,255,255,.92)"
                        />
                        <path
                          d="M36 45h48M36 58h34M36 71h22"
                          stroke="#0b2b6f"
                          stroke-width="6"
                          stroke-linecap="round"
                        />
                        <circle cx="88" cy="84" r="16" fill="url(#g1)" />
                        <path
                          d="M82 84l4 4 8-10"
                          stroke="white"
                          stroke-width="5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <defs>
                          <linearGradient id="g1" x1="72" y1="68" x2="104" y2="100">
                            <stop stop-color="#20E98B" />
                            <stop offset="1" stop-color="#0097A7" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  <div class="card-body">
                    <div class="card-title-row">
                      <h3>Asesoría energética</h3>
                      <span class="arrow" aria-hidden="true">
                        ↗
                      </span>
                    </div>
                    <p>
                      Buscamos <span class="highlight">gratis</span> la mejor tarifa para tu
                      factura y te avisamos cuando haya nuevas oportunidades de ahorro.
                    </p>
                  </div>
                </article>

                <article class="service-card">
                  <div class="media" aria-hidden="true">
                    <div class="service-illustration">
                      <svg viewBox="0 0 120 120" fill="none">
                        <circle cx="60" cy="38" r="16" fill="#FFECA8" />
                        <path
                          d="M60 10v12M60 54v12M32 38H20M100 38H88M40 18l-8-8M88 66l-8-8M80 18l8-8M32 66l8-8"
                          stroke="#FFECA8"
                          stroke-width="6"
                          stroke-linecap="round"
                        />
                        <rect
                          x="24"
                          y="72"
                          width="72"
                          height="30"
                          rx="8"
                          fill="rgba(255,255,255,.92)"
                        />
                        <path
                          d="M34 82h52M34 93h52M48 74v26M72 74v26"
                          stroke="#0097A7"
                          stroke-width="4"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div class="card-body">
                    <div class="card-title-row">
                      <h3>Energía solar</h3>
                      <span class="arrow" aria-hidden="true">
                        ↗
                      </span>
                    </div>
                    <p>
                      Instalamos placas solares al mejor precio para hogares y empresas, con
                      proyectos claros y personalizados.
                    </p>
                  </div>
                </article>

                <article class="service-card">
                  <div class="media" aria-hidden="true">
                    <div class="service-illustration">
                      <svg viewBox="0 0 120 120" fill="none">
                        <rect
                          x="18"
                          y="34"
                          width="28"
                          height="56"
                          rx="8"
                          fill="rgba(255,255,255,.9)"
                        />
                        <rect
                          x="50"
                          y="26"
                          width="28"
                          height="64"
                          rx="8"
                          fill="rgba(255,255,255,.9)"
                        />
                        <rect
                          x="82"
                          y="42"
                          width="20"
                          height="48"
                          rx="7"
                          fill="rgba(255,255,255,.82)"
                        />
                        <path
                          d="M28 58h8M60 52h8M89 63h6"
                          stroke="#0b2b6f"
                          stroke-width="5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M30 100h60"
                          stroke="#20E98B"
                          stroke-width="7"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div class="card-body">
                    <div class="card-title-row">
                      <h3>Baterías solares</h3>
                      <span class="arrow" aria-hidden="true">
                        ↗
                      </span>
                    </div>
                    <p>
                      Saca el máximo rendimiento a tu instalación fotovoltaica y aprovecha mejor la
                      energía generada.
                    </p>
                  </div>
                </article>

                <article class="service-card">
                  <div class="media" aria-hidden="true">
                    <div class="service-illustration">
                      <svg viewBox="0 0 120 120" fill="none">
                        <rect
                          x="18"
                          y="62"
                          width="42"
                          height="34"
                          rx="8"
                          fill="rgba(255,255,255,.92)"
                        />
                        <rect
                          x="70"
                          y="24"
                          width="28"
                          height="72"
                          rx="10"
                          fill="rgba(255,255,255,.86)"
                        />
                        <path
                          d="M27 76h24M27 86h16M84 42v28"
                          stroke="#0b2b6f"
                          stroke-width="5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M60 76c8-20 18-20 28-8"
                          stroke="#20E98B"
                          stroke-width="7"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                  </div>

                  <div class="card-body">
                    <div class="card-title-row">
                      <h3>Aerotermia</h3>
                      <span class="arrow" aria-hidden="true">
                        ↗
                      </span>
                    </div>
                    <p>
                      Tecnología eficiente para climatización y agua caliente, pensada para reducir
                      el consumo y mejorar el confort.
                    </p>
                  </div>
                </article>

                <article class="service-card">
                  <div class="media" aria-hidden="true">
                    <div class="service-illustration">
                      <svg viewBox="0 0 120 120" fill="none">
                        <rect
                          x="22"
                          y="24"
                          width="40"
                          height="72"
                          rx="12"
                          fill="rgba(255,255,255,.92)"
                        />
                        <circle cx="42" cy="50" r="13" fill="url(#g5)" />
                        <path
                          d="M62 58h14c10 0 18 8 18 18v18"
                          stroke="#20E98B"
                          stroke-width="8"
                          stroke-linecap="round"
                        />
                        <path d="M42 50h.1" stroke="#fff" stroke-width="8" stroke-linecap="round" />
                        <defs>
                          <linearGradient id="g5" x1="29" y1="37" x2="55" y2="63">
                            <stop stop-color="#20E98B" />
                            <stop offset="1" stop-color="#0097A7" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  <div class="card-body">
                    <div class="card-title-row">
                      <h3>Punto de recarga</h3>
                      <span class="arrow" aria-hidden="true">
                        ↗
                      </span>
                    </div>
                    <p>
                      Instalación rápida de puntos de recarga para adelantarte a la movilidad
                      eléctrica con tranquilidad.
                    </p>
                  </div>
                </article>

                <article class="service-card">
                  <div class="media" aria-hidden="true">
                    <div class="service-illustration">
                      <svg viewBox="0 0 120 120" fill="none">
                        <rect
                          x="26"
                          y="22"
                          width="68"
                          height="78"
                          rx="16"
                          fill="rgba(255,255,255,.92)"
                        />
                        <path
                          d="M42 72V58M60 72V44M78 72V52"
                          stroke="#0b2b6f"
                          stroke-width="7"
                          stroke-linecap="round"
                        />
                        <path
                          d="M40 84h42"
                          stroke="#20E98B"
                          stroke-width="6"
                          stroke-linecap="round"
                        />
                        <circle cx="84" cy="30" r="12" fill="#20E98B" />
                      </svg>
                    </div>
                  </div>

                  <div class="card-body">
                    <div class="card-title-row">
                      <h3>Telemedida</h3>
                      <span class="arrow" aria-hidden="true">
                        ↗
                      </span>
                    </div>
                    <p>
                      Medimos tu consumo con precisión para que tus facturas sean más claras, reales
                      y fáciles de controlar.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </section>
        </div>

        <div
          class="ahorra-scope-clientes-faixa"
          style='min-height: auto; display: block; font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
        >
          <section class="logo-marquee-section" aria-labelledby="logos-title">
            <div class="marquee-container">
              <h2 class="marquee-title" id="logos-title">
                Ellos ya confían en una energía más simple, ¿te unes?
              </h2>

              <div class="marquee-shell" aria-label="Empresas que confían en Ahorra Sin Líos">
                <div class="marquee-track">
                  <div class="logo-item digitus">
                    <span>
                      <strong class="brand-word">digitus</strong>
                      <span class="brand-sub">podología</span>
                    </span>
                  </div>
                  <div class="logo-item balanza">
                    <span>
                      <strong class="brand-word">Balanza &amp; Asociados</strong>
                    </span>
                  </div>
                  <div class="logo-item marbella">
                    <span>
                      <strong class="brand-word">
                        Marbella
                        <br />
                        Banus
                        <br />
                        Suite
                      </strong>
                      <span class="brand-sub">holiday rentals</span>
                    </span>
                  </div>
                  <div class="logo-item fartons">
                    <span>
                      <strong class="brand-word">
                        Fartons
                        <br />
                        Polo
                      </strong>
                    </span>
                  </div>
                  <div class="logo-item levante">
                    <span>
                      <strong class="brand-word">LU</strong>
                      <span class="brand-sub">Levante</span>
                    </span>
                  </div>
                  <div class="logo-item acuidas">
                    <span>
                      <strong class="brand-word">acuidas</strong>
                      <span class="brand-sub">ayuda a domicilio</span>
                    </span>
                  </div>
                  <div class="logo-item veles">
                    <span>
                      <strong class="brand-word">
                        ◰◰◰
                        <br />
                        ◱◱◱
                      </strong>
                      <span class="brand-sub">Veles e Vents</span>
                    </span>
                  </div>
                  <div class="logo-item huertana">
                    <span>
                      <strong class="brand-word">La Huertana</strong>
                      <span class="brand-sub">1960</span>
                    </span>
                  </div>
                  <div class="logo-item solar">
                    <span>
                      <strong class="brand-word">Solaria</strong>
                      <span class="brand-sub">empresa solar</span>
                    </span>
                  </div>
                  <div class="logo-item nexo">
                    <span>
                      <strong class="brand-word">NEXO</strong>
                      <span class="brand-sub">consulting</span>
                    </span>
                  </div>

                  <div class="logo-item digitus" aria-hidden="true">
                    <span>
                      <strong class="brand-word">digitus</strong>
                      <span class="brand-sub">podología</span>
                    </span>
                  </div>
                  <div class="logo-item balanza" aria-hidden="true">
                    <span>
                      <strong class="brand-word">Balanza &amp; Asociados</strong>
                    </span>
                  </div>
                  <div class="logo-item marbella" aria-hidden="true">
                    <span>
                      <strong class="brand-word">
                        Marbella
                        <br />
                        Banus
                        <br />
                        Suite
                      </strong>
                      <span class="brand-sub">holiday rentals</span>
                    </span>
                  </div>
                  <div class="logo-item fartons" aria-hidden="true">
                    <span>
                      <strong class="brand-word">
                        Fartons
                        <br />
                        Polo
                      </strong>
                    </span>
                  </div>
                  <div class="logo-item levante" aria-hidden="true">
                    <span>
                      <strong class="brand-word">LU</strong>
                      <span class="brand-sub">Levante</span>
                    </span>
                  </div>
                  <div class="logo-item acuidas" aria-hidden="true">
                    <span>
                      <strong class="brand-word">acuidas</strong>
                      <span class="brand-sub">ayuda a domicilio</span>
                    </span>
                  </div>
                  <div class="logo-item veles" aria-hidden="true">
                    <span>
                      <strong class="brand-word">
                        ◰◰◰
                        <br />
                        ◱◱◱
                      </strong>
                      <span class="brand-sub">Veles e Vents</span>
                    </span>
                  </div>
                  <div class="logo-item huertana" aria-hidden="true">
                    <span>
                      <strong class="brand-word">La Huertana</strong>
                      <span class="brand-sub">1960</span>
                    </span>
                  </div>
                  <div class="logo-item solar" aria-hidden="true">
                    <span>
                      <strong class="brand-word">Solaria</strong>
                      <span class="brand-sub">empresa solar</span>
                    </span>
                  </div>
                  <div class="logo-item nexo" aria-hidden="true">
                    <span>
                      <strong class="brand-word">NEXO</strong>
                      <span class="brand-sub">consulting</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div class="ahorra-scope-flow">
        <div class="ahorra-scope-como-funciona" style='font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif'>
          <section class="asl-process" aria-labelledby="process-title">
            <div class="wrap">
              <div
                class="media"
                aria-label="Espacio reservado para imagen"
                style='position: relative; isolation: isolate'
              >
                <div
                  class="blob"
                  aria-hidden="true"
                  style='transform: rotate(-7deg) scale(1.02); opacity: .88; filter: saturate(1.08)'
                ></div>

                <div
                  aria-hidden="true"
                  style='position: absolute; inset: 10% 4% auto; height: 48%; border-radius: 999px; background: radial-gradient(circle, rgba(0, 184, 148, 0.24) 0%, rgba(18, 200, 216, 0.18) 42%, rgba(255,255,255,0) 78%); filter: blur(28px); z-index: 0'
                ></div>

                <div
                  class="image-frame"
                  style='position: relative; z-index: 1; width: min(100%, 560px); padding: clamp(12px, 2vw, 18px); border-radius: 30px; border: 1px solid rgba(255,255,255,.58); background: linear-gradient(180deg, rgba(255,255,255,.32), rgba(255,255,255,.14)); backdrop-filter: blur(18px); box-shadow: 0 34px 100px rgba(8, 58, 120, 0.18), inset 0 1px 0 rgba(255,255,255,.54); overflow: hidden'
                >
                  <div
                    aria-hidden="true"
                    style='position: absolute; top: clamp(12px, 2vw, 18px); left: clamp(12px, 2vw, 18px); display: inline-flex; align-items: center; gap: 8px; padding: 8px 12px; border-radius: 999px; background: rgba(255,255,255,.28); border: 1px solid rgba(255,255,255,.42); backdrop-filter: blur(18px); z-index: 3'
                  >
                    <span style='width: 8px; height: 8px; border-radius: 999px; background: #00b894; box-shadow: 0 0 0 5px rgba(0,184,148,.14)'></span>
                    <span style='width: 38px; height: 2px; border-radius: 999px; background: rgba(7,24,39,.22)'></span>
                  </div>

                  <div
                    class="image-placeholder"
                    style='position: relative; width: 100%; height: 100%; border-radius: 24px; overflow: hidden; border: 1px solid transparent; box-shadow: 0 0 0 1px rgba(255,255,255,.12), 0 0 22px rgba(24,213,229,.16), 0 0 34px rgba(0,224,109,.12), 0 22px 54px rgba(7, 24, 39, 0.16)'
                  >
                    <div
                      aria-hidden="true"
                      style='position: absolute; inset: 0; background: linear-gradient(180deg, rgba(255,255,255,.12), transparent 26%, transparent 68%, rgba(7,24,39,.16) 100%); z-index: 2; pointer-events: none'
                    ></div>
                    <img
                      src="${simpleProcessImage}"
                      alt="Proceso simple de ahorro energético"
                      loading="lazy"
                      style='width: 100%; height: 100%; object-fit: cover; object-position: center 18%; display: block'
                    />
                  </div>
                </div>
              </div>

              <div class="content">
                <p class="kicker">Proceso simple</p>

                <h2 id="process-title">Ahorrar sin líos empieza aquí</h2>

                <p class="intro">
                  Un proceso claro, humano y rápido para encontrar una mejor opción energética sin
                  que tengas que complicarte.
                </p>

                <ol class="steps">
                  <li class="step">
                    <span class="num">1</span>
                    <div>
                      <h3>Nos envías tu factura</h3>
                      <p>
                        Revisamos tu situación actual para entender tu consumo, tarifa y
                        oportunidades de ahorro.
                      </p>
                    </div>
                  </li>

                  <li class="step">
                    <span class="num">2</span>
                    <div>
                      <h3>Analizamos la mejor opción</h3>
                      <p>
                        Comparamos personalmente entre más de 30 compañías de energía para encontrar
                        la opción que más te convenga.
                      </p>
                    </div>
                  </li>

                  <li class="step">
                    <span class="num">3</span>
                    <div>
                      <h3>Te presentamos el estudio</h3>
                      <p>
                        Recibes una propuesta clara, fácil de entender y enfocada en tu ahorro real.
                      </p>
                    </div>
                  </li>

                  <li class="step">
                    <span class="num">4</span>
                    <div>
                      <h3>Gestionamos tu contrato</h3>
                      <p>
                        Nos encargamos del trámite con la compañía para que el cambio sea cómodo y
                        sin complicaciones.
                      </p>
                    </div>
                  </li>

                  <li class="step">
                    <span class="num">5</span>
                    <div>
                      <h3>Ya estás Ahorrando Sin Líos</h3>
                      <p>
                        Empiezas a ahorrar con una tarifa más adecuada y con acompañamiento cuando
                        lo necesites.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </section>
        </div>

        <div class="ahorra-scope-cta" style='font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif'>
          <section class="newsletter" aria-labelledby="newsletter-title">
            <div class="wrap">
              <div class="copy">
                <p class="kicker">Consejos y ahorro</p>

                <h2 id="newsletter-title">Ahorro, noticias y energía simple</h2>

                <p class="lead">
                  Únete a nuestra comunidad y recibe consejos prácticos, ofertas inteligentes y
                  novedades para pagar menos sin complicarte.
                </p>

                <form class="form" action="#" method="post">
                  <label>
                    <span
                      style='position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)'
                    >
                      Nombre
                    </span>
                    <input
                      class="field"
                      type="text"
                      name="name"
                      placeholder="Nombre"
                      autocomplete="name"
                    />
                  </label>

                  <label>
                    <span
                      style='position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)'
                    >
                      Correo electrónico
                    </span>
                    <input
                      class="field"
                      type="email"
                      name="email"
                      placeholder="Tu correo"
                      autocomplete="email"
                      required
                    />
                  </label>

                  <button class="btn" type="submit">
                    Suscribirme
                  </button>

                  <label class="consent">
                    <input type="checkbox" required />
                    <span>
                      He leído y acepto los términos, las condiciones de uso y la Política de
                      Privacidad.
                    </span>
                  </label>
                </form>
              </div>

              <div
                class="visual"
                aria-hidden="true"
                style='position: relative; isolation: isolate'
              >
                <div
                  class="blob"
                  style='transform: rotate(-9deg) scale(1.04); opacity: .82; filter: saturate(1.08)'
                ></div>

                <div
                  aria-hidden="true"
                  style='position: absolute; inset: 11% 6% auto; height: 46%; border-radius: 999px; background: radial-gradient(circle, rgba(0, 184, 148, 0.18) 0%, rgba(18, 200, 216, 0.16) 44%, rgba(255,255,255,0) 80%); filter: blur(30px); z-index: 0'
                ></div>

                <div
                  class="portrait"
                  style='position: relative; z-index: 1; width: min(100%, 390px); aspect-ratio: .92 / 1.08; padding: clamp(5px, 0.75vw, 7px); border-radius: 30px; overflow: hidden; border: 1px solid transparent; background: linear-gradient(180deg, rgba(255,255,255,.3), rgba(255,255,255,.12)) padding-box, linear-gradient(135deg, #0b4f8a 0%, #18d5e5 42%, #00e06d 100%) border-box; backdrop-filter: blur(18px); box-shadow: 0 0 0 1px rgba(255,255,255,.12), 0 0 22px rgba(24, 213, 229, 0.15), 0 0 34px rgba(0, 224, 109, 0.11), 0 32px 88px rgba(8, 58, 120, 0.16)'
                >
                  <div
                    aria-hidden="true"
                    style='position: absolute; inset: clamp(5px, 0.75vw, 7px); border-radius: 24px; overflow: hidden; z-index: 1'
                  >
                    <img
                      src="${womanImage}"
                      alt=""
                      loading="lazy"
                      style='width: 100%; height: 100%; object-fit: cover; object-position: center 18%; display: block'
                    />
                    <div
                      aria-hidden="true"
                      style='position: absolute; inset: 0; border-radius: inherit; background: linear-gradient(180deg, rgba(255,255,255,.08), transparent 28%, transparent 66%, rgba(7,24,39,.12) 100%); pointer-events: none'
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        </div>

        <div class="ahorra-scope-resenas" style='font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif'>
          <section class="reviews" aria-labelledby="reviews-title">
            <div class="head">
              <div class="kicker">
                <span class="dot" aria-hidden="true"></span>
                Opiniones reales
              </div>

              <h2 id="reviews-title">
                No lo decimos nosotros, <span>lo dicen ellos</span>
              </h2>
            </div>

            <div class="summary" aria-label="Resumen de reseñas">
              <div class="google">
                <span class="google-mark" aria-label="Google">
                  <span class="g1">G</span>
                  <span class="g2">o</span>
                  <span class="g3">o</span>
                  <span class="g4">g</span>
                  <span class="g5">l</span>
                  <span class="g6">e</span>
                </span>
                <span>My Reviews</span>
              </div>

              <div class="rating">
                <span>5.0</span>
                <span class="stars" aria-label="5 estrellas">
                  ★★★★★
                </span>
              </div>
            </div>

            <div class="track-wrap" aria-label="Carrusel automático de reseñas">
              <div class="track">
                <article class="review">
                  <div class="top">
                    <div class="avatar">R</div>
                    <div>
                      <h3 class="name">Rubén Marín</h3>
                      <div class="meta">
                        <span class="stars">★★★★★</span>
                        <span>hace 2 años</span>
                      </div>
                    </div>
                  </div>
                  <p class="text">
                    Precios claros y trato inmejorable. Todo fue rápido, sencillo y sin
                    complicaciones.
                  </p>
                </article>

                <article class="review">
                  <div class="top">
                    <div class="avatar">S</div>
                    <div>
                      <h3 class="name">Susana Cuevas</h3>
                      <div class="meta">
                        <span class="stars">★★★★★</span>
                        <span>hace 2 años</span>
                      </div>
                    </div>
                  </div>
                  <p class="text">
                    Un asesor muy atento y resolutivo. Servicio 100 % recomendable.
                  </p>
                </article>

                <article class="review">
                  <div class="top">
                    <div class="avatar">J</div>
                    <div>
                      <h3 class="name">Juan Carlos Guerrero Ramos</h3>
                      <div class="meta">
                        <span class="stars">★★★★★</span>
                        <span>hace 2 años</span>
                      </div>
                    </div>
                  </div>
                  <p class="text">
                    Me recomendaron la mejor opción y la verdad es que va muy bien, económica y
                    fiable.
                  </p>
                </article>

                <article class="review">
                  <div class="top">
                    <div class="avatar">C</div>
                    <div>
                      <h3 class="name">Cheky Affinito</h3>
                      <div class="meta">
                        <span class="stars">★★★★★</span>
                        <span>hace 2 años</span>
                      </div>
                    </div>
                  </div>
                  <p class="text">
                    Excelente compañía. Me ayudaron a ahorrar en la factura de mi nueva casa.
                  </p>
                </article>

                <article class="review">
                  <div class="top">
                    <div class="avatar">M</div>
                    <div>
                      <h3 class="name">María López</h3>
                      <div class="meta">
                        <span class="stars">★★★★★</span>
                        <span>hace 1 año</span>
                      </div>
                    </div>
                  </div>
                  <p class="text">
                    Muy buena atención. Me explicaron todo de forma clara y sin letra pequeña.
                  </p>
                </article>

                <article class="review">
                  <div class="top">
                    <div class="avatar">A</div>
                    <div>
                      <h3 class="name">Antonio Ruiz</h3>
                      <div class="meta">
                        <span class="stars">★★★★★</span>
                        <span>hace 1 año</span>
                      </div>
                    </div>
                  </div>
                  <p class="text">
                    El cambio fue rápido. Se encargaron de todo y empecé a pagar menos.
                  </p>
                </article>

                <!--Duplicado para scroll infinito fluido-->
                <article class="review" aria-hidden="true">
                  <div class="top">
                    <div class="avatar">R</div>
                    <div>
                      <h3 class="name">Rubén Marín</h3>
                      <div class="meta">
                        <span class="stars">★★★★★</span>
                        <span>hace 2 años</span>
                      </div>
                    </div>
                  </div>
                  <p class="text">
                    Precios claros y trato inmejorable. Todo fue rápido, sencillo y sin
                    complicaciones.
                  </p>
                </article>

                <article class="review" aria-hidden="true">
                  <div class="top">
                    <div class="avatar">S</div>
                    <div>
                      <h3 class="name">Susana Cuevas</h3>
                      <div class="meta">
                        <span class="stars">★★★★★</span>
                        <span>hace 2 años</span>
                      </div>
                    </div>
                  </div>
                  <p class="text">
                    Un asesor muy atento y resolutivo. Servicio 100 % recomendable.
                  </p>
                </article>

                <article class="review" aria-hidden="true">
                  <div class="top">
                    <div class="avatar">J</div>
                    <div>
                      <h3 class="name">Juan Carlos Guerrero Ramos</h3>
                      <div class="meta">
                        <span class="stars">★★★★★</span>
                        <span>hace 2 años</span>
                      </div>
                    </div>
                  </div>
                  <p class="text">
                    Me recomendaron la mejor opción y la verdad es que va muy bien, económica y
                    fiable.
                  </p>
                </article>

                <article class="review" aria-hidden="true">
                  <div class="top">
                    <div class="avatar">C</div>
                    <div>
                      <h3 class="name">Cheky Affinito</h3>
                      <div class="meta">
                        <span class="stars">★★★★★</span>
                        <span>hace 2 años</span>
                      </div>
                    </div>
                  </div>
                  <p class="text">
                    Excelente compañía. Me ayudaron a ahorrar en la factura de mi nueva casa.
                  </p>
                </article>

                <article class="review" aria-hidden="true">
                  <div class="top">
                    <div class="avatar">M</div>
                    <div>
                      <h3 class="name">María López</h3>
                      <div class="meta">
                        <span class="stars">★★★★★</span>
                        <span>hace 1 año</span>
                      </div>
                    </div>
                  </div>
                  <p class="text">
                    Muy buena atención. Me explicaron todo de forma clara y sin letra pequeña.
                  </p>
                </article>

                <article class="review" aria-hidden="true">
                  <div class="top">
                    <div class="avatar">A</div>
                    <div>
                      <h3 class="name">Antonio Ruiz</h3>
                      <div class="meta">
                        <span class="stars">★★★★★</span>
                        <span>hace 1 año</span>
                      </div>
                    </div>
                  </div>
                  <p class="text">
                    El cambio fue rápido. Se encargaron de todo y empecé a pagar menos.
                  </p>
                </article>
              </div>
            </div>
          </section>
        </div>

        <div class="ahorra-scope-form" style='font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif'>
          <section
            class="quote-section"
            aria-labelledby="quote-title"
            style='padding-top: clamp(36px, 4vw, 64px)'
          >
            <div class="wrap">
              <div class="left-panel">
                <div class="content">
                  <p class="kicker">Oferta personalizada</p>

                  <h2 id="quote-title">
                    Sube tu factura y recibe
                    <br />
                    una oferta en 24 h
                  </h2>

                  <p class="lead">
                    Rellena el formulario y te diremos cuál es la mejor tarifa para reducir tu
                    factura sin líos.
                  </p>
                </div>

                <div
                  class="visual"
                  aria-hidden="true"
                  style='position: relative; isolation: isolate'
                >
                  <div
                    class="blob"
                    style='transform: rotate(-8deg) scale(1.04); opacity: .84; filter: saturate(1.04)'
                  ></div>

                  <div
                    aria-hidden="true"
                    style='position: absolute; inset: 12% 6% auto; height: 48%; border-radius: 999px; background: radial-gradient(circle, rgba(0, 212, 126, 0.22) 0%, rgba(18, 200, 216, 0.16) 42%, rgba(255,255,255,0) 78%); filter: blur(30px); z-index: 0'
                  ></div>

                  <div
                    style='position: relative; z-index: 1; width: min(100%, 400px); min-height: clamp(320px, 32vw, 430px); padding: clamp(5px, 0.75vw, 7px); border-radius: 30px; overflow: hidden; border: 1px solid transparent; background: linear-gradient(180deg, rgba(255,255,255,.3), rgba(255,255,255,.12)) padding-box, linear-gradient(135deg, #0b4f8a 0%, #18d5e5 42%, #00e06d 100%) border-box; backdrop-filter: blur(18px); box-shadow: 0 0 0 1px rgba(255,255,255,.12), 0 0 22px rgba(24, 213, 229, 0.15), 0 0 34px rgba(0, 224, 109, 0.11), 0 32px 94px rgba(8, 58, 120, 0.16)'
                  >
                    <div
                      aria-hidden="true"
                      style='position: absolute; inset: clamp(5px, 0.75vw, 7px); border-radius: 24px; overflow: hidden; z-index: 1'
                    >
                      <img
                        src="${happyWomanImage}"
                        alt=""
                        loading="lazy"
                        style='width: 100%; height: 100%; object-fit: cover; object-position: center 28%; display: block; transform: scale(1.03)'
                      />
                      <div
                        aria-hidden="true"
                        style='position: absolute; inset: 0; border-radius: inherit; background: linear-gradient(180deg, rgba(255,255,255,.08), transparent 26%, transparent 68%, rgba(7,24,39,.12) 100%); pointer-events: none'
                      ></div>
                    </div>

                    <div
                      aria-hidden="true"
                      style='position: absolute; top: clamp(14px, 2vw, 20px); left: clamp(14px, 2vw, 20px); display: inline-flex; align-items: center; gap: 8px; padding: 8px 12px; border-radius: 999px; background: rgba(255,255,255,.28); border: 1px solid rgba(255,255,255,.42); backdrop-filter: blur(18px); z-index: 3'
                    >
                      <span style='width: 8px; height: 8px; border-radius: 999px; background: #00d47e; box-shadow: 0 0 0 5px rgba(0,212,126,.14)'></span>
                      <span style='width: 34px; height: 2px; border-radius: 999px; background: rgba(7,24,39,.22)'></span>
                    </div>

                    <div
                      aria-hidden="true"
                      style='position: absolute; top: clamp(18px, 2.2vw, 24px); right: clamp(14px, 2vw, 20px); display: inline-flex; align-items: center; gap: 6px; padding: 8px 10px; border-radius: 999px; background: rgba(7,24,39,.22); border: 1px solid rgba(255,255,255,.26); backdrop-filter: blur(18px); z-index: 3'
                    >
                      <span style='width: 20px; height: 2px; border-radius: 999px; background: rgba(255,255,255,.78)'></span>
                      <span style='width: 8px; height: 8px; border-radius: 999px; background: rgba(255,255,255,.92)'></span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form-panel">
                <form class="form" action="#" method="post" enctype="multipart/form-data">
                  <div class="grid-2">
                    <label>
                      Nombre
                      <input type="text" name="name" autocomplete="given-name" />
                    </label>

                    <label>
                      Apellido
                      <input type="text" name="surname" autocomplete="family-name" />
                    </label>
                  </div>

                  <label>
                    Correo
                    <input type="email" name="email" autocomplete="email" required />
                  </label>

                  <label>
                    Móvil
                    <input type="tel" name="phone" autocomplete="tel" />
                  </label>

                  <label>
                    Tu mensaje
                    <textarea name="message"></textarea>
                  </label>

                  <div class="upload-row">
                    <label class="upload">
                      <input type="file" name="bill" accept=".pdf,.jpg,.jpeg,.png" />
                      <span class="upload-icon">↑</span>
                      <span>
                        <strong>Subir factura</strong>
                        <span>Comparte tu factura más reciente</span>
                      </span>
                    </label>

                    <p class="max">Máx. 10 MB</p>
                  </div>

                  <label class="consent">
                    <input type="checkbox" required />
                    <span>
                      He leído y acepto los términos, las condiciones de uso y la Política de
                      Privacidad.
                    </span>
                  </label>

                  <button class="btn" type="submit">
                    Hablar con Ahorra Sin Líos
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>

        <div
          class="ahorra-scope-footer"
          style='min-height: auto; font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
        >
          <footer class="footer" aria-label="Pie de página">
            <div class="footer-main" style='padding-bottom: clamp(20px, 3vw, 36px)'>
              <div class="brand">
                <a href="#" aria-label="Ahorra Sin Líos">
                  <img
                    class="logo"
                    src="data:image/png;base64,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"
                    alt="Ahorra Sin Líos"
                    width="520"
                    height="140"
                  />
                </a>

                <p class="brand-text">
                  Consejos claros para ahorrar en luz y energía sin complicaciones.
                </p>

                <form class="subscribe" action="#" method="post">
                  <div class="subscribe-row">
                    <label>
                      <span
                        style='position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)'
                      >
                        Correo
                      </span>
                      <input
                        class="input"
                        type="email"
                        name="email"
                        placeholder="Tu correo"
                        autocomplete="email"
                        required
                      />
                    </label>

                    <button class="btn" type="submit">
                      Suscribirme
                    </button>
                  </div>

                  <label class="consent">
                    <input type="checkbox" required />
                    <span>Acepto la Política de Privacidad.</span>
                  </label>
                </form>
              </div>

              <nav class="col" aria-label="Empresa">
                <h3>Empresa</h3>
                <ul class="links">
                  <li>
                    <a href="#">Nuestra energía</a>
                  </li>
                  <li>
                    <a href="#">Comparador inteligente</a>
                  </li>
                  <li>
                    <a href="#">Casos de ahorro</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </nav>

              <nav class="col" aria-label="Soporte">
                <h3>Soporte</h3>
                <ul class="links">
                  <li>
                    <a href="#">Área cliente</a>
                  </li>
                  <li>
                    <a href="#">Contacto</a>
                  </li>
                  <li>
                    <a href="#">Aviso legal</a>
                  </li>
                  <li>
                    <a href="#">Cookies</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div class="footer-bottom">
              <div class="bottom-inner">
                <p class="copy">© 2024 Ahorra Sin Líos</p>

                <nav class="legal" aria-label="Legal">
                  <a href="#">Privacidad</a>
                  <a href="#">Términos</a>
                  <a href="#">Cookies</a>
                </nav>

                <div class="social" aria-label="Redes sociales">
                  <a href="#" aria-label="LinkedIn">
                    in
                  </a>
                  <a href="#" aria-label="Instagram">
                    ◎
                  </a>
                  <a href="#" aria-label="YouTube">
                    ▶
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>`
</script>

<template>
  <component :is="'style'" v-text="PAGE_STYLES" />
  <div class="ahorra-page-host" v-html="markup"></div>
</template>
