import { BeatLoader, BounceLoader } from 'react-spinners'

const components = {
  beat: BeatLoader,
  bounce: BounceLoader,
}

const LoadingTypes = {
  BEAT: 'beat',
  BOUNCE: 'bounce',
}

export const Loading = ({
  color = '#007aca',
  type = LoadingTypes.BEAT,
  size = 40,
}) => {
  const Component = components[type]
  return <Component color={color} size={size} />
}
