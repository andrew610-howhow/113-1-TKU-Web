import { useState } from 'react'
import './App.css'

function App() {

    return (
      <>
        <header className="profile-header">
          <h1>陳宇安的個人資訊</h1>
          <h2>財金系雙主資管系</h2>
          <h3>等候碩士推甄結果中...</h3>
          <p>準備碩士考試ing...</p>
        </header>
  
        <div className="content">
          <div className="left-side">
            <section className="skills-section card">
              <h4>特殊經歷&能力</h4>
              <ul>
                <li>暑期宿霧語言學校就讀</li>
                <li>大量衍生性商品實務經驗</li>
                <li>自行撰寫程式交易3支</li>
                <li>資管畢業專題組長</li>
                <li>研究前期的數據整理(Data Scrubbing)</li>
                <li>火舞經驗1年</li>
              </ul>
            </section>
            <section className="contact-section card">
              <h4>畢業展望</h4>
              <ul>
                <li><strong>持續在市場練習:  </strong>尋找新的策略、手上策略再優化</li>
                <li><strong>善用論文成果投資:  </strong>將完成的論文成果應用於自己的部位、進入財富管理業界，提供給客戶不一樣的財務管理模式</li>
                <li><strong>職崖選擇:  </strong>外商trader、量化研究員、國際銀行儲備幹部(MA)、高階理財人員等等</li>
              </ul>
            </section>
          </div>
  
          <div className="right-side">
            <section className="experience-section card">
              <h4>研究所就讀期間學習計畫</h4>
              <ul>
                <li><strong>完善投資組合</strong>
                  <ul>
                    <li>-{'>'}經由論文撰寫習得的知識，將自己的部位結合現貨&衍生性商品，建構投資組合</li>
                  </ul>
                </li>
                <li><strong>選擇權定價模型開發</strong>
                  <ul>
                    <li>-{'>'}透過不同於B-S model的公式，開發一個更貼近實務市場的模型</li>
                  </ul>
                </li>
                <li><strong>感興趣科目修習</strong>
                  <ul>
                    <li>-{'>'}高階財務管理、期貨與選擇權市場、行為財務學、策略管理、固定收益證券與其衍生商品等等</li>
                  </ul>
                </li>
                <li><strong>善用學校資源</strong>
                  <ul>
                    <li>-{'>'}多使用TEJ等校內免費的資料庫，抓取資料進行研究</li>
                  </ul>
                </li>
                <li><strong>考取專業證照</strong>
                  <ul>
                    <li>-{'>'}CFA、期貨交易分析員、證券投資分析員、證券商高級業務員等等</li>
                  </ul>
                </li>
                
              </ul>
            </section>
            
          </div>
        </div>
  
      </>
    )
  }
  
  export default App
  