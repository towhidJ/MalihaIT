USE [master]
GO
/****** Object:  Database [MAlihaITDb]    Script Date: 4/30/2021 2:46:09 AM ******/
CREATE DATABASE [MAlihaITDb]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'MAlihaITDb', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.ABU\MSSQL\DATA\MAlihaITDb.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'MAlihaITDb_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.ABU\MSSQL\DATA\MAlihaITDb_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [MAlihaITDb] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [MAlihaITDb].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [MAlihaITDb] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [MAlihaITDb] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [MAlihaITDb] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [MAlihaITDb] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [MAlihaITDb] SET ARITHABORT OFF 
GO
ALTER DATABASE [MAlihaITDb] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [MAlihaITDb] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [MAlihaITDb] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [MAlihaITDb] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [MAlihaITDb] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [MAlihaITDb] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [MAlihaITDb] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [MAlihaITDb] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [MAlihaITDb] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [MAlihaITDb] SET  ENABLE_BROKER 
GO
ALTER DATABASE [MAlihaITDb] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [MAlihaITDb] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [MAlihaITDb] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [MAlihaITDb] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [MAlihaITDb] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [MAlihaITDb] SET READ_COMMITTED_SNAPSHOT ON 
GO
ALTER DATABASE [MAlihaITDb] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [MAlihaITDb] SET RECOVERY FULL 
GO
ALTER DATABASE [MAlihaITDb] SET  MULTI_USER 
GO
ALTER DATABASE [MAlihaITDb] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [MAlihaITDb] SET DB_CHAINING OFF 
GO
ALTER DATABASE [MAlihaITDb] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [MAlihaITDb] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [MAlihaITDb] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'MAlihaITDb', N'ON'
GO
ALTER DATABASE [MAlihaITDb] SET QUERY_STORE = OFF
GO
USE [MAlihaITDb]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 4/30/2021 2:46:10 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Course]    Script Date: 4/30/2021 2:46:10 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Course](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](max) NULL,
	[SeatCount] [int] NULL,
	[Fee] [int] NULL,
 CONSTRAINT [PK_Course] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[StudentRegistrations]    Script Date: 4/30/2021 2:46:10 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[StudentRegistrations](
	[StudentId] [int] NOT NULL,
	[CourseId] [int] NOT NULL,
	[EnrollDate] [datetime2](7) NOT NULL,
	[IsPaymentComplete] [bit] NOT NULL,
 CONSTRAINT [PK_StudentRegistrations] PRIMARY KEY CLUSTERED 
(
	[StudentId] ASC,
	[CourseId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Students]    Script Date: 4/30/2021 2:46:10 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Students](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[DateOfBirth] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_Students] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20210428091428_InitialCreate', N'3.1.14')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20210429114527_updateModel', N'3.1.14')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20210429114803_updateModela', N'3.1.14')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20210429115110_hasKey', N'3.1.14')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20210429175406_up', N'3.1.14')
GO
SET IDENTITY_INSERT [dbo].[Course] ON 

INSERT [dbo].[Course] ([Id], [Title], [SeatCount], [Fee]) VALUES (1, N'Java', 20, 15000)
INSERT [dbo].[Course] ([Id], [Title], [SeatCount], [Fee]) VALUES (4, N'C++', 10, 10000)
INSERT [dbo].[Course] ([Id], [Title], [SeatCount], [Fee]) VALUES (5, N'Bangla ', 10, 10000)
INSERT [dbo].[Course] ([Id], [Title], [SeatCount], [Fee]) VALUES (12, N'Camera', 12, 100)
INSERT [dbo].[Course] ([Id], [Title], [SeatCount], [Fee]) VALUES (25, N'Bangladddd', 12, 12)
INSERT [dbo].[Course] ([Id], [Title], [SeatCount], [Fee]) VALUES (27, N'Bangla', 12, 12)
INSERT [dbo].[Course] ([Id], [Title], [SeatCount], [Fee]) VALUES (28, N'Bangla', 12, 12)
INSERT [dbo].[Course] ([Id], [Title], [SeatCount], [Fee]) VALUES (29, N'Bangla', 12, 12)
SET IDENTITY_INSERT [dbo].[Course] OFF
GO
INSERT [dbo].[StudentRegistrations] ([StudentId], [CourseId], [EnrollDate], [IsPaymentComplete]) VALUES (1, 1, CAST(N'2021-04-29T11:25:49.4270000' AS DateTime2), 1)
INSERT [dbo].[StudentRegistrations] ([StudentId], [CourseId], [EnrollDate], [IsPaymentComplete]) VALUES (3, 4, CAST(N'2021-04-06T00:00:00.0000000' AS DateTime2), 1)
INSERT [dbo].[StudentRegistrations] ([StudentId], [CourseId], [EnrollDate], [IsPaymentComplete]) VALUES (3, 5, CAST(N'2021-04-09T00:00:00.0000000' AS DateTime2), 1)
INSERT [dbo].[StudentRegistrations] ([StudentId], [CourseId], [EnrollDate], [IsPaymentComplete]) VALUES (4, 1, CAST(N'2021-04-14T00:00:00.0000000' AS DateTime2), 1)
INSERT [dbo].[StudentRegistrations] ([StudentId], [CourseId], [EnrollDate], [IsPaymentComplete]) VALUES (4, 5, CAST(N'2021-04-06T00:00:00.0000000' AS DateTime2), 1)
GO
SET IDENTITY_INSERT [dbo].[Students] ON 

INSERT [dbo].[Students] ([Id], [Name], [DateOfBirth]) VALUES (1, N'Towhidul Islam', CAST(N'1998-03-04T00:00:00.0000000' AS DateTime2))
INSERT [dbo].[Students] ([Id], [Name], [DateOfBirth]) VALUES (3, N'Fahad', CAST(N'2021-04-28T16:06:52.0850000' AS DateTime2))
INSERT [dbo].[Students] ([Id], [Name], [DateOfBirth]) VALUES (4, N'Ismail', CAST(N'1996-03-04T00:00:00.0000000' AS DateTime2))
INSERT [dbo].[Students] ([Id], [Name], [DateOfBirth]) VALUES (10, N'Helal', CAST(N'2021-04-17T00:00:00.0000000' AS DateTime2))
INSERT [dbo].[Students] ([Id], [Name], [DateOfBirth]) VALUES (12, N'King', CAST(N'2021-04-02T00:00:00.0000000' AS DateTime2))
INSERT [dbo].[Students] ([Id], [Name], [DateOfBirth]) VALUES (39, N'Awal awal', CAST(N'2021-04-16T00:00:00.0000000' AS DateTime2))
SET IDENTITY_INSERT [dbo].[Students] OFF
GO
/****** Object:  Index [IX_StudentRegistrations_CourseId]    Script Date: 4/30/2021 2:46:10 AM ******/
CREATE NONCLUSTERED INDEX [IX_StudentRegistrations_CourseId] ON [dbo].[StudentRegistrations]
(
	[CourseId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[StudentRegistrations]  WITH CHECK ADD  CONSTRAINT [FK_StudentRegistrations_Course_CourseId] FOREIGN KEY([CourseId])
REFERENCES [dbo].[Course] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[StudentRegistrations] CHECK CONSTRAINT [FK_StudentRegistrations_Course_CourseId]
GO
ALTER TABLE [dbo].[StudentRegistrations]  WITH CHECK ADD  CONSTRAINT [FK_StudentRegistrations_Students_StudentId] FOREIGN KEY([StudentId])
REFERENCES [dbo].[Students] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[StudentRegistrations] CHECK CONSTRAINT [FK_StudentRegistrations_Students_StudentId]
GO
USE [master]
GO
ALTER DATABASE [MAlihaITDb] SET  READ_WRITE 
GO
