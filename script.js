var works = [
    { name: "亚运72年回眸，女子体育是如何走到今天的？", link: "https://womensports.site/", type: "Scrollytelling", imageUrl: "images/Scrollytelling1.png" },
    { name: "China's journey towards global trade", link: "https://news.cgtn.com/news/3d3d514e30416a4e31457a6333566d54/share.html?from=timeline&isappinstalled=0", type: "Data Video", imageUrl: "images/Data Video1.png" },
    { name: "Twin Cloud- Using Atmospheric Data Visualization to Depict the Breath of Cities", link: "https://visstory.github.io/2023/#shortlist", type: "Data Generative Art", imageUrl: "images/Generative Art1.png" },
    { name: "How the Supply Chain Crisis Unfolded", link: "https://www.nytimes.com/interactive/2021/12/05/business/economy/supply-chain.html", type: "Flow charts", imageUrl: "images/Flowchart1.png" },
    { name: "Brainstream", link: "https://brainstream.nfb.ca/?_gl=1*1a9qrj2*_ga*MTMzMDU5MzkzNC4xNjk5MTcyOTQ1*_ga_0CLQ31X8KS*MTY5OTE3NDA4NC4xLjEuMTY5OTE3NTM5MS40OS4wLjA.*_ga_EFC1FZYYCZ*MTY5OTE3NDA4NC4xLjEuMTY5OTE3NTM5MS40OS4wLjA.*_ga_EP6WV87GNV*MTY5OTE3NDA4NC4xLjEuMTY5OTE3NTM5MS40OS4wLjA.", type: "Interactive Film", imageUrl: "images/Interactive Film1.png" },
    { name: "Kimchi", link: "https://pudding.cool/2023/05/kimchi/", type: "Games", imageUrl: "images/Games1.png" },
    
    
    // ...更多作品
];

document.addEventListener('DOMContentLoaded', function() {
    var portfolioSection = document.getElementById('portfolio');

    works.forEach(function(work) {
        portfolioSection.innerHTML += `
            <div class="portfolio-item">
                <img src="${work.imageUrl}" alt="${work.name}">
                <h2>${work.name}</h2>
                <p>${work.type}</p>
                <a href="${work.link}" target="_blank">查看详情</a>
            </div>
        `;
    });
});

function filterWorks() {
    var typeFilter = document.getElementById('typeFilter').value;

    // 清空当前作品展示区
    var portfolioSection = document.getElementById('portfolio');
    portfolioSection.innerHTML = '';

    // 根据筛选条件重新展示作品
    works.forEach(function(work) {
        if (typeFilter === 'All' || work.type === typeFilter) {
            portfolioSection.innerHTML += `
                <div class="portfolio-item">
                    <img src="${work.imageUrl}" alt="${work.name}">
                    <h2>${work.name}</h2>
                    <p>${work.type}</p>
                    <a href="${work.link}" target="_blank">查看详情</a>
                </div>
            `;
        }
    });
}