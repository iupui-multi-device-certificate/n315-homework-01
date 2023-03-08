const renderTeamMember = (teamMember) => `  
    <div class="team-member-container">
      <img src="${teamMember.relativeImagePath}" alt="${teamMember.name}" />
      <div class="team-member-body">
        <h2 class="team-member">Hi, I'm ${teamMember.name}</h2>
        <p class="title">${teamMember.title}</p>
        ${teamMember.summary}
      </div>
    </div>
`;

const renderTeamMembers = (teamMembers) => `

  ${teamMembers.map((teamMember) => renderTeamMember(teamMember)).join("")}
`;

export const aboutView = (teamMembers) => `

        <section class="about">
        <h1 class="section-title upper">About</h1>
          <div class="team">
            ${renderTeamMembers(teamMembers)}
          </div>
        </section>

`;
