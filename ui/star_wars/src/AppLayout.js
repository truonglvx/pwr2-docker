// file: AppLayout.js
import React from 'react';

// import LogoutLink from 'shared/LogoutLink';
import { mdlUpgrade } from 'react-to-mdl';
import Layout, {
  LayoutHeader,
  LayoutIcon,
  LayoutHeaderRow,
  LayoutTitle,
  LayoutSpacer,
  Navigation,
  NavigationLink,
  LayoutDrawer,
  LayoutContent,
} from 'react-to-mdl/layout';

class AppLayout extends React.Component {
  render() {
    return (
      <Layout id="starwars">
        <LayoutHeader>
          <LayoutIcon />
          <LayoutHeaderRow>
            <LayoutTitle>Star Wars example</LayoutTitle>
            <LayoutSpacer />
            <Navigation>
              <NavigationLink to="/star_wars">Home</NavigationLink>
              <NavigationLink to="/star_wars/graphiql">GraphiQL</NavigationLink>
            </Navigation>
          </LayoutHeaderRow>
        </LayoutHeader>

        <LayoutDrawer>
          <Navigation>
            <NavigationLink to="/star_wars">Home</NavigationLink>
            <NavigationLink to="/star_wars/graphiql">GraphiQL</NavigationLink>
            <NavigationLink href="/">Home (public)</NavigationLink>
            {/* <LogoutLink /> */}
          </Navigation>
        </LayoutDrawer>

        <LayoutContent>
          { this.props.children }
        </LayoutContent>
      </Layout>
    );
  }
}

export default mdlUpgrade(AppLayout);
