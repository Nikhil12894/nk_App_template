import {
  MantineProvider,
  Container,
  Paper,
  Title,
  Text,
  Group,
  Divider,
  List,
} from "@mantine/core";

export const CVPage: React.FC = () => {
  return (
    <MantineProvider>
      <Container size="xl">
        <Paper shadow="sm" p="md">
          <Group position="apart">
            <div>
              <Title order={1}>John Doe</Title>
              <Text size="sm" color="dimmed">
                Software Developer
              </Text>
            </div>
            <div>
              <Text>Email: johndoe@example.com</Text>
              <Text>Phone: (123) 456-7890</Text>
              <Text>LinkedIn: linkedin.com/in/johndoe</Text>
              <Text>GitHub: github.com/johndoe</Text>
            </div>
          </Group>

          <Divider my="sm" />

          <section>
            <Title order={2}>Professional Summary</Title>
            <Text mt="sm">
              Highly skilled software developer with 5+ years of experience in
              full-stack development, specializing in JavaScript, React, and
              Node.js. Proven ability to design and implement scalable and
              maintainable code. Strong problem-solving skills and a team
              player.
            </Text>
          </section>

          <Divider my="sm" />

          <section>
            <Title order={2}>Experience</Title>
            <List spacing="sm" mt="sm">
              <List.Item>
                <Title order={3}>Senior Software Developer</Title>
                <Text>XYZ Corporation, June 2020 - Present</Text>
                <List type="unordered">
                  <List.Item>
                    Developed and maintained web applications using React and
                    Node.js.
                  </List.Item>
                  <List.Item>
                    Led a team of 5 developers in various projects, ensuring
                    timely delivery.
                  </List.Item>
                  <List.Item>
                    Implemented CI/CD pipelines, improving deployment efficiency
                    by 30%.
                  </List.Item>
                </List>
              </List.Item>
              <List.Item>
                <Title order={3}>Software Developer</Title>
                <Text>ABC Inc., January 2017 - May 2020</Text>
                <List type="unordered">
                  <List.Item>
                    Worked on front-end development using React and Redux.
                  </List.Item>
                  <List.Item>
                    Collaborated with the design team to create user-friendly
                    interfaces.
                  </List.Item>
                  <List.Item>
                    Optimized application performance, reducing load time by
                    20%.
                  </List.Item>
                </List>
              </List.Item>
            </List>
          </section>

          <Divider my="sm" />

          <section>
            <Title order={2}>Education</Title>
            <List spacing="sm" mt="sm">
              <List.Item>
                <Title order={3}>Bachelor of Science in Computer Science</Title>
                <Text>University of Technology, 2012 - 2016</Text>
              </List.Item>
            </List>
          </section>

          <Divider my="sm" />

          <section>
            <Title order={2}>Skills</Title>
            <List spacing="sm" mt="sm">
              <List.Item>JavaScript, TypeScript</List.Item>
              <List.Item>React, Redux</List.Item>
              <List.Item>Node.js, Express</List.Item>
              <List.Item>HTML, CSS, Sass</List.Item>
              <List.Item>Git, GitHub, CI/CD</List.Item>
              <List.Item>Agile, Scrum</List.Item>
            </List>
          </section>
        </Paper>
      </Container>
    </MantineProvider>
  );
};
