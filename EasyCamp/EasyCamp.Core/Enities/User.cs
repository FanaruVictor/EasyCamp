namespace EasyCamp.Core.Enities
{
    public enum Role
    {
        Cub,
        Venture,
        Explorer,
        Rover,
        Leader,
        AdultVolunteer
    }
    public class User : BaseEntity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Role Role { get; set; }
        public List<Feedback> Feedbacks { get; set; }
    }
}
