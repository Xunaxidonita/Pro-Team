import React from 'react'
import {
  Checkbox,
  Grid,
  Header,
  Image,
  Menu,
  Ref,
  Segment,
  Sidebar,
} from 'semantic-ui-react'

const Sidebar = () => {
  const segmentRef = React.useRef()
  const [visible, setVisible] = React.useState(false)

  return (
    <Grid columns={1}>
      <Grid.Column>
        <Checkbox
          checked={visible}
          label={{ children: <code>visible</code> }}
          onChange={(e, data) => setVisible(data.checked)}
        />
      </Grid.Column>

      <Grid.Column>
        <Sidebar.Pushable as={Segment.Group} raised>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={() => setVisible(false)}
            vertical
            target={segmentRef}
            visible={visible}
            width='thin'
          >
            <Menu.Item as='a'>Create New Project</Menu.Item>
                      {/* need to take user to create new project page */}

            <Menu.Item as='a'>Your Projects</Menu.Item>
                      {/* need to populate with list of projects */}

          </Sidebar>

          <Ref innerRef={segmentRef}>
            <Segment secondary>
              {/* <Header as='h3'>Clickable area</Header> */}
              <p>Click here to close the sidebar</p>
            </Segment>
          </Ref>

          {/* <Segment>
            <Header as='h3'>Application Content</Header>
            <Image src='/images/wireframe/paragraph.png' />
          </Segment> */}
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
  )
}

export default Sidebar;