import React, { Component } from 'react'
import Newslist from './Newslist'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Liz Truss vows tax cuts after winning vote to be next British PM - Reuters UK",
            "description": "Liz Truss will become Britain's next prime minister after winning a leadership race for the governing Conservative Party on Monday, vowing to press ahead with promised tax cuts and action to tackle a deepening energy and cost of living crisis.",
            "url": "https://www.reuters.com/world/uk/britains-truss-expected-be-named-conservative-leader-new-pm-2022-09-05/",
            "urlToImage": "https://www.reuters.com/resizer/jTbPBoEgh2zNvuIMyW8FJeDafSk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/WOPZRGORNBO6TKFDGD3ZXMX4Y4.jpg",
            "publishedAt": "2022-09-05T14:25:00Z",
            "content": "LONDON, Sept 5 (Reuters) - Liz Truss will become Britain's next prime minister after winning a leadership race for the governing Conservative Party on Monday, vowing to press ahead with promised tax … [+5825 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Beast"
            },
            "author": "The Daily Beast",
            "title": "1 Dead, 9 Missing After Floatplane Crash in Washington - The Daily Beast",
            "description": "Crews searched through the night but found only one body.",
            "url": "https://www.thedailybeast.com/1-dead-9-missing-after-floatplane-crash-in-washington",
            "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_687,w_1222,x_261,y_109/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1662381238/Harbour_Air_De_Havilland_Canada_DHC-3T_Vazar_Turbine_Otter_C-FHAS_3__cropped_gcrppu",
            "publishedAt": "2022-09-05T14:06:52Z",
            "content": "One person has died and nine others are missing and feared dead after a floatplane crashed near Washington states Whidbey Island. The amphibious aircraft was on its way to Renton when it went down on… [+228 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Athletic"
            },
            "author": "The Athletic NFL Staff",
            "title": "NFL playoff predictions 2022: Which teams make it? Who’s in mix for No. 1 pick? - The Athletic",
            "description": "Projecting the locks and bubble teams to keep competing past Week 18 — and those that will be eyeing the top of the draft order.",
            "url": "https://theathletic.com/3562038/2022/09/05/nfl-playoff-predictions-2022/",
            "urlToImage": "https://cdn.theathletic.com/app/uploads/2022/09/02161532/GettyImages-1237041456-1024x683.jpeg",
            "publishedAt": "2022-09-05T13:41:05Z",
            "content": "The Athletic’s NFL experts are here to make their predictions for which 14 teams they think will make the playoffs this season. Each writer and editor was asked to pick the seven teams from each conf… [+3759 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Tina Burnside, CNN",
            "title": "Suspect charged in abduction of missing Memphis teacher served time for prior kidnapping charge, court records show - CNN",
            "description": "The man charged in connection with the abduction of a still-missing Memphis teacher served prison time for an aggravated kidnapping more than 20 years ago, court records show.",
            "url": "https://www.cnn.com/2022/09/05/us/memphis-teacher-missing-suspect-prior-kidnapping-charge/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220902144858-01-memphis-missing-teacher-fletcher-super-tease.jpg",
            "publishedAt": "2022-09-05T13:36:00Z",
            "content": "(CNN)The man charged in connection with the abduction of a still-missing Memphis teacher served prison time for an aggravated kidnapping more than 20 years ago, court records show.\r\nCleotha Abston, 3… [+3510 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Julia Musto",
            "title": "Millions in China under COVID lockdown restrictions - Fox News",
            "description": "Tens of millions of residents in China are under stringent COVID-19 restrictions and officials in the city of Shenzhen said it would implement measures on Monday.",
            "url": "https://www.foxnews.com/world/millions-china-covid-lockdown-restrictions",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/09/COVID-4.jpg",
            "publishedAt": "2022-09-05T13:28:40Z",
            "content": "China's city of Shenzhen said it would implement COVID-19 restrictions on Monday. \r\nThis comes as Chengdu eased its lockdown for its 21 million residents, announcing the extension of curbs. \r\nAcross … [+1147 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Hadas Gold",
            "title": "Israeli military admits Shireen Abu Akleh likely killed by Israeli fire​​​​, but won't charge soldiers - CNN",
            "description": "The Israel Defense Forces have ​admitted for the first time that there is a \"high possibility\" Palestinian-American Al Jazeera journalist Shireen Abu Akleh was shot and killed by Israeli fire while covering an Israeli military operation in May.",
            "url": "https://www.cnn.com/2022/09/05/middleeast/idf-shireen-abu-akleh-investigation-intl/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220511032125-shireen-abu-akleh-fb-unlimited.jpg?q=w_800,c_fill",
            "publishedAt": "2022-09-05T13:15:00Z",
            "content": "The Israel Defense Forces have admitted for the first time that there is a high possibility Palestinian-American Al Jazeera journalist Shireen Abu Akleh was shot and killed by Israeli fire while cove… [+5736 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Natasha Turak",
            "title": "Ukraine’s Kherson counteroffensive advances; Russia warns of more 'retaliatory measures' on energy supplies - CNBC",
            "description": "European markets are feeling the fallout from the war in Ukraine, with the euro falling below 99 cents after Russia shut off its gas supply pipeline to Europe.",
            "url": "https://www.cnbc.com/2022/09/05/russia-ukraine-live-updates.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107090204-16581591352022-07-18t154329z_1450481610_rc2ays9n5bms_rtrmadp_0_ukraine-crisis-gazprom-nordstream-factbox.jpeg?v=1662365039&w=1920&h=1080",
            "publishedAt": "2022-09-05T12:37:00Z",
            "content": "Australian artist Peter Seaton has painted over a mural he created on a wall in Melbourne after receiving backlash from the community and the Ukrainian ambassador to Australia.\r\nThe mural, entitled \"… [+1106 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ESPN"
            },
            "author": "Todd Archer",
            "title": "Veteran offensive tackle Jason Peters, 40, agrees to join Dallas Cowboys' practice squad, source says - ESPN",
            "description": "Veteran offensive tackle Jason Peters, 40, has agreed to a deal to join the Dallas Cowboys' practice squad, a source told ESPN.",
            "url": "https://www.espn.com/nfl/story/_/id/34529061/veteran-offensive-tackle-jason-peters-40-agrees-join-dallas-cowboys-practice-squad-source",
            "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2016%2F0809%2Fr111718_1296x729_16%2D9.jpg",
            "publishedAt": "2022-09-05T12:33:53Z",
            "content": "FRISCO, Texas -- The Dallas Cowboys have agreed to a deal with veteran offensive tackle Jason Peters to join their practice squad, according to a source.\r\nBy signing to the practice squad, it gives P… [+1755 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Steven Petrow",
            "title": "Psilocybin as a mental health therapy? Some things to know. - The Washington Post",
            "description": "Interest in and use of the drug is growing, but much is unknown.",
            "url": "https://www.washingtonpost.com/health/2022/09/05/psilocybin-mental-health-psychedelics/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/IPXKOZRMPJD5VBTZDDXSJIAAI4.jpg&w=1440",
            "publishedAt": "2022-09-05T12:15:11Z",
            "content": "Comment on this story\r\nA few weeks ago, I mentioned to a friend that I was interested in learning more about psychedelics, especially how they might help me with depression and anxiety. Thats a broad… [+9206 chars]"
        },
        {
            "source": {
                "id": "entertainment-weekly",
                "name": "Entertainment Weekly"
            },
            "author": "Nick Romano",
            "title": "Who is the Crabfeeder? House of the Dragon's Daniel Scott-Smith speaks - Entertainment Weekly News",
            "description": "Yes, that is greyscale on his arm and, yes, that is the mask you think it is.",
            "url": "https://ew.com/tv/house-of-the-dragon-crabfeeder-actor-daniel-scott-smith-interview/",
            "urlToImage": "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&rect=0%2C89%2C2000%2C1089&poi=%5B980%2C519%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2022%2F09%2F01%2FHouse-of-The-Dragon-Daniel-Scott-Smith-090122.jpg",
            "publishedAt": "2022-09-05T12:00:00Z",
            "content": "Warning: This article contains spoilers for House of the Dragon season 1, episode 3, \"Second of His Name.\"\r\nFire and Blood, George R.R. Martin's compendium of Targaryen history that inspired HBO's Ho… [+6973 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Robyn Dixon, Haq Nawaz Khan, Annabelle Timsit",
            "title": "Suicide bombing reported near Russian Embassy in Kabul - The Washington Post",
            "description": "The attack on one of the government's few supporters belies the Taliban's assertions that they are in total control of the country.",
            "url": "https://www.washingtonpost.com/world/2022/09/05/kabul-russia-embassy-suicide-bomber/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/7OKN35BM7YI63PGGBB2LE2XCSY.jpg&w=1440",
            "publishedAt": "2022-09-05T11:38:00Z",
            "content": "Comment on this story\r\nRIGA, Latvia A suicide bomber blew himself up outside the consular section of Russias embassy in Kabul on Monday, killing a top diplomat, a Russian security guard and four Afgh… [+4241 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Sami Fathi",
            "title": "Apple Watch 'Pro' CAD Renders Show Flat Screen Design With Extra Button, Protrusion Housing Digital Crown and Side Button - MacRumors",
            "description": "New CAD images of the upcoming Apple Watch \"Pro\" have been shared online by 91mobiles, revealing our first look at the all-new design for the...",
            "url": "https://www.macrumors.com/2022/09/05/apple-watch-pro-cad-reveals-new-design/",
            "urlToImage": "https://images.macrumors.com/t/83GuSjcnFW5LKgKkWduNfZ6sA4g=/1920x/article-new/2022/09/apple-watch-pro-cads.jpg",
            "publishedAt": "2022-09-05T11:20:21Z",
            "content": "New CAD images of the upcoming Apple Watch \"Pro\" have been shared online by 91mobiles, revealing our first look at the all-new design for the upcoming Apple Watch.\r\nThe images shared broadly line up … [+1358 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Hanna Panreck",
            "title": "Political commentators, media hosts give Biden's campaign style speech mixed reviews: 'Divisive by nature' - Fox News",
            "description": "Journalists and media hosts gave President Biden some mixed reviews on his Philadelphia speech that hammered \"MAGA Republicans\" as threats to democracy.",
            "url": "https://www.foxnews.com/media/political-commentators-media-hosts-give-bidens-campaign-style-speech-mixed-reviews-divisive-nature",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/09/2022-09-02T160759Z_1395833823_RC2P8W9NC1RC_RTRMADP_3_USA-ELECTION-PENNSYLVANIA.jpg",
            "publishedAt": "2022-09-05T11:00:38Z",
            "content": "Political commentators and journalists gave President Biden mixed reviews on Sunday as some praised his speech that slammed \"MAGA Republicans,\" while others described it as intentionally \"divisive.\" … [+5065 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Jess Weatherbed",
            "title": "Older Samsung Galaxy foldables and smartwatches are getting new features - The Verge",
            "description": "Updating to the latest version of One UI will include features such as multitasking gestures, optimizations for large-screened devices, first-party app enhancements and a PC-like taskbar.",
            "url": "https://www.theverge.com/2022/9/5/23337570/samsung-galaxy-foldables-phones-smart-watches-new-feature-update-selfie-android",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/daeYdjXppW-sDU2G2_tOl9KbqRo=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23954851/226134_SAMSUNG_GALAXY_Z_FLIP_PHO_ajohnson_0001.jpg",
            "publishedAt": "2022-09-05T10:52:51Z",
            "content": "One UI 4.1.1 will roll out to Galaxy Z Fold 3 and Galaxy Z Flip 3 devices first\r\nThe Samsung Galaxy Z Flip3 is getting some Z Flip 4 features.\r\nPhoto by Allison Johnson / The Verge\r\nOlder generations… [+2364 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "George Ramsay, CNN",
            "title": "Nick Kyrgios beats top seed Daniil Medvedevat at US Open - CNN",
            "description": "Defending champion Daniil Medvedev was knocked out of the US Open after losing 6-7 6-3 3-6 2-6 against Nick Kyrgios in the fourth round.",
            "url": "https://www.cnn.com/2022/09/05/tennis/daniil-medvedev-nick-kyrgios-us-open-tennis-spt-intl/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220905095322-daniil-medvedev-super-tease.jpg",
            "publishedAt": "2022-09-05T10:36:00Z",
            "content": null
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "Euro hits new 20-year low after Russia halts gas supplies - Al Jazeera English",
            "description": "The euro slides to $0.9876 after Russia scraps a Saturday deadline for flows from the Nord Stream pipeline to resume.",
            "url": "https://www.aljazeera.com/news/2022/9/5/euro-hits-new-20-year-low-after-russia-halts-gas-supplies",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2022/09/2015-04-21T000000Z_1218275929_GF10000067400_RTRMADP_3_EU-GAZPROM-ANTITRUST.jpg?resize=1920%2C1440",
            "publishedAt": "2022-09-05T10:15:43Z",
            "content": "The euro has sunk below $0.99 a new 20-year low after Russias halt to gas supplies down its main pipeline to Europe heightened fears about a deepening energy crisis across the region.\r\nThe euro has b… [+2849 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Taylor Hawkins Tribute Concert: The 10 Biggest Moments - Rock Sound",
            "description": null,
            "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DQ0TCxWIrhfI",
            "urlToImage": null,
            "publishedAt": "2022-09-05T10:10:22Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "INSIDER"
            },
            "author": "Ayomikun Adekaiyero",
            "title": "Brendan Fraser says he felt dizzy after removing 'The Whale' fat suit - Insider",
            "description": "Fraser said during a press conference at the Venice Film Festival that filming in the prosthetic suit gave him an \"appreciation\" for people with obesity.",
            "url": "https://www.insider.com/brendan-fraser-felt-dizzy-removing-the-whale-fat-suit-2022-9",
            "urlToImage": "https://i.insider.com/631103d63e08f700196c65a6?width=1200&format=jpeg",
            "publishedAt": "2022-09-05T10:07:48Z",
            "content": "Brendan Fraser said that he felt \"a sense of vertigo\" when he removed his 300-pound fat suit while filming \"The Whale.\"\r\nFraser stars in the upcoming film as a 600-pound man called Charlie who tries … [+1663 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Alisyn Camerota",
            "title": "Alisyn Camerota: What I learned about the 'baby business' more than 15 years after undergoing IVF - CNN",
            "description": "Taking stock of the fertility field, Alisyn Camerota writes, \"Many advocates for change said it's high time for our laws and ethics to catch up with our vast advances in technology. I want other families to have the life-changing benefits of fertility treatme…",
            "url": "https://www.cnn.com/2022/09/05/opinions/baby-business-after-going-through-ivf-camerota/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/210416165414-alisyn-with-twins.jpg?q=w_800,c_fill",
            "publishedAt": "2022-09-05T07:06:00Z",
            "content": "Editors Note: Alisyn Camerota is a CNN anchor and co-host of CNNs Newsroom. The views expressed here are her own. Read more opinion on CNN. CNN Special Report: The Baby Business airs on CNN Monday, S… [+5925 chars]"
        },
        {
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "Graig Graziosi",
            "title": "Marjorie Taylor Greene abandoned by right-wing reporters when more important Republican arrives - The Independent",
            "description": "Ms Greene was left hanging mid-sentence when Mr Mastriano arrived",
            "url": "https://www.independent.co.uk/news/world/americas/us-politics/marjorie-taylor-greene-doug-mastriano-republican-b2159657.html",
            "urlToImage": "https://static.independent.co.uk/2022/09/04/21/newFile.jpg?quality=75&width=1200&auto=webp",
            "publishedAt": "2022-09-05T06:16:23Z",
            "content": "A pair of reporters from the conservative Right Side Broadcasting Network covering former President Donald Trump's rally for Pennsylvania GOP candidates Dr Mehmet Oz and Doug Mastriano left Represent… [+2000 chars]"
        }
    ]
    constructor(){
        super();
        console.log("I am Constructor");
        this.state={
            articles : this.articles,
            loading : false
        }
    }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsWeb - Top Hedlines</h2>
        <div className="row">
            {this.state.articles.map((element)=>{
                return <div className='col-md-4' key={element.url}>
                <Newslist title={element.title} description={element.descriptiony
                } imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
            })}
             
            
        </div>
       
      </div>
    )
  }
}

export default News
