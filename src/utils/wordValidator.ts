// Common English words for validation
// This is a curated list of common valid words to prevent gibberish
// Organized alphabetically for easier maintenance

const COMMON_WORDS = new Set([
  // A words
  'able', 'about', 'above', 'accept', 'across', 'action', 'active', 'actual', 'add', 'address',
  'adult', 'affect', 'after', 'again', 'against', 'agency', 'agent', 'agree', 'ahead', 'air',
  'all', 'allow', 'almost', 'alone', 'along', 'already', 'also', 'although', 'always', 'amount',
  'analysis', 'and', 'animal', 'another', 'answer', 'any', 'anyone', 'anything', 'appear', 'apply',
  'approach', 'area', 'argue', 'arm', 'around', 'arrive', 'art', 'article', 'artist', 'ask',
  'assume', 'attack', 'attention', 'attorney', 'audience', 'author', 'authority', 'available', 'avoid', 'away',

  // B words
  'baby', 'back', 'bad', 'bag', 'ball', 'bank', 'bar', 'base', 'beat', 'beautiful',
  'because', 'become', 'bed', 'before', 'begin', 'behavior', 'behind', 'believe', 'benefit', 'best',
  'better', 'between', 'beyond', 'big', 'bill', 'billion', 'bit', 'black', 'blood', 'blue',
  'board', 'body', 'book', 'born', 'both', 'box', 'boy', 'break', 'bring', 'brother',
  'budget', 'build', 'building', 'business', 'but', 'buy',

  // C words
  'call', 'camera', 'campaign', 'can', 'cancer', 'candidate', 'capital', 'car', 'card', 'care',
  'career', 'carry', 'case', 'catch', 'cause', 'cell', 'center', 'central', 'century', 'certain',
  'chair', 'challenge', 'chance', 'change', 'character', 'charge', 'check', 'child', 'choice', 'choose',
  'church', 'citizen', 'city', 'civil', 'claim', 'class', 'clear', 'close', 'coach', 'cold',
  'collection', 'college', 'color', 'come', 'commercial', 'common', 'community', 'company', 'compare', 'computer',
  'concern', 'condition', 'conference', 'congress', 'consider', 'consumer', 'contain', 'continue', 'control', 'cost',
  'could', 'country', 'couple', 'course', 'court', 'cover', 'create', 'crime', 'cultural', 'culture',
  'cup', 'current', 'customer', 'cut',

  // D words
  'dark', 'data', 'daughter', 'day', 'dead', 'deal', 'death', 'debate', 'decade', 'decide',
  'decision', 'deep', 'defense', 'degree', 'democratic', 'describe', 'design', 'despite', 'detail', 'determine',
  'develop', 'development', 'die', 'difference', 'different', 'difficult', 'dinner', 'direction', 'director', 'discover',
  'discuss', 'discussion', 'disease', 'doctor', 'dog', 'door', 'down', 'draw', 'dream', 'drive',
  'drop', 'drug', 'during', 'duty',

  // E words
  'each', 'early', 'east', 'easy', 'eat', 'economic', 'economy', 'edge', 'education', 'effect',
  'effort', 'eight', 'either', 'election', 'else', 'employee', 'end', 'energy', 'enjoy', 'enough',
  'enter', 'entire', 'environment', 'environmental', 'especially', 'establish', 'even', 'evening', 'event', 'ever',
  'every', 'everybody', 'everyone', 'everything', 'evidence', 'exactly', 'example', 'executive', 'exist', 'expect',
  'experience', 'expert', 'explain', 'eye',

  // F words
  'face', 'fact', 'factor', 'fail', 'fall', 'family', 'far', 'fast', 'father', 'fear',
  'federal', 'feel', 'feeling', 'few', 'field', 'fight', 'figure', 'fill', 'film', 'final',
  'finally', 'financial', 'find', 'fine', 'finger', 'finish', 'fire', 'firm', 'first', 'fish',
  'five', 'floor', 'fly', 'focus', 'follow', 'food', 'foot', 'for', 'force', 'foreign',
  'forget', 'form', 'former', 'forward', 'four', 'free', 'friend', 'from', 'front', 'full',
  'fund', 'future',

  // G words
  'game', 'garden', 'gas', 'general', 'generation', 'get', 'girl', 'give', 'glass', 'goal',
  'good', 'government', 'great', 'green', 'ground', 'group', 'grow', 'growth', 'guess', 'gun',

  // H words
  'hair', 'half', 'hand', 'hang', 'happen', 'happy', 'hard', 'have', 'head', 'health',
  'hear', 'heart', 'heat', 'heavy', 'help', 'her', 'here', 'high', 'him', 'himself',
  'his', 'history', 'hit', 'hold', 'home', 'hope', 'hospital', 'hot', 'hotel', 'hour',
  'house', 'how', 'however', 'huge', 'human', 'hundred',

  // I words
  'idea', 'identify', 'image', 'imagine', 'impact', 'important', 'improve', 'include', 'including', 'increase',
  'indeed', 'indicate', 'individual', 'industry', 'information', 'inside', 'instead', 'institution', 'interest', 'interesting',
  'international', 'interview', 'into', 'investment', 'involve', 'issue', 'item', 'its', 'itself',

  // J words
  'job', 'join', 'just',

  // K words
  'keep', 'key', 'kid', 'kill', 'kind', 'kitchen', 'know', 'knowledge',

  // L words
  'lack', 'lady', 'land', 'language', 'large', 'last', 'late', 'later', 'laugh', 'law',
  'lawyer', 'lay', 'lead', 'leader', 'learn', 'least', 'leave', 'left', 'leg', 'legal',
  'less', 'let', 'letter', 'level', 'lie', 'life', 'light', 'like', 'likely', 'line',
  'list', 'listen', 'little', 'live', 'local', 'long', 'look', 'lose', 'loss', 'lot',
  'love', 'low',

  // M words
  'machine', 'magazine', 'main', 'maintain', 'major', 'majority', 'make', 'man', 'manage', 'management',
  'manager', 'many', 'market', 'marriage', 'material', 'matter', 'may', 'maybe', 'mean', 'measure',
  'media', 'medical', 'meet', 'meeting', 'member', 'memory', 'mention', 'message', 'method', 'middle',
  'might', 'military', 'million', 'mind', 'minute', 'miss', 'mission', 'model', 'modern', 'moment',
  'money', 'month', 'more', 'morning', 'most', 'mother', 'mouth', 'move', 'movement', 'movie',
  'much', 'music', 'must',

  // N words
  'name', 'nation', 'national', 'natural', 'nature', 'near', 'nearly', 'necessary', 'need', 'network',
  'never', 'new', 'news', 'newspaper', 'next', 'nice', 'night', 'none', 'nor', 'north',
  'not', 'note', 'nothing', 'notice', 'now', 'number',

  // O words
  'occur', 'off', 'offer', 'office', 'officer', 'official', 'often', 'oil', 'old', 'once',
  'one', 'only', 'onto', 'open', 'operation', 'opportunity', 'option', 'or', 'order', 'organization',
  'other', 'others', 'our', 'out', 'outside', 'over', 'own', 'owner',

  // P words
  'page', 'pain', 'painting', 'paper', 'parent', 'part', 'participant', 'particular', 'particularly', 'partner',
  'party', 'pass', 'past', 'patient', 'pattern', 'pay', 'peace', 'people', 'per', 'perform',
  'performance', 'perhaps', 'period', 'person', 'personal', 'phone', 'physical', 'pick', 'picture', 'piece',
  'place', 'plan', 'plant', 'play', 'player', 'please', 'point', 'police', 'policy', 'political',
  'politics', 'poor', 'popular', 'population', 'position', 'positive', 'possible', 'power', 'practice', 'prepare',
  'present', 'president', 'pressure', 'pretty', 'prevent', 'price', 'private', 'probably', 'problem', 'process',
  'produce', 'product', 'production', 'professional', 'professor', 'program', 'project', 'property', 'protect', 'prove',
  'provide', 'public', 'pull', 'purpose', 'push', 'put',

  // Q words
  'quality', 'question', 'quickly', 'quite',

  // R words
  'race', 'radio', 'raise', 'range', 'rate', 'rather', 'reach', 'read', 'ready', 'real',
  'reality', 'realize', 'really', 'reason', 'receive', 'recent', 'recently', 'recognize', 'record', 'red',
  'reduce', 'reflect', 'region', 'relate', 'relationship', 'religious', 'remain', 'remember', 'remove', 'report',
  'represent', 'republican', 'require', 'research', 'resource', 'respond', 'response', 'responsibility', 'rest', 'result',
  'return', 'reveal', 'rich', 'right', 'rise', 'risk', 'road', 'rock', 'role', 'room',
  'rule', 'run',

  // S words
  'safe', 'same', 'save', 'say', 'scene', 'school', 'science', 'scientist', 'score', 'sea',
  'season', 'seat', 'second', 'section', 'security', 'see', 'seek', 'seem', 'sell', 'send',
  'senior', 'sense', 'series', 'serious', 'serve', 'service', 'set', 'seven', 'several', 'shake',
  'share', 'she', 'shoot', 'short', 'shot', 'should', 'shoulder', 'show', 'side', 'sign',
  'significant', 'similar', 'simple', 'simply', 'since', 'sing', 'single', 'sister', 'sit', 'site',
  'situation', 'six', 'size', 'skill', 'skin', 'small', 'smile', 'social', 'society', 'soldier',
  'some', 'somebody', 'someone', 'something', 'sometimes', 'son', 'song', 'soon', 'sort', 'sound',
  'source', 'south', 'southern', 'space', 'speak', 'special', 'specific', 'speech', 'spend', 'sport',
  'spring', 'staff', 'stage', 'stand', 'standard', 'star', 'start', 'state', 'statement', 'station',
  'stay', 'step', 'still', 'stock', 'stop', 'store', 'story', 'strategy', 'street', 'strong',
  'structure', 'student', 'study', 'stuff', 'style', 'subject', 'success', 'successful', 'such', 'suddenly',
  'suffer', 'suggest', 'summer', 'support', 'sure', 'surface', 'system',

  // T words
  'table', 'take', 'talk', 'task', 'tax', 'teach', 'teacher', 'team', 'technology', 'television',
  'tell', 'ten', 'tend', 'term', 'test', 'than', 'thank', 'that', 'the', 'their',
  'them', 'themselves', 'then', 'theory', 'there', 'these', 'they', 'thing', 'think', 'third',
  'this', 'those', 'though', 'thought', 'thousand', 'threat', 'three', 'through', 'throughout', 'throw',
  'thus', 'time', 'today', 'together', 'tonight', 'too', 'top', 'total', 'tough', 'toward',
  'town', 'trade', 'traditional', 'training', 'travel', 'treat', 'treatment', 'tree', 'trial', 'trip',
  'trouble', 'true', 'truth', 'try', 'turn', 'turtle', 'twelve', 'twenty', 'two', 'type',

  // U words
  'under', 'understand', 'unit', 'until', 'upon', 'use', 'usually',

  // V words
  'value', 'various', 'very', 'victim', 'view', 'violence', 'visit', 'voice', 'vote',

  // W words
  'wait', 'walk', 'wall', 'want', 'war', 'watch', 'water', 'way', 'weapon', 'wear',
  'week', 'weight', 'well', 'west', 'western', 'what', 'whatever', 'when', 'where', 'whether',
  'which', 'while', 'white', 'who', 'whole', 'whom', 'whose', 'why', 'wide', 'wife',
  'will', 'win', 'wind', 'window', 'wish', 'with', 'within', 'without', 'woman', 'wonder',
  'word', 'work', 'worker', 'world', 'worry', 'would', 'write', 'writer', 'wrong',

  // Y words
  'yard', 'yeah', 'year', 'yes', 'yet', 'you', 'young', 'your', 'yourself',

  // Additional common words for gameplay
  'apple', 'elephant', 'tiger', 'rabbit', 'radio', 'orange', 'eleven', 'never', 'river', 'robot',
  'time', 'eagle', 'energy', 'yellow', 'wonder', 'rocket', 'tree', 'enter', 'random', 'music',

  // Z words
  'zero', 'zone',

  // More A words
  'achieve', 'acid', 'acre', 'actor', 'actress', 'adopt', 'advance', 'advantage', 'adventure', 'advertise',
  'advice', 'affair', 'afford', 'afraid', 'age', 'ago', 'agricultural', 'aid', 'aim', 'aircraft',
  'airline', 'airport', 'alarm', 'album', 'alcohol', 'alive', 'alliance', 'ally', 'alter', 'alternative',
  'amazing', 'ambition', 'ambulance', 'amend', 'ancient', 'anger', 'angle', 'angry', 'anniversary', 'announce',
  'annual', 'apartment', 'apologize', 'apparent', 'appeal', 'appetite', 'apple', 'appliance', 'application',
  'appoint', 'appreciate', 'approve', 'area', 'arena', 'arise', 'armed', 'armor', 'army', 'arrange',
  'arrest', 'arrival', 'arrow', 'ash', 'aspect', 'assembly', 'assess', 'asset', 'assign', 'assist',
  'associate', 'association', 'assure', 'athlete', 'atmosphere', 'atom', 'attach', 'attempt', 'attend', 'attract',
  'auction', 'august', 'aunt', 'auto', 'automatic', 'autumn', 'average', 'aviation', 'award', 'aware',
  'awesome', 'awful', 'awkward',

  // More B words
  'bachelor', 'bacon', 'bacteria', 'badge', 'badly', 'balance', 'balcony', 'bald', 'ballet', 'balloon',
  'ballot', 'ban', 'banana', 'band', 'bang', 'banking', 'banner', 'bare', 'barely', 'bargain',
  'barn', 'barrel', 'barrier', 'basin', 'basis', 'basket', 'basketball', 'bath', 'bathroom', 'battery',
  'battle', 'bay', 'beach', 'bean', 'bear', 'beard', 'beast', 'bedroom', 'beef', 'beer',
  'behavioral', 'bell', 'belong', 'belt', 'bench', 'bend', 'beneath', 'berry', 'beside', 'bet',
  'betray', 'bicycle', 'bike', 'bind', 'biography', 'biological', 'bird', 'birth', 'birthday', 'biscuit',
  'bishop', 'bite', 'bitter', 'blade', 'blame', 'blank', 'blanket', 'blast', 'bleed', 'blend',
  'bless', 'blessing', 'blind', 'block', 'blogger', 'blonde', 'bloom', 'blossom', 'blow', 'boat',
  'bold', 'bomb', 'bond', 'bone', 'bonus', 'boom', 'boost', 'boot', 'border', 'bore',
  'borrow', 'boss', 'bother', 'bottle', 'bottom', 'bounce', 'bound', 'boundary', 'bowl', 'brain',
  'brake', 'branch', 'brand', 'brass', 'brave', 'bread', 'breakdown', 'breakfast', 'breast', 'breath',
  'breathe', 'breed', 'breeze', 'brick', 'bride', 'bridge', 'brief', 'bright', 'brilliant', 'broad',
  'broadcast', 'broken', 'bronze', 'brook', 'broom', 'brown', 'brush', 'bubble', 'buck', 'bucket',
  'buddy', 'bug', 'bulk', 'bullet', 'bump', 'bunch', 'bundle', 'burden', 'bureau', 'burial',
  'burn', 'burst', 'bury', 'bush', 'busy', 'butter', 'button', 'buyer', 'buzz',

  // More C words
  'cabin', 'cabinet', 'cable', 'cafe', 'cage', 'cake', 'calculate', 'calendar', 'calf', 'calm',
  'calorie', 'camp', 'can', 'canal', 'cancel', 'candle', 'candy', 'cannon', 'cannot', 'canvas',
  'capable', 'capacity', 'cape', 'capital', 'captain', 'capture', 'carbon', 'cargo', 'carpenter', 'carpet',
  'carrot', 'cart', 'cash', 'casino', 'cast', 'castle', 'casual', 'catalog', 'catastrophe', 'category',
  'cathedral', 'cattle', 'caught', 'caution', 'cave', 'cease', 'ceiling', 'celebrate', 'celebrity', 'cement',
  'cemetery', 'census', 'cent', 'ceremony', 'chain', 'chamber', 'champion', 'channel', 'chaos', 'chapter',
  'characteristic', 'charm', 'chart', 'chase', 'cheap', 'cheat', 'cheek', 'cheer', 'cheese', 'chef',
  'chemical', 'chemistry', 'cherry', 'chess', 'chest', 'chicken', 'chief', 'childhood', 'chill', 'chimney',
  'chin', 'chip', 'chocolate', 'choir', 'chop', 'chord', 'chorus', 'chronic', 'chunk', 'cigarette',
  'cinema', 'circle', 'circuit', 'circumstance', 'cite', 'citizenship', 'classic', 'classify', 'classroom', 'clause',
  'clay', 'clean', 'clerk', 'clever', 'click', 'client', 'cliff', 'climate', 'climb', 'clinic',
  'clip', 'clock', 'closet', 'cloth', 'clothing', 'cloud', 'club', 'clue', 'cluster', 'coalition',
  'coast', 'coat', 'code', 'coffee', 'coin', 'collapse', 'collar', 'colleague', 'collect', 'collective',
  'colonial', 'colony', 'column', 'combine', 'comedy', 'comfort', 'comfortable', 'command', 'commander', 'comment',
  'commerce', 'commission', 'commit', 'commitment', 'committee', 'commodity', 'communicate', 'communication', 'communist', 'compact',
  'companion', 'comparable', 'comparative', 'comparison', 'compassion', 'compel', 'compensate', 'compete', 'competent', 'competition',
  'competitive', 'competitor', 'complain', 'complaint', 'complete', 'complex', 'complicated', 'component', 'compose', 'composition',
  'compound', 'comprehensive', 'comprise', 'compromise', 'comrade', 'conceal', 'concede', 'conceive', 'concentrate', 'concentration',
  'concept', 'conception', 'conclude', 'conclusion', 'concrete', 'condemn', 'conduct', 'cone', 'confess', 'confidence',
  'confident', 'confine', 'confirm', 'conflict', 'confront', 'confuse', 'confusion', 'congratulate', 'connect', 'connection',
  'conquer', 'conquest', 'conscience', 'conscious', 'consensus', 'consent', 'consequence', 'conservative', 'conservation', 'considerably',
  'consideration', 'consist', 'consistent', 'constant', 'constitute', 'constitution', 'constitutional', 'construct', 'construction', 'consult',
  'consultant', 'consume', 'contact', 'container', 'contemporary', 'contempt', 'contend', 'content', 'contest', 'context',
  'continent', 'contract', 'contractor', 'contradict', 'contrary', 'contrast', 'contribute', 'contribution', 'controversy', 'convenience',
  'convenient', 'convention', 'conventional', 'conversation', 'conversion', 'convert', 'convey', 'convict', 'conviction', 'convince',
  'cook', 'cookie', 'cool', 'cooperate', 'cooperation', 'coordinate', 'cop', 'cope', 'copy', 'copyright',
  'cord', 'core', 'corn', 'corner', 'corporate', 'corporation', 'correct', 'correspondent', 'corridor', 'corrupt',
  'corruption', 'cosmic', 'costly', 'costume', 'cottage', 'cotton', 'couch', 'cough', 'council', 'counsel',
  'count', 'counter', 'county', 'courage', 'courtesy', 'cousin', 'covenant', 'coverage', 'cow', 'coward',
  'cowboy', 'crack', 'cradle', 'craft', 'crash', 'crate', 'crawl', 'crazy', 'cream', 'creature',
  'credit', 'creek', 'crew', 'cricket', 'criminal', 'crisis', 'crisp', 'criteria', 'critic', 'critical',
  'criticism', 'criticize', 'crop', 'cross', 'crowd', 'crown', 'crude', 'cruel', 'cruise', 'crush',
  'cry', 'crystal', 'cube', 'cultivate', 'cultural', 'curiosity', 'curious', 'curl', 'currency', 'curse',
  'curtain', 'curve', 'cushion', 'custody', 'custom', 'cycle', 'cylinder',

  // More D words
  'daily', 'dairy', 'dam', 'damage', 'dame', 'damn', 'damp', 'dance', 'danger', 'dangerous',
  'dare', 'darkness', 'darling', 'dash', 'database', 'date', 'dawn', 'deadly', 'deaf', 'dealer',
  'dear', 'debris', 'debt', 'debut', 'decay', 'deceive', 'decent', 'deception', 'deck', 'declaration',
  'declare', 'decline', 'decorate', 'decrease', 'dedicate', 'deed', 'deem', 'deer', 'defeat', 'defect',
  'defend', 'defendant', 'defender', 'defensive', 'deficit', 'define', 'definite', 'definitely', 'definition', 'delay',
  'delegate', 'delete', 'deliberate', 'delicate', 'delight', 'deliver', 'delivery', 'demand', 'democracy', 'demonstrate',
  'demonstration', 'denial', 'dense', 'density', 'dental', 'deny', 'depart', 'department', 'departure', 'depend',
  'dependent', 'depict', 'deploy', 'depress', 'depression', 'depth', 'deputy', 'derive', 'descend', 'descendant',
  'descent', 'description', 'desert', 'deserve', 'designer', 'desirable', 'desire', 'desk', 'despair', 'desperate',
  'destination', 'destiny', 'destroy', 'destruction', 'destructive', 'detect', 'detective', 'detector', 'deter', 'deteriorate',
  'determination', 'devastating', 'device', 'devil', 'devise', 'devote', 'diagnose', 'diagnosis', 'diagram', 'dialogue',
  'diameter', 'diamond', 'diary', 'dictate', 'dictionary', 'differ', 'digital', 'dignity', 'dilemma', 'dimension',
  'dine', 'dining', 'dinosaur', 'dioxide', 'diplomat', 'diplomatic', 'dire', 'direct', 'dirt', 'dirty',
  'disability', 'disabled', 'disagree', 'disappear', 'disappoint', 'disaster', 'disc', 'discard', 'discharge', 'disciple',
  'discipline', 'disclose', 'discount', 'discourse', 'discrete', 'discriminate', 'discrimination', 'dish', 'dismiss', 'disorder',
  'display', 'disposal', 'dispose', 'dispute', 'disrupt', 'dissolve', 'distance', 'distant', 'distinct', 'distinction',
  'distinctive', 'distinguish', 'distort', 'distract', 'distress', 'distribute', 'distribution', 'district', 'disturb', 'dive',
  'diverse', 'diversity', 'divide', 'dividend', 'divine', 'division', 'divorce', 'dock', 'doctrine', 'document',
  'documentary', 'dodge', 'doll', 'dollar', 'dolphin', 'domain', 'dome', 'domestic', 'dominant', 'dominate',
  'donate', 'donation', 'donkey', 'doom', 'dose', 'dot', 'double', 'doubt', 'doubtful', 'dough',
  'dove', 'downtown', 'dozen', 'draft', 'drag', 'dragon', 'drain', 'drama', 'dramatic', 'dramatically',
  'drank', 'drastic', 'drawer', 'dread', 'dreadful', 'drift', 'drill', 'drink', 'drip', 'driver',
  'drown', 'drum', 'drunk', 'dry', 'dual', 'duck', 'due', 'dull', 'dumb', 'dump',
  'duration', 'dusk', 'dust', 'dwarf', 'dwell', 'dwelling', 'dynamic',

  // More E words
  'eager', 'ear', 'earl', 'earn', 'earnings', 'earth', 'earthquake', 'ease', 'eastern', 'echo',
  'eclipse', 'ecological', 'ecology', 'economical', 'economist', 'ecosystem', 'editorial', 'educate', 'educator', 'eerie',
  'effective', 'effectively', 'efficiency', 'efficient', 'egg', 'ego', 'eighteen', 'eighth', 'eighty', 'elaborate',
  'elbow', 'elder', 'elderly', 'elect', 'electric', 'electrical', 'electricity', 'electronic', 'electronics', 'elegant',
  'element', 'elementary', 'elevate', 'elevator', 'eliminate', 'elite', 'embassy', 'embrace', 'emerge', 'emergency',
  'emission', 'emit', 'emotion', 'emotional', 'emperor', 'emphasis', 'emphasize', 'empire', 'employ', 'employer',
  'employment', 'empty', 'enable', 'enact', 'encounter', 'encourage', 'ending', 'endless', 'endorse', 'enemy',
  'energetic', 'enforce', 'enforcement', 'engage', 'engagement', 'engine', 'engineer', 'engineering', 'enhance', 'enlighten',
  'enormous', 'enquiry', 'enrich', 'enroll', 'ensure', 'enterprise', 'entertain', 'entertainment', 'enthusiasm', 'enthusiastic',
  'entitle', 'entity', 'entrance', 'entrepreneur', 'entry', 'envelope', 'envision', 'envy', 'enzyme', 'epic',
  'epidemic', 'episode', 'equal', 'equally', 'equality', 'equation', 'equip', 'equipment', 'equity', 'equivalent',
  'era', 'erase', 'erect', 'erosion', 'error', 'erupt', 'eruption', 'escalate', 'escape', 'escort',
  'essay', 'essence', 'essential', 'estate', 'estimate', 'eternal', 'ethical', 'ethics', 'ethnic', 'evaluate',
  'evaluation', 'evaporate', 'eve', 'eventual', 'eventually', 'everyday', 'evident', 'evil', 'evoke', 'evolution',
  'evolve', 'exact', 'exaggerate', 'exam', 'examination', 'examine', 'exceed', 'excel', 'excellence', 'excellent',
  'except', 'exception', 'exceptional', 'excerpt', 'excess', 'excessive', 'exchange', 'excite', 'excitement', 'exciting',
  'exclaim', 'exclude', 'exclusive', 'excuse', 'execute', 'execution', 'exempt', 'exercise', 'exert', 'exhaust',
  'exhibit', 'exhibition', 'exile', 'existence', 'existing', 'exit', 'exotic', 'expand', 'expansion', 'expedition',
  'expel', 'expenditure', 'expense', 'expensive', 'experimental', 'expertise', 'expire', 'explanation', 'explicit', 'explode',
  'exploit', 'exploitation', 'exploration', 'explore', 'explorer', 'explosion', 'explosive', 'export', 'expose', 'exposure',
  'express', 'expression', 'extend', 'extension', 'extensive', 'extent', 'exterior', 'external', 'extinct', 'extinction',
  'extra', 'extract', 'extraordinary', 'extreme', 'extremely',

  // More F words
  'fabric', 'fabricate', 'fabulous', 'facade', 'facilitate', 'facility', 'faction', 'factory', 'factual', 'faculty',
  'fade', 'fairy', 'faith', 'faithful', 'fake', 'falcon', 'fame', 'familiar', 'famine', 'famous',
  'fan', 'fancy', 'fantastic', 'fantasy', 'fare', 'farewell', 'farmer', 'farming', 'farther', 'fascinate',
  'fashion', 'fatal', 'fate', 'faulty', 'favor', 'favorable', 'favorite', 'fax', 'feast', 'feat',
  'feather', 'feature', 'february', 'federation', 'fee', 'feeble', 'feedback', 'fellow', 'fellowship', 'female',
  'feminine', 'fence', 'ferry', 'fertile', 'festival', 'fetch', 'feudal', 'fever', 'fiber', 'fiction',
  'fierce', 'fifteen', 'fifth', 'fifty', 'fighter', 'filing', 'filter', 'filth', 'finale', 'finance',
  'findings', 'finest', 'finite', 'fireplace', 'firework', 'firmly', 'fiscal', 'fisherman', 'fist', 'fitness',
  'flame', 'flank', 'flap', 'flare', 'flash', 'flask', 'flat', 'flavor', 'flaw', 'flee',
  'fleet', 'flesh', 'flexible', 'flick', 'flight', 'fling', 'flip', 'float', 'flock', 'flood',
  'flora', 'flour', 'flourish', 'flow', 'flower', 'flu', 'fluid', 'flush', 'foam', 'focal',
  'fog', 'folk', 'folklore', 'folly', 'fond', 'font', 'forbid', 'forecast', 'forehead', 'foremost',
  'foresee', 'forest', 'forge', 'forgive', 'fork', 'formal', 'format', 'formation', 'formula', 'fort',
  'forth', 'fortify', 'fortress', 'fortunate', 'fortune', 'forty', 'forum', 'fossil', 'foster', 'foul',
  'foundation', 'founder', 'fountain', 'fox', 'fraction', 'fracture', 'fragile', 'fragment', 'fragrance', 'frail',
  'frame', 'framework', 'franchise', 'frank', 'frankly', 'fraud', 'freak', 'freedom', 'freely', 'freeway',
  'freeze', 'freight', 'french', 'frequency', 'frequent', 'frequently', 'fresh', 'friction', 'friday', 'fridge',
  'friendship', 'fright', 'frighten', 'fringe', 'frog', 'frontier', 'frost', 'frown', 'frozen', 'fruit',
  'frustrate', 'frustration', 'fuel', 'fulfill', 'fulfillment', 'fulltime', 'fully', 'fume', 'function', 'functional',
  'fundamental', 'funeral', 'fungus', 'funnel', 'funny', 'fur', 'furious', 'furnace', 'furnish', 'furniture',
  'furry', 'further', 'furthermore', 'fury', 'fuse', 'fusion', 'futile', 'fuzzy',

  // More G words
  'gadget', 'gain', 'gala', 'galaxy', 'gale', 'gallery', 'gallon', 'gamble', 'gang', 'gangster',
  'gap', 'garage', 'garbage', 'garlic', 'garment', 'garrison', 'gasoline', 'gasp', 'gate', 'gateway',
  'gather', 'gauge', 'gaze', 'gear', 'geese', 'gem', 'gender', 'gene', 'generate', 'generic',
  'generous', 'genetic', 'genius', 'genre', 'gentle', 'gentleman', 'gently', 'genuine', 'geographical', 'geography',
  'geological', 'geology', 'geometric', 'geometry', 'germ', 'gesture', 'ghost', 'giant', 'gift', 'gigantic',
  'giggle', 'gilt', 'ginger', 'giraffe', 'girdle', 'girlfriend', 'given', 'glacier', 'glad', 'glance',
  'glare', 'glaze', 'gleam', 'glide', 'glimmer', 'glimpse', 'glitter', 'global', 'globe', 'gloom',
  'gloomy', 'glorious', 'glory', 'gloss', 'glossary', 'glove', 'glow', 'glue', 'gnaw', 'goddess',
  'gold', 'golden', 'golf', 'goodness', 'gorgeous', 'gorilla', 'gospel', 'gossip', 'govern', 'governor',
  'gown', 'grab', 'grace', 'gracious', 'grade', 'gradual', 'gradually', 'graduate', 'graduation', 'grain',
  'gram', 'grammar', 'grand', 'grandchild', 'granddaughter', 'grandfather', 'grandmother', 'grandparent', 'grandson', 'granite',
  'grant', 'grape', 'graph', 'graphic', 'grasp', 'grass', 'grateful', 'gratitude', 'grave', 'gravel',
  'graveyard', 'gravity', 'gray', 'graze', 'grease', 'greasy', 'greatness', 'greed', 'greedy', 'greek',
  'greenhouse', 'greet', 'greeting', 'grid', 'grief', 'grieve', 'grill', 'grim', 'grin', 'grind',
  'grip', 'groan', 'grocery', 'groom', 'groove', 'grope', 'gross', 'grotesque', 'grouch', 'grove',
  'growl', 'grownup', 'grudge', 'grumble', 'grunt', 'guarantee', 'guard', 'guardian', 'guerrilla', 'guest',
  'guidance', 'guide', 'guideline', 'guild', 'guilt', 'guilty', 'guitar', 'gulf', 'gulp', 'gum',
  'gunfire', 'gunpowder', 'gust', 'gut', 'gutter', 'guy', 'gym', 'gymnasium', 'gypsy',

  // More H words
  'habitat', 'hack', 'hail', 'haircut', 'hairy', 'hall', 'hallway', 'halo', 'halt', 'ham',
  'hamburger', 'hamlet', 'hammer', 'hamper', 'handful', 'handicap', 'handkerchief', 'handle', 'handsome', 'handwriting',
  'handy', 'hangover', 'hanker', 'haphazard', 'hapless', 'happily', 'happiness', 'harbor', 'harden', 'hardship',
  'hardware', 'hardy', 'hare', 'harm', 'harmful', 'harmless', 'harmonic', 'harmony', 'harness', 'harp',
  'harsh', 'harvest', 'haste', 'hasten', 'hasty', 'hat', 'hatch', 'hate', 'hateful', 'hatred',
  'haul', 'haunt', 'haven', 'havoc', 'hawk', 'hay', 'hazard', 'hazardous', 'haze', 'hazy',
  'headache', 'heading', 'headline', 'headquarters', 'heal', 'healing', 'healthful', 'healthy', 'heap', 'hearing',
  'hearse', 'heartbeat', 'heartbreak', 'heartfelt', 'hearth', 'heartily', 'heartless', 'heated', 'heater', 'heating',
  'heathen', 'heave', 'heaven', 'heavenly', 'heavier', 'heavily', 'hectare', 'hedge', 'heed', 'heel',
  'height', 'heighten', 'heir', 'heiress', 'helicopter', 'hell', 'hello', 'helmet', 'helper', 'helpful',
  'helpless', 'hemisphere', 'hen', 'hence', 'henceforth', 'herald', 'herb', 'herd', 'heritage', 'hermit',
  'hero', 'heroic', 'heroine', 'herring', 'hesitate', 'hesitation', 'hickory', 'hidden', 'hide', 'hideous',
  'hierarchy', 'highland', 'highlight', 'highly', 'highness', 'highway', 'hijack', 'hike', 'hilarious', 'hill',
  'hillside', 'hilly', 'hilt', 'hinder', 'hindrance', 'hinge', 'hint', 'hip', 'hire', 'historian',
  'historic', 'historical', 'hitch', 'hive', 'hoard', 'hoarse', 'hoax', 'hobby', 'hockey', 'hoist',
  'holder', 'holding', 'hole', 'holiday', 'hollow', 'holy', 'homage', 'homeland', 'homeless', 'homely',
  'homemade', 'hometown', 'homework', 'honest', 'honesty', 'honey', 'honeymoon', 'honor', 'honorable', 'honorary',
  'hood', 'hoof', 'hook', 'hoop', 'hoot', 'hop', 'hopeful', 'hopefully', 'hopeless', 'horizon',
  'horizontal', 'hormone', 'horn', 'hornet', 'horrible', 'horrid', 'horrify', 'horror', 'horse', 'horseback',
  'horseshoe', 'hose', 'hospitable', 'hospitality', 'host', 'hostage', 'hostel', 'hostess', 'hostile', 'hostility',
  'hound', 'household', 'housewife', 'housework', 'housing', 'hover', 'howl', 'hub', 'huddle', 'hue',
  'hug', 'hull', 'hum', 'humane', 'humanitarian', 'humanity', 'humble', 'humbly', 'humid', 'humidity',
  'humiliate', 'humiliation', 'humility', 'humor', 'humorous', 'hump', 'hunch', 'hunger', 'hungry', 'hunt',
  'hunter', 'hunting', 'hurl', 'hurrah', 'hurricane', 'hurried', 'hurry', 'hurt', 'hurtful', 'husband',
  'hush', 'hut', 'hybrid', 'hydraulic', 'hydrogen', 'hygiene', 'hymn', 'hype', 'hypocrisy', 'hypocrite',
  'hypothesis', 'hysterical',

  // More I words
  'ice', 'iceberg', 'icon', 'icy', 'ideal', 'idealism', 'idealist', 'ideally', 'identical', 'identification',
  'identity', 'ideology', 'idiom', 'idiot', 'idle', 'idol', 'ignorance', 'ignorant', 'ignore', 'ill',
  'illegal', 'illegible', 'illegitimate', 'illiterate', 'illness', 'illuminate', 'illusion', 'illustrate', 'illustration', 'imagery',
  'imaginary', 'imagination', 'imaginative', 'imitate', 'imitation', 'immature', 'immediate', 'immediately', 'immense', 'immensely',
  'immerse', 'immigrant', 'immigrate', 'immigration', 'imminent', 'immoral', 'immortal', 'immune', 'immunity', 'impart',
  'impartial', 'impatience', 'impatient', 'impede', 'impediment', 'impending', 'imperative', 'imperfect', 'imperial', 'imperialism',
  'impersonal', 'implement', 'implementation', 'implicate', 'implication', 'implicit', 'implore', 'imply', 'impolite', 'import',
  'importance', 'impose', 'imposition', 'impossible', 'impotent', 'impound', 'impoverish', 'impractical', 'impress', 'impression',
  'impressive', 'imprison', 'imprisonment', 'improbable', 'improper', 'impulse', 'impure', 'inaccurate', 'inactive', 'inadequate',
  'inadvertent', 'inappropriate', 'inaugurate', 'incapable', 'incarnation', 'incense', 'incentive', 'incessant', 'inch', 'incident',
  'incidental', 'incite', 'inclination', 'incline', 'inclusive', 'income', 'incompatible', 'incompetent', 'incomplete', 'inconceivable',
  'inconsistent', 'inconvenience', 'incorporate', 'incorrect', 'increasingly', 'incredible', 'incredibly', 'increment', 'incur', 'indebted',
  'indecent', 'indefinite', 'independence', 'independent', 'index', 'indian', 'indicator', 'indifferent', 'indigenous', 'indignant',
  'indignation', 'indirect', 'indispensable', 'indistinct', 'induce', 'indulge', 'industrial', 'industrious', 'ineffective', 'inefficient',
  'inequality', 'inevitable', 'inevitably', 'inexpensive', 'inexperienced', 'infamous', 'infancy', 'infant', 'infantry', 'infect',
  'infection', 'infectious', 'infer', 'inference', 'inferior', 'inferiority', 'infinite', 'infinity', 'infirm', 'inflame',
  'inflate', 'inflation', 'inflict', 'influence', 'influential', 'influx', 'inform', 'informal', 'informant', 'infrastructure',
  'infringe', 'infuriate', 'ingenious', 'ingenuity', 'ingredient', 'inhabit', 'inhabitant', 'inhale', 'inherent', 'inherit',
  'inheritance', 'inhibit', 'inhuman', 'initial', 'initially', 'initiate', 'initiative', 'inject', 'injection', 'injure',
  'injury', 'injustice', 'ink', 'inkling', 'inland', 'inlet', 'inmate', 'inn', 'inner', 'innings',
  'innocence', 'innocent', 'innovation', 'innovative', 'innumerable', 'input', 'inquire', 'inquiry', 'inquisitive', 'insane',
  'insanity', 'inscribe', 'inscription', 'insect', 'insecure', 'insensitive', 'insert', 'insertion', 'insight', 'insignificant',
  'insincere', 'insist', 'insistence', 'insolent', 'inspect', 'inspection', 'inspector', 'inspiration', 'inspire', 'install',
  'installation', 'installment', 'instance', 'instant', 'instantly', 'instinct', 'instinctive', 'institute', 'instruct', 'instruction',
  'instructor', 'instrument', 'instrumental', 'insufficient', 'insulate', 'insulation', 'insult', 'insurance', 'insure', 'intact',
  'intake', 'integral', 'integrate', 'integration', 'integrity', 'intellect', 'intellectual', 'intelligence', 'intelligent', 'intend',
  'intense', 'intensely', 'intensify', 'intensity', 'intensive', 'intent', 'intention', 'intentional', 'interact', 'interaction',
  'intercept', 'interchange', 'intercourse', 'interfere', 'interference', 'interim', 'interior', 'intermediate', 'internal', 'interpret',
  'interpretation', 'interpreter', 'interrupt', 'interruption', 'intersect', 'intersection', 'interval', 'intervene', 'intervention', 'intimate',
  'intimidate', 'intolerable', 'intolerance', 'intolerant', 'intricate', 'intrigue', 'intrinsic', 'introduce', 'introduction', 'introductory',
  'intrude', 'intruder', 'intrusion', 'intuition', 'invade', 'invader', 'invalid', 'invaluable', 'invariable', 'invariably',
  'invasion', 'invent', 'invention', 'inventor', 'inventory', 'inverse', 'invert', 'invest', 'investigate', 'investigation',
  'investigator', 'investor', 'inveterate', 'invincible', 'invisible', 'invitation', 'invite', 'inviting', 'invoice', 'invoke',
  'involuntary', 'inward', 'inwardly', 'iodine', 'ion', 'iris', 'iron', 'ironic', 'ironically', 'irony',
  'irrational', 'irregular', 'irrelevant', 'irresistible', 'irrespective', 'irresponsible', 'irrigate', 'irrigation', 'irritate', 'irritation',
  'island', 'isle', 'isolate', 'isolation', 'israeli', 'italic', 'itch', 'ivory',

  // More J words
  'jacket', 'jade', 'jagged', 'jail', 'jam', 'janitor', 'january', 'jar', 'jargon', 'jaw',
  'jazz', 'jealous', 'jealousy', 'jeans', 'jeep', 'jeer', 'jelly', 'jerk', 'jersey', 'jest',
  'jet', 'jewel', 'jewelry', 'jingle', 'jog', 'joint', 'joke', 'jolly', 'jolt', 'jostle',
  'journal', 'journalism', 'journalist', 'journey', 'joy', 'joyful', 'joyous', 'jubilee', 'judge', 'judgment',
  'judicial', 'jug', 'juggle', 'juice', 'juicy', 'july', 'jumble', 'jump', 'junction', 'june',
  'jungle', 'junior', 'junk', 'jurisdiction', 'juror', 'jury', 'justice', 'justification', 'justify', 'juvenile',

  // More K words
  'kangaroo', 'keen', 'keeper', 'kernel', 'kettle', 'keyboard', 'keyhole', 'keynote', 'kick', 'kidnap',
  'kidney', 'killer', 'killing', 'kilogram', 'kilometer', 'kin', 'kindly', 'kindness', 'king', 'kingdom',
  'kinship', 'kiss', 'kit', 'kite', 'kitten', 'knapsack', 'knead', 'knee', 'kneel', 'knelt',
  'knife', 'knight', 'knit', 'knob', 'knock', 'knot', 'knowingly', 'knuckle',

  // More L words
  'label', 'labor', 'laboratory', 'laborer', 'laborious', 'labour', 'labyrinth', 'lace', 'lad', 'ladder',
  'laden', 'ladle', 'lag', 'lagoon', 'lake', 'lamb', 'lame', 'lament', 'lamp', 'lance',
  'landing', 'landlady', 'landlord', 'landmark', 'landscape', 'landslide', 'lane', 'lap', 'lapse', 'laptop',
  'lark', 'larva', 'laser', 'lash', 'lass', 'lasso', 'lasting', 'latch', 'lately', 'latent',
  'lateral', 'latest', 'lathe', 'lather', 'latin', 'latitude', 'latter', 'lattice', 'laud', 'laudable',
  'launch', 'laundry', 'laurel', 'lava', 'lavatory', 'lavender', 'lavish', 'lawn', 'lawsuit', 'layer',
  'layman', 'layout', 'lazy', 'leach', 'leadership', 'leading', 'leaf', 'leaflet', 'league', 'leak',
  'leakage', 'leaky', 'lean', 'leap', 'learned', 'learner', 'learning', 'lease', 'leash', 'leather',
  'lecture', 'lecturer', 'ledge', 'ledger', 'leech', 'leek', 'leer', 'leeway', 'leftist', 'legacy',
  'legalize', 'legend', 'legendary', 'legible', 'legion', 'legislate', 'legislation', 'legislative', 'legislature', 'legitimate',
  'leisure', 'leisurely', 'lemon', 'lemonade', 'lend', 'lender', 'length', 'lengthen', 'lengthy', 'lenient',
  'lens', 'lent', 'lentil', 'leopard', 'leper', 'lesbian', 'lesion', 'lesser', 'lesson', 'lest',
  'lethal', 'lethargy', 'lever', 'leverage', 'levy', 'lewd', 'liability', 'liable', 'liaison', 'liar',
  'libel', 'liberal', 'liberate', 'liberation', 'liberty', 'librarian', 'library', 'license', 'lick', 'lid',
  'lieu', 'lieutenant', 'lifeboat', 'lifeguard', 'lifelong', 'lifespan', 'lifestyle', 'lifetime', 'lift', 'ligament',
  'lighthouse', 'lighting', 'lightning', 'lightweight', 'likable', 'likelihood', 'likeness', 'likewise', 'liking', 'lilac',
  'lily', 'limb', 'lime', 'limestone', 'limit', 'limitation', 'limited', 'limitless', 'limp', 'linen',
  'liner', 'linger', 'lingerie', 'linguist', 'linguistic', 'lining', 'link', 'linkage', 'lion', 'lioness',
  'lip', 'lipstick', 'liquid', 'liquidate', 'liquor', 'lisp', 'listing', 'listless', 'literal', 'literally',
  'literary', 'literate', 'literature', 'lithe', 'litter', 'livestock', 'livid', 'living', 'lizard', 'llama',
  'load', 'loaf', 'loam', 'loan', 'loath', 'loathe', 'lobby', 'lobe', 'lobster', 'locale',
  'locality', 'localize', 'locate', 'location', 'lock', 'locker', 'locket', 'lockout', 'locomotive', 'locust',
  'lodge', 'lodging', 'loft', 'lofty', 'log', 'logic', 'logical', 'logistics', 'logo', 'loin',
  'loiter', 'lollipop', 'lone', 'loneliness', 'lonely', 'lonesome', 'longevity', 'longing', 'longitude', 'loom',
  'loop', 'loophole', 'loose', 'loosely', 'loosen', 'loot', 'lop', 'lope', 'lord', 'lordship',
  'lore', 'lorry', 'loser', 'losing', 'loudspeaker', 'lounge', 'louse', 'lousy', 'lovable', 'lovely',
  'lover', 'loving', 'lower', 'lowland', 'lowly', 'loyal', 'loyalty', 'lozenge', 'lubricant', 'lubricate',
  'lucid', 'luck', 'luckily', 'lucky', 'lucrative', 'ludicrous', 'luggage', 'lukewarm', 'lull', 'lullaby',
  'lumber', 'luminous', 'lump', 'lumpy', 'lunacy', 'lunar', 'lunatic', 'lunch', 'luncheon', 'lung',
  'lunge', 'lurch', 'lure', 'lurid', 'lurk', 'luscious', 'lush', 'lust', 'luster', 'lusty',
  'luxurious', 'luxury', 'lynch', 'lyric', 'lyrical',
]);

/**
 * Validates if a word is in our common words list
 * @param word - The word to validate (should be lowercase)
 * @returns true if the word is valid, false otherwise
 */
export function isValidWord(word: string): boolean {
  return COMMON_WORDS.has(word.toLowerCase());
}

/**
 * Gets a hint for players about valid words starting with a letter
 * @param letter - The starting letter
 * @returns An array of example words
 */
export function getExampleWords(letter: string): string[] {
  const examples: string[] = [];
  const lowerLetter = letter.toLowerCase();

  for (const word of COMMON_WORDS) {
    if (word.startsWith(lowerLetter)) {
      examples.push(word);
      if (examples.length >= 5) break;
    }
  }

  return examples;
}
