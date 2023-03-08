const renderTeaser = (teaser) => `
      <figure class="teaser">
        <img src="${teaser.relativeImagePath}" alt="${teaser.title}" />
        <figcaption>
          <a href="#">${teaser.lead}</a>
        </figcaption>
      </figure>

`;

const renderTeasers = (teasers) => `
  ${teasers.map((teaser) => renderTeaser(teaser)).join("")}
`;

export const homeView = (teasers) => `
  <section class="home ">
    <h1 class="section-title upper">Home</h1>
    <div class="teasers">
      ${renderTeasers(teasers)}
    </div>

    <div class="home-body">    
      <p>
      It’s the start of a new chapter for Samsung TV Plus, TV manufacturer’s free ad-supported TV (FAST) and video on-demand service — which is launching a new brand identity to highlight its latest content lineup and momentum in reaching viewers globally.
      </p>
      <p>
      Tiny houses have received considerable media coverage[24] including a television show, Tiny House Nation,[25] in 2014 and Tiny House Hunters.[18] Bryce Langston from New Zealand created and hosts a YouTube channel that features international tiny homes and eco-friendly living, called Living Big in a Tiny House.[26]
      </p>
      <p>
      The oldest and most widely used indoor antenna is the rabbit ears or bunny ears, which are often provided with new television sets.[4] It is a simple half-wave dipole antenna used to receive the VHF television bands, consisting in the US of 54 to 88 MHz (band I) and 174 to 216 MHz (band III), with wavelengths of 5.5 to 1.4 m (18 to 5 feet). It is constructed of two telescoping rods attached to a base, which extend out to about 1 m (3.3 feet) length (approximately one quarter wavelength at 54 MHz), and can be collapsed when not in use. For best reception, the rods should be adjusted to be a little less than 1/4 wavelength at the frequency of the television channel being received. However the dipole has a wide bandwidth, so often adequate reception is achieved without adjusting the length. 
      </p>
    </div>
  </section>
`;
