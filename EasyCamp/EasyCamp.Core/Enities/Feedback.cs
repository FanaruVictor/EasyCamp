namespace EasyCamp.Core.Enities
{
    public class Feedback : BaseEntity
    {
        public Guid UserId { get; set; }
        public string Text { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
