
// Word list for the game
const WORDS = [
    'ABOUT', 'ABOVE', 'ABUSE', 'ACTOR', 'ACUTE', 'ADMIT', 'ADOPT', 'ADULT', 'AFTER', 'AGAIN',
    'AGENT', 'AGREE', 'AHEAD', 'ALARM', 'ALBUM', 'ALERT', 'ALIEN', 'ALIGN', 'ALIKE', 'ALIVE',
    'ALLOW', 'ALONE', 'ALONG', 'ALTER', 'AMONG', 'ANGER', 'ANGLE', 'ANGRY', 'APART', 'APPLE',
    'APPLY', 'ARENA', 'ARGUE', 'ARISE', 'ARMED', 'ARMOR', 'ARRAY', 'ARROW', 'ASIDE', 'ASSET',
    'AVOID', 'AWAKE', 'AWARE', 'BADLY', 'BAKER', 'BALLS', 'BASIC', 'BATCH', 'BEACH', 'BEGAN',
    'BEGIN', 'BEING', 'BELOW', 'BENCH', 'BILLY', 'BIRTH', 'BLACK', 'BLAME', 'BLANK', 'BLAST',
    'BLIND', 'BLOCK', 'BLOOD', 'BOARD', 'BOOST', 'BOOTH', 'BOUND', 'BRAIN', 'BRAND', 'BRASS',
    'BRAVE', 'BREAD', 'BREAK', 'BREED', 'BRIEF', 'BRING', 'BROAD', 'BROKE', 'BROWN', 'BUILD',
    'BUILT', 'BUYER', 'CABLE', 'CALIF', 'CARRY', 'CATCH', 'CAUSE', 'CHAIN', 'CHAIR', 'CHAOS',
    'CHARM', 'CHART', 'CHASE', 'CHEAP', 'CHECK', 'CHEST', 'CHIEF', 'CHILD', 'CHINA', 'CHOSE',
    'CIVIL', 'CLAIM', 'CLASS', 'CLEAN', 'CLEAR', 'CLICK', 'CLIMB', 'CLOCK', 'CLOSE', 'CLOUD',
    'COACH', 'COAST', 'COULD', 'COUNT', 'COURT', 'COVER', 'CRAFT', 'CRASH', 'CRAZY', 'CREAM',
    'CRIME', 'CROSS', 'CROWD', 'CROWN', 'CRUDE', 'CURVE', 'CYCLE', 'DAILY', 'DANCE', 'DATED',
    'DEALT', 'DEATH', 'DEBUT', 'DELAY', 'DEPTH', 'DOING', 'DOUBT', 'DOZEN', 'DRAFT', 'DRAMA',
    'DRANK', 'DREAM', 'DRESS', 'DRILL', 'DRINK', 'DRIVE', 'DROVE', 'DYING', 'EAGER', 'EARLY',
    'EARTH', 'EIGHT', 'ELITE', 'EMPTY', 'ENEMY', 'ENJOY', 'ENTER', 'ENTRY', 'EQUAL', 'ERROR',
    'EVENT', 'EVERY', 'EXACT', 'EXIST', 'EXTRA', 'FAITH', 'FALSE', 'FAULT', 'FIBER', 'FIELD',
    'FIFTH', 'FIFTY', 'FIGHT', 'FINAL', 'FIRST', 'FIXED', 'FLASH', 'FLEET', 'FLOOR', 'FLUID',
    'FOCUS', 'FORCE', 'FORTH', 'FORTY', 'FORUM', 'FOUND', 'FRAME', 'FRANK', 'FRAUD', 'FRESH',
    'FRONT', 'FRUIT', 'FULLY', 'FUNNY', 'GIANT', 'GIVEN', 'GLASS', 'GLOBE', 'GOING', 'GRACE',
    'GRADE', 'GRAND', 'GRANT', 'GRASS', 'GRAVE', 'GREAT', 'GREEN', 'GROSS', 'GROUP', 'GROWN',
    'GUARD', 'GUESS', 'GUEST', 'GUIDE', 'HAPPY', 'HARRY', 'HEART', 'HEAVY', 'HENCE', 'HENRY',
    'HORSE', 'HOTEL', 'HOUSE', 'HUMAN', 'HURRY', 'IMAGE', 'INDEX', 'INNER', 'INPUT', 'ISSUE',
    'JAPAN', 'JIMMY', 'JOINT', 'JONES', 'JUDGE', 'KNOWN', 'LABEL', 'LARGE', 'LASER', 'LATER',
    'LAUGH', 'LAYER', 'LEARN', 'LEASE', 'LEAST', 'LEAVE', 'LEGAL', 'LEVEL', 'LEWIS', 'LIGHT',
    'LIMIT', 'LINKS', 'LIVES', 'LOCAL', 'LOOSE', 'LOWER', 'LUCKY', 'LUNCH', 'LYING', 'MAGIC',
    'MAJOR', 'MAKER', 'MARCH', 'MARIA', 'MATCH', 'MAYBE', 'MAYOR', 'MEANT', 'MEDIA', 'METAL',
    'MIGHT', 'MINOR', 'MINUS', 'MIXED', 'MODEL', 'MONEY', 'MONTH', 'MORAL', 'MOTOR', 'MOUNT',
    'MOUSE', 'MOUTH', 'MOVED', 'MOVIE', 'MUSIC', 'NEEDS', 'NEVER', 'NEWLY', 'NIGHT', 'NOISE',
    'NORTH', 'NOTED', 'NOVEL', 'NURSE', 'OCCUR', 'OCEAN', 'OFFER', 'OFTEN', 'ORDER', 'OTHER',
    'OUGHT', 'PAINT', 'PANEL', 'PAPER', 'PARTY', 'PEACE', 'PETER', 'PHASE', 'PHONE', 'PHOTO',
    'PIECE', 'PILOT', 'PITCH', 'PLACE', 'PLAIN', 'PLANE', 'PLANT', 'PLATE', 'POINT', 'POUND',
    'POWER', 'PRESS', 'PRICE', 'PRIDE', 'PRIME', 'PRINT', 'PRIOR', 'PRIZE', 'PROOF', 'PROUD',
    'PROVE', 'QUEEN', 'QUICK', 'QUIET', 'QUITE', 'RADIO', 'RAISE', 'RANGE', 'RAPID', 'RATIO',
    'REACH', 'READY', 'REALM', 'REBEL', 'REFER', 'RELAX', 'REPAY', 'REPLY', 'RIGHT', 'RIGID',
    'RIVAL', 'RIVER', 'ROBIN', 'ROGER', 'ROMAN', 'ROUGH', 'ROUND', 'ROUTE', 'ROYAL', 'RURAL',
    'SCALE', 'SCENE', 'SCOPE', 'SCORE', 'SENSE', 'SERVE', 'SETUP', 'SEVEN', 'SHALL', 'SHAPE',
    'SHARE', 'SHARP', 'SHEET', 'SHELF', 'SHELL', 'SHIFT', 'SHINE', 'SHIRT', 'SHOCK', 'SHOOT',
    'SHORT', 'SHOWN', 'SIDES', 'SIGHT', 'SILLY', 'SINCE', 'SIXTH', 'SIXTY', 'SIZED', 'SKILL',
    'SLEEP', 'SLIDE', 'SMALL', 'SMART', 'SMILE', 'SMITH', 'SMOKE', 'SOLID', 'SOLVE', 'SORRY',
    'SOUND', 'SOUTH', 'SPACE', 'SPARE', 'SPEAK', 'SPEED', 'SPEND', 'SPENT', 'SPLIT', 'SPOKE',
    'SPORT', 'STAFF', 'STAGE', 'STAKE', 'STAND', 'START', 'STATE', 'STEAM', 'STEEL', 'STEEP',
    'STEER', 'STICK', 'STILL', 'STOCK', 'STONE', 'STOOD', 'STORE', 'STORM', 'STORY', 'STRIP',
    'STUCK', 'STUDY', 'STUFF', 'STYLE', 'SUGAR', 'SUITE', 'SUPER', 'SWEET', 'TABLE', 'TAKEN',
    'TASTE', 'TAXES', 'TEACH', 'TEETH', 'TERRY', 'TEXAS', 'THANK', 'THEFT', 'THEIR', 'THEME',
    'THERE', 'THESE', 'THICK', 'THING', 'THINK', 'THIRD', 'THOSE', 'THREE', 'THREW', 'THROW',
    'THUMB', 'TIGER', 'TIGHT', 'TIRED', 'TITLE', 'TODAY', 'TOPIC', 'TOTAL', 'TOUCH', 'TOUGH',
    'TOWER', 'TRACK', 'TRADE', 'TRAIN', 'TREAT', 'TREND', 'TRIAL', 'TRIBE', 'TRICK', 'TRIED',
    'TRIES', 'TRUCK', 'TRULY', 'TRUST', 'TRUTH', 'TWICE', 'TWIST', 'UNCLE', 'UNDER', 'UNDUE',
    'UNION', 'UNITY', 'UNTIL', 'UPPER', 'UPSET', 'URBAN', 'USAGE', 'USUAL', 'VALUE', 'VIDEO',
    'VIRUS', 'VISIT', 'VITAL', 'VOCAL', 'VOICE', 'WASTE', 'WATCH', 'WATER', 'WAVE', 'WAYS',
    'WEIRD', 'WELCOME', 'WHEAT', 'WHEEL', 'WHERE', 'WHICH', 'WHILE', 'WHITE', 'WHOLE', 'WHOSE',
    'WIDOW', 'WIDTH', 'WOMAN', 'WOMEN', 'WORLD', 'WORRY', 'WORSE', 'WORST', 'WORTH', 'WOULD',
    'WRITE', 'WRONG', 'WROTE', 'YIELD', 'YOUNG', 'YOUTH',
    // Additional words to reach 1000
    'ABLED', 'ABODE', 'ABORT', 'ACHED', 'ACIDS', 'ACRES', 'ACTED', 'ACUTE', 'ADDED', 'ADEPT',
    'ADMIN', 'ADOBE', 'ADOPT', 'ADORE', 'ADULT', 'AFFIX', 'AFIRE', 'AFOOT', 'AFORE', 'AFTER',
    'AGENT', 'AGING', 'AGLOW', 'AGONY', 'AGREE', 'AHEAD', 'AIDER', 'AIMED', 'AISLE', 'ALARM',
    'ALERT', 'ALIAS', 'ALIBI', 'ALIEN', 'ALIGN', 'ALIKE', 'ALIVE', 'ALLEY', 'ALLOT', 'ALLOW',
    'ALLOY', 'ALONE', 'ALONG', 'ALOOF', 'ALOUD', 'ALPHA', 'ALTAR', 'ALTER', 'ALUM', 'AMBER',
    'AMEND', 'AMONG', 'AMPLE', 'AMUSE', 'ANGEL', 'ANGER', 'ANGLE', 'ANGRY', 'ANKLE', 'ANNEX',
    'ANNOY', 'ANTIC', 'ANVIL', 'APART', 'APHID', 'APING', 'APNEA', 'APPLE', 'APPLY', 'APRON',
    'APTLY', 'ARBOR', 'ARCADE', 'ARCH', 'ARGUE', 'ARISE', 'ARMED', 'ARMOR', 'AROMA', 'AROSE',
    'ARRAY', 'ARROW', 'ARSON', 'ARTSY', 'ASCOT', 'ASHEN', 'ASIDE', 'ASKED', 'ASSET', 'ATLAS',
    'ATTIC', 'AUDIO', 'AUDIT', 'AUNTY', 'AVAIL', 'AVERT', 'AVOID', 'AWAKE', 'AWARD', 'AWARE',
    'AWASH', 'AWFUL', 'AWOKE', 'AXIAL', 'AXIOM', 'AXION', 'AZURE', 'BACON', 'BADGE', 'BADLY',
    'BAGEL', 'BAGGY', 'BAKER', 'BALER', 'BALMY', 'BANAL', 'BANJO', 'BARGE', 'BARON', 'BASTE',
    'BATCH', 'BATHE', 'BATON', 'BAWDY', 'BAYOU', 'BEACH', 'BEADY', 'BEARD', 'BEAST', 'BEECH',
    'BEEFY', 'BEEPS', 'BEERS', 'BEGAN', 'BEGOT', 'BEGUN', 'BEING', 'BELCH', 'BELLE', 'BELLY',
    'BELOW', 'BENCH', 'BERET', 'BERRY', 'BERTH', 'BESET', 'BIRCH', 'BIRTH', 'BISON', 'BITTY',
    'BIZARRE', 'BLAZE', 'BLEAK', 'BLEAT', 'BLEED', 'BLEEP', 'BLEND', 'BLESS', 'BLIMP', 'BLIND',
    'BLINK', 'BLISS', 'BLITZ', 'BLOAT', 'BLOCK', 'BLOKE', 'BLOND', 'BLOOD', 'BLOOM', 'BLOWN',
    'BLUES', 'BLUFF', 'BLUNT', 'BLURB', 'BLURT', 'BLUSH', 'BOARD', 'BOAST', 'BOBBY', 'BOGEY',
    'BOILS', 'BOLTS', 'BOMBS', 'BONDS', 'BONED', 'BONGO', 'BONUS', 'BOOBS', 'BOOKS', 'BOOMS',
    'BOOST', 'BOOTH', 'BOOTS', 'BOOZE', 'BOOZY', 'BORAX', 'BORNE', 'BOSOM', 'BOSSY', 'BOTCH',
    'BOUGH', 'BOUND', 'BOWEL', 'BOXER', 'BRACE', 'BRAID', 'BRAIN', 'BRAKE', 'BRAND', 'BRASH',
    'BRASS', 'BRAVE', 'BRAVO', 'BRAWL', 'BRAWN', 'BREAD', 'BREAK', 'BREED', 'BREWS', 'BRIBE',
    'BRICK', 'BRIDE', 'BRIEF', 'BRINE', 'BRINK', 'BRINY', 'BRISK', 'BROAD', 'BROIL', 'BROKE',
    'BROOD', 'BROOK', 'BROOM', 'BROTH', 'BROWN', 'BRUNT', 'BRUSH', 'BRUTE', 'BUDDY', 'BUDGE',
    'BUGGY', 'BUGLE', 'BUILD', 'BUILT', 'BULGE', 'BULKY', 'BULLY', 'BUMPS', 'BUMPY', 'BUNCH',
    'BUNNY', 'BURLY', 'BURNT', 'BURPS', 'BURST', 'BUSES', 'BUSHY', 'BUTCH', 'BUTTE', 'BUXOM',
    'BUYER', 'BUZZY', 'BYLAW', 'CABAL', 'CACAO', 'CACHE', 'CACTI', 'CADDY', 'CADET', 'CAGED',
    'CAGEY', 'CAIRN', 'CAKED', 'CAMEL', 'CAMEO', 'CANAL', 'CANDY', 'CANE', 'CANOE', 'CANON',
    'CAPER', 'CAPUT', 'CARAT', 'CARBON', 'CARDS', 'CARED', 'CARGO', 'CARRY', 'CARVE', 'CASTE',
    'CATCH', 'CATER', 'CATTY', 'CAUSE', 'CAVEMAN', 'CEDAR', 'CHAFE', 'CHAFF', 'CHAIN', 'CHAIR',
    'CHALK', 'CHAMP', 'CHANT', 'CHAOS', 'CHARD', 'CHARM', 'CHART', 'CHASE', 'CHASM', 'CHEAP',
    'CHEAT', 'CHECK', 'CHEEK', 'CHEER', 'CHESS', 'CHEST', 'CHEWS', 'CHICK', 'CHIEF', 'CHILD',
    'CHILL', 'CHIMP', 'CHINA', 'CHIRP', 'CHIVE', 'CHOCK', 'CHOIR', 'CHOKE', 'CHOMP', 'CHORD',
    'CHORE', 'CHOSE', 'CHUCK', 'CHUMP', 'CHUNK', 'CHURN', 'CHUTE', 'CIDER', 'CIGAR', 'CINCH',
    'CIRCA', 'CITED', 'CIVIC', 'CIVIL', 'CLACK', 'CLAIM', 'CLAMP', 'CLANG', 'CLANK', 'CLASH',
    'CLASP', 'CLASS', 'CLEAN', 'CLEAR', 'CLEAT', 'CLEFT', 'CLERK', 'CLICK', 'CLIFF', 'CLIMB',
    'CLING', 'CLINK', 'CLOAK', 'CLOCK', 'CLONE', 'CLOSE', 'CLOTH', 'CLOUD', 'CLOUT', 'CLOWN',
    'CLUBS', 'CLUCK', 'CLUED', 'CLUMP', 'CLUNG', 'CLUNK', 'COACH', 'COALS', 'COAST', 'COAX',
    'COBRA', 'COCOA', 'CODED', 'CODER', 'CODES', 'COFFER', 'COINS', 'COLIC', 'COLOR', 'COMET',
    'COMIC', 'COMMA', 'CONCH', 'CONDO', 'CONES', 'CORAL', 'CORDS', 'CORGI', 'CORKY', 'CORNS',
    'COUCH', 'COUGH', 'COULD', 'COUNT', 'COUPE', 'COURT', 'COVEN', 'COVER', 'COWER', 'COYLY',
    'CRABS', 'CRACK', 'CRAFT', 'CRAMP', 'CRANE', 'CRANK', 'CRASH', 'CRASS', 'CRATE', 'CRAVE',
    'CRAWL', 'CRAZE', 'CRAZY', 'CREAK', 'CREAM', 'CREED', 'CREEK', 'CREEP', 'CREME', 'CREPE',
    'CRESS', 'CREST', 'CRICK', 'CRIED', 'CRIER', 'CRIES', 'CRIME', 'CRIMP', 'CRISP', 'CROAK',
    'CROCK', 'CROFT', 'CRONE', 'CRONY', 'CROOK', 'CROSS', 'CROUP', 'CROWD', 'CROWN', 'CRUDE',
    'CRUEL', 'CRUMB', 'CRUMP', 'CRUSH', 'CRUST', 'CUBIC', 'CUMIN', 'CUPCAKE', 'CURDS', 'CURED',
    'CURLY', 'CURRY', 'CURSE', 'CURVE', 'CURVY', 'CUSHY', 'CUTIE', 'CYBER', 'CYCLE', 'CYNIC',
    'DADDY', 'DAILY', 'DAIRY', 'DAISY', 'DALLY', 'DANCE', 'DANDY', 'DARED', 'DARTS', 'DATED',
    'DATUM', 'DAUNT', 'DEALT', 'DEANS', 'DEARS', 'DEARY', 'DEATH', 'DEBIT', 'DEBUG', 'DEBUT',
    'DECAL', 'DECAY', 'DECOR', 'DECOY', 'DECRY', 'DEFER', 'DEIGN', 'DEITY', 'DELAY', 'DELTA',
    'DELVE', 'DEMON', 'DEMUR', 'DENIM', 'DENSE', 'DEPOT', 'DEPTH', 'DERBY', 'DETER', 'DETOX',
    'DEUCE', 'DEVIL', 'DIARY', 'DICEY', 'DIGIT', 'DILLY', 'DIMLY', 'DINER', 'DINGO', 'DINGY',
    'DIODE', 'DIRGE', 'DIRTY', 'DISCO', 'DITCH', 'DITTO', 'DITTY', 'DIVER', 'DIZZY', 'DOCK',
    'DODGE', 'DODO', 'DOILY', 'DOING', 'DOLLY', 'DONOR', 'DONUT', 'DOOM', 'DOPEY', 'DOSE',
    'DOTED', 'DOTTY', 'DOUBT', 'DOUGH', 'DOUSE', 'DOWDY', 'DOWER', 'DOWNS', 'DOWNY', 'DOWRY',
    'DOZEN', 'DRAFT', 'DRAGS', 'DRAIN', 'DRAKE', 'DRAMA', 'DRANK', 'DRAPE', 'DRAWL', 'DRAWN',
    'DREAD', 'DREAM', 'DREAR', 'DRESS', 'DRIED', 'DRIER', 'DRIFT', 'DRILL', 'DRILY', 'DRINK',
    'DRIVE', 'DROIT', 'DROLL', 'DRONE', 'DROOL', 'DROOP', 'DROSS', 'DROVE', 'DROWN', 'DRUGS',
    'DRUMS', 'DRUNK', 'DRYER', 'DRYLY', 'DUCAL', 'DUCHY', 'DUCKS', 'DUCKY', 'DUCTS', 'DUDES',
    'DUELS', 'DUETS', 'DUKE', 'DULLY', 'DUMBO', 'DUMMY', 'DUMPS', 'DUMPY', 'DUNCE', 'DUNES',
    'DUNKS', 'DUPED', 'DUSK', 'DUSTY', 'DUTCH', 'DUVET', 'DWARF', 'DWELL', 'DWELT', 'DYING',
    'EAGER', 'EAGLE', 'EARED', 'EARLY', 'EARNS', 'EARTH', 'EASED', 'EASEL', 'EATEN', 'EATER',
    'EAVES', 'EBBED', 'EBONY', 'EBOOK', 'EDGED', 'EDICT', 'EDIFY', 'EERIE', 'EGRET', 'EIGHT',
    'EJECT', 'ELBOW', 'ELDER', 'ELECT', 'ELEGY', 'ELFIN', 'ELIDE', 'ELITE', 'ELOPE', 'ELUDE',
    'ELVES', 'EMAIL', 'EMBED', 'EMBER', 'EMCEE', 'EMPTY', 'ENACT', 'ENDOW', 'ENEMA', 'ENEMY',
    'ENJOY', 'ENNUI', 'ENSUE', 'ENTER', 'ENTRY', 'ENVOY', 'EPOCH', 'EPOXY', 'EQUAL', 'EQUIP',
    'ERASE', 'ERECT', 'ERGOT', 'ERROR', 'ERUPT', 'ESSAY', 'ESTER', 'ESTEEM', 'ETHOS', 'ETHYL',
    'EVADE', 'EVENT', 'EVERY', 'EVICT', 'EXACT', 'EXALT', 'EXCEL', 'EXERT', 'EXILE', 'EXIST',
    'EXPAT', 'EXPEL', 'EXTRA', 'EXULT', 'EYED', 'FABLE', 'FACED', 'FACET', 'FADED', 'FAILS',
    'FAINT', 'FAIRY', 'FAITH', 'FAKE', 'FALLS', 'FALSE', 'FAMED', 'FANCY', 'FANGS', 'FANNY',
    'FARCE', 'FARMS', 'FATAL', 'FATSO', 'FATTY', 'FAULT', 'FAUNA', 'FAVOR', 'FAWNS', 'FAXED',
    'FAZED', 'FEAST', 'FEATS', 'FECES', 'FEEDS', 'FEELS', 'FEIGN', 'FELLA', 'FELLS', 'FELON',
    'FELT', 'FEMME', 'FENCE', 'FERAL', 'FERRY', 'FETCH', 'FETID', 'FETUS', 'FEVER', 'FEWER',
    'FIBER', 'FICUS', 'FIELD', 'FIEND', 'FIERY', 'FIFTH', 'FIFTY', 'FIGHT', 'FILCH', 'FILED',
    'FILER', 'FILLS', 'FILLY', 'FILMS', 'FILMY', 'FILTH', 'FINAL', 'FINCH', 'FINDS', 'FINED',
    'FINER', 'FINES', 'FIRED', 'FIRES', 'FIRMS', 'FIRST', 'FISHY', 'FISTS', 'FITLY', 'FITS',
    'FIVE', 'FIXED', 'FIXER', 'FIXES', 'FIZZY', 'FJORD', 'FLACK', 'FLAGS', 'FLAIL', 'FLAIR',
    'FLAK', 'FLAME', 'FLANK', 'FLAPS', 'FLARE', 'FLASH', 'FLASK', 'FLATS', 'FLAWS', 'FLAX',
    'FLEAS', 'FLECK', 'FLEE', 'FLESH', 'FLICK', 'FLIER', 'FLIES', 'FLING', 'FLINT', 'FLIPS',
    'FLIRT', 'FLOAT', 'FLOCK', 'FLOOD', 'FLOOR', 'FLOPS', 'FLOUR', 'FLOUT', 'FLOWS', 'FLUID',
    'FLUKE', 'FLUNG', 'FLUNK', 'FLUSH', 'FLUTE', 'FOAMS', 'FOAMY', 'FOCAL', 'FOCUS', 'FOGGY',
    'FOIST', 'FOLDS', 'FOLKS', 'FOLLY', 'FONTS', 'FOODS', 'FOOLS', 'FOOTS', 'FORAY', 'FORCE',
    'FORDS', 'FORE', 'FORGE', 'FORGO', 'FORKS', 'FORMS', 'FORTH', 'FORTY', 'FORUM', 'FOUND',
    'FOUNT', 'FOURS', 'FOWLS', 'FOXES', 'FOYER', 'FRAIL', 'FRAME', 'FRANK', 'FRAUD', 'FRAYS',
    'FREAK', 'FREED', 'FREER', 'FRESH', 'FRIAR', 'FRIED', 'FRIES', 'FRILL', 'FRISK', 'FRITZ',
    'FROCK', 'FROGS', 'FROND', 'FRONT', 'FROST', 'FROWN', 'FROZE', 'FRUIT', 'FRYING', 'FUDGE',
    'FUELS', 'FUGUE', 'FULLY', 'FUMES', 'FUNDS', 'FUNKY', 'FUNNY', 'FURRY', 'FUSED', 'FUSTY',
    'FUZZY', 'GAFFE', 'GAILY', 'GAINS', 'GALA', 'GAMER', 'GAMES', 'GAMMA', 'GAMUT', 'GANGS',
    'GAPES', 'GARB', 'GARLIC', 'GASES', 'GASPS', 'GASSY', 'GATED', 'GATOR', 'GAUDY', 'GAUGE',
    'GAUNT', 'GAUZE', 'GAVEL', 'GAWKS', 'GAZE', 'GEARS', 'GEEK', 'GEESE', 'GEEKY', 'GENIE',
    'GENRE', 'GHOST', 'GHOUL', 'GIANT', 'GIFTS', 'GILDS', 'GILLS', 'GILTS', 'GIMME', 'GIRDS',
    'GIRLS', 'GIRTH', 'GISTS', 'GIVEN', 'GIVER', 'GIVES', 'GIZMO', 'GLADE', 'GLAND', 'GLARE',
    'GLASS', 'GLAZE', 'GLEAM', 'GLEAN', 'GLIDE', 'GLINT', 'GLOAT', 'GLOBE', 'GLOOM', 'GLORY',
    'GLOSS', 'GLOVE', 'GLOWS', 'GLUED', 'GLUES', 'GLYPH', 'GNARL', 'GNASH', 'GNATS', 'GNOME',
    'GOADS', 'GOALS', 'GOATS', 'GODLY', 'GOING', 'GOLDS', 'GOLFS', 'GONZO', 'GOODS', 'GOOEY',
    'GOOFS', 'GOOFY', 'GOOSE', 'GORED', 'GORGE', 'GOTCHA', 'GOUGE', 'GOURD', 'GRACE', 'GRADE',
    'GRADS', 'GRAFT', 'GRAIL', 'GRAIN', 'GRAND', 'GRANT', 'GRAPE', 'GRAPH', 'GRASP', 'GRASS',
    'GRATE', 'GRAVE', 'GRAVY', 'GRAYS', 'GRAZE', 'GREAT', 'GREED', 'GREEK', 'GREEN', 'GREET',
    'GRIEF', 'GRILL', 'GRIME', 'GRIMY', 'GRIND', 'GRINS', 'GRIPS', 'GRIST', 'GRITS', 'GROAN',
    'GROIN', 'GROOM', 'GROPE', 'GROSS', 'GROUP', 'GROUT', 'GROVE', 'GROWL', 'GROWN', 'GRUBS',
    'GRUEL', 'GRUFF', 'GRUNT', 'GUANO', 'GUARD', 'GUAVA', 'GUESS', 'GUEST', 'GUIDE', 'GUILD',
    'GUILT', 'GUISE', 'GULCH', 'GULFS', 'GULLS', 'GULLY', 'GULPS', 'GUMBO', 'GUMMY', 'GUNKS',
    'GUNKY', 'GUPPY', 'GURPS', 'GUSTO', 'GUSTS', 'GUSTY', 'GUTSY', 'GUTTA', 'GUYS', 'GYMS',
    'GYOZA', 'HABIT', 'HACKS', 'HAILS', 'HAIRS', 'HAIRY', 'HALAL', 'HALES', 'HALLS', 'HALOS',
    'HALTS', 'HALVE', 'HAMS', 'HANDS', 'HANDY', 'HANGS', 'HANKS', 'HAPPY', 'HARDY', 'HARED',
    'HARES', 'HARMS', 'HARPS', 'HARSH', 'HASTE', 'HASTY', 'HATCH', 'HATED', 'HATER', 'HATES',
    'HAULS', 'HAUNT', 'HAUTE', 'HAVEN', 'HAVER', 'HAVES', 'HAVOC', 'HAWKS', 'HAYDN', 'HAZED',
    'HAZEL', 'HAZES', 'HEADS', 'HEADY', 'HEALS', 'HEAPS', 'HEARD', 'HEARS', 'HEART', 'HEATS',
    'HEAVY', 'HEDGE', 'HEEDS', 'HEELS', 'HEFTY', 'HEIRS', 'HELIX', 'HELLO', 'HELMS', 'HELPS',
    'HENCE', 'HENRY', 'HERBS', 'HERDS', 'HEROS', 'HERON', 'HICKS', 'HIDES', 'HIGHS', 'HIKED',
    'HIKER', 'HIKES', 'HILLS', 'HILLY', 'HILTS', 'HINDS', 'HINGE', 'HINTS', 'HIPPO', 'HIPPY',
    'HIRED', 'HIRES', 'HITCH', 'HIVED', 'HIVES', 'HOARD', 'HOAX', 'HOBBY', 'HOBOS', 'HOCKS',
    'HOGAN', 'HOLDS', 'HOLES', 'HOLEY', 'HOLLY', 'HOMER', 'HOMES', 'HONEY', 'HONKS', 'HONOR',
    'HOODS', 'HOOFS', 'HOOKS', 'HOOPS', 'HOOTS', 'HOPED', 'HOPES', 'HORDE', 'HORNS', 'HORNY',
    'HORSE', 'HOSTS', 'HOTEL', 'HOUND', 'HOURS', 'HOUSE', 'HOVEL', 'HOVER', 'HOWDY', 'HOWLS',
    'HUBBY', 'HUFFS', 'HUFFY', 'HULKS', 'HULLS', 'HUMAN', 'HUMID', 'HUMOR', 'HUMPS', 'HUMPY',
    'HUMUS', 'HUNCH', 'HUNKS', 'HUNTS', 'HURLS', 'HURRY', 'HURTS', 'HUSKS', 'HUSKY', 'HUSSY',
    'HUTCH', 'HYDRO', 'HYENA', 'HYMEN', 'HYPED', 'HYPER', 'HYPOS', 'ICEBOX', 'ICING', 'ICONS',
    'IDEAL', 'IDEAS', 'IDIOM', 'IDIOT', 'IDLED', 'IDLES', 'IDOLS', 'IGLOO', 'ILIAC', 'IMAGE',
    'IMAGO', 'IMBUE', 'IMPEL', 'INCUR', 'INDEX', 'INDIE', 'INDUE', 'INEPT', 'INERT', 'INFER',
    'INFIX', 'INFRA', 'INK', 'INKED', 'INLAY', 'INLET', 'INNER', 'INPUT', 'INSET', 'INTER',
    'INTRO', 'IONIC', 'IRADE', 'IRKED', 'IRONS', 'ISLET', 'ISSUE', 'ITCHY', 'ITEMS', 'IVORY',
    'JACKS', 'JADED', 'JADES', 'JAILS', 'JAKES', 'JAMES', 'JAPAN', 'JARVY', 'JAZZY', 'JEANS',
    'JEERS', 'JELLY', 'JENNY', 'JERKS', 'JERKY', 'JERRY', 'JESTS', 'JESUS', 'JETTY', 'JEWEL',
    'JIFFY', 'JIHAD', 'JIMMY', 'JINKS', 'JIVED', 'JIVER', 'JIVES', 'JOBS', 'JOCKS', 'JOHNS',
    'JOINS', 'JOINT', 'JOIST', 'JOKED', 'JOKER', 'JOKES', 'JOLLY', 'JOLTS', 'JONES', 'JOULE',
    'JOUST', 'JOWLS', 'JOYED', 'JUDGE', 'JUICE', 'JUICY', 'JULEP', 'JUMBO', 'JUMPS', 'JUMPY',
    'JUNCO', 'JUNKS', 'JUNKY', 'JURAT', 'JURAT', 'JUROR', 'JUSTE', 'JUTES', 'JUTTY', 'KABOB',
    'KAYAK', 'KEBAB', 'KEEPS', 'KELPS', 'KEMPT', 'KENDO', 'KERBS', 'KERNS', 'KETCH', 'KEVIN',
    'KEYED', 'KHAKI', 'KICK', 'KILLS', 'KILNS', 'KILOS', 'KILTS', 'KINDS', 'KINGS', 'KINKS',
    'KINKY', 'KIOSK', 'KISS', 'KITES', 'KITTY', 'KIWIS', 'KNACK', 'KNEAD', 'KNEEL', 'KNELL',
    'KNIFE', 'KNITS', 'KNOBS', 'KNOCK', 'KNOLL', 'KNOTS', 'KNOWN', 'KNOWS', 'KOALA', 'KOREA',
    'KUDOS', 'KYRIE', 'LABEL', 'LABOR', 'LACED', 'LACES', 'LACKS', 'LACY', 'LADED', 'LADEN',
    'LADLE', 'LADY', 'LAGER', 'LAIRS', 'LAITY', 'LAKES', 'LAMBS', 'LAMED', 'LAMPS', 'LANCE',
    'LANDS', 'LANES', 'LANKY', 'LAPSE', 'LARCH', 'LARDS', 'LARGE', 'LARKS', 'LARVA', 'LASER',
    'LASSO', 'LASTS', 'LATCH', 'LATER', 'LATEX', 'LATHE', 'LATHS', 'LATIN', 'LAUGH', 'LAVAS',
    'LAWNS', 'LAXER', 'LAYER', 'LAZER', 'LAZY', 'LEADS', 'LEAFY', 'LEAKS', 'LEAKY', 'LEANS',
    'LEANT', 'LEAPS', 'LEARN', 'LEASE', 'LEASH', 'LEAST', 'LEAVE', 'LEDGE', 'LEECH', 'LEEKS',
    'LEERS', 'LEFTS', 'LEGAL', 'LEGGY', 'LEMON', 'LEMUR', 'LENDS', 'LENS', 'LENTO', 'LEONE',
    'LEVEL', 'LEVER', 'LEWIS', 'LEXIS', 'LIAR', 'LIBEL', 'LICKS', 'LIEGE', 'LIENS', 'LIFTS',
    'LIGHT', 'LIKED', 'LIKES', 'LILAC', 'LILTS', 'LIMBO', 'LIMBS', 'LIMED', 'LIMES', 'LIMIT',
    'LIMPS', 'LINED', 'LINEN', 'LINER', 'LINES', 'LINGO', 'LINKS', 'LIONS', 'LIPID', 'LISTS',
    'LITER', 'LITHE', 'LIVED', 'LIVER', 'LIVES', 'LLAMA', 'LOADS', 'LOAFS', 'LOAMS', 'LOANS',
    'LOATH', 'LOBBY', 'LOBES', 'LOCAL', 'LOCKS', 'LODGE', 'LOFTS', 'LOFTY', 'LOGIC', 'LOGOS',
    'LOINS', 'LOLLY', 'LONER', 'LONGS', 'LOOKS', 'LOOMS', 'LOOPS', 'LOOPY', 'LOOSE', 'LOOTS',
    'LOPED', 'LOPES', 'LORDS', 'LORED', 'LORES', 'LORRY', 'LOSER', 'LOSES', 'LOTTO', 'LOTUS',
    'LOUGH', 'LOUPE', 'LOURS', 'LOUSE', 'LOUSY', 'LOVED', 'LOVER', 'LOVES', 'LOWER', 'LOWLY',
    'LOYAL', 'LUCID', 'LUCKS', 'LUCKY', 'LUMPS', 'LUMPY', 'LUNAR', 'LUNCH', 'LUNGE', 'LUNGS',
    'LUPUS', 'LURCH', 'LURED', 'LURES', 'LURKS', 'LUSTS', 'LUSTY', 'LUTES', 'LYING', 'LYMPH',
    'LYNCH', 'LYRES', 'LYRIC', 'MACED', 'MACES', 'MACHO', 'MACRO', 'MADAM', 'MADLY', 'MAFIA',
    'MAGIC', 'MAGMA', 'MAIDS', 'MAILS', 'MAIMS', 'MAINS', 'MAJOR', 'MAKER', 'MAKES', 'MALES',
    'MALLS', 'MALTS', 'MAMAS', 'MAMBA', 'MAMBO', 'MANGE', 'MANGO', 'MANGY', 'MANIA', 'MANIC',
    'MANOR', 'MAPLE', 'MARCH', 'MARES', 'MARIA', 'MARKS', 'MARRY', 'MARSH', 'MARTS', 'MASON',
    'MASSA', 'MATCH', 'MATED', 'MATES', 'MATHS', 'MATTE', 'MAULS', 'MAYBE', 'MAYOR', 'MAZES',
    'MEADS', 'MEALS', 'MEALY', 'MEANS', 'MEANT', 'MEATS', 'MEATY', 'MECCA', 'MEDAL', 'MEDIA',
    'MEDIC', 'MEEK', 'MEETS', 'MELON', 'MELTS', 'MEMOS', 'MENDS', 'MENUS', 'MERCY', 'MERGE',
    'MERIT', 'MERRY', 'MESHY', 'MESSY', 'METAL', 'METER', 'METHS', 'METRO', 'MEWED', 'MIDGE',
    'MIDST', 'MIENS', 'MIGHT', 'MILKS', 'MILKY', 'MILLS', 'MIMED', 'MIMES', 'MIMIC', 'MINCE',
    'MINDS', 'MINED', 'MINER', 'MINES', 'MINKS', 'MINOR', 'MINTS', 'MINTY', 'MINUS', 'MIRED',
    'MIRES', 'MIRTH', 'MISTY', 'MITER', 'MITTS', 'MIXED', 'MIXER', 'MIXES', 'MOANS', 'MOATS',
    'MOCKS', 'MODEL', 'MODEM', 'MODES', 'MOGUL', 'MOIST', 'MOLAR', 'MOLDS', 'MOLDY', 'MOLES',
    'MOLLY', 'MOLTS', 'MOMMY', 'MONAD', 'MONEY', 'MONKS', 'MONTH', 'MOODS', 'MOODY', 'MOONS',
    'MOORS', 'MOOSE', 'MOPED', 'MOPES', 'MOPEY', 'MORAL', 'MORES', 'MORNS', 'MORSE', 'MORTS',
    'MOSSY', 'MOTEL', 'MOTHS', 'MOTIF', 'MOTOR', 'MOTTO', 'MOULD', 'MOUND', 'MOUNT', 'MOURN',
    'MOUSE', 'MOUSY', 'MOUTH', 'MOVED', 'MOVER', 'MOVES', 'MOVIE', 'MOWED', 'MOWER', 'MUCKS',
    'MUCKY', 'MUCUS', 'MUDDY', 'MUFFS', 'MUGGY', 'MULCH', 'MULES', 'MULLS', 'MUMMY', 'MUMPS',
    'MUNCH', 'MURAL', 'MURKS', 'MURKY', 'MUSED', 'MUSES', 'MUSHY', 'MUSIC', 'MUSKS', 'MUSKY',
    'MUSTS', 'MUSTY', 'MUTED', 'MUTES', 'MUTTS', 'MYNAS', 'MYTHS', 'NACHO', 'NADIR', 'NAILS',
    'NAIVE', 'NAKED', 'NAMED', 'NAMES', 'NANNY', 'NAPES', 'NAPPY', 'NARCS', 'NASAL', 'NASTY',
    'NATAL', 'NATCH', 'NAVEL', 'NAVES', 'NAZIS', 'NEAR', 'NEAT', 'NECKS', 'NEEDS', 'NEEDY',
    'NEIGH', 'NEONS', 'NERDS', 'NERDY', 'NERVE', 'NERVY', 'NESTS', 'NETTY', 'NEVER', 'NEWER',
    'NEWLY', 'NEWS', 'NEWTS', 'NEXUS', 'NICER', 'NICHE', 'NICKS', 'NIECE', 'NIFTY', 'NIGHT',
    'NIHIL', 'NINES', 'NINJA', 'NINTH', 'NIPPY', 'NISUS', 'NITRE', 'NITTY', 'NIXED', 'NIXES',
    'NOBLE', 'NOBLY', 'NOCKS', 'NODAL', 'NODES', 'NODUS', 'NOISE', 'NOISY', 'NOMAD', 'NONCE',
    'NONES', 'NOOKS', 'NOONS', 'NOOSE', 'NOPE', 'NORMS', 'NORTH', 'NOSED', 'NOSES', 'NOTCH',
    'NOTED', 'NOTES', 'NOTUM', 'NOUNS', 'NOVEL', 'NOWAY', 'NUBIA', 'NUCHA', 'NUDES', 'NUDGE',
    'NULLS', 'NUMBS', 'NUMEN', 'NURSE', 'NUTTY', 'NYLON', 'NYMPH', 'OAKEN', 'OAKUM', 'OARED',
    'OASES', 'OASIS', 'OATHS', 'OATS', 'OBESE', 'OBEYS', 'OBITS', 'OCCUR', 'OCEAN', 'OCHER',
    'OCHRE', 'OCTAD', 'OCTAL', 'ODDER', 'ODDLY', 'ODEUM', 'ODIUM', 'ODORS', 'OFFAL', 'OFFER',
    'OFTEN', 'OGLED', 'OGRES', 'OILED', 'OILER', 'OKAYS', 'OLDEN', 'OLDER', 'OLIVE', 'OMEGA',
    'OMENS', 'OMITS', 'ONION', 'ONSET', 'OOMPH', 'OOZES', 'OPALS', 'OPENS', 'OPERA', 'OPINE',
    'OPIUM', 'OPTIC', 'ORALS', 'ORBIT', 'ORCAS', 'ORDER', 'ORGAN', 'ORGYZ', 'ORIEL', 'ORION',
    'OTHER', 'OTTER', 'OUGHT', 'OUNCE', 'OUTDO', 'OUTER', 'OUTGO', 'OVALS', 'OVARY', 'OVENS',
    'OVERS', 'OVERT', 'OVINE', 'OVOID', 'OVULE', 'OWING', 'OWLET', 'OWNED', 'OWNER', 'OXBOW',
    'OXIDE', 'OZONE', 'PACED', 'PACER', 'PACES', 'PACKS', 'PACTS', 'PADDY', 'PAGED', 'PAGER',
    'PAGES', 'PAILS', 'PAINS', 'PAINT', 'PAIRS', 'PALAU', 'PALED', 'PALES', 'PALLS', 'PALMS',
    'PALSY', 'PAMPA', 'PANDA', 'PANEL', 'PANGS', 'PANIC', 'PANSY', 'PANTS', 'PAPAS', 'PAPER',
    'PARCH', 'PARED', 'PARKS', 'PARTS', 'PARTY', 'PASTA', 'PASTE', 'PASTS', 'PATCH', 'PATHS',
    'PATIO', 'PAUSE', 'PAVED', 'PAVER', 'PAVES', 'PAWED', 'PAWLS', 'PAWNS', 'PAYEE', 'PAYER',
    'PEACE', 'PEACH', 'PEAKS', 'PEAKY', 'PEALS', 'PEARL', 'PEARS', 'PEASE', 'PEATY', 'PECKS',
    'PEDAL', 'PEEKS', 'PEELS', 'PEEPS', 'PEERS', 'PENAL', 'PENCE', 'PENIS', 'PENNY', 'PERCH',
    'PERKS', 'PERMS', 'PESKY', 'PESTS', 'PETER', 'PETIT', 'PHASE', 'PHONE', 'PHOTO', 'PIANO',
    'PICKS', 'PICKY', 'PICOT', 'PIECE', 'PIERS', 'PIETY', 'PIGGY', 'PILES', 'PILLS', 'PILOT',
    'PINCH', 'PINED', 'PINES', 'PINGS', 'PINKO', 'PINKS', 'PINKY', 'PINUP', 'PIOUS', 'PIPED',
    'PIPER', 'PIPES', 'PITCH', 'PITHY', 'PIVOT', 'PIXEL', 'PIZZA', 'PLACE', 'PLAID', 'PLAIN',
    'PLAIT', 'PLANE', 'PLANK', 'PLANS', 'PLANT', 'PLATE', 'PLAYS', 'PLAZA', 'PLEAD', 'PLEAT',
    'PLIED', 'PLIER', 'PLIES', 'PLINK', 'PLODS', 'PLONK', 'PLOPS', 'PLOTS', 'PLOWS', 'PLOYS',
    'PLUCK', 'PLUGS', 'PLUMB', 'PLUME', 'PLUMP', 'PLUMS', 'PLUNK', 'PLUSH', 'PLUTO', 'POACH',
    'POCKS', 'PODGY', 'POEMS', 'POETS', 'POINT', 'POISE', 'POKER', 'POKES', 'POLAR', 'POLED',
    'POLES', 'POLLS', 'POLYP', 'POMPS', 'PONDS', 'PONYS', 'POOCH', 'POOLS', 'POOPS', 'POPES',
    'POPPY', 'PORCH', 'PORED', 'PORES', 'PORGY', 'PORKS', 'PORKY', 'PORTS', 'POSED', 'POSER',
    'POSES', 'POSIT', 'POSSE', 'POSTS', 'POTTY', 'POUCH', 'POUND', 'POURS', 'POUTS', 'POWER',
    'POXES', 'PRAAM', 'PRAMS', 'PRANK', 'PRASE', 'PRATE', 'PRATS', 'PRAWN', 'PRAYS', 'PREACH',
    'PREEM', 'PRESS', 'PRICE', 'PRICK', 'PRIDE', 'PRIED', 'PRIES', 'PRIME', 'PRIMP', 'PRINT',
    'PRIOR', 'PRISM', 'PRIVY', 'PRIZE', 'PROBE', 'PRODS', 'PROEM', 'PROMS', 'PRONE', 'PRONG',
    'PROOF', 'PROPS', 'PROSE', 'PROST', 'PROUD', 'PROVE', 'PROWL', 'PROXY', 'PRUDE', 'PRUNE',
    'PSALM', 'PUBIC', 'PUBES', 'PUCKS', 'PUDGY', 'PUFFS', 'PUFFY', 'PULLS', 'PULPS', 'PULPY',
    'PULSE', 'PUMAS', 'PUMPS', 'PUNCH', 'PUNKS', 'PUNNY', 'PUNTS', 'PUPIL', 'PUPPY', 'PURGE',
    'PURLS', 'PURRS', 'PURSE', 'PUSHY', 'PUTTY', 'PYGMY', 'PYLON', 'QUACK', 'QUADS', 'QUAIL',
    'QUAKE', 'QUALM', 'QUARK', 'QUART', 'QUASI', 'QUEEN', 'QUEER', 'QUELL', 'QUERY', 'QUEST',
    'QUEUE', 'QUICK', 'QUIET', 'QUILL', 'QUILT', 'QUIPS', 'QUIRK', 'QUITE', 'QUITS', 'QUOTA',
    'QUOTE', 'RABBI', 'RABID', 'RACED', 'RACER', 'RACES', 'RACKS', 'RADAR', 'RADII', 'RADIO',
    'RADIX', 'RADON', 'RAFTS', 'RAGED', 'RAGES', 'RAIDS', 'RAILS', 'RAINS', 'RAINY', 'RAISE',
    'RAKED', 'RAKER', 'RAKES', 'RALLY', 'RAMPS', 'RANCH', 'RANDS', 'RANDY', 'RANGE', 'RANKS',
    'RANTS', 'RAPID', 'RARED', 'RARER', 'RARES', 'RASPS', 'RASPY', 'RATED', 'RATER', 'RATES',
    'RATIO', 'RATS', 'RAVE', 'RAVEN', 'RAVER', 'RAVES', 'RAWER', 'RAWLY', 'RAYS', 'RAZED',
    'RAZER', 'RAZES', 'REACH', 'REACT', 'READS', 'READY', 'REALM', 'REAMS', 'REAPS', 'REARS',
    'REBEL', 'REBUS', 'REBUT', 'RECAP', 'RECUR', 'REDID', 'REEDS', 'REEDY', 'REEFS', 'REEKS',
    'REELS', 'REFER', 'REFIT', 'REGAL', 'REIGN', 'REINS', 'RELAX', 'RELAY', 'RELIC', 'REMIT',
    'REMIX', 'RENAL', 'RENDS', 'RENTS', 'REPAY', 'REPEL', 'REPLY', 'REPOS', 'RESET', 'RESIN',
    'RESTS', 'RETCH', 'RETRO', 'REUSE', 'REVEL', 'REVS', 'RHINO', 'RHYME', 'RIDER', 'RIDES',
    'RIDGE', 'RIFFS', 'RIFLE', 'RIFTS', 'RIGHT', 'RIGID', 'RIGOR', 'RILED', 'RILLS', 'RIMEY',
    'RINDS', 'RINGS', 'RINKS', 'RINSE', 'RIOTS', 'RIPEN', 'RIPER', 'RISEN', 'RISER', 'RISES',
    'RISKS', 'RISKY', 'RITES', 'RITZY', 'RIVAL', 'RIVED', 'RIVER', 'RIVES', 'RIVET', 'ROACH',
    'ROADS', 'ROAMS', 'ROARS', 'ROAST', 'ROBED', 'ROBES', 'ROBIN', 'ROBOT', 'ROCKS', 'ROCKY',
    'RODES', 'ROGER', 'ROLES', 'ROLLS', 'ROMAN', 'ROMPS', 'ROOFS', 'ROOKS', 'ROOMS', 'ROOMY',
    'ROOST', 'ROOTS', 'ROPED', 'ROPER', 'ROPES', 'ROSES', 'ROSY', 'ROTOR', 'ROTS', 'ROUGE',
    'ROUGH', 'ROUND', 'ROUSE', 'ROUTE', 'ROUTS', 'ROVED', 'ROVER', 'ROVES', 'ROWDY', 'ROWED',
    'ROWER', 'ROYAL', 'RUBLE', 'RUCKS', 'RUDDY', 'RUFFS', 'RUGBY', 'RUINS', 'RULED', 'RULER',
    'RULES', 'RUMBA', 'RUMOR', 'RUMPS', 'RUNGS', 'RUNNY', 'RUNTS', 'RURAL', 'RUSHS', 'RUSKS',
    'RUSTY', 'RUTTY', 'SABER', 'SABRE', 'SACKS', 'SADLY', 'SAFER', 'SAFES', 'SAGES', 'SAILS',
    'SAINT', 'SAKES', 'SALAD', 'SALES', 'SALLY', 'SALON', 'SALTS', 'SALTY', 'SALVE', 'SANDY',
    'SAPPY', 'SARGE', 'SATAN', 'SATED', 'SATIN', 'SATYR', 'SAUCE', 'SAUCY',     'SAUNA', 'SAVED', 'SAVER', 'SAVES', 'SAVOR', 'SAVVY', 'SAWED', 'SAXES', 'SCABS', 'SCALD',
    'SCALE', 'SCALP', 'SCAMP', 'SCAMS', 'SCANS', 'SCARE', 'SCARF', 'SCARY', 'SCENE', 'SCENT',
    'SCHWA', 'SCION', 'SCOFF', 'SCOLD', 'SCONE', 'SCOOP', 'SCOPE', 'SCORE', 'SCORN', 'SCOTS',
    'SCOUR', 'SCOUT', 'SCOWL', 'SCRAM', 'SCRAP', 'SCREE', 'SCREW', 'SCRUB', 'SCUBA', 'SCUFF',
    'SCULL', 'SCUMS', 'SCURR', 'SCUTE', 'SEALS', 'SEAMS', 'SEARS', 'SEATS', 'SECCO', 'SECTS',
    'SEDAN', 'SEEDS', 'SEEDY', 'SEEKS', 'SEEMS', 'SEEPS', 'SEERS', 'SEGUE', 'SEIZE', 'SELLS',
    'SEMEN', 'SENDS', 'SENSE', 'SEPIA', 'SERIF', 'SERUM', 'SERVE', 'SETUP', 'SEVEN', 'SEVER',
    'SEWED', 'SEWER', 'SEXED', 'SEXES', 'SEXY', 'SHADE', 'SHADY', 'SHAFT', 'SHAKE', 'SHAKY',
    'SHALE', 'SHALL', 'SHAME', 'SHANK', 'SHAPE', 'SHARD', 'SHARE', 'SHARK', 'SHARP', 'SHAVE',
    'SHAWL', 'SHEAR', 'SHEDS', 'SHEEP', 'SHEER', 'SHEET', 'SHELF', 'SHELL', 'SHINE', 'SHINY',
    'SHIPS', 'SHIRK', 'SHIRT', 'SHIVE', 'SHOAL', 'SHOCK', 'SHOED', 'SHOES', 'SHONE', 'SHOOK',
    'SHOOT', 'SHOPS', 'SHORE', 'SHORN', 'SHORT', 'SHOTS', 'SHOUT', 'SHOVE', 'SHOWN', 'SHOWS',
    'SHOWY', 'SHRED', 'SHREW', 'SHRUB', 'SHRUG', 'SHUCK', 'SHUNT', 'SHUSH', 'SHUTS', 'SHYLY',
    'SIBYL', 'SICKO', 'SIDED', 'SIDES', 'SIEGE', 'SIEVE', 'SIGHT', 'SIGMA', 'SIGNS', 'SILKS',
    'SILKY', 'SILLS', 'SILLY', 'SILOS', 'SILTS', 'SILTY', 'SINCE', 'SINES', 'SINGE', 'SINGS',
    'SINKS', 'SINUS', 'SIRED', 'SIREN', 'SIRES', 'SIREP', 'SISSY', 'SITES', 'SITAR', 'SITED',
    'SIXES', 'SIXTH', 'SIXTY', 'SIZED', 'SIZER', 'SIZES', 'SKATE', 'SKEET', 'SKEIN', 'SKEWS',
    'SKIDS', 'SKIED', 'SKIER', 'SKIES', 'SKIFF', 'SKILL', 'SKIMP', 'SKINS', 'SKINT', 'SKIPS',
    'SKIRT', 'SKITS', 'SKULK', 'SKULL', 'SKUNK', 'SLABS', 'SLACK', 'SLAIN', 'SLAMS', 'SLANG',
    'SLANT', 'SLAPS', 'SLASH', 'SLATE', 'SLATS', 'SLAVE', 'SLAYS', 'SLEDS', 'SLEEK', 'SLEEP',
    'SLEET', 'SLEPT', 'SLICE', 'SLICK', 'SLIDE', 'SLIME', 'SLIMY', 'SLING', 'SLINK', 'SLIPS',
    'SLIPT', 'SLITS', 'SLOBS', 'SLOGS', 'SLOOP', 'SLOPE', 'SLOPS', 'SLOTS', 'SLOWS', 'SLUNG',
    'SLUNK', 'SLURP', 'SLURS', 'SLUSH', 'SLUTS', 'SLYLY', 'SMACK', 'SMALL', 'SMART', 'SMASH',
    'SMEAR', 'SMELL', 'SMELT', 'SMILE', 'SMIRK', 'SMITE', 'SMITH', 'SMOCK', 'SMOKE', 'SMOKY',
    'SMOLT', 'SMOTE', 'SMUG', 'SNACK', 'SNAFU', 'SNAGS', 'SNAIL', 'SNAKE', 'SNAKY', 'SNAPS',
    'SNARE', 'SNARL', 'SNEAK', 'SNEER', 'SNIDE', 'SNIFF', 'SNIPE', 'SNIPS', 'SNITS', 'SNOBS',
    'SNOOD', 'SNOOK', 'SNOOP', 'SNORE', 'SNORT', 'SNOTS', 'SNOUT', 'SNOWS', 'SNOWY', 'SNUBS',
    'SNUCK', 'SNUFF', 'SNUGS', 'SOAPY', 'SOARS', 'SOBER', 'SOCKS', 'SODAS', 'SOFAS', 'SOGGY',
    'SOILS', 'SOLAR', 'SOLDI', 'SOLED', 'SOLES', 'SOLID', 'SOLOS', 'SOLVE', 'SONAR', 'SONGS',
    'SONIC', 'SONNY', 'SOOER', 'SOOTH', 'SOOTY', 'SOPHS', 'SORRY', 'SORTS', 'SOULS', 'SOUND',
    'SOUPS', 'SOUPY', 'SOURS', 'SOUTH', 'SOWED', 'SPACE', 'SPADE', 'SPANK', 'SPANS', 'SPARE',
    'SPARK', 'SPARS', 'SPASM', 'SPATS', 'SPAWN', 'SPEAK', 'SPEAR', 'SPECS', 'SPEED', 'SPELL',
    'SPEND', 'SPENT', 'SPERM', 'SPEWS', 'SPICE', 'SPICY', 'SPIED', 'SPIEL', 'SPIES', 'SPIKE',
    'SPIKY', 'SPILL', 'SPILT', 'SPINE', 'SPINS', 'SPINY', 'SPIRE', 'SPIRS', 'SPITE', 'SPITS',
    'SPLIT', 'SPOIL', 'SPOKE', 'SPOOF', 'SPOOK', 'SPOOL', 'SPOON', 'SPORE', 'SPORT', 'SPOTS',
    'SPOUT', 'SPRAY', 'SPREE', 'SPRIG', 'SPUDS', 'SPUME', 'SPUNK', 'SPURS', 'SPURT', 'SQUAD',
    'SQUAT', 'SQUIB', 'SQUID', 'STABS', 'STACK', 'STAFF', 'STAGE', 'STAGS', 'STAID', 'STAIN',
    'STAIR', 'STAKE', 'STALE', 'STALK', 'STALL', 'STAMP', 'STAND', 'STAPH', 'STARE', 'STARK',
    'STARS', 'START', 'STASH', 'STATE', 'STATS', 'STAVE', 'STAYS', 'STEAD', 'STEAK', 'STEAL',
    'STEAM', 'STEED', 'STEEL', 'STEEP', 'STEER', 'STEMS', 'STEPS', 'STERN', 'STICK', 'STIFF',
    'STILL', 'STILT', 'STING', 'STINK', 'STINT', 'STIRK', 'STIRR', 'STOAT', 'STOCK', 'STOIC',
    'STOKE', 'STOLE', 'STOMP', 'STONE', 'STONY', 'STOOD', 'STOOL', 'STOOP', 'STOPS', 'STORE',
    'STORK', 'STORM', 'STORY', 'STOUT', 'STOVE', 'STRAP', 'STRAW', 'STRAY', 'STRIP', 'STROP',
    'STRUT', 'STUCK', 'STUDS', 'STUFF', 'STUMP', 'STUNG', 'STUNK', 'STUNS', 'STUNT', 'STYLE',
    'SUAVE', 'SUGAR', 'SUITE', 'SUITS', 'SULKY', 'SULLY', 'SUMER', 'SUMS', 'SUNNY', 'SUPER',
    'SURER', 'SURFS', 'SURGE', 'SURLY', 'SUSHI', 'SWABS', 'SWAMP', 'SWANS', 'SWAPS', 'SWARD',
    'SWARM', 'SWASH', 'SWATH', 'SWATS', 'SWAYS', 'SWEAR', 'SWEAT', 'SWEEP', 'SWEET', 'SWELL',
    'SWEPT', 'SWIFT', 'SWIGS', 'SWIMS', 'SWINE', 'SWING', 'SWIPE', 'SWIRL', 'SWISH', 'SWISS',
    'SWOON', 'SWOOP', 'SWORD', 'SWORE', 'SWORN', 'SWUNG', 'SYNCH', 'SYNOD', 'SYRUP', 'TABBY',
    'TABLE', 'TABOO', 'TACIT', 'TACKS', 'TACKY', 'TACOS', 'TACTS', 'TAFFY', 'TAILS', 'TAINT',
    'TAKEN', 'TAKER', 'TAKES', 'TALES', 'TALKS', 'TALKY', 'TALLY', 'TALON', 'TAMED', 'TAMER',
    'TAMES', 'TANGS', 'TANKS', 'TANSY', 'TAPED', 'TAPER', 'TAPES', 'TARDY', 'TARES', 'TARNS',
    'TAROT', 'TARPS', 'TARTS', 'TASKS', 'TASTE', 'TASTY', 'TATTY', 'TAUNT', 'TAWNY', 'TAXED',
    'TAXES', 'TAXIS', 'TEACH', 'TEAMS', 'TEARS', 'TEARY', 'TEASE', 'TEATS', 'TEDDY', 'TEENS',
    'TEENY', 'TEETH', 'TELLS', 'TELLY', 'TEMPS', 'TENDS', 'TENOR', 'TENSE', 'TENTH', 'TENTS',
    'TEPID', 'TERMS', 'TERNS', 'TERRY', 'TERSE', 'TESTS', 'TESTY', 'TEXAS', 'TEXTS', 'THANK',
    'THAWS', 'THEFT', 'THEIR', 'THEME', 'THERE', 'THESE', 'THICK', 'THIEF', 'THIGH', 'THING',
    'THINK', 'THIRD', 'THOSE', 'THREE', 'THREW', 'THROW', 'THUDS', 'THUGS', 'THUMB', 'THUMP',
    'THUNK', 'THYME', 'TIARA', 'TIBIA', 'TIDAL', 'TIDES', 'TIDY', 'TIGER', 'TIGHT', 'TIKES',
    'TILDE', 'TILED', 'TILES', 'TILLS', 'TILTS', 'TIMBO', 'TIMED', 'TIMER', 'TIMES', 'TIMID',
    'TINGE', 'TINGS', 'TINNY', 'TINTS', 'TIPSY', 'TIRED', 'TIRES', 'TITLE', 'TOADS', 'TOAST',
    'TODAY', 'TODDS', 'TOFFS', 'TOFU', 'TOGAS', 'TOILS', 'TOKEN', 'TOMBS', 'TOMES', 'TONED',
    'TONER', 'TONGS', 'TONIC', 'TOOLS', 'TOOTS', 'TOPAZ', 'TOPIC', 'TORCH', 'TORSO', 'TOTAL',
    'TOTEM', 'TOUCH', 'TOUGH', 'TOURS', 'TOUTS', 'TOWEL', 'TOWER', 'TOWNS', 'TOXIC', 'TOXIN',
    'TRACE', 'TRACK', 'TRACT', 'TRADE', 'TRAIL', 'TRAIN', 'TRAIT', 'TRAMP', 'TRAPS', 'TRASH',
    'TREAT', 'TREES', 'TREND', 'TRIAL', 'TRIBE', 'TRICK', 'TRIED', 'TRIES', 'TRIGS', 'TRILL',
    'TRIMS', 'TRIOS', 'TRIPS', 'TRITE', 'TROLL', 'TROMP', 'TROOP', 'TROPE', 'TROTS', 'TROUT',
    'TRUCE', 'TRUCK', 'TRUED', 'TRUER', 'TRUES', 'TRULY', 'TRUMP', 'TRUNK', 'TRUSS', 'TRUST',
    'TRUTH', 'TRYST', 'TUBED', 'TUBES', 'TUCKS', 'TUFTS', 'TULIP', 'TULLE', 'TUMOR', 'TUNED',
    'TUNER', 'TUNES', 'TUNIC', 'TURBO', 'TURFS', 'TURNS', 'TUSKS', 'TUTOR', 'TUTUS', 'TWANG',
    'TWEED', 'TWERP', 'TWICE', 'TWIGS', 'TWILL', 'TWINE', 'TWINS', 'TWIRL', 'TWIST', 'TWITS',
    'TYING', 'TYKES', 'TYPED', 'TYPES', 'TYPOS', 'UDDER', 'UGALI', 'UHLAN', 'ULCER', 'ULTRA',
    'UMBER', 'UMIAK', 'UMPHS', 'UNCUT', 'UNDER', 'UNDUE', 'UNFED', 'UNFIT', 'UNIFY', 'UNION',
    'UNITE', 'UNITS', 'UNITY', 'UNLIT', 'UNMIX', 'UNSET', 'UNTIL', 'UNWED', 'UNZIP', 'UPEND',
    'UPPER', 'UPSET', 'URBAN', 'URGED', 'URGES', 'URINE', 'USAGE', 'USERS', 'USHER', 'USING',
    'USUAL', 'USURP', 'USURY', 'UTTER', 'UVULA', 'VAGUE', 'VAILS', 'VAINS', 'VALES', 'VALID',
    'VALOR', 'VALS', 'VALUE', 'VALVE', 'VAMPS', 'VAPOR', 'VARIED', 'VAULT', 'VEERS', 'VEILS',
    'VEINS', 'VENDS', 'VENOM', 'VENTS', 'VENUE', 'VENUS', 'VERBS', 'VERSE', 'VESTS', 'VETCH',
    'VEXED', 'VEXES', 'VIBES', 'VICAR', 'VICES', 'VICHY', 'VICKY', 'VIDEO', 'VIEWS', 'VIGOR',
    'VILLA', 'VINES', 'VINYL', 'VIOLA', 'VIPER', 'VIRAL', 'VIRUS', 'VISAS', 'VISIT', 'VISTA',
    'VITAL', 'VIVID', 'VIXEN', 'VOCAL', 'VODKA', 'VOGUE', 'VOICE', 'VOIDS', 'VOILA', 'VOLTS',
    'VOMIT', 'VOTED', 'VOTER', 'VOTES', 'VOUCH', 'VOWED', 'VOWEL', 'WACKY', 'WADED', 'WADER',
    'WADES', 'WAFTS', 'WAGED', 'WAGER', 'WAGES', 'WAGON', 'WAILS', 'WAIST', 'WAITS', 'WAKED',
    'WAKER', 'WAKES', 'WALKS', 'WALLS', 'WALTZ', 'WANDS', 'WANED', 'WANES', 'WANTS', 'WARDS',
    'WARES', 'WARMS', 'WARNS', 'WARPS', 'WARTS', 'WASTE', 'WATCH', 'WATER', 'WAVED', 'WAVER',
    'WAVES', 'WAXED', 'WAXES', 'WEARY', 'WEAVE', 'WEBBY', 'WEDGE', 'WEEDS', 'WEEDY', 'WEEKS',
    'WEEPS', 'WEIGH', 'WEIRD', 'WELLS', 'WELSH', 'WELTS', 'WENCH', 'WHACK', 'WHALE', 'WHARF',
    'WHEAT', 'WHEEL', 'WHELK', 'WHELM', 'WHENS', 'WHERE', 'WHETS', 'WHEYS', 'WHICH', 'WHIFF',
    'WHILE', 'WHIMS', 'WHINE', 'WHINY', 'WHIPS', 'WHIRL', 'WHIRR', 'WHIRS', 'WHISH', 'WHISK',
    'WHIST', 'WHITE', 'WHITS', 'WHIZZ', 'WHOLE', 'WHOMP', 'WHOOP', 'WHOPS', 'WHORE', 'WHORL',
    'WHOSE', 'WICKS', 'WIDEN', 'WIDER', 'WIDOW', 'WIDTH', 'WIELD', 'WIFES', 'WILES', 'WILLS',
    'WILTS', 'WIMPS', 'WIMPY', 'WINCE', 'WINCH', 'WINDS', 'WINDY', 'WINED', 'WINES', 'WINGS',
    'WINKS', 'WIPED', 'WIPER', 'WIPES', 'WIRED', 'WIRER', 'WIRES', 'WISED', 'WISER', 'WISES',
    'WISPS', 'WITCH', 'WIZEN', 'WOKS', 'WOLDS', 'WOMAN', 'WOMBS', 'WOMEN', 'WOODS', 'WOODY',
    'WOOED', 'WOOER', 'WOOFS', 'WOOLS', 'WOOLY', 'WOOZY', 'WORDS', 'WORDY', 'WORKS', 'WORLD',
    'WORMS', 'WORMY', 'WORRY', 'WORSE', 'WORST', 'WORTH', 'WOULD', 'WOUND', 'WOVEN', 'WOWED',
    'WRACK', 'WRAPS', 'WRATH', 'WREAK', 'WRECK', 'WRENS', 'WREST', 'WRIED', 'WRIES', 'WRING',
    'WRIST', 'WRITE', 'WRITS', 'WRONG', 'WROTE', 'WRUNG', 'WRYER', 'WRYLY', 'WYLIE', 'XRAYS',
    'YACHT', 'YACHD', 'YACKS', 'YAHOO', 'YAK', 'YAMS', 'YANKS', 'YARDS', 'YARNS', 'YAWNS',
    'YEARS', 'YEAST', 'YEATS', 'YELLS', 'YELPS', 'YIELF', 'YIELD', 'YIPES', 'YODEL', 'YOUNG',
    'YOURS', 'YOUTH', 'YOWLS', 'YUCKY', 'YUMMY', 'ZAPPY', 'ZEBRA', 'ZEROS', 'ZESTS', 'ZESTY',
    'ZINCS', 'ZINGS', 'ZINGY', 'ZIPPY', 'ZONAL', 'ZONED', 'ZONES', 'ZOOMS'
]; 


function openModal() {
            document.getElementById('modalOverlay').classList.add('active');
        }

        function closeModal(event) {
            // Close if clicking outside modal or on close button
            if (!event || event.target === document.getElementById('modalOverlay') || event.target.classList.contains('close-btn')) {
                document.getElementById('modalOverlay').classList.remove('active');
            }
        }

        // Close modal with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeModal();
            }
        });



// Game state
let currentWord = '';
let currentGuess = '';
let currentRow = 0;
let gameOver = false;
let keyboardState = {};

// Initialize game
function initGame() {
    try {
        createBoard();
        setupKeyboard();
        startNewGame();
    } catch (error) {
        console.error('Game initialization error:', error);
        showMessage('Game failed to load. Please refresh the page.', 'error');
    }
}

function createBoard() {
    const board = document.getElementById('board');
    board.innerHTML = '';
    
    for (let i = 0; i < 6; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        row.setAttribute('data-row', i);
        
        for (let j = 0; j < 5; j++) {
            const tile = document.createElement('div');
            tile.className = 'tile';
            tile.setAttribute('data-row', i);
            tile.setAttribute('data-col', j);
            row.appendChild(tile);
        }
        
        board.appendChild(row);
    }
}

function setupKeyboard() {
    try {
        const keys = document.querySelectorAll('.key');
        keys.forEach(key => {
            key.addEventListener('click', (e) => {
                e.preventDefault();
                const keyValue = key.getAttribute('data-key');
                if (keyValue) {
                    handleKeyPress(keyValue);
                }
            });
        });

        // Physical keyboard support
        document.addEventListener('keydown', (e) => {
            e.preventDefault();
            const key = e.key.toUpperCase();
            if (key === 'ENTER') {
                handleKeyPress('ENTER');
            } else if (key === 'BACKSPACE') {
                handleKeyPress('BACKSPACE');
            } else if (/^[A-Z]$/.test(key)) {
                handleKeyPress(key);
            }
        });
    } catch (error) {
        console.error('Keyboard setup error:', error);
    }
}

function startNewGame() {
    currentWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    currentGuess = '';
    currentRow = 0;
    gameOver = false;
    keyboardState = {};
    
    // Reset board
    const tiles = document.querySelectorAll('.tile');
    tiles.forEach(tile => {
        tile.textContent = '';
        tile.className = 'tile';
    });

    // Reset keyboard
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
        key.className = key.classList.contains('wide') ? 'key wide' : 'key';
    });

    console.log('New word:', currentWord); // For testing - remove in production 
}

function handleKeyPress(key) {
    try {
        if (gameOver) return;

        if (key === 'ENTER') {
            if (currentGuess.length === 5) {
                if (WORDS.includes(currentGuess)) {
                    submitGuess();
                } else {
                    showMessage('Not in word list', 'error');
                }
            } else {
                showMessage('Not enough letters', 'error');
            }
        } else if (key === 'BACKSPACE') {
            if (currentGuess.length > 0) {
                currentGuess = currentGuess.slice(0, -1);
                updateCurrentRow();
            }
        } else if (/^[A-Z]$/.test(key) && currentGuess.length < 5) {
            currentGuess += key;
            updateCurrentRow();
        }
    } catch (error) {
        console.error('Key press error:', error);
        showMessage('Input error occurred', 'error');
    }
}

function updateCurrentRow() {
    try {
        // Get tiles for current row
        const row = document.querySelector(`[data-row="${currentRow}"]`);
        if (!row) return;
        
        const tiles = row.querySelectorAll('.tile');
        
        for (let i = 0; i < 5; i++) {
            const tile = tiles[i];
            if (tile) {
                if (i < currentGuess.length) {
                    tile.textContent = currentGuess[i];
                    tile.classList.add('filled');
                } else {
                    tile.textContent = '';
                    tile.classList.remove('filled');
                }
            }
        }
    } catch (error) {
        console.error('Update row error:', error);
    }
}

function submitGuess() {
    try {
        // Get tiles for current row
        const row = document.querySelector(`[data-row="${currentRow}"]`);
        if (!row) return;
        
        const tiles = row.querySelectorAll('.tile');
        const guess = currentGuess;
        const word = currentWord;
        
        // Create arrays to track letter usage
        const wordLetters = word.split('');
        const guessLetters = guess.split('');
        const results = new Array(5).fill('absent');
        
        // First pass: mark correct letters
        for (let i = 0; i < 5; i++) {
            if (guessLetters[i] === wordLetters[i]) {
                results[i] = 'correct';
                wordLetters[i] = null; // Mark as used
                guessLetters[i] = null; // Mark as used
            }
        }
        
        // Second pass: mark present letters
        for (let i = 0; i < 5; i++) {
            if (guessLetters[i] !== null) {
                const letterIndex = wordLetters.indexOf(guessLetters[i]);
                if (letterIndex !== -1) {
                    results[i] = 'present';
                    wordLetters[letterIndex] = null; // Mark as used
                }
            }
        }

        // Animate tiles and update keyboard
        tiles.forEach((tile, index) => {
            setTimeout(() => {
                tile.classList.add('flip');
                setTimeout(() => {
                    tile.classList.add(results[index]);
                    updateKeyboard(guess[index], results[index]);
                }, 300);
            }, index * 100);
        });

        // Check win/lose conditions
        setTimeout(() => {
            if (guess === word) {
                gameOver = true;
                showMessage('Congratulations! 🎉', 'success');
            } else if (currentRow === 5) {
                gameOver = true;
                showMessage(`Game Over! The word was: ${word}`, 'error');
            } else {
                currentRow++;
                currentGuess = '';
            }
        }, 600);
    } catch (error) {
        console.error('Submit guess error:', error);
        showMessage('Error submitting guess', 'error');
    }
}

function updateKeyboard(letter, result) {
    const keyElement = document.querySelector(`[data-key="${letter}"]`);
    if (!keyElement) return;

    const currentState = keyboardState[letter] || 'unused';
    
    // Priority: correct > present > absent
    if (result === 'correct' || 
        (result === 'present' && currentState !== 'correct') ||
        (result === 'absent' && currentState === 'unused')) {
        keyboardState[letter] = result;
        keyElement.classList.remove('correct', 'present', 'absent');
        keyElement.classList.add(result);
    }
}

function showMessage(text, type = '') {
    const message = document.getElementById('message');
    message.textContent = text;
    message.className = `message ${type}`;
    message.classList.add('show');
    
    setTimeout(() => {
        message.classList.remove('show');
    }, 2000);
}

// Start the game when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing game...');
    initGame();
});