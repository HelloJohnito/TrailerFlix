var mongoose = require("mongoose");
var User = require("./models/user");
var Video = require("./models/video");
var Category = require("./models/category");


var videoData = [
  {
    name: "The Avengers",
    youtube_id: "eOrNdBpGMv8",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/c_scale,q_auto:low,w_631/v1498430686/avenger_sairy7.jpg",
    description: 'Nick Fury (Samuel L. Jackson), director of S.H.I.E.L.D. (Strategic Homeland Intervention, Enforcement, and Logistics Division), arrives at S.H.I.E.L.D. headquarters outside of Santa Fe, New Mexico, during an evacuation. The Tesseract, an energy source of unknown potential, has activated. It opens a portal through space and the exiled Norse god Loki (Tom Hiddleston) steps through, carrying a strange spear with a blue glowing tip. Loki takes the Tesseract and uses the spear to take control of the minds of several SHIELD personnel, including Dr. Erik Selvig (Stellan Skarsgård) , and Agent Clint "Hawkeye" Barton (Jeremy Renner), to aid him in his getaway.',
    rating: 4,
    category: "action",
    comments: []
  },
  {
    name: "Bourne Ultimatum",
    youtube_id: "ZT2ZxjUjSo0",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1498430692/bourn_moi9pm.jpg",
    description: "Bourne is once again brought out of hiding, this time inadvertently by London-based reporter Simon Ross who is trying to unveil Operation Blackbriar--an upgrade to Project Treadstone--in a series of newspaper columns. Bourne sets up a meeting with Ross and realizes instantly they're being scanned. Information from the reporter stirs a new set of memories, and Bourne must finally, ultimately, uncover his dark past whilst dodging The Company's best efforts in trying to eradicate him. Written by Corey Hatch",
    rating: 5,
    category: "action",
    comments: []
  },
  {
    name: "Fight Club",
    youtube_id: "SUXWAEX2jlg",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1498430695/fightclub_ljt50y.jpg",
    description: "A nameless first person narrator (Edward Norton) attends support groups in attempt to subdue his emotional state and relieve his insomniac state. When he meets Marla (Helena Bonham Carter), another fake attendee of support groups, his life seems to become a little more bearable. However when he associates himself with Tyler (Brad Pitt) he is dragged into an underground fight club and soap making scheme. Together the two men spiral out of control and engage in competitive rivalry for love and power. When the narrator is exposed to the hidden agenda of Tyler's fight club, he must accept the awful truth that Tyler may not be who he says he is. Written by Rhiannon",
    rating: 5,
    category: "action",
    comments: []
  },
  {
    name: "Wonder Woman",
    youtube_id: "VSB4wGIdDwo",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1498430725/wonderwoman_l0txww.jpg",
    description: "Before she was Wonder Woman, she was Diana, princess of the Amazons, trained to be an unconquerable warrior. Raised on a sheltered island paradise, when a pilot crashes on their shores and tells of a massive conflict raging in the outside world, Diana leaves her home, convinced she can stop the threat. Fighting alongside man in a war to end all wars, Diana will discover her full powers and her true destiny. Written by zemon19",
    rating: 4,
    category: "action",
    comments: []
  },
  {
    name: "John Wick",
    youtube_id: "2AUmvWm5ZDQ",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1498430704/johnwick_thiftx.jpg",
    description: "After John Wick (Keanu Reeves) loses his wife Helen (Bridget Moynahan) to a terminal illness, he receives a beagle puppy named Daisy, per Helen's instructions, to help him cope with her death. He connects with the puppy and they spend their day driving around in his vintage 1969 Boss 429 Mustang. At a gas station, he encounters a trio of Russian gangsters whose leader, Iosef Tarasov (Alfie Allen), insists on buying his car, but John refuses to sell it. The mobsters follow John to his home that night, knock him unconscious, steal his car, and kill Daisy.",
    rating: 3,
    category: "action",
    comments: []
  },
  {
    name: "Kill Bill",
    youtube_id: "7kSuas6mRpk",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1498430708/killbill_olpdpj.jpg",
    description: "The lead character, called 'The Bride,' was a member of the Deadly Viper Assassination Squad, led by her lover 'Bill.' Upon realizing she was pregnant with Bill's child, 'The Bride' decided to escape her life as a killer. She fled to Texas, met a young man, who, on the day of their wedding rehearsal was gunned down by an angry and jealous Bill (with the assistance of the Deadly Viper Assassination Squad). Four years later, 'The Bride' wakes from a coma, and discovers her baby is gone. She, then, decides to seek revenge upon the five people who destroyed her life and killed her baby. The saga of Kill Bill Volume I begins. Written by JD",
    rating: 4,
    category: "action",
    comments: []
  },
  {
    name: "Mad Max",
    youtube_id: "hEJnMQG9ev8",
    img: "http://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1498430713/madmax_raccqn.jpg",
    description: "Taking place in a dystopian Australia in the near future, Mad Max tells the story of a highway patrolman cruising the squalid back roads that have become the breeding ground of criminals foraging for gasoline and scraps. When his wife and child meet a grisly end at the hands of a motorcycle gang, Max sets out across the barren wastelands in search of revenge. Written by Cole Matthews",
    rating: 5,
    category: "action",
    comments: []
  },
  {
    name: "Saving Private Ryan",
    youtube_id: "zwhP5b4tD6g",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1498430717/savingprivate_bschaw.jpg",
    description: "Opening with the Allied invasion of Normandy on 6 June 1944, members of the 2nd Ranger Battalion under Cpt. Miller fight ashore to secure a beachhead. Amidst the fighting, two brothers are killed in action. Earlier in New Guinea, a third brother is KIA. Their mother, Mrs. Ryan, is to receive all three of the grave telegrams on the same day. The United States Army Chief of Staff, George C. Marshall, is given an opportunity to alleviate some of her grief when he learns of a fourth brother, Private James Ryan, and decides to send out 8 men (Cpt. Miller and select members from 2nd Rangers) to find him and bring him back home to his mother... Written by J.Zelman",
    rating: 3,
    category: "action",
    comments: []
  },
  {
    name: "Terminator",
    youtube_id: "7QXDPzx71jQ",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1498430722/terminator_uz2l05.jpg",
    description: "A cyborg is sent from the future on a deadly mission. He has to kill Sarah Connor, a young woman whose life will have a great significance in years to come. Sarah has only one protector - Kyle Reese - also sent from the future. The Terminator uses his exceptional intelligence and strength to find Sarah, but is there any way to stop the seemingly indestructible cyborg ? Written by Colin Tinto",
    rating: 3,
    category: "action",
    comments: []
  },
  {
    name: "Batman",
    youtube_id: "EXeTwQWrcwY",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1498430690/batman_jb3lx3.jpg",
    description: "Set within a year after the events of Batman Begins, Batman, Lieutenant James Gordon, and new district attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City until a mysterious and sadistic criminal mastermind known only as the Joker appears in Gotham, creating a new wave of chaos. Batman's struggle against the Joker becomes deeply personal, forcing him to 'confront everything he believes' and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent and Rachel Dawes. Written by Leon Lombardi",
    rating: 3,
    category: "action",
    comments: []
  },
  {
    name: "Anchorman",
    youtube_id: "NJQ4qEWm9lU",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1498431861/anchorman_c239qq.jpg",
    description: "In 1974, Ron Burgundy (Will Ferrell) is the famous anchorman for a local San Diego television station, fictional KVWN channel 4. He works alongside his friends, who he had known since childhood, on the news team; lead field reporter Brian Fantana (Paul Rudd), sportscaster Champion 'Champ' Kind (David Koechner), and intellectually disabled, but loyal and good-hearted chief meteorologist Brick Tamland (Steve Carell). Station director Ed Harken (Fred Willard) informs the team that they have maintained their long-held status as the highest-rated news Program in San Diego, leading them to throw a wild party, where Ron unsuccessfully attempts to pick up a beautiful, blonde woman, Veronica Corningstone (Christina Applegate).",
    rating: 4,
    category: "comedy",
    comments: []
  },
  {
    name: "Austin Powers",
    youtube_id: "Oze1bn4_pbk",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1498431864/austinpowers_zge3xx.jpg",
    description: "Austin Powers is a 60's spy who is cryonically frozen and released in the 1990's. The world is a very different place for Powers. Unfortunately for Austin, everyone is no longer sex-mad. Although he may be in a different decade, his mission is still the same. He has teamed up with Vanessa Kensington to stop the evil Dr. Evil, who was also frozen in the past. Dr. Evil stole a nuclear weapon and is demanding a payment of (when he realises its the 90's) 100 billion dollars. Can Austin Powers stop this madman? or will he caught up with Evil's henchman, with names like Alotta Fagina and Random Task? Only time will tell!",
    rating: 4,
    category: "comedy",
    comments: []
  },
  {
    name: "The Hang Over",
    youtube_id: "tcdUhdOlz9M",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1498431866/hangover_gfbtit.jpg",
    description: "To celebrate his upcoming marriage to Tracy Garner, Doug Billings travels to Las Vegas with his best friends Phil Wenneck, Stuart 'Stu' Price, and Tracy's brother Alan, in Doug's future father-in-law's vintage Mercedes-Benz W111. They spend the night at Caesars Palace, where they relax in their hotel suite before celebrating with a few drinks on the hotel rooftop. The next morning, Phil, Stu, and Alan awaken to find they have no memory of the previous night, and Doug is nowhere to be found. Stu's tooth is in Alan's pocket, their suite is in a state of complete disarray, a tiger is in their bathroom, a chicken is in their living room, and a baby is in the closet, whom they name 'Carlos'. They find Doug's mattress impaled on a statue outside of Caesars Palace.",
    rating: 4,
    category: "comedy",
    comments: []
  },
  {
    name: "Step Brothers",
    youtube_id: "CewglxElBK0",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1498431870/stepbrothers_qefsxb.jpg",
    description: "Brennan Huff and Dale Doback are both about 40 when Brennan's mom and Dale's dad marry. The sons still live with the parents so they must now share a room. Initial antipathy threatens the household's peace and the parents' relationship. Dad lays down the law: both slackers have a week to find a job. Out of the job search and their love of music comes a pact that leads to friendship but more domestic disarray compounded by the boys' sleepwalking. Hovering nearby are Brennan's successful brother and his lonely wife: the brother wants to help sell his step-father's house, the wife wants Dale's attention, and the newlyweds want to retire and sail the seven seas. Can harmony come from the discord?",
    rating: 4,
    category: "comedy",
    comments: []
  },
  {
    name: "Super Bad",
    youtube_id: "MNpoTxeydiY",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1498431872/superbad_t17iwh.jpg",
    description: "Seth and Evan are best friends, inseparable, navigating the last weeks of high school. Usually shunned by the popular kids, Seth and Evan luck into an invitation to a party, and spend a long day, with the help of their nerdy friend Fogell, trying to score enough alcohol to lubricate the party and inebriate two girls, Jules and Becca, so they can kick-start their sex lives and go off to college with a summer full of experience and new skills. Their quest is complicated by Fogell's falling in with two inept cops who both slow and assist the plan. If they do get the liquor to the party, what then? Is sex the only rite of passage at hand?",
    rating: 4,
    category: "comedy",
    comments: []
  },
  {
    name: "Hot Fuzz",
    youtube_id: "ayTnvVpj9t4",
    img: "http://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499661230/hotfuzz_tb9ohd.jpg",
    description: "Top London cop, PC Nicholas Angel is good. Too good. And to stop the rest of his team looking bad, he is reassigned to the quiet town of Sandford. He is paired with Danny Butterman, who endlessly questions him on the action lifestyle. Everything seems quiet for Angel, until two actors are found decapitated. It is called an accident, but Angel isn't going to accept that, especially when more and more people turn up dead. Angel and Danny clash with everyone, whilst trying to uncover the truth behind the mystery of the apparent 'accidents'.",
    rating: 3,
    category: "comedy",
    comments: []
  },
  {
    name: "Bad Boys 2",
    youtube_id: "hsuKq5pNOcM",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499661235/badboys_homvtl.jpg",
    description: "Eight years after the events of the first film, Miami Police Department (MPD) narcotics division detectives Marcus Burnett and Mike Lowrey are investigating the flow of highly-potent ecstasy into the city. Their surveillance of boats coming in from Cuba leads them to a Ku Klux Klan meeting and drug drop in a swamp docks outside Miami. The subsequent raid on the Klan members proves to be a disaster; malfunctioning radios delay back-up, causing a firefight wherein a number of the Klan are killed or injured and Mike accidentally shoots Marcus in the buttocks. Police arrest the surviving Klan members, who are revealed to be mere small-time buyers and not distributors.",
    rating: 4,
    category: "comedy",
    comments: []
  },
  {
    name: "Ride Along 2",
    youtube_id: "iWfmmwdCHTg",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499661239/rideAlong_fsbtkk.jpg",
    description: "The RIDE ALONG 2 sequel picks up about a year after our heroes' last adventure. Plans for a quick trip to Miami go bad. With the wedding upcoming, James reluctantly takes Ben with him to Miami to follow up on a lead connected to a drug ring case he's been trying to crack. In Miami, they meet Maya, a no-BS homicide detective who lets them know Miami is her turf. They also encounter AJ, a shady cocky computer hacker who reveals evidence that implicates a well-respected local businessman, the wealthy Antonio Pope. Pope harbors a vicious streak and rules South Florida's drug trade. If Ben and James can convince the authorities that Pope is a brutal crime boss they'll stop his spree. If they fail, well there may not be a wedding after all.",
    rating: 4,
    category: "comedy",
    comments: []
  },
  {
    name: "Food Inc.",
    youtube_id: "eHJiNC_7wuw",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499662021/food_oqsjzw.jpg",
    description: "The current method of raw food production is largely a response to the growth of the fast food industry since the 1950s. The production of food overall has more drastically changed since that time than the several thousand years prior. Controlled primarily by a handful of multinational corporations, the global food production business - with an emphasis on the business - has as its unwritten goals production of large quantities of food at low direct inputs (most often subsidized) resulting in enormous profits, which in turn results in greater control of the global supply of food sources within these few companies.",
    rating: 3,
    category: "documentary",
    comments: []
  },
  {
    name: "The Imposter",
    youtube_id: "yDjpnpzw4GY",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499662023/imposter_crq2gx.jpg",
    description: "Bourdin, who turned out to have a long record of impersonating various children, real or imaginary, embellished his claim to be Nicholas Barclay by alleging that he had been kidnapped for purposes of sexual abuse by Mexican, European, and U.S. military personnel and transported from Texas to Spain. His impersonation fooled several officials in Spain and the U.S., and he was apparently accepted by many of Barclay's family members, even though he was seven years older than Barclay, spoke with a French accent, and had brown eyes and dark hair rather than Barclay's blue eyes and blonde hair. The impersonation was eventually discovered as a result of the suspicions of a private investigator, Charles (Charlie) Parker, and an FBI agent, Nancy Fisher.",
    rating: 4,
    category: "documentary",
    comments: []
  },
  {
    name: "The Inside Job",
    youtube_id: "FzrBurlJUNk",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499662026/inside_job_ya2zth.jpg",
    description: "'Inside Job' provides a comprehensive analysis of the global financial crisis of 2008, which at a cost over $20 trillion, caused millions of people to lose their jobs and homes in the worst recession since the Great Depression, and nearly resulted in a global financial collapse. Through exhaustive research and extensive interviews with key financial insiders, politicians, journalists, and academics, the film traces the rise of a rogue industry which has corrupted politics, regulation, and academia. It was made on location in the United States, Iceland, England, France, Singapore, and China.",
    rating: 4,
    category: "documentary",
    comments: []
  },
  {
    name: "Jiro Dreams of Sushi",
    youtube_id: "buF540VBwAE",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499662029/jiro_ykltsx.jpg",
    description: "Jiro Dreams of Sushi is a 2011 American documentary film directed by David Gelb.[2] The film follows Jiro Ono (小野 二郎 Ono Jirō), an 85-year-old sushi master and owner of Sukiyabashi Jiro, a Michelin three-star restaurant. Sukiyabashi Jiro is a 10-seat, sushi-only restaurant located in a Tokyo subway station. Jiro Ono serves a tasting menu of roughly 20 courses, for a total of 30,000 Japanese yen ($281 USD). The film also profiles Jiro's two sons, both of whom are also sushi chefs. The younger son, Takashi (隆士), left Sukiyabashi Jiro to open a mirror image of his father's restaurant in Roppongi Hills. The 50-year-old elder son, Yoshikazu (禎一), obliged to succeed his father, still works for Jiro and is faced with the prospect of one day taking over the flagship restaurant.",
    rating: 4,
    category: "documentary",
    comments: []
  },
  {
    name: "Man on Wire",
    youtube_id: "EIawNRm9NWM",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499662032/manonwire_b8xmwd.jpg",
    description: "On August 7, 1974, Philippe Petit, a French wire walker, juggler, and street performer days shy of his 25th birthday, spent 45 minutes walking, dancing, kneeling, and lying on a wire he and friends strung between the rooftops of the Twin Towers. Uses contemporary interviews, archival footage, and recreations to tell the story of his previous walks between towers of Notre Dame and of the Sydney Harbour Bridge, his passions and friendships, and the details of the night before the walk: getting cable into the towers, hiding from guards, and mounting the wire. It ends with observations of the profound changes the walk's success brought to Philippe and those closest to him.",
    rating: 3,
    category: "documentary",
    comments: []
  },
  {
    name: "March of the Penguins",
    youtube_id: "L7tWNwhSocE",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499662035/march_of_the_penguins_l2kjyk.jpg",
    description: "At the end of each Antarctic summer, the emperor penguins of the South Pole journey to their traditional breeding grounds in a fascinating mating ritual that is captured in this documentary by intrepid filmmaker Luc Jacquet. The journey across frozen tundra proves to be the simplest part of the ritual, as after the egg is hatched, the female must delicately transfer it to the male and make her way back to the distant sea to nourish herself and bring back food to her newborn chick.",
    rating: 5,
    category: "documentary",
    comments: []
  },
  {
    name: "Super Size Me",
    youtube_id: "LOvrkkj_T-I",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499662038/supersizeme_spghal.jpg",
    description: "Several legal suits have been brought against McDonald's Restaurants that they are knowingly selling food that is unhealthy. Some of the court decisions have stated that the plaintiffs would have a claim if they could prove that eating the food every day for every meal is dangerous. As such, documentarian Morgan Spurlock conducts an unscientific experiment using himself as the guinea pig: eat only McDonald's for thirty days, three meals a day. If he is asked by the clerk if he would like the meal super sized, he has to say yes. And by the end of the thirty days, he will have had to have eaten every single menu item at least once. Before starting the experiment, he is tested by three doctors.",
    rating: 3,
    category: "documentary",
    comments: []
  },
  {
    name: "Beauty and the Beast",
    youtube_id: "e3Nl_TCQXuw",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499662847/Beauty-and-the-Beast-poster2_pbbayd.png",
    description: "yIn Rococo-era France, an enchantress disguised as a beggar arrives at a ball and offers the host, a coldhearted prince, a rose for shelter. When he refuses, she transforms him into a beast and his servants into household objects, and erases the castle from the memories of their loved ones. She casts a spell on the rose and warns the prince that, unless he learns to love another and earn their love in return before the last petal falls, he and his servants will lose their humanity forever. Years later, in the village of Villeneuve, Belle dreams of adventure and brushes off advances from Gaston, an arrogant former soldier. Lost in the forest, Belle's father Maurice seeks refuge in the Beast's castle, but the Beast imprisons him for stealing a rose.",
    rating: 4,
    category: "family",
    comments: []
  },
  {
    name: "Despicable Me 3",
    youtube_id: "euz-KBBfAAo",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499662848/despicable_me_three_chii8d.jpg",
    description: "Following the previous film, Gru is now an agent for the Anti-Villain League (AVL) and he and his wife Lucy are sent to foil the plans of Balthazar Bratt, a supervillain who was a former child actor who portrayed a young supervillain in a popular television series before the show was cancelled as a result of his puberty, and his waning popularity led to him adopting his former persona to become an actual supervillain. Gru manages to stop Bratt from stealing a very expensive diamond, but is unable to capture him. As a result of constantly failing to capture Bratt, Gru and Lucy are fired from the AVL by it's new director Valerie Da Vinci.",
    rating: 3,
    category: "family",
    comments: []
  },
  {
    name: "Finding Dory",
    youtube_id: "3JNLwlcPBPI",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499662851/finding_dory_oyhxzt.jpg",
    description: "Dory, a regal blue tang, gets separated from her parents as a child. As she grows up, Dory attempts to search for them, but gradually forgets them due to her short-term memory loss disability. In the flashback of the previous film, Finding Nemo, she joins Marlin – a clownfish looking for his missing son Nemo – after accidentally swimming into him. One year later, Dory is living with Marlin and Nemo on their reef. One day, Dory has a flashback and remembers that she has parents. She decides to look for them, but her memory problem is an obstacle. She eventually remembers that they lived at the Jewel of Morro Bay across the ocean in California.",
    rating: 2,
    category: "family",
    comments: []
  },
  {
    name: "Frozen",
    youtube_id: "TbQm5doF_Uc",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499662854/frozen_ksu4xv.jpg",
    description: "Anna, a fearless optimist, sets off on an epic journey - teaming up with rugged mountain man Kristoff and his loyal reindeer Sven - to find her sister Elsa, whose icy powers have trapped the kingdom of Arendelle in eternal winter. Encountering Everest-like conditions, mystical trolls and a hilarious snowman named Olaf, Anna and Kristoff battle the elements in a race to save the kingdom. From the outside Anna's sister, Elsa looks poised, regal and reserved, but in reality, she lives in fear as she wrestles with a mighty secret-she was born with the power to create ice and snow. It's a beautiful ability, but also extremely dangerous.",
    rating: 5,
    category: "family",
    comments: []
  },
  {
    name: "Lego Batman Movie",
    youtube_id: "h6DOpfJzmo0",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499662857/lego_batman_movie_ujbkrw.jpg",
    description: "Within the Lego Universe, Batman continues to protect Gotham City and fight crime. During his latest mission to stop the Joker from destroying the city, he hurts his arch-rival's feelings by telling him he is not as important in his life as he thinks he is, leading Joker to seek the ultimate revenge on him. The following day, Batman's alter ego, Bruce Wayne, attends the city's winter gala, which is celebrating both the retirement of Commissioner Gordon and the ascension of his daughter Barbara as the city's new police commissioner, only to be infuriated by Barbara's plans to restructure the police to function without the need of Batman. Without warning, Joker crashes the party with the city's other villains, all of whom surrender, with the exception of Harley Quinn, who disappears during the confusion.",
    rating: 4,
    category: "family",
    comments: []
  },
  {
    name: "Moana",
    youtube_id: "LKFuXETZUsI",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499662860/moana_ndxbe3.jpg",
    description: "yMoana Waialiki is a sea voyaging enthusiast and the only daughter of a chief in a long line of navigators. When her island's fishermen can't catch any fish and the crops fail, she learns that the demigod Maui caused the blight by stealing the heart of the goddess, Te Fiti. The only way to heal the island is to persuade Maui to return Te Fiti's heart, so Moana sets off on an epic journey across the Pacific. The film is based on stories from Polynesian mythology.",
    rating: 2,
    category: "family",
    comments: []
  },
  {
    name: "Sherk 3",
    youtube_id: "3aZXVzUQGA4",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499662862/sherk_mlfjtr.jpg",
    description: "When Fiona's father and King of Far Far Away passes away, the clumsy Shrek becomes the immediate successor of the throne. However, Shrek decides to find the legitimate heir Artie in a distant kingdom with his friends Donkey and Puss in Boots to be able return to his beloved house in the swamp with the pregnant Fiona. Meanwhile, the envious and ambitious Prince Charming joins the villains of the fairytales plotting a coup d'état to become the new king",
    rating: 5,
    category: "family",
    comments: []
  },
  {
    name: "The Boss Baby",
    youtube_id: "k397HRbTtWI",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499662866/thebossbaby_aku5dv.jpg",
    description: "Seven-year-old Tim Templeton has always been a boy of an overactive imagination, and for the past seven years, life was all peaches for him, getting all the love and affection from his caring parents. However, life will never be the same and Tim won't be the centre of attention anymore as the arrival of an improbable new brother named Boss Baby, dressed in a black suit complete with a tie and a briefcase, will shortly rob him of all love, as he takes over the whole Templetons' house. Nevertheless, although this may be true, soon, Tim and the new Boss in a diaper will need to put differences aside and join forces, as a sneaky scheme involving the head of Puppy Co. threatens to tilt the balance of power towards their insidiously adorable furry antagonists, not to mention that the next Pet Convention is in only two days.. Brothers, hurry up. ",
    rating: 3,
    category: "family",
    comments: []
  },
  {
    name: "Avatar",
    youtube_id: "5PSNL1qE6VY",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499710631/avatar_qwupyr.jpg",
    description: "When his brother is killed in a robbery, paraplegic Marine Jake Sully decides to take his place in a mission on the distant world of Pandora. There he learns of greedy corporate figurehead Parker Selfridge's intentions of driving off the native humanoid 'Navi' in order to mine for the precious material scattered throughout their rich woodland. In exchange for the spinal surgery that will fix his legs, Jake gathers intel for the cooperating military unit spearheaded by gung-ho Colonel Quaritch, while simultaneously attempting to infiltrate the Navi people with the use of an 'avatar' identity.",
    rating: 3,
    category: "fantasy",
    comments: []
  },
  {
    name: "Fantastic Beasts",
    youtube_id: "sGNnv_g9h4k",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499710633/fantastic_beasts_and_where_to_find_them_ver15_rlbyqx.jpg",
    description: "In 1926 the British wizard and 'magizoologist' Newt Scamander arrives by ship to New York en route to Arizona. He encounters Mary Lou Barebone, a No-Maj woman who leads the New Salem Philanthropic Society, which claims that witches and wizards are real and dangerous. As Newt listens to her speech, a Niffler (a small, mole-like creature with an obsessive desire to steal all things shiny) escapes from his magically expanded suitcase, which houses multiple magical creatures.",
    rating: 3,
    category: "fantasy",
    comments: []
  },
  {
    name: "Harry Potter",
    youtube_id: "PbdM1db3JbY",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499710636/harry_potter_and_the_sorcerers_stone_ver2_ofiq2k.jpg",
    description: "This is the tale of Harry Potter, an ordinary 11-year-old boy serving as a sort of slave for his aunt and uncle who learns that he is actually a wizard and has been invited to attend the Hogwarts School for Witchcraft and Wizardry. Harry is snatched away from his mundane existence by Hagrid, the grounds keeper for Hogwarts, and quickly thrown into a world completely foreign to both him and the viewer. Famous for an incident that happened at his birth, Harry makes friends easily at his new school. He soon finds, however, that the wizarding world is far more dangerous for him than he would have imagined, and he quickly learns that not all wizards are ones to be trusted.",
    rating: 3,
    category: "fantasy",
    comments: []
  },
  {
    name: "The Hobbit",
    youtube_id: "JTSoD4BBCJc",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499710639/hobbit_an_unexpected_journey_ver2_a61zdy.jpg",
    description: "Bilbo Baggins is swept into a quest to reclaim the lost Dwarf Kingdom of Erebor from the fearsome dragon Smaug. Approached out of the blue by the wizard Gandalf the Grey, Bilbo finds himself joining a company of thirteen dwarves led by the legendary warrior, Thorin Oakenshield. Their journey will take them into the Wild; through treacherous lands swarming with Goblins and Orcs, deadly Wargs and Giant Spiders, Shapeshifters and Sorcerers. Although their goal lies to the East and the wastelands of the Lonely Mountain first they must escape the goblin tunnels, where Bilbo meets the creature that will change his life forever ... Gollum.",
    rating: 3,
    category: "fantasy",
    comments: []
  },
  {
    name: "The Lord of the Rings",
    youtube_id: "V75dMMIW2B4",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499710642/lord_of_the_rings_the_return_of_the_king_pthqeh.jpg",
    description: "An ancient Ring thought lost for centuries has been found, and through a strange twist in fate has been given to a small Hobbit named Frodo. When Gandalf discovers the Ring is in fact the One Ring of the Dark Lord Sauron, Frodo must make an epic quest to the Cracks of Doom in order to destroy it! However he does not go alone. He is joined by Gandalf, Legolas the elf, Gimli the Dwarf, Aragorn, Boromir and his three Hobbit friends Merry, Pippin and Samwise. Through mountains, snow, darkness, forests, rivers and plains, facing evil and danger at every corner the Fellowship of the Ring must go. Their quest to destroy the One Ring is the only hope for the end of the Dark Lords reign!",
    rating: 3,
    category: "fantasy",
    comments: []
  },
  {
    name: "The Chronicles of Narnia",
    youtube_id: "lWKj41HZBzM",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499710645/narnia_mtl27t.jpg",
    description: "Four children from the same family have to leave their town because of the bombings of WWII. A women and a professor take the children to their house. While playing a game of hide-and-seek, the youngest member of the family, Lucy, finds a wardrobe to hide in. She travels back and back into the wardrobe and finds a place named Narnia. After going in twice, the four children go in together for the last time. They battle wolves, meet talking animals, encounter an evil white witch and meet a magnificent lion named Aslan. Will this be the end of their journey to Narnia or will they stay?",
    rating: 3,
    category: "fantasy",
    comments: []
  },
  {
    name: "Starwars Episode 7",
    youtube_id: "sGbxmsDFVnE",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499710650/starwars_azi8od.jpg",
    description: "Three decades after the destruction of the second Death Star and the Galactic Civil War, the First Order has risen from the fallen Galactic Empire and seeks to eliminate the New Republic. The Resistance, backed by the Republic and led by General Leia Organa, opposes them while searching for her brother, Luke Skywalker. Resistance pilot Poe Dameron meets village elder Lor San Tekka on the planet Jakku to obtain a map to Luke's location. Stormtroopers commanded by the mysterious Kylo Ren destroy the village and capture Poe, while Ren kills Tekka. Poe's droid, BB-8, escapes with the map and encounters a scavenger named Rey near a junkyard settlement.",
    rating: 3,
    category: "fantasy",
    comments: []
  },
  {
    name: "Insidious",
    youtube_id: "zuZnRUcoWos",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499726080/insidious_xc6jft.jpg",
    description: "A married couple Josh (Patrick Wilson) and Renai (Rose Byrne), their sons Dalton (Ty Simpkins) and Foster (Andrew Astor), and infant daughter Cali have recently moved into a new home. One night, Dalton is drawn to the attic when he hears creaking noises and sees the door open by itself. He falls from a ladder while investigating and sees a figure in the shadows. Hearing his terrified screams, Renai and Josh rush to his aid and declare the attic 'off limits' to the children. The next day, Dalton falls into an inexplicable coma.",
    rating: 3,
    category: "horror",
    comments: []
  },
  {
    name: "Paranormal Activity",
    youtube_id: "F_UxLEqd074",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499726083/paranormal_activity_three_szg8fu.jpg",
    description: "The films are based around a family haunted by a demon that stalks, terrifies and ultimately murders several members of the family and other bystanders during the course of the films. The series makes use of production cameras set up and used like security cameras or other recording devices in an attempt to present the films as found footage.",
    rating: 3,
    category: "horror",
    comments: []
  },
  {
    name: "The Ring",
    youtube_id: "_PkgRhzq_BQ",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499726087/ring_ienhej.jpg",
    description: "High school students Katie and Becca discuss an urban legend about a cursed videotape which kills anyone who watches it seven days later. Katie admits that she watched the tape with her boyfriend and two friends the previous week. That night, Katie is killed by an unseen force, leaving her face mysteriously disfigured. At Katie's funeral, her aunt Rachel, a Seattle journalist, is asked by Katie's mother, Ruth, to investigate her death. Rachel also discovers that Katie's boyfriend and her two friends were killed in bizarre accidents on the same night as Katie. After learning that they watched the cursed videotape at Shelter Mountain Inn, Rachel travels there and watches the tape, which contains gruesome and disturbing imagery. Afterwards, she receives a phone call from an unknown caller who utters 'seven days'.",
    rating: 3,
    category: "horror",
    comments: []
  },
  {
    name: "Scream 3",
    youtube_id: "bYi-rmHfrP8",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499726091/Scream3-09_j2cgjk.jpg",
    description: "Cotton Weary, now living in Los Angeles and the host of a nationally syndicated television show, 100% Cotton, is called by Ghostface, who demands the whereabouts of Sidney Prescott, who has gone into hiding ever since the murders that took place at Windsor College three years ago. Cotton refuses to cooperate, and when Ghostface comes to his home, both Cotton and his girlfriend Christine are murdered.",
    rating: 3,
    category: "horror",
    comments: []
  },
  {
    name: "The Texas Chainsaw Massacre",
    youtube_id: "janre4HxsX4",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499726094/texas_aaiefl.jpg",
    description: "Sally Hardesty (Marilyn Burns) and her paraplegic brother, Franklin (Paul A. Partain), travel with three friends, Jerry (Allen Danziger), Kirk (William Vail), and Pam (Teri McMinn), to visit the grave of the Hardestys' grandfather to investigate reports of vandalism and grave robbing. Afterwards, they decide to visit the old Hardesty family homestead. Along the way, they pick up a hitchhiker (Edwin Neal) who talks about his family who worked at the old slaughterhouse. He borrows Franklin's pocket-knife and cuts himself, then takes a Polaroid picture of the others and demands money for it. When they refuse to pay, he burns the photo and slashes Franklin's arm with a straight razor.",
    rating: 3,
    category: "horror",
    comments: []
  },
  {
    name: "28 days Later",
    youtube_id: "y7RXmrlGe-k",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499726096/twenty_eight_days_later_fqlid0.jpg",
    description: "Animal activists invade a laboratory with the intention of releasing chimpanzees that are undergoing experimentation, infected by a virus -a virus that causes rage. The naive activists ignore the pleas of a scientist to keep the cages locked, with disastrous results. Twenty-eight days later, our protagonist, Jim, wakes up from a coma, alone, in an abandoned hospital. He begins to seek out anyone else to find London is deserted, apparently without a living soul. After finding a church, which had become inhabited by zombie like humans intent on his demise, he runs for his life. Selena and Mark rescue him from the horde and bring him up to date on the mass carnage and horror as all of London tore itself apart. This is a tale of survival and ultimately, heroics, with nice subtext about mankind's savage nature.",
    rating: 3,
    category: "horror",
    comments: []
  },
  {
    name: "Memento",
    youtube_id: "0vS0E9bBSL0",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499726626/memento_ver3_j1yl69.jpg",
    description: "The film starts with the Polaroid photograph of a dead man. As the sequence plays backwards the photo reverts to its undeveloped state, entering the camera before the man is shot in the head. The film then continues, alternating between black and white and color sequences.The black and white sequences begin with Leonard Shelby, an insurance investigator, in a motel room speaking to an unseen and unknown caller. Leonard has anterograde amnesia and is unable to store recent memories, the result of an attack by two men. Leonard explains that he killed the attacker who raped and strangled his wife, but a second clubbed him and escaped.",
    rating: 3,
    category: "mystery",
    comments: []
  },
  {
    name: "Minority Report",
    youtube_id: "lG7DGMgfOb8",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499726629/minority_report_d1yrtu.jpg",
    description: "In the year 2054 A.D. crime is virtually eliminated from Washington D.C. thanks to an elite law enforcing squad 'Precrime'. They use three gifted humans (called 'Pre-Cogs') with special powers to see into the future and predict crimes beforehand. John Anderton heads Precrime and believes the system's flawlessness steadfastly. However one day the Pre-Cogs predict that Anderton will commit a murder himself in the next 36 hours. Worse, Anderton doesn't even know the victim. He decides to get to the mystery's core by finding out the 'minority report' which means the prediction of the female Pre-Cog Agatha that 'might' tell a different story and prove Anderton innocent.",
    rating: 3,
    category: "mystery",
    comments: []
  },
  {
    name: "Old Boy",
    youtube_id: "2HkjrJ6IK5E",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499726632/oldboy-movie_zeizyr.jpg",
    description: "An average man is kidnapped and imprisoned in a shabby cell for 15 years without explanation. He then is released, equipped with money, a cellphone and expensive clothes. As he strives to explain his imprisonment and get his revenge, Oh Dae-Su soon finds out that his kidnapper has a greater plan for him and is set onto a path of pain and suffering in an attempt to uncover the motive of his mysterious tormentor.",
    rating: 3,
    category: "mystery",
    comments: []
  },
  {
    name: "Se7en",
    youtube_id: "znmZoVkCjpI",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499726635/seven_a3cdtq.jpg",
    description: "A film about two homicide detectives' (Morgan Freeman and (Brad Pitt desperate hunt for a serial killer who justifies his crimes as absolution for the world's ignorance of the Seven Deadly Sins. The movie takes us from the tortured remains of one victim to the next as the sociopathic 'John Doe' (Kevin Spacey) sermonizes to Detectives Somerset and Mills -- one sin at a time. The sin of Gluttony comes first and the murderer's terrible capacity is graphically demonstrated in the dark and subdued tones characteristic of film noir. The seasoned and cultured but jaded Somerset researches the Seven Deadly Sins in an effort to understand the killer's modus operandi while the bright but green and impulsive Detective Mills (Pitt) scoffs at his efforts to get inside the mind of a killer...",
    rating: 3,
    category: "mystery",
    comments: []
  },
  {
    name: "Shutter Island",
    youtube_id: "5iaYLCiq5RM",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499726638/shutter_island_co0twe.jpg",
    description: "It's 1954, and up-and-coming U.S. marshal Teddy Daniels is assigned to investigate the disappearance of a patient from Boston's Shutter Island Ashecliffe Hospital. He's been pushing for an assignment on the island for personal reasons, but before long he wonders whether he hasn't been brought there as part of a twisted plot by hospital doctors whose radical treatments range from unethical to illegal to downright sinister. Teddy's shrewd investigating skills soon provide a promising lead, but the hospital refuses him access to records he suspects would break the case wide open. As a hurricane cuts off communication with the mainland, more dangerous criminals 'escape' in the confusion, and the puzzling, improbable clues multiply.",
    rating: 3,
    category: "mystery",
    comments: []
  },
  {
    name: "Source Code",
    youtube_id: "DiBVUulE_wo",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499726641/source_code_d5jlal.jpg",
    description: "Army Captain Colter Stevens finds himself working on a special program where his consciousness can be inserted into another human being. The only catch is can only be there for 8 minutes at any given time. That morning, a bomb exploded on a commuter train just outside Chicago. He occupies the body of teacher going to work on that train and is confused as to what he is doing or why he is there as his last memory is of flying his helicopter on a combat mission in Afghanistan. Those in charge of the program explain to him that there is a bomb on the train that must locate it. More importantly, he must identify the bomber as another bombing is expected later that day.",
    rating: 3,
    category: "mystery",
    comments: []
  },
  {
    name: "The Usual Suspect",
    youtube_id: "oiXdPolca5w",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499726644/usual_suspects_ver3_fm5jzc.jpg",
    description: "Following a truck hijack in New York, five conmen are arrested and brought together for questioning. As none of them are guilty, they plan a revenge operation against the police. The operation goes well, but then the influence of a legendary mastermind criminal called Keyser Söze is felt. It becomes clear that each one of them has wronged Söze at some point and must pay back now. The payback job leaves 27 men dead in a boat explosion, but the real question arises now: Who actually is Keyser Söze?",
    rating: 3,
    category: "mystery",
    comments: []
  },
  {
    name: "A Walk to Remember",
    youtube_id: "EgdoQ8Oxu2E",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499727141/a-walk-to-remember-movie-poster-2002-1020196028_jzfnad.jpg",
    description: "Set in North Carolina, popular and rebellious teenager Landon Carter is threatened with expulsion from school after he and his friends leave evidence of underage drinking on the school grounds, and seriously injure another student during a prank gone wrong. The head of the school gives Landon the choice of being expelled or atoning for his actions by tutoring fellow students and participating in the school play. During these functions, Landon notices Jamie Sullivan, a girl he has known since kindergarten and who has attended many of the same classes as him, and is also the local minister's daughter.",
    rating: 3,
    category: "romance",
    comments: []
  },
  {
    name: "Dear John",
    youtube_id: "r0fq5dd0C60",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499727142/dearjohn_ishqur.jpg",
    description: "While serving in the United States Army Special Forces in 2003, Staff Sergeant John Tyree is lying on the ground in Afghanistan, after being shot multiple times with his comrades around him. In a voice over, he recalls a childhood trip to the U.S. Mint and compares himself to a coin in the United States Military before stating that the last thing he thought of before he blacked out was 'you.'",
    rating: 3,
    category: "romance",
    comments: []
  },
  {
    name: "Fifty Shades of Grey",
    youtube_id: "SfZWFDs0LxA",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499727146/fifty_shades_of_grey_ver5_zchlnj.jpg",
    description: "When Anastasia Steele, a literature student, goes to interview the wealthy Christian Grey as a favor to her roommate Kate Kavanagh, she encounters a beautiful, brilliant and intimidating man. The innocent and naive Ana starts to realize she wants him. Despite his enigmatic reserve and advice, she finds herself desperate to get close to him. Not able to resist Ana's beauty and independent spirit, Christian Grey admits he wants her too, but on his own terms. Ana hesitates as she discovers the singular tastes of Christian Grey - despite the embellishments of success, his multinational businesses, his vast wealth, and his loving family, Grey is consumed by the need to control everything.",
    rating: 3,
    category: "romance",
    comments: []
  },
  {
    name: "La La Land",
    youtube_id: "0pdqf4P9MB8",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499727149/la_la_land_ver11_nvphw1.jpg",
    description: "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
    rating: 3,
    category: "romance",
    comments: []
  },
  {
    name: "The Notebook",
    youtube_id: "4M7LIcH8C9U",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499727152/the-notebook-poster_uh8d0e.jpg",
    description: "In a nursing home, resident Duke reads a romance story for an old woman who has senile dementia with memory loss. In the late 1930s, wealthy seventeen year-old Allie Hamilton is spending summer vacation in Seabrook. Local worker Noah Calhoun meets Allie at a carnival and they soon fall in love with each other. One day, Noah brings Allie to an ancient house that he dreams of buying and restoring and they attempt to make love but get interrupted by their friend. Allie's parents do not approve of their romance since Noah belongs to another social class, and they move to New York with her. Noah writes 365 letters (A Year) to Allie, but her mother Anne Hamilton does not deliver them to her daughter.",
    rating: 3,
    category: "romance",
    comments: []
  },
  {
    name: "The Titanic",
    youtube_id: "zCy5WQ9S4c0",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499727155/titanic-poster_iljajh.jpg",
    description: "84 years later, a 100 year-old woman named Rose DeWitt Bukater tells the story to her granddaughter Lizzy Calvert, Brock Lovett, Lewis Bodine, Bobby Buell and Anatoly Mikailavich on the Keldysh about her life set in April 10th 1912, on a ship called Titanic when young Rose boards the departing ship with the upper-class passengers and her mother, Ruth DeWitt Bukater, and her fiancé, Caledon Hockley. Meanwhile, a drifter and artist named Jack Dawson and his best friend Fabrizio De Rossi win third-class tickets to the ship in a game. And she explains the whole story from departure until the death of Titanic on its first and last voyage April 15th, 1912 at 2:20 in the morning.",
    rating: 3,
    category: "romance",
    comments: []
  },
  {
    name: "Twilight",
    youtube_id: "fFLrRlPBg0A",
    img: "https://res.cloudinary.com/deh9l9lyq/image/upload/q_auto/v1499727159/twilight_p4elsu.jpg",
    description: "Bella Swan has always been a little bit different. Never one to run with the crowd, Bella never cared about fitting in with the trendy, plastic girls at her Phoenix, Arizona high school. When her mother remarried and Bella chooses to live with her father in the rainy little town of Forks, Washington, she didn't expect much of anything to change. But things do change when she meets the mysterious and dazzlingly beautiful Edward Cullen. For Edward is nothing like any boy she's ever met. He's nothing like anyone she's ever met, period. He's intelligent and witty, and he seems to see straight into her soul. In no time at all, they are swept up in a passionate and decidedly unorthodox romance - unorthodox because Edward really isn't like the other boys.",
    rating: 3,
    category: "romance",
    comments: []
  },
];


function seedDB(){
  //
  // User.remove({}, function(err){
  //   if(err){
  //    console.log(err);
  //    return;
  //  }
  //  console.log("removed Users!");
  // });
  //
  // Video.remove({}, function(err){
  //   if(err){
  //     console.log(err);
  //     return;
  //   }
  //   console.log("removed Video!");
  // });
  //
  // Category.remove({}, function(err){
  //   if(err){
  //     console.log(err);
  //     return;
  //   }
  //   console.log("removed Category");
  // });


  //SetUp


  // Category.create({num: 1}, function(err, category){
  //   if(err){
  //     console.log(err);
  //     return;
  //   }
  //   console.log("------added category-----");
  //   console.log(category);
  // });


  // videoData.forEach(function(video){
  //   Video.create(video, function(err, createdVideo){
  //     if(err){
  //       console.log(err);
  //       return;
  //     }
  //     Category.findOne({num: 1}, function(err1, category){
  //       if(err1){
  //         console.log("error when pushing video into category");
  //         return;
  //       }
  //       category[createdVideo.category].push(createdVideo);
  //       category.save();
  //     });
  //     console.log("Video was created");
  //   });
  // });


}

module.exports = seedDB;





// var randomNums = {1: true, 4: true, 8: true, 14: true, 19: true};
//
// for(let i = 0; i < videoData.length; i++){
//   let video = videoData[i];
//   Video.create(video, function(err, createdVideo){
//     if(err){
//       console.log(err);
//       return;
//     }
//     Category.findOne({num: 1}, function(err1, category){
//       if(err1){
//         console.log("error when pushing video into category");
//         return;
//       }
//       category[createdVideo.category].push(createdVideo);
//       category.save();
//     });
//     console.log("Video was created");
//   });
//
//   if(randomNums[i]){
//     User.findOne({username: "john"}, function(err2, user){
//       if(err2){
//         console.log("error when pushing video into user");
//         return;
//       }
//       console.log("pushing video into user");
//       user.favorite.push(video);
//       user.save();
//     });
//   }
// }
