import { CONFIG } from "src/config-global";

import { OrganizationView } from "src/sections/organization/view";

export default function Page() {
  return (
    <>
      <title>{`Organization - ${CONFIG.appName}`}</title>
        <meta
            name="description"
            content="Manage your organization settings and preferences."
        />
        <meta name="keywords" content="organization,settings,preferences" />

        <OrganizationView />
    </>
  );
}