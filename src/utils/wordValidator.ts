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
