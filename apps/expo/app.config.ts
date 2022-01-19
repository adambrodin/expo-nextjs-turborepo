import { ConfigContext, ExpoConfig } from '@expo/config'

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'Expo NextJS Turborepo',
  slug: 'expo-nextjs-turborepo',
  description:
    'A template/boilerplate Turborepo with React Native & NextJS via Expo.',
})
