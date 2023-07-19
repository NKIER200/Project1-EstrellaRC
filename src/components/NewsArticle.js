// src/components/NewsArticle.js
import React from "react";
import { useParams } from "react-router-dom";
import "../index.css"; 
import articleImagetitle from "../IMG_5842.JPG"; 
const NewsArticle = () => {
  const { id } = useParams();

  const newsArticles = [
    {
      id: 1,
      title: "Club Finishes Top of Cup Playoffs",
      date: "2023-11-19",
      content: "In a story that captured the hearts of football enthusiasts worldwide, Estrella RC defied all odds to emerge victorious in the ZONE B playoffs and secure their place in the coveted Copa De Primera knockout rounds. Faced with formidable opponents and formidable challenges throughout the season, the club showcased an unwavering spirit and determination, surpassing expectations and making an indelible mark in the history of the sport. Throughout the ZONE B playoffs, Estrella RC showcased their tactical prowess and exceptional teamwork, consistently outplaying their rivals and showcasing their mettle on the field. Each match was a testament to their grit and resilience, as they fought tooth and nail to claim victory and inch closer to their ultimate goal. With every passing game, their fans rallied behind them, fueling their passion and belief in their abilities. The club's players displayed unwavering commitment, leaving no stone unturned in their pursuit of success. Their skillful performances, stunning goals, and strategic gameplay captivated spectators and pundits alike. As the ZONE B playoffs reached its climactic conclusion, Estrella RC found themselves at the summit, clinching the top spot and sealing their place in the Copa De Primera knockout rounds. The achievement was a testament to the dedication of the entire team, coaching staff, and management, who had worked tirelessly to build a formidable squad capable of facing any challenge. Entering the Copa De Primera knockout rounds as underdogs, Estrella RC had the world watching with bated breath. Despite the daunting task ahead, the club's journey to this point had instilled an unwavering belief in their ability to conquer any challenge that lay ahead. The remarkable journey of Estrella RC stands as a testament to the power of perseverance, teamwork, and unyielding determination. They had risen against the odds, etching their name in the annals of football history, and inspiring generations of aspiring athletes to dare to dream beyond what seems possible. As they faced the knockout rounds of the Copa De Primera, Estrella RC carried the hopes and dreams of their fans, ready to continue defying the odds and script their own legacy on football's grandest stage.",
    },
    {
        id: 2,
        title: "Club Wins Copa De Primera For First Time!",
        date: "2023-12-17",
        content: " Estrella RC achieved a historic triumph in the Copa De Primera by securing a momentous victory, claiming the coveted title for the first time in the club's illustrious history. In a fiercely contested match, Estrella RC took an early lead, dominating the proceedings with a 1-0 advantage. However, Boca Juniors, their formidable opponents, displayed tenacity and determination, equalizing the scoreline at 1-1. Undeterred, Estrella RC surged ahead in the mid of the second half, showcasing their resilience and skill, as they scored a decisive goals in  the 56th minute, leaving their supporters on the edge of their seats. The club's Player of the Year, Cardona, further solidified their victory by brilliantly netting a third goal just minutes later, putting the icing on the cake and the prestigious trophy firmly in their hands. The remarkable achievement stands as a testament to Estrella RC's unwavering dedication and exceptional performance on the grand stage of the Copa De Primera. ",
      },
      {
        id: 3,
        title: "Preseason begins!",
        date: "2023-12-17",
        content: "As the calendar flips to January, Estrella RC extends warm wishes for a joyous and prosperous New Year to all our beloved fans and supporters. May the upcoming year be filled with boundless opportunities, triumphant moments, and unforgettable memories. We are incredibly grateful for your unwavering support, and we look forward to sharing many more thrilling moments with you throughout the season. Let this New Year usher in a wave of positivity and success for Estrella RC as we continue to strive for greatness on and off the field. Happy New Year to each and every one of you, and here's to an extraordinary journey ahead! In the new year the excitement at Estrella RC reaches new heights as we prepare to kick off their highly anticipated preseason tournament. The club is set to face off against Real Salt Lake in their opening match, and all eyes will be on the field to witness the debut of two sensational talents. The first is none other than the rising Uruguayan midfield starlet, Díazs, whose exceptional skills and vision have already earned him recognition in the footballing world. Fans and pundits alike eagerly await his performance, as he dons the Estrella RC jersey for the very first time, ready to make an impact on the pitch. Alongside Díazs, the Gabonese International Bouangas will also make his debut, adding to the anticipation surrounding the match. As a dynamic and powerful player, Bouangas' presence on the field promises to inject a new dimension into Estrella RC's gameplay. The clash with Real Salt Lake will not only be a thrilling contest between two formidable teams but also a momentous occasion that marks the beginning of a journey filled with hope, dreams, and aspirations for Estrella RC and their passionate supporters. The stage is set, and the preseason tournament will undoubtedly serve as a captivating spectacle as the club's newest talents showcase their skills and embark on a journey of growth and success with Estrella RC.",
      },
      {
        id: 4,
        title: "Gracias Romo",
        date: "2023-01-20",
        content: "With heavy hearts, Estrella RC bids farewell to the illustrious Luis Romo as he embarks on a new chapter in his football journey. Luis Romo has left an indelible mark on the club, and his departure leaves a void that will be challenging to fill. His time at Estrella RC was adorned with unforgettable moments, none more remarkable than his stunning goal of the season in the intense derby match, leaving fans and pundits alike in awe of his exceptional talent. His significant contributions were not limited to league encounters, as he displayed nerves of steel in the Copa De Primera Final, netting the crucial goal that set the stage for a historic victory. Now, Luis Romo moves on to pursue fresh challenges, and his departure comes with a club record fee of 13.2 million euros, a testament to his immense value on and off the pitch. As he ventures into new horizons, we extend our heartfelt wishes for a prosperous and successful future. Luis Romo will always hold a special place in the hearts of Estrella RC's devoted fans, and his name will forever resonate as a legend in the club's storied history. Thank you, Luis, for the memories and the passion you brought to the field. You will be missed, and your legacy at Estrella RC will endure for generations to come.",
      },
      {
        id: 5,
        title: "Cardona: An Icon",
        date: "2023-01-22",
        content: "With profound gratitude and admiration, Estrella RC bids a fond farewell to the legendary Cardona, a true icon of the club. Throughout his illustrious career, Cardona has consistently proven himself to be a force to be reckoned with on the field, earning the prestigious Player of the Year award an astounding nine times in 2023, 2022, 2020, 2019, 2017, 2016, 2015, 2013, and 2010. Last season, his unwavering dedication and exceptional skills were instrumental in the club's triumphs, as he delivered countless important goals that propelled Estrella RC to glory. Cardona's journey with Estrella RC spans an awe-inspiring 22 years, having joined the club at the tender age of 10. His unwavering loyalty and commitment have made him a beloved figure among fans and teammates alike. His contribution to the club's legacy is immeasurable, etching his name into the history books as one of the greatest players ever to don the club's colors. In the most critical moments of the Copa De Primera Final, Cardona displayed his trademark brilliance, scoring the pivotal goal that secured a resounding 3-1 victory and lifted the prestigious trophy. In the semi-final, his nerves of steel shone through as he calmly slotted in the crucial penalty that sent Estrella RC on their path to glory. Cardona's impact goes far beyond his on-field heroics; he has been an inspiration to younger players, a mentor, and a leader both on and off the pitch. As a testament to his enduring legacy, Estrella RC has decided to honor him with a statue that will stand tall, preserving his memory and contributions for generations to come. As Cardona begins a new chapter in his journey, we extend our heartfelt wishes for continued success and happiness. He will forever be cherished and celebrated as an iconic figure in the club's history. Thank you, Cardona, for your unmatched dedication and brilliance, you shall be the clubs final player to don the number 11 shirt. Your legacy will forever shine brightly, reminding us of the extraordinary impact you made on Estrella RC.",
      },
      {
        id: 6,
        title: "Paz: One Last Dance",
        date: "2023-01-23",
        content: "As the current season begins, a bittersweet moment approaches as Estrella RC prepares to bid farewell to the revered Paz at the end of the season. A living legend, Paz has announced his decision to retire, bringing an end to a remarkable journey that has left an indelible mark on the club's history. At 37 years old, he has graced the football world with his incredible talent and unwavering dedication. Paz's association with Estrella RC began back in 2003 when he joined the club, and from that moment, he became an integral part of its identity. Throughout his illustrious career, he has epitomized the values and spirit of Estrella RC, earning the admiration and respect of fans, teammates, and rivals alike. In recent years, Paz may have taken on a lesser playing role, but his impact has never diminished. His experience, wisdom, and guidance have been invaluable to the younger players, nurturing and inspiring the next generation of talent. Beyond the statistics and accolades, Paz's leadership and influence have been instrumental in shaping the club's culture and forging its path to greatness. As he hangs up his boots, Paz leaves behind a legacy that will forever be celebrated. He has personified the essence of loyalty, commitment, and passion for the game. Every time he stepped onto the pitch, he carried the hopes and dreams of millions of fans, and he did so with humility and pride. His unwavering dedication to the club will forever be cherished, and his impact will continue to be felt for years to come. Estrella RC will always be grateful for the extraordinary contributions of Paz, a true icon of the club. As he embarks on a new chapter in life, we extend our heartfelt appreciation and best wishes for a fulfilling and joyous future. Though his playing days may come to a close, the legacy of Paz will live on, inspiring generations of aspiring athletes to strive for greatness and embody the true spirit of Estrella RC. Thank you, Paz, for your extraordinary service to the club, and may your retirement be filled with happiness and fulfillment.",
      },
      {
        id: 7,
        title: "Preseason Review",
        date: "2023-01-30",
        content: "In the eagerly awaited preseason tournament, Estrella RC showcased their mettle and determination, leaving a mark of their quality on the field. In the opening match, they displayed an explosive performance, securing an impressive 4-0 victory. This match marked an emotional moment as both Luis Romo and Cardona, two revered legends of the club, found the back of the net for the final time in the Estrella RC jersey. The crowd erupted in applause, celebrating the indelible impact these two players had on the club's history. However, the second game brought a different challenge. Despite a spirited effort, Estrella RC was unfortunate to lose by a narrow margin of 1-0. A solitary early goal from the opponents proved to be the decisive factor in this tightly contested encounter. Nevertheless, the players showed tremendous resilience and determination, vowing to bounce back stronger. And bounce back they did! In the final game of the preseason tournament, Estrella RC delivered a commanding performance, securing a comfortable 2-0 victory. Sofiane Boufal emerged as the hero of the match, showcasing his clinical finishing skills by netting both goals. The fans were thrilled to witness the impact of this talented player, who had recently joined the club. Another highlight of the match was the debut of young talent, Schjelderup. The young starlet displayed immense potential and promise, leaving the supporters excited about the prospect of watching him grow and flourish in the Estrella RC colors. As the preseason tournament concluded, the fans were left with a mix of emotions—pride in the team's accomplishments, a sense of nostalgia for departing legends, and excitement for the new talents that would shape the club's future. With the start of the new season on the horizon, Estrella RC was ready to face any challenge that came their way, inspired by their rich history and eager to create new unforgettable moments on the football pitch.",
      },
      {
        id: 8,
        title: "Copa Libertadores Debut",
        date: "2023-04-10",
        content: "In a historic moment for Estrella RC, the club made its much-anticipated debut in the prestigious Copa Libertadores, a competition that would test their mettle against some of South America's finest teams. Taking to the field away from home, the players were determined to make a statement and leave an indelible mark on the continent's most illustrious tournament. The match began with an air of anticipation, and it didn't take long for Estrella RC to announce their arrival on the continental stage. In the 16th minute, Pardo showcased his clinical finishing skills, slotting home the club's first-ever goal in the Copa Libertadores. The fans erupted in joy, celebrating this historic milestone in the club's journey. As the game progressed, Estrella RC continued to display their attacking prowess and determination. In the 60th minute, Blanco unleashed a powerful shot from outside the box, doubling the lead and leaving the opposition stunned. The players' camaraderie and teamwork were on full display, as they showcased their ability to control the game with confidence and skill. In the 72nd minute, Duarte further solidified Estrella RC's dominance, scoring a crucial third goal that all but sealed the victory. The celebrations grew louder, and the fans could feel the pride and joy of witnessing their beloved club excel on the grand stage. But Estrella RC wasn't done yet. With the clock ticking towards the end of the match, Boufal added to the tally, netting the fourth goal in the 89th minute. The supporters' jubilation echoed through the stadium as they recognized the significance of this remarkable performance. The players continued to press forward, demonstrating their hunger for more success. In stoppage time, Iglesias delivered the final blow, finding the back of the net to make it 5-0 in favor of Estrella RC. The final whistle marked not just a resounding victory, but a moment of pride for every player, fan, and member of the Estrella RC family. The club's debut in the Copa Libertadores was nothing short of a dream start—a statement of intent that reverberated throughout South America. Estrella RC had arrived on the continental stage, leaving an unforgettable impression with their attacking flair, defensive solidity, and unwavering determination. As the tournament progressed, the world would continue to witness the rise of this formidable team, ready to take on any challenge and etch their name in the annals of Copa Libertadores history.",
      },
      {
        id: 9,
        title: "League Champions!",
        date: "2023-07-20",
        content: (<>
            <p>
            On a historic day that will forever be etched in the hearts of Estrella RC's fans, the club achieved an exhilarating 5-1 victory in the long-awaited derby match, securing their first-ever league title. The tension and anticipation in the stadium were palpable as the players took to the field, fully aware of the weight of the moment. The breakthrough came early in the game when Sofiane Boufal unleashed a thunderous strike, sending the crowd into a frenzy. However, it was Duarte's moment of brilliance that stole the show as he embarked on an awe-inspiring solo run from his own half, gracefully weaving through the opposition's defense, and slotting the ball into the back of the net with remarkable finesse. The stadium erupted with deafening cheers, celebrating the club's Player of the Year and Young Player of the Year in a manner befitting his truly exceptional talents.
            </p>
            <img src={articleImagetitle} alt="News" className="news-article-image" style={{ width: "500px", height: "auto" }} />
            <p>
            As the match progressed, Estrella RC's dominance was undeniable, and it was evident that destiny was on their side. In a stunning display of skill and composure, Bouanga executed a jaw-dropping turnaround chip that left the goalkeeper rooted to the spot, further extending the lead. The fans' excitement reached new heights when Pardo, a living legend of the club, was brought on in the 85th minute. In a fairytale ending to his illustrious career at Estrella RC, Pardo etched his name into the annals of history with two sublime goals in the 87th and 89th minutes, sealing the victory and sparking jubilant celebrations across the stadium. Tears of joy flowed freely as the final whistle blew, and the players embraced, realizing that they had not only won the league title but also etched their names in the hearts of millions of devoted fans. This unforgettable triumph marked the beginning of a new era of greatness for Estrella RC, a triumph that will resonate for generations to come.
            </p>
          </>),
      },
      {
        id: 10,
        title: "Libertadores: A Chance at History",
        date: "2023-10-10",
        content: (<>
            <p>
            In an awe-inspiring display of footballing prowess, Estrella RC embarked on an extraordinary Copa Libertadores run, etching their name in the history books with a trailblazing journey to the final. With every match, the club's stars shone brightly, none more so than the formidable Bouanga, whose heroics proved instrumental in carrying the team forward.
            </p>
            <p>
            The Round of 16 witnessed Bouanga's brilliance come to the fore as he notched an impressive three goals and provided a crucial assist, propelling Estrella RC to a convincing victory. The quarter-finals brought a formidable challenge in Olimpia, but the club demonstrated their mettle and prowess, delivering an emphatic 8-3 aggregate win. The 5-1 away triumph in the first leg showcased Estrella RC's attacking flair and determination, leaving their opponents shell-shocked. 
            </p>
            <p>
            As the journey progressed to the semi-finals against Nacional, Estrella RC displayed utter dominance. The first leg saw a commanding 3-0 victory, with Pardo emerging as the Man of the Match, stunning the opposition with two crucial goals. Such was their dominance that they comfortably rotated the side in the second half, demonstrating the depth of their squad.
            </p>
            <p>
            With one foot in the final, Estrella RC continued their mesmerizing form in the second leg, storming to a 3-0 lead in the first half, courtesy of Pardo's sensational brace. The fans erupted in jubilation as Pardo completed his hattrick in the late second half, sealing an astonishing 7-0 aggregate victory to secure their place in the Conmebol Libertadores final for the first time in the club's storied history.
            </p>
            <p>
            Now, standing on the cusp of greatness, Estrella RC prepares to face Palmeiras in the final, a monumental occasion that promises to be a nerve-wracking yet exhilarating spectacle. The world will be watching as these two footballing giants lock horns in an epic clash for South American supremacy. Estrella RC's journey to the final stands as a testament to their resilience, teamwork, and unwavering belief, and as they march on to the grand finale, they carry with them the dreams and hopes of an entire footballing nation. Regardless of the final outcome, Estrella RC has already won the hearts of fans worldwide, proving that with determination and grit, they can conquer any challenge that comes their way. 
            </p>
          </>),
      },
    
    
  ];

  const article = newsArticles.find((article) => article.id === Number(id));

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <div className="news-article"> 
      <h1>{article.title}</h1>
      <div className="news-article-details">
        <p className="news-article-date">Published on {article.date}</p>
      </div>
      <div className="news-article-content">
        <p>{article.content}</p>
      </div>
    </div>
  );
};

export default NewsArticle;