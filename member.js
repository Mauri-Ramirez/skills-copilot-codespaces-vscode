function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'partials/skills-member.html',
    scope: {
      member: '=member'
    }
  };
}