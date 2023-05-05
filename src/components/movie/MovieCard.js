import { Card, Grid, Row, Text } from "@nextui-org/react";

export default function MovieCard({ movie }) {
  const { Title, Year, Poster } = movie;

  return (
    <Grid xs={6} sm={3}>
      <Card>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src={Poster}
            objectFit="cover"
            width="100%"
            height={140}
            alt={Title}
          />
        </Card.Body>
        <Card.Footer css={{ justifyItems: "flex-start" }}>
          <Row wrap="wrap" justify="space-between" align="center">
            <Text b>{Title}</Text>
            <Text
              css={{
                color: "$accents7",
                fontWeight: "$semibold",
                fontSize: "$sm",
              }}
            >
              {Year}
            </Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
}
