namespace MoviesAPI.DTOs
{
    public class PaginationDTO
    {
        public int  Page { get; set; }
        public int recordsPerPage = 10;
        private readonly int maxAmount = 50;

        public int RecordsPerPage
        {
            get => recordsPerPage;
            set => recordsPerPage = (value > maxAmount) ? maxAmount : value;
        }
    }
}
