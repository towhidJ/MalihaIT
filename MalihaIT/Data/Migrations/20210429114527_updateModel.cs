using Microsoft.EntityFrameworkCore.Migrations;

namespace MalihaIT.Data.Migrations
{
    public partial class updateModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_StudentRegistrations",
                table: "StudentRegistrations");

            migrationBuilder.CreateIndex(
                name: "IX_StudentRegistrations_StudentId",
                table: "StudentRegistrations",
                column: "StudentId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_StudentRegistrations_StudentId",
                table: "StudentRegistrations");

            migrationBuilder.AddPrimaryKey(
                name: "PK_StudentRegistrations",
                table: "StudentRegistrations",
                columns: new[] { "StudentId", "CourseId" });
        }
    }
}
