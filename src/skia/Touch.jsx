import {
  Canvas,
  Circle,
  useTouchHandler,
  useValue,
  useImage,
  Image,
} from '@shopify/react-native-skia';

const Touch = () => {
  const image = useImage(
    'https://fastly.picsum.photos/id/641/200/300.jpg?hmac=TpiMIigzR3rlnmP84Df902LYzuV4pApn7Tq6lCYic0A'
  );

  const cx = useValue(100);
  const cy = useValue(100);

  const touchHandler = useTouchHandler({
    onActive: ({ x, y }) => {
      cx.current = x;
      cy.current = y;
    },
  });

  return (
    <Canvas style={{ flex: 1 }} onTouch={touchHandler}>
      <Image
        image={image}
        fit="contain"
        x={0}
        y={400}
        width={256}
        height={256}
      />

      <Circle cx={cx} cy={cy} r={10} color="red" />
    </Canvas>
  );
};

export default Touch;
