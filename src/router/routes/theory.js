export default [
  {
    path: '/theory/consonants',
    name: 'theory.consonants',
    component: () => import('@/views/Consonant')
  },
  {
    path: '/theory/vowels',
    name: 'theory.vowels',
    component: () => import('@/views/Vowel')
  }
];