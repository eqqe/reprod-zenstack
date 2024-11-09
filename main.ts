import { PrismaClient } from "@prisma/client";
import { enhance } from "@zenstackhq/runtime";


async function main() {
	const prisma = new PrismaClient();

	const user = await prisma.user.create({
		data: {
			email: "exm@example.com",
			password: "example",
		}
	});

	const enhanced = enhance(prisma, {
		user
	});


	await enhanced.post.create({
		data: {
			title: "new post"
		}
	})


}

main()
