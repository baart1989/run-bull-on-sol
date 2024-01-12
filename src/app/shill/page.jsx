'use client';
import Image from 'next/image'

import { Button } from '@/components/Button'
import { GridPattern } from '@/components/GridPattern'
import coverImage from '@/images/cover.png'
import { getRandomUsernames } from '../../utils/twitterUsernames';

const tweetTemplates = [
  "🚀 $THEBULL is leading the #BULLRUN charge with users: USER1, USER2, USER3! Navigating the crypto market is a game-changer with us. 🐂 #CryptoInnovation #memecoins",
  "Exciting times ahead with users: USER1, USER2, USER3! 🌐 $THEBULL is riding the wave of the bull run. Join us in revolutionizing the crypto market experience. 🚀 #TheBullRunIsBack #CryptoGameChanger",
  "🐂 Buckle up for a thrilling ride with $THEBULL! We're at the forefront of the #BULLRUN with users: USER1, USER2, USER3, making waves in the world of #memecoins. 🚀 #CryptoRevolution",
  "Ready to revolutionize your crypto journey? 🌐 $THEBULL is your key to success in the #BULLRUN, #BTC, and #Solana world with users: USER1, USER2, USER3. Stay tuned for the latest #cryptonews! 🚀 #BitcoinETF #BITCOINETFS #BITCOIN",
  "🚀 Embrace the resurgence of the #BULLRUN with $THEBULL! Our innovative approach shines in #BTC, #Solana, and the ever-exciting world of #memecoins with users: USER1, USER2, USER3. 🌟 #CryptoJourney #cryptonews",
  "Unleash the power of $THEBULL as we redefine the game in #BTC, #Solana, and #memecoins with users: USER1, USER2, USER3. The #BULLRUN is back, and we're leading the way! 🚀 #BitcoinETF #BITCOINETFS #BITCOIN",
  "🌟 Excitement is in the air as $THEBULL paves the way for a new era in #BTC, #Solana, and #memecoins with users: USER1, USER2, USER3. The #BULLRUN is back, and we're changing the game! 🐂 #CryptoInnovation #cryptonews",
  "Ready to level up your crypto game? $THEBULL is the answer. The #BULLRUN is back, and we're leading the charge in #BTC, #Solana, and the world of #memecoins with users: USER1, USER2, USER3. 🚀 #BitcoinETF #BITCOINETFS #BITCOIN",
  "🌐 Dive into the crypto market with confidence, courtesy of $THEBULL. The #BULLRUN is back, and we're here to redefine the experience in #BTC, #Solana, and #memecoins with users: USER1, USER2, USER3. 🚀 #CryptoRevolution #cryptonews",
  "🐂 Riding the waves of the #BULLRUN, $THEBULL is your key to a revolutionary crypto experience in #BTC, #Solana, and #memecoins with users: USER1, USER2, USER3. Fasten your seatbelts! 🌟 #GameChanger #BITCOINETF",
  "🚀 Get ready for a thrilling journey in the crypto world with $THEBULL. The #BULLRUN charges ahead, and we're making waves in #BTC, #Solana, and #memecoins with users: USER1, USER2, USER3. 🌐 #CryptoRevolution #cryptonews",
  "🌟 $THEBULL is ushering in a new era of crypto innovation. Join us as the #BULLRUN returns, and together, we navigate the market like never before in #BTC, #Solana, and #memecoins with users: USER1, USER2, USER3! 🚀 #GameChanger #BITCOINETFS",
  "🚀 Seize the moment with $THEBULL! As the #BULLRUN charges ahead, our unique approach makes navigating the crypto market a true game-changer in #BTC, #Solana, and #memecoins with users: USER1, USER2, USER3. 🌐 #BITCOINETF #cryptonews",
  "🐂 Ready to conquer the crypto market? $THEBULL is your partner in this exciting journey. The #BULLRUN is back, and we're leading the way in #BTC, #Solana, and #memecoins with users: USER1, USER2, USER3. 🚀 #CryptoRevolution #BITCOINETFS",
  "🚀 Navigate the crypto market with confidence using $THEBULL's innovative approach. The #BULLRUN is back, and we're here to make a lasting impact in #BTC, #Solana, and #memecoins with users: USER1, USER2, USER3! 🌐 #GameChanger #BITCOIN",
  "🌟 Embrace the resurgence of the #BULLRUN with $THEBULL. Our groundbreaking approach makes navigating the crypto market feel like a game-changer in #BTC, #Solana, and #memecoins with users: USER1, USER2, USER3. 🚀 #BITCOINETFS #cryptonews",
  "🐂 Join us in the excitement as $THEBULL leads the way in the #BULLRUN. The market is changing, and navigating it feels like a game-changer in #BTC, #Solana, and #memecoins with users: USER1, USER2, USER3! 🚀 #CryptoRevolution #BITCOIN",
  "🚀 Navigate the crypto market with confidence using $THEBULL's innovative approach. The #BULLRUN is back, and we're here to make a lasting impact in #BTC, #Solana, and #memecoins with users: USER1, USER2"
];

// Function to generate a random tweet
const generateRandomTweet = () => {
  const randomIndex = Math.floor(Math.random() * tweetTemplates.length);
  const randomTweet = tweetTemplates[randomIndex];
  const [user1, user2, user3] = getRandomUsernames();
  const tweetWithUsernames = randomTweet
    .replace('USER1', '@' + user1)
    .replace('USER2', '@' + user2)
    .replace('USER3', '@' + user3);
  return tweetWithUsernames;
};

export function ShillPage() {

  const redirectToTwitterThread = () => {
    const threadTweetId = "1747536168822927419";
    const threadUrl = 'https://t.me/Bullrun_Sol';
    const randomTweet = generateRandomTweet();
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(randomTweet + ' ' + threadUrl)}&in_reply_to=${threadTweetId}`;
    window.open(tweetUrl, '_blank');
  };

  return (
    <header className="overflow-hidden bg-slate-100 lg:bg-transparent lg:px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-12 lg:gap-y-20 lg:px-3 lg:pb-36 lg:pt-20 xl:py-32">
        <div className="relative flex items-end lg:col-span-5 lg:row-span-2">
          <div className="absolute -bottom-12 -top-20 left-0 right-1/2 z-10 rounded-br-6xl bg-gray-900 text-white/10 md:bottom-8 lg:-inset-y-32 lg:left-[-100vw] lg:right-full lg:-mr-40">
            <GridPattern
              x="100%"
              y="100%"
              patternTransform="translate(112 64)"
            />
          </div>
          <div className="relative z-10 mx-auto flex w-64 rounded-xl bg-slate-600 shadow-xl md:w-80 lg:w-auto">
            <Image className="w-full" src={coverImage} alt="" priority />
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:col-span-7 lg:pb-14 lg:pl-16 lg:pr-0 xl:pl-20">
          <div className="hidden lg:absolute lg:-top-32 lg:bottom-0 lg:left-[-100vw] lg:right-[-100vw] lg:block lg:bg-slate-100" />
        </div>
        <div className="bg-white pt-16 lg:col-span-7 lg:bg-transparent lg:pl-16 lg:pt-0 xl:pl-20">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <h1 className="font-display text-5xl font-extrabold text-slate-900 sm:text-6xl">
              THE BULLRUN IS BACK
            </h1>
            <p className="mt-4 text-3xl text-slate-600">
              Tweet genrator for the bull community
            </p>
            <div className="mt-8 flex gap-4">
              <Button onClick={redirectToTwitterThread}  color="slate">
                Raid
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default ShillPage